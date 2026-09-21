import { getLordSystemPrompt, MAX_SPEECH_WORDS, OPENROUTER_DEFAULT_MODEL } from '@/lib/prompts';
import type { ChatMessage } from './sessionStore';

const OPENROUTER_URL = process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1/chat/completions';

export async function chatWithLord(
  lordId: string,
  userMessage: string,
  history: ChatMessage[]
): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is not configured');
  }

  const model = process.env.OPENROUTER_MODEL || OPENROUTER_DEFAULT_MODEL;
  const systemPrompt = getLordSystemPrompt(lordId);

  const messages = [
    { role: 'system' as const, content: systemPrompt },
    ...history.map((m) => ({ role: m.role, content: m.content })),
    { role: 'user' as const, content: userMessage },
  ];

  const response = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.APP_URL || 'http://localhost:3000',
      'X-Title': 'Paramvani Dev Vani',
    },
    body: JSON.stringify({
      model,
      messages,
      max_tokens: MAX_SPEECH_WORDS * 3,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`OpenRouter error ${response.status}: ${errText}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('OpenRouter returned empty response');
  }

  return content;
}
