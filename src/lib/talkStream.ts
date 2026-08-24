export type TalkStreamEvent =
  | { type: 'transcript'; transcript: string; lordId: string }
  | { type: 'audio'; chunk: Uint8Array }
  | { type: 'done' }
  | { type: 'error'; message: string };

function base64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/** Parse Murf SSE stream from POST /api/talk. */
export async function consumeTalkStream(
  response: Response,
  onEvent: (event: TalkStreamEvent) => void | Promise<void>,
): Promise<void> {
  if (!response.body) {
    throw new Error('Empty response body');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  const dispatch = async (block: string) => {
    const lines = block.split('\n');
    let eventType = 'message';
    let data = '';
    for (const line of lines) {
      if (line.startsWith('event:')) eventType = line.slice(6).trim();
      else if (line.startsWith('data:')) data += line.slice(5).trim();
    }
    if (!data) return;

    const parsed = JSON.parse(data) as Record<string, unknown>;

    if (eventType === 'transcript') {
      await onEvent({
        type: 'transcript',
        transcript: String(parsed.transcript ?? ''),
        lordId: String(parsed.lordId ?? ''),
      });
    } else if (eventType === 'audio') {
      await onEvent({
        type: 'audio',
        chunk: base64ToBytes(String(parsed.chunk ?? '')),
      });
    } else if (eventType === 'done') {
      await onEvent({ type: 'done' });
    } else if (eventType === 'error') {
      await onEvent({ type: 'error', message: String(parsed.message ?? 'Stream error') });
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let sep = buffer.indexOf('\n\n');
    while (sep !== -1) {
      const block = buffer.slice(0, sep).trim();
      buffer = buffer.slice(sep + 2);
      if (block) await dispatch(block);
      sep = buffer.indexOf('\n\n');
    }
  }

  if (buffer.trim()) await dispatch(buffer.trim());
}
