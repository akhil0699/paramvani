export async function generateSpeech(text: string, lordId?: string): Promise<string> {
  const apiKey = process.env.MURF_API_KEY;
  if (!apiKey) {
    throw new Error('MURF_API_KEY is not configured');
  }

  let voiceId = process.env.MURF_VOICE_ID || 'en-US-carter';
  if (lordId === 'vishnu' && process.env.MURF_VOICE_ID_VISHNU) {
    voiceId = process.env.MURF_VOICE_ID_VISHNU;
  } else if (lordId === 'hanuman' && process.env.MURF_VOICE_ID_HANUMAN) {
    voiceId = process.env.MURF_VOICE_ID_HANUMAN;
  }

  const response = await fetch('https://api.murf.ai/v1/speech/generate', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      voiceId,
      style: 'Conversational',
      multiNativeLocale: 'hi-IN',
      rate: -10
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Murf TTS error ${response.status}: ${errText}`);
  }

  const data = (await response.json()) as {
    audioFile?: string;
    audio_file?: string;
    url?: string;
  };

  const audioUrl = data.audioFile || data.audio_file || data.url;
  if (!audioUrl) {
    throw new Error('Murf TTS returned no audio URL');
  }

  return audioUrl;
}

export async function generateSpeechDataUrl(text: string, lordId?: string): Promise<string> {
  const audioUrl = await generateSpeech(text, lordId);
  const response = await fetch(audioUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch Murf audio (${response.status})`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const mime = response.headers.get('content-type') || 'audio/mpeg';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}
