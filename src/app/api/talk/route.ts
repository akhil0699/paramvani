import { NextRequest } from 'next/server';
import { isLordId } from '@/lib/lords';
import { cleanAiOutput } from '@/lib/server/cleanText';
import { appendToSession, getSessionHistory } from '@/lib/server/sessionStore';
import { chatWithLord } from '@/lib/server/openrouter';
import { streamSpeech } from '@/lib/server/murf';
import { transcribeAudio } from '@/lib/server/transcribe';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import * as admin from 'firebase-admin';

export const runtime = 'nodejs';
export const maxDuration = 30;

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function sseLine(event: string, data: Record<string, unknown>): string {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

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
      return jsonError('Invalid lordId', 400);
    }

    let message = ((formData.get('text') as string) || '').trim();
    const audioUpload = formData.get('audio');

    if (!message && audioUpload instanceof File && audioUpload.size > 0) {
      const buffer = Buffer.from(await audioUpload.arrayBuffer());
      message = await transcribeAudio(buffer, audioUpload.type || 'audio/wav');
    }

    if (!message) {
      return jsonError('No input provided', 400);
    }

    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return jsonError('Unauthorized', 401);
    }

    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(authHeader.split('Bearer ')[1]);
    } catch {
      return jsonError('Unauthorized: Invalid token', 401);
    }

    const uid = decodedToken.uid;
    const userRef = adminDb.collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      return jsonError('User profile not found', 404);
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
        return jsonError('Payment required. Out of free credits.', 402);
      }
    }

    const history = getSessionHistory(sessionId);
    const rawReply = await chatWithLord(lordIdRaw, message, history);
    const cleaned = cleanAiOutput(rawReply);
    appendToSession(sessionId, message, cleaned);

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const enc = new TextEncoder();
        const push = (event: string, data: Record<string, unknown>) => {
          controller.enqueue(enc.encode(sseLine(event, data)));
        };

        try {
          // Send transcript immediately — client can show captions while audio streams
          push('transcript', { transcript: cleaned, lordId: lordIdRaw });

          for await (const chunk of streamSpeech(cleaned, lordIdRaw, 'Conversational')) {
            push('audio', { chunk: Buffer.from(chunk).toString('base64') });
          }

          if (!isSubscribed) {
            await userRef.update({
              freeCredits: admin.firestore.FieldValue.increment(-1),
            });
          }

          push('done', {});
        } catch (err) {
          console.error('[POST /api/talk stream]', err);
          push('error', {
            message: err instanceof Error ? err.message : 'Audio stream failed',
          });
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('[POST /api/talk]', error);
    return jsonError(
      error instanceof Error ? error.message : 'Internal server error',
      500,
    );
  }
}
