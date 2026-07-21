import { Lipsync, VISEMES } from "wawa-lipsync";

let lipsyncManager: Lipsync | null = null;

export function getLipsyncManager(): Lipsync {
  if (!lipsyncManager && typeof window !== "undefined") {
    lipsyncManager = new Lipsync();
  }
  return lipsyncManager!;
}

const VISEME_OPENNESS: Record<VISEMES, number> = {
  // Silence / fully closed
  [VISEMES.sil]: 0,
  [VISEMES.PP]: 0,      // bilabial stop — fully closed (म, प, ब)
  [VISEMES.nn]: 0.1,    // nasal — nearly closed (न, म)

  // Lightly open consonants
  [VISEMES.FF]: 0.3,    // labiodental (फ, व)
  [VISEMES.TH]: 0.25,   // dental (थ, ध)
  [VISEMES.DD]: 0.3,    // alveolar stop (द, त)
  [VISEMES.kk]: 0.3,    // velar stop (क, ग)
  [VISEMES.CH]: 0.45,   // affricate (च, ज)
  [VISEMES.SS]: 0.35,   // sibilant (स, श)
  [VISEMES.RR]: 0.4,    // rhotic (र)

  // Open vowels — Hindi has strong open vowels
  [VISEMES.aa]: 1.0,    // आ — wide open
  [VISEMES.O]: 1.0,     // ओ — open round
  [VISEMES.E]: 0.8,     // ए — mid open
  [VISEMES.I]: 0.65,    // इ — half open
  [VISEMES.U]: 0.7,     // उ — rounded
};

export function visemeToMouthOpen(viseme: VISEMES): number {
  return VISEME_OPENNESS[viseme] ?? 0;
}

export function lerpMouthOpen(
  current: number,
  target: number,
  speed: number
): number {
  return current + (target - current) * speed;
}

export function getLipsyncSmoothSpeed(manager: Lipsync): number {
  const state = (manager as unknown as { state?: string }).state;
  // Faster snap speeds for Hindi TTS — old 0.28/0.45 caused noticeable lag
  return state === "vowel" ? 0.55 : 0.75;
}

export function mouthOpenToVideoTime(
  mouthOpen: number,
  scrubStart: number,
  scrubEnd: number
): number {
  return scrubStart + mouthOpen * (scrubEnd - scrubStart);
}

/** Fetch remote TTS audio as a blob URL so Web Audio can analyse it (CORS-safe). */
export async function resolveAudioPlayableUrl(url: string): Promise<string> {
  if (url.startsWith("blob:") || url.startsWith("/") || url.startsWith("data:")) {
    return url;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch audio (${response.status})`);
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

export function connectLipsyncAudio(audio: HTMLAudioElement): void {
  const manager = getLipsyncManager();
  manager.connectAudio(audio);
  const ctx = (manager as unknown as { audioContext?: AudioContext }).audioContext;
  if (ctx?.state === "suspended") {
    void ctx.resume();
  }
}
