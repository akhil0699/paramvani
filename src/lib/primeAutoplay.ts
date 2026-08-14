/**
 * 1x1 sample silent WAV, base64-encoded — avoids a network request while
 * still being real decodable audio the browser can "play".
 */
const SILENT_WAV =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YAAAAAA=';

let primed = false;

/**
 * Browsers only allow autoplay-with-sound if it originates from (or shortly
 * follows) a genuine user gesture. Call this synchronously inside a click
 * handler — e.g. choosing a lord — to establish that permission for the
 * current document. Since Next.js client-side navigation keeps the same
 * document (no full reload), the permission carries over to whatever page
 * we navigate to next, letting a video there autoplay with sound.
 */
export function primeAutoplayAudio(): void {
  if (primed || typeof window === 'undefined') return;
  primed = true;
  try {
    const audio = new Audio(SILENT_WAV);
    audio.volume = 0.01;
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => audio.pause()).catch(() => {});
    }
  } catch {
    // Best-effort — if this fails, the intro video's own play() attempt
    // and muted fallback still handle it gracefully.
  }
}
