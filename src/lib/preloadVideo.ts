const preloaded = new Set<string>();

/**
 * Hints the browser to fetch and cache a lord's video ahead of navigation,
 * so playback starts instantly on the talk page. Safe to call repeatedly —
 * each URL is only preloaded once per session.
 */
export function preloadLordVideo(src: string): void {
  if (typeof window === 'undefined' || !src || preloaded.has(src)) return;
  preloaded.add(src);

  const video = document.createElement('video');
  video.preload = 'auto';
  video.muted = true;
  video.src = src;
  video.load();
}
