import { NextRequest, NextResponse } from 'next/server';
import { isLordId } from '@/lib/lords';
import { cleanAiOutput } from '@/lib/server/cleanText';
import { appendToSession, getSessionHistory } from '@/lib/server/sessionStore';
import { chatWithLord } from '@/lib/server/openrouter';
import { generateSpeechDataUrl } from '@/lib/server/murf';
import { transcribeAudio } from '@/lib/server/transcribe';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import * as admin from 'firebase-admin';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const lordIdRaw =
      (formData.get('lordId') as string | null) ||
      request.headers.get('x-lord-id') ||
      'vishnu';

    const sessionId =
      (formData.get('sessionId') as string | null) ||
      request.headers.get('x-session-id') ||
      'default';

    if (!isLordId(lordIdRaw)) {
      return NextResponse.json({ error: 'Invalid lordId' }, { status: 400 });
    }

    let message = ((formData.get('text') as string) || '').trim();
    const audioUpload = formData.get('audio');

    if (!message && audioUpload instanceof File && audioUpload.size > 0) {
      const buffer = Buffer.from(await audioUpload.arrayBuffer());
      message = await transcribeAudio(buffer, audioUpload.type || 'audio/wav');
    }

    if (!message) {
      return NextResponse.json({ error: 'No input provided' }, { status: 400 });
    }

    // Verify Firebase Authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized: Missing or invalid token' }, { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(token);
    } catch (err) {
      console.error("Token verification failed:", err);
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }

    const uid = decodedToken.uid;
    const userRef = adminDb.collection('users').doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return NextResponse.json({ error: 'User profile not found' }, { status: 404 });
    }

    const userData = userDoc.data() as any;
    
    // Check Subscription and Credits
    const now = Date.now();
    const isSubscribed = userData.subscriptionType !== 'free' && 
                         userData.subscriptionExpiry && 
                         userData.subscriptionExpiry > now;

    if (!isSubscribed) {
      // Lazy cleanup: If their expiry has passed but the DB still says they are subscribed, flip them to free
      if (userData.subscriptionType !== 'free') {
        await userRef.update({
          subscriptionType: 'free'
        });
      }

      if (userData.freeCredits > 0) {
        // Deduct 1 free credit
        await userRef.update({
          freeCredits: admin.firestore.FieldValue.increment(-1)
        });
      } else {
        // Out of credits and not subscribed
        return NextResponse.json(
          { error: 'Payment required. Out of free credits.' }, 
          { status: 402 } // 402 Payment Required
        );
      }
    }

    // Process AI Request
    const history = getSessionHistory(sessionId);
    const rawReply = await chatWithLord(lordIdRaw, message, history);
    const cleaned = cleanAiOutput(rawReply);

    appendToSession(sessionId, message, cleaned);

    const audioFile = await generateSpeechDataUrl(cleaned, lordIdRaw);

    return NextResponse.json({
      audioFile,
      response: cleaned,
      transcript: cleaned,
      lordId: lordIdRaw,
    });
  } catch (error) {
    console.error('[POST /api/talk]', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
