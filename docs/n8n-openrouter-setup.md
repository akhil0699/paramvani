# n8n Setup — OpenRouter + Lord-based responses

Import `workflow-openrouter-lord.json` into n8n (or replace your existing workflow).

## Environment variables (n8n Settings → Variables)

| Variable | Example | Required |
|----------|---------|----------|
| `OPENROUTER_API_KEY` | `sk-or-v1-...` | Yes |
| `OPENROUTER_MODEL` | `openai/gpt-4.1-mini` | Optional (default in workflow) |
| `MURF_API_KEY` | your Murf API key | Yes |

Get OpenRouter key: https://openrouter.ai/keys

## What changed from old flow

1. **OpenRouter** replaces direct OpenAI Chat Model + AI Agent
2. **`lordId`** passed from frontend → picks Vishnu or Hanuman system prompt
3. **`sessionId`** passed for future memory (per user/lord session)
4. **Response formatted** for frontend: `audioFile`, `transcript`, `response`, `lordId`

## Frontend sends (TalkPage)

```
FormData:
  - text OR audio
  - lordId: "vishnu" | "hanuman"
  - sessionId: "vishnu-uuid..."

Headers:
  - x-lord-id: vishnu | hanuman
  - x-session-id: session id
```

## Lord prompts

Defined in:
- `src/lib/prompts.ts` (frontend reference)
- n8n **Code Lord Prompt** node (must stay in sync)

## Optional: Vite env

```env
VITE_N8N_WEBHOOK_URL=https://vishnubhagwan.app.n8n.cloud/webhook/audio-assistant
```

## Test with curl

```bash
curl -X POST 'https://YOUR_N8N/webhook/audio-assistant' \
  -H 'x-lord-id: hanuman' \
  -H 'x-session-id: test-1' \
  -F 'text=मुझे शक्ति दो' \
  -F 'lordId=hanuman' \
  -F 'sessionId=test-1'
```

Expected JSON:
```json
{
  "audioFile": "https://...",
  "transcript": "...",
  "response": "...",
  "lordId": "hanuman"
}
```
