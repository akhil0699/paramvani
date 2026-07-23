import { NextRequest, NextResponse } from 'next/server';
import { isLordId } from '@/lib/lords';
import { cleanAiOutput } from '@/lib/server/cleanText';
import { appendToSession, getSessionHistory } from '@/lib/server/sessionStore';
import { chatWithLord } from '@/lib/server/openrouter';
import { generateSpeech } from '@/lib/server/murf';
import { transcribeAudio } from '@/lib/server/transcribe';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import * as admin from 'firebase-admin';

export const runtime = 'nodejs';
export const maxDuration = 30; // fast — we no longer wait for D-ID to finish

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

    // ── Auth ────────────────────────────────────────────────────────────────
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(authHeader.split('Bearer ')[1]);
    } catch {
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }

    const uid = decodedToken.uid;
    const userRef = adminDb.collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      return NextResponse.json({ error: 'User profile not found' }, { status: 404 });
    }

    const userData = userDoc.data() as Record<string, unknown>;
    const now = Date.now();
    const isSubscribed =
      userData.subscriptionType !== 'free' &&
      typeof userData.subscriptionExpiry === 'number' &&
      userData.subscriptionExpiry > now;

    if (!isSubscribed) {
      if (userData.subscriptionType !== 'free') {
        await userRef.update({ subscriptionType: 'free' });
      }
      if ((userData.freeCredits as number) <= 0) {
        return NextResponse.json(
          { error: 'Payment required. Out of free credits.' },
          { status: 402 }
        );
      }
    }

    // ── AI text + TTS audio (sequential, both needed before returning) ───────
    const history = getSessionHistory(sessionId);
    const rawReply = await chatWithLord(lordIdRaw, message, history);
    const cleaned = cleanAiOutput(rawReply);
    appendToSession(sessionId, message, cleaned);

    // Murf TTS: get CDN URL, download buffer, return as base64 data URI
    const murCdnUrl   = await generateSpeech(cleaned, lordIdRaw);
    const audioRes    = await fetch(murCdnUrl);
    const audioBuffer = Buffer.from(await audioRes.arrayBuffer());
    const audioMime   = audioRes.headers.get('content-type') || 'audio/mpeg';
    const audioFile   = `data:${audioMime};base64,${audioBuffer.toString('base64')}`;

    // ── Deduct credit ────────────────────────────────────────────────────────
    if (!isSubscribed) {
      await userRef.update({
        freeCredits: admin.firestore.FieldValue.increment(-1),
      });
    }

    return NextResponse.json({
      audioFile,          // play immediately with captions
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
