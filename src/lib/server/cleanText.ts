import { MAX_SPEECH_WORDS } from '@/lib/prompts';

function truncateAtSentence(text: string, maxWords: number): string {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;

  const capped = words.slice(0, maxWords).join(' ');
  const lastSentenceEnd = Math.max(
    capped.lastIndexOf('।'),
    capped.lastIndexOf('.'),
    capped.lastIndexOf('!'),
    capped.lastIndexOf('?')
  );

  if (lastSentenceEnd > capped.length * 0.4) {
    return capped.slice(0, lastSentenceEnd + 1).trim();
  }

  return capped;
}

export function cleanAiOutput(text: string): string {
  const cleaned = text
    .replace(/\*\*/g, '')
    .replace(/\\n/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\\+/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return truncateAtSentence(cleaned, MAX_SPEECH_WORDS);
}
