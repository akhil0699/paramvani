export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const MAX_MESSAGES = 20;
const sessions = new Map<string, ChatMessage[]>();

export function getSessionHistory(sessionId: string): ChatMessage[] {
  return sessions.get(sessionId) ?? [];
}

export function appendToSession(sessionId: string, userMsg: string, assistantMsg: string): void {
  const history = sessions.get(sessionId) ?? [];
  history.push({ role: 'user', content: userMsg });
  history.push({ role: 'assistant', content: assistantMsg });
  sessions.set(sessionId, history.slice(-MAX_MESSAGES));
}
