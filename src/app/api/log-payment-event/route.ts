import { NextRequest } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import * as admin from 'firebase-admin';

export const runtime = 'nodejs';

// Allowed event types — never let the client write arbitrary strings
const ALLOWED_EVENTS = ['dismissed', 'payment_failed'] as const;
type AllowedEvent = typeof ALLOWED_EVENTS[number];

function jsonResponse(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
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

  // ── 2. Parse & validate ───────────────────────────────────────────────────
  let event: AllowedEvent;
  let orderId: string | undefined;
  let plan: string | undefined;
  let reason: string | null;
  let code: string | null;
  let description: string | null;

  try {
    const body = await request.json() as Record<string, unknown>;
    const rawEvent = body.event;

    if (!ALLOWED_EVENTS.includes(rawEvent as AllowedEvent)) {
      return jsonResponse({ error: 'Unknown event type' }, 400);
    }

    event       = rawEvent as AllowedEvent;
    orderId     = typeof body.orderId     === 'string' ? body.orderId     : undefined;
    plan        = typeof body.plan        === 'string' ? body.plan        : undefined;
    reason      = typeof body.reason      === 'string' ? body.reason      : null;
    code        = typeof body.code        === 'string' ? body.code        : null;
    description = typeof body.description === 'string' ? body.description : null;
  } catch {
    return jsonResponse({ error: 'Invalid request body' }, 400);
  }

  // ── 3. Update the pending payments doc (if we can find it by orderId) ─────
  if (orderId) {
    try {
      const snap = await adminDb
        .collection('payments')
        .where('orderId', '==', orderId)
        .limit(1)
        .get();

      if (!snap.empty) {
        const paymentDoc = snap.docs[0];

        // Only update if the order belongs to the authenticated user
        if (paymentDoc.data().uid === uid) {
          await paymentDoc.ref.update({
            status: event,                      // 'dismissed' | 'payment_failed'
            ...(reason      && { failureReason: reason }),
            ...(code        && { failureCode: code }),
            ...(description && { failureDescription: description }),
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        }
      }
    } catch (err) {
      // Non-critical — still return 200 so the frontend isn't affected
      console.error('[log-payment-event] Failed to update payments doc', err);
    }
  }

  // ── 4. Write a lightweight audit event ────────────────────────────────────
  await adminDb.collection('payment_events').add({
    uid,
    userEmail: userEmail ?? null,
    event,
    orderId: orderId ?? null,
    plan: plan ?? null,
    reason,
    code,
    description,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  });

  return jsonResponse({ ok: true });
}
