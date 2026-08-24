import { NextRequest } from 'next/server';
import Razorpay from 'razorpay';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import * as admin from 'firebase-admin';

export const runtime = 'nodejs';

// ── Razorpay client (server-side only) ────────────────────────────────────────
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// ── SECURITY: whitelist the only amounts we accept ────────────────────────────
// This prevents a malicious client from crafting a ₹1 order for a monthly plan.
const ALLOWED_AMOUNTS: Record<number, 'weekly' | 'monthly'> = {
  7900: 'weekly',   // ₹79
  14900: 'monthly', // ₹149
};

function jsonResponse(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: NextRequest) {
  // ── 1. Authenticate — reject unauthenticated requests ─────────────────────
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

  try {
    // ── 2. Parse & validate input ─────────────────────────────────────────────
    const body = await request.json() as { amount?: unknown; currency?: unknown };

    const amount = body.amount;
    const currency = typeof body.currency === 'string' ? body.currency : 'INR';

    if (typeof amount !== 'number' || !Number.isInteger(amount)) {
      return jsonResponse({ error: 'Invalid amount' }, 400);
    }

    // ── 3. Whitelist check — no arbitrary amounts allowed ─────────────────────
    const plan = ALLOWED_AMOUNTS[amount];
    if (!plan) {
      return jsonResponse(
        { error: `Amount ${amount} paise is not a recognised plan price` },
        400,
      );
    }

    // ── 4. Create Razorpay order ──────────────────────────────────────────────
    const receipt = `pv_${plan}_${uid.slice(0, 8)}_${Date.now()}`;

    const order = await razorpay.orders.create({ amount, currency, receipt });

    // ── 5. Log PENDING payment record in Firestore for audit ─────────────────
    await adminDb.collection('payments').add({
      orderId: order.id,
      uid,
      userEmail: userEmail ?? null,
      plan,
      amountPaise: amount,
      currency,
      receipt,
      status: 'pending',           // will be updated to 'success' or 'failed'
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // ── 6. Return only what the frontend needs (never expose secrets) ─────────
    return jsonResponse({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('[POST /api/create-order] uid=%s', uid, error);

    // Log failed order-creation attempt
    await adminDb.collection('payments').add({
      uid,
      userEmail: userEmail ?? null,
      status: 'order_creation_failed',
      error: error instanceof Error ? error.message : String(error),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }).catch(() => {/* best-effort log */});

    return jsonResponse({ error: 'Failed to create order. Please try again.' }, 500);
  }
}
