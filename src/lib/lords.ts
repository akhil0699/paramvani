export type LordId = 'vishnu' | 'hanuman';

/**
 * Set to true to show a red outline of the mouth region on the canvas.
 * Use this to calibrate x/y/w/h in each lord's mouth config.
 * Set back to false when done.
 */
export const LIPSYNC_DEBUG = false;

export interface VideoClipConfig {
  /** Frame shown when idle and after speech ends (seconds). */
  idleTime: number;
  /** One-time intro play 0→introEnd when a response starts (seconds). */
  introEnd: number;
  /** Viseme scrub range — mouth frames in the source video (seconds). */
  mouthScrubStart: number;
  mouthScrubEnd: number;
  /** Mobile crop for object-fit: cover. */
  objectPosition: string;
  /** Lipsync lerp speed per frame (0–1). Higher = snappier mouth. Default 0.85. */
  lipsyncSpeed: number;
  /** Min video playback rate when speech is quiet (default 0.24). */
  mouthRateMin?: number;
  /** Max video playback rate when speech is loud (default 0.82). */
  mouthRateMax?: number;
  /** Audio energy smoothing (0–1). Higher = snappier response. Default 0.38. */
  mouthEnergySmoothing?: number;
  /**
   * Mouth overlay position on the video element (all values in %).
   * x/y = top-left corner of the ellipse as % of video container width/height.
   * w/h = ellipse width/height at mouthOpen=1 as % of video container.
   * The overlay scales vertically from 0 → h based on mouthOpen.
   * Tune these if the ellipse is not centred over the lord's mouth.
   */
  mouth: { x: number; y: number; w: number; h: number };
}

export interface LordConfig {
  id: LordId;
  name: string;
  nameEn: string;
  tagline: string;
  video: string;
  /** High-res image shown in the UI (idle / loading state). */
  image: string;
  /**
   * Smaller image sent to D-ID for lipsync generation.
   * D-ID processes faster with a compact image (~800-1200px, <1 MB).
   */
  didImage: string;
  brandLabel: string;
  mobileObjectPosition: string;
  videoClip: VideoClipConfig;
}

export const LORDS: Record<LordId, LordConfig> = {
  vishnu: {
    id: 'vishnu',
    name: 'भगवान विष्णु',
    nameEn: 'Lord Vishnu',
    tagline: 'शांति, धर्म और दिव्य मार्गदर्शन',
    video: '/ai-video.mp4',
    image: '/images/lord-vishnu-4k.jpg',
    didImage: '/images/lord-vishnu-4k.jpg',
    brandLabel: 'देव वाणी',
    mobileObjectPosition: '49% 22%',
    videoClip: {
      idleTime: 0,
      introEnd: 1,
      mouthScrubStart: 1,
      mouthScrubEnd: 3.2,
      objectPosition: '47% 22%',
      lipsyncSpeed: 0.88,
      mouthRateMin: 0.55,
      mouthRateMax: 0.88,
      mouthEnergySmoothing: 0.4,
      // Tune x/y so the ellipse sits over Vishnu's lips
      mouth: { x: 41, y: 33, w: 18, h: 7 },
    },
  },
  hanuman: {
    id: 'hanuman',
    name: 'हनुमान जी',
    nameEn: 'Lord Hanuman',
    tagline: 'शक्ति, भक्ति और साहस',
    video: '/hanuman.mp4',
    image: '/images/lord-hanuman-4k.jpg',
    didImage: '/images/lord-hanuman-4k.jpg',
    brandLabel: 'हनुमान वाणी',
    mobileObjectPosition: '50% 100%', // Focus on the bottom of the video where hands are
    videoClip: {
      idleTime: 0,
      introEnd: 1,
      mouthScrubStart: 1,
      mouthScrubEnd: 3.2,
      objectPosition: '50% 18%',
      lipsyncSpeed: 0.95,
      mouthRateMin: 0.55,
      mouthRateMax: 0.9,
      mouthEnergySmoothing: 0.42,
      // Tune x/y so the ellipse sits over Hanuman's lips
      mouth: { x: 40, y: 32, w: 20, h: 8 },
    },
  },
};

export const LORD_LIST: LordConfig[] = Object.values(LORDS);

export function isLordId(value: string | undefined): value is LordId {
  return value === 'vishnu' || value === 'hanuman';
}

export function getLord(id: string | undefined): LordConfig | null {
  if (!isLordId(id)) return null;
  return LORDS[id];
}
