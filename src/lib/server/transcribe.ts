export async function transcribeAudio(buffer: Buffer, mimeType: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is required for voice input transcription');
  }

  const formData = new FormData();
  const blob = new Blob([new Uint8Array(buffer)], { type: mimeType || 'audio/wav' });
  formData.append('file', blob, 'voice-input.wav');
  formData.append('model', 'whisper-1');
  formData.append('language', 'hi');

  const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
    body: formData,
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Whisper error ${response.status}: ${errText}`);
  }

  const data = (await response.json()) as { text?: string };
  if (!data.text?.trim()) {
    throw new Error('Could not transcribe audio');
  }

  return data.text.trim();
}
