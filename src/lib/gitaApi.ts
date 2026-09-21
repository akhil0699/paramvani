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

import gitaDataRaw from '@/data/gita.json';

// Type assertion since we know the format
const allVerses = gitaDataRaw as NormalizedVerse[];

/** Fetch a single verse */
export async function fetchVerse(chapter: number, verse: number): Promise<NormalizedVerse> {
  const found = allVerses.find((v) => v.chapter === chapter && v.verse === verse);
  if (!found) {
    throw new Error(`Failed to find ${chapter}.${verse}`);
  }
  return found;
}

/** Fetch all verses for a chapter */
export async function fetchChapter(chapter: number, totalVerses: number): Promise<NormalizedVerse[]> {
  const verses = allVerses.filter((v) => v.chapter === chapter);
  // Sort them just in case (though they should be ordered in the JSON)
  verses.sort((a, b) => a.verse - b.verse);
  return verses;
}

/** Clear the cache (No-op now since we load locally) */
export function clearGitaCache() {
  // No-op
}
