import { NextRequest } from 'next/server';
import crypto from 'crypto';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import * as admin from 'firebase-admin';

export const runtime = 'nodejs';

function jsonResponse(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

/** Find the Firestore payments doc for this orderId */
async function findPaymentDoc(orderId: string) {
  const snap = await adminDb
    .collection('payments')
    .where('orderId', '==', orderId)
    .limit(1)
    .get();
  return snap.empty ? null : snap.docs[0];
}

export async function POST(request: NextRequest) {
  // ── 1. Authenticate ───────────────────────────────────────────────────────
  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  let uid: string;
  let userEmail: string | undefined;

  try {
    const decoded = await adminAuth.verifyIdToken(authHeader.split('Bearer ')[1]);
    uid = decoded.uid;
    userEmail = decoded.email;
  } catch {
    return jsonResponse({ error: 'Unauthorized: invalid token' }, 401);
  }

  // ── 2. Parse & validate body ──────────────────────────────────────────────
  let razorpay_order_id: string;
  let razorpay_payment_id: string;
  let razorpay_signature: string;
  let plan: 'weekly' | 'monthly';

  try {
    const body = await request.json() as Record<string, unknown>;
    razorpay_order_id  = typeof body.razorpay_order_id  === 'string' ? body.razorpay_order_id  : '';
    razorpay_payment_id = typeof body.razorpay_payment_id === 'string' ? body.razorpay_payment_id : '';
    razorpay_signature  = typeof body.razorpay_signature  === 'string' ? body.razorpay_signature  : '';
    plan = body.plan === 'weekly' || body.plan === 'monthly' ? body.plan : '' as 'weekly';
  } catch {
    return jsonResponse({ error: 'Invalid request body' }, 400);
  }

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !plan) {
    return jsonResponse({ error: 'Missing required payment fields' }, 400);
  }

  // ── 3. Verify HMAC-SHA256 signature (timing-safe comparison) ─────────────
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    console.error('[verify-payment] RAZORPAY_KEY_SECRET not set');
    return jsonResponse({ error: 'Payment gateway not configured' }, 500);
  }

  const expectedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  // Timing-safe comparison prevents timing attacks
  let signaturesMatch = false;
  try {
    signaturesMatch = crypto.timingSafeEqual(
      Buffer.from(expectedSignature, 'hex'),
      Buffer.from(razorpay_signature, 'hex'),
    );
  } catch {
    // Buffer lengths differ → definitely not equal
    signaturesMatch = false;
  }

  if (!signaturesMatch) {
    console.warn('[verify-payment] Signature mismatch — possible fraud attempt', {
      uid,
      razorpay_order_id,
      razorpay_payment_id,
    });

    // ── Log the failed/fraud attempt ──────────────────────────────────────
    const paymentDoc = await findPaymentDoc(razorpay_order_id);
    const batch = adminDb.batch();

    // Update existing pending record if found
    if (paymentDoc) {
      batch.update(paymentDoc.ref, {
        status: 'signature_mismatch',
        paymentId: razorpay_payment_id,
        failureReason: 'Razorpay signature verification failed',
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }

    // Always write a security event record
    const securityRef = adminDb.collection('payment_security_events').doc();
    batch.set(securityRef, {
      uid,
      userEmail: userEmail ?? null,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      event: 'signature_mismatch',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    await batch.commit().catch(console.error);

    return jsonResponse({ error: 'Payment verification failed' }, 400);
  }

  // ── 4. Cross-check: order must belong to this user ────────────────────────
  const paymentDoc = await findPaymentDoc(razorpay_order_id);

  if (!paymentDoc) {
    // Order wasn't created through our API — reject
    console.warn('[verify-payment] Unknown orderId — not in our payments collection', {
      uid,
      razorpay_order_id,
    });
    return jsonResponse({ error: 'Unknown order' }, 400);
  }

  const paymentData = paymentDoc.data();

  if (paymentData.uid !== uid) {
    console.warn('[verify-payment] UID mismatch — order belongs to a different user', {
      callerUid: uid,
      orderUid: paymentData.uid,
      orderId: razorpay_order_id,
    });
    // Log the attempted hijack
    await adminDb.collection('payment_security_events').add({
      uid,
      userEmail: userEmail ?? null,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      event: 'uid_mismatch',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    return jsonResponse({ error: 'Forbidden' }, 403);
  }

  if (paymentData.status === 'success') {
    // Idempotency: already activated — return success without re-processing
    return jsonResponse({ success: true, plan: paymentData.plan, alreadyActivated: true });
  }

  // ── 5. Activate subscription + log success in a single batch ─────────────
  const durationMs = plan === 'weekly'
    ? 7 * 24 * 60 * 60 * 1000
    : 30 * 24 * 60 * 60 * 1000;

  const expiry = Date.now() + durationMs;
  const now = admin.firestore.FieldValue.serverTimestamp();

  const batch = adminDb.batch();

  // Update user's subscription
  batch.update(adminDb.collection('users').doc(uid), {
    subscriptionType: plan,
    subscriptionExpiry: expiry,
    lastPaymentId: razorpay_payment_id,
    lastOrderId: razorpay_order_id,
    updatedAt: now,
  });

  // Mark payment as success with full audit trail
  batch.update(paymentDoc.ref, {
    status: 'success',
    paymentId: razorpay_payment_id,
    razorpaySignature: razorpay_signature,
    activatedPlan: plan,
    subscriptionExpiry: expiry,
    paidAt: now,
    updatedAt: now,
  });

  await batch.commit();

  console.info('[verify-payment] Subscription activated', { uid, plan, razorpay_payment_id });

  return jsonResponse({ success: true, plan, expiry });
}
