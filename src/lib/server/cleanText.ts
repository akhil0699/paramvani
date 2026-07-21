export function cleanAiOutput(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/\\n/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\\+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
