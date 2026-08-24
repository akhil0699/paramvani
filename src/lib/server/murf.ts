import { detectMurfStyle, resolveStyleForVoice, type MurfStyle } from './murfStyle';

const DEFAULT_STREAM_URL = 'https://in.api.murf.ai/v1/speech/stream';
/** Murf Falcon model — API value is `falcon-2`. */
const DEFAULT_MODEL = 'falcon-2';
const DEFAULT_VOICE = 'Aman';
const DEFAULT_STYLE = 'Conversational';
const DEFAULT_RATE = -10;
const DEFAULT_FORMAT = 'MP3';

function getStreamUrl(): string {
  return process.env.MURF_STREAM_URL || DEFAULT_STREAM_URL;
}

export function getMurfVoiceId(lordId?: string): string {
  if (lordId === 'vishnu' && process.env.MURF_VOICE_ID_VISHNU) {
    return process.env.MURF_VOICE_ID_VISHNU;
  }
  if (lordId === 'hanuman' && process.env.MURF_VOICE_ID_HANUMAN) {
    return process.env.MURF_VOICE_ID_HANUMAN;
  }
  return process.env.MURF_VOICE_ID || DEFAULT_VOICE;
}

function resolveModel(): string {
  const raw = (process.env.MURF_MODEL || DEFAULT_MODEL).trim();
  // Murf dashboard may show "Falcon"; stream API expects falcon-2.
  if (raw.toLowerCase() === 'falcon') return 'falcon-2';
  return raw;
}

function buildStreamBody(
  text: string,
  lordId: string | undefined,
  style: MurfStyle,
): Record<string, unknown> {
  const voiceId = getMurfVoiceId(lordId);
  const murfStyle = resolveStyleForVoice(style, voiceId);

  const body: Record<string, unknown> = {
    text,
    voiceId,
    model: resolveModel(),
    format: process.env.MURF_AUDIO_FORMAT || DEFAULT_FORMAT,
    style: murfStyle || DEFAULT_STYLE,
    rate: DEFAULT_RATE,
    sampleRate: 24000,
  };

  // Native Hindi voices (Aman, hi-IN-*) speak Hindi without locale override.
  const id = voiceId.toLowerCase();
  if (!id.startsWith('hi-in-') && !id.includes('aman')) {
    body.locale = 'hi-IN';
  }

  return body;
}

/**
 * Stream TTS audio from Murf Falcon 2 (`POST /v1/speech/stream`).
 * Yields raw audio bytes as they arrive — no CDN round-trip.
 */
export async function* streamSpeech(
  text: string,
  lordId?: string,
  style: MurfStyle = 'Conversational',
): AsyncGenerator<Uint8Array> {
  const apiKey = process.env.MURF_API_KEY;
  if (!apiKey) {
    throw new Error('MURF_API_KEY is not configured');
  }

  const response = await fetch(getStreamUrl(), {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg, application/octet-stream, */*',
    },
    body: JSON.stringify(buildStreamBody(text, lordId, style)),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Murf stream TTS error ${response.status}: ${errText}`);
  }

  if (!response.body) {
    throw new Error('Murf stream returned empty body');
  }

  const reader = response.body.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value?.length) yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

/** Collect the full streamed audio into a single buffer. */
export async function collectSpeechBuffer(
  text: string,
  lordId?: string,
  style: MurfStyle = 'Conversational',
): Promise<{ buffer: Buffer; mime: string }> {
  const chunks: Uint8Array[] = [];
  let total = 0;
  for await (const chunk of streamSpeech(text, lordId, style)) {
    chunks.push(chunk);
    total += chunk.length;
  }
  const merged = Buffer.alloc(total);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.length;
  }
  const format = (process.env.MURF_AUDIO_FORMAT || DEFAULT_FORMAT).toUpperCase();
  const mime = format === 'MP3' ? 'audio/mpeg' : format === 'WAV' ? 'audio/wav' : 'audio/mpeg';
  return { buffer: merged, mime };
}

/** @deprecated Use streamSpeech / collectSpeechBuffer (falcon-2 stream API). */
export async function generateSpeech(
  text: string,
  lordId?: string,
  style: MurfStyle = 'Conversational',
): Promise<string> {
  const { buffer, mime } = await collectSpeechBuffer(text, lordId, style);
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

export async function generateSpeechDataUrl(
  text: string,
  lordId?: string,
  style: MurfStyle = 'Conversational',
): Promise<string> {
  return generateSpeech(text, lordId, style);
}

export { detectMurfStyle };
