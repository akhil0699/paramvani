/**
 * Free Bhagavad Gita API — vedicscriptures.github.io
 * No API key required. Returns all 700 shloks across 18 chapters.
 * Docs: https://github.com/vedicscriptures/bhagavad-gita-api
 */

export interface GitaAPIVerse {
  _id: string;
  chapter: number;
  verse: number;
  slok: string;          // Sanskrit (Devanagari)
  transliteration: string;
  tej?: { ht?: string }; // Hindi — Swami Tejomayananda
  rams?: { ht?: string }; // Hindi — Swami Ramsukhdas
  siva?: { et?: string }; // English — Swami Sivananda
  purohit?: { et?: string }; // English — Purohit Swami
  san?: { et?: string }; // English — Dr. Sankaranarayan
}

export interface NormalizedVerse {
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  hindi: string;
  english: string;
}

const BASE = 'https://vedicscriptures.github.io';

// In-memory cache so we don't re-fetch same chapter twice
const cache = new Map<string, NormalizedVerse>();
const chapterCache = new Map<number, NormalizedVerse[]>();

function normalize(raw: GitaAPIVerse): NormalizedVerse {
  return {
    chapter: raw.chapter,
    verse: raw.verse,
    sanskrit: raw.slok ?? '',
    transliteration: raw.transliteration ?? '',
    hindi: raw.tej?.ht ?? raw.rams?.ht ?? '(हिंदी अनुवाद उपलब्ध नहीं)',
    english: raw.purohit?.et ?? raw.siva?.et ?? raw.san?.et ?? '(Translation unavailable)',
  };
}

/** Fetch a single verse */
export async function fetchVerse(chapter: number, verse: number): Promise<NormalizedVerse> {
  const key = `${chapter}:${verse}`;
  if (cache.has(key)) return cache.get(key)!;

  const res = await fetch(`${BASE}/slok/${chapter}/${verse}`);
  if (!res.ok) throw new Error(`Failed to fetch ${chapter}.${verse}`);
  const raw: GitaAPIVerse = await res.json();
  const normalized = normalize(raw);
  cache.set(key, normalized);
  return normalized;
}

/** Fetch all verses for a chapter in parallel (batched) */
export async function fetchChapter(chapter: number, totalVerses: number): Promise<NormalizedVerse[]> {
  if (chapterCache.has(chapter)) return chapterCache.get(chapter)!;

  const BATCH = 10; // fetch 10 at a time to avoid rate limiting
  const all: NormalizedVerse[] = [];

  for (let i = 1; i <= totalVerses; i += BATCH) {
    const end = Math.min(i + BATCH - 1, totalVerses);
    const batch = await Promise.all(
      Array.from({ length: end - i + 1 }, (_, j) => fetchVerse(chapter, i + j))
    );
    all.push(...batch);
  }

  chapterCache.set(chapter, all);
  return all;
}

/** Clear the cache (e.g. on unmount) */
export function clearGitaCache() {
  cache.clear();
  chapterCache.clear();
}
