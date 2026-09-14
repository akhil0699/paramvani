'use client';
import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useLang } from '@/context/LanguageContext';
import { CHAPTERS } from '@/lib/gitaData';
import { fetchChapter, type NormalizedVerse } from '@/lib/gitaApi';

// ─── History helpers ─────────────────────────────────────────────────────────

const STORAGE_KEY = 'gita_viewed';

function getViewed(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch { return new Set(); }
}

function markViewed(key: string) {
  try {
    const set = getViewed();
    set.add(key);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch { /* ignore */ }
}

const vKey = (ch: number, v: number) => `${ch}:${v}`;

// ─── TTS ─────────────────────────────────────────────────────────────────────

function speak(text: string, onEnd?: () => void) {
  if (typeof window === 'undefined') return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'hi-IN';
  
  // Attempt to find a native male voice without artificial pitching
  const voices = synth.getVoices();
  const maleVoice = voices.find(v => {
    const n = v.name.toLowerCase();
    const isIndian = v.lang.includes('hi') || v.lang.includes('en-IN');
    const isMale = n.includes('male') || n.includes('rishi') || n.includes('ravi') || n.includes('amit');
    return isIndian && isMale;
  });
  
  if (maleVoice) {
    utt.voice = maleVoice;
  }
  
  // Normal pitch (1) as requested. No artificial lowering.
  utt.pitch = 1;
  utt.rate = 0.8;
  utt.volume = 1;
  if (onEnd) utt.onend = onEnd;
  synth.speak(utt);
}
function stopSpeaking() {
  if (typeof window === 'undefined') return;
  window.speechSynthesis.cancel();
}

// ─── Animations ──────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const slideRight = keyframes`
  from { opacity: 0; transform: translateX(36px); }
  to   { opacity: 1; transform: translateX(0); }
`;
const shimmerAnim = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;
const float = keyframes`
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
`;
const petalFall = keyframes`
  0%   { transform: translateY(-10px) rotate(0deg);   opacity: 0; }
  5%   { opacity: 0.6; }
  95%  { opacity: 0.3; }
  100% { transform: translateY(100vh) rotate(540deg); opacity: 0; }
`;
const ripple = keyframes`
  0%   { transform: scale(1);   opacity: 1; }
  100% { transform: scale(2.2); opacity: 0; }
`;
const goldGlow = keyframes`
  0%,100% { text-shadow: 0 0 10px rgba(212,164,26,0.3); }
  50%      { text-shadow: 0 0 25px rgba(212,164,26,0.7); }
`;
const spinner = keyframes`
  to { transform: rotate(360deg); }
`;
const flyInPaper = keyframes`
  0% { transform: scale(0.8) translateY(100px) rotate(-2deg); opacity: 0; filter: blur(10px); }
  60% { transform: scale(1.02) translateY(-10px) rotate(1deg); opacity: 1; filter: blur(0); }
  100% { transform: scale(1) translateY(0) rotate(0); opacity: 1; filter: blur(0); }
`;
const textReveal = keyframes`
  0% { opacity: 0; transform: translateY(15px); filter: blur(5px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0); }
`;

// ─── Shell ────────────────────────────────────────────────────────────────────

const Shell = styled.div`
  min-height: 100vh;
  background: 
    linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.9) 100%),
    url('/images/gita_bg.jpg') center top / cover no-repeat;
  position: relative;
  overflow-x: hidden;
  background-attachment: fixed;
  padding-top: 50px; /* Prevent header overlap but keep it tight */
`;

const Orb = styled.div<{ $t: string; $l: string; $s: number; $c: string }>`
  position: fixed;
  top: ${p => p.$t}; left: ${p => p.$l};
  width: ${p => p.$s}px; height: ${p => p.$s}px;
  border-radius: 50%;
  background: radial-gradient(circle, ${p => p.$c} 0%, transparent 70%);
  filter: blur(80px); opacity: 0.22;
  pointer-events: none; z-index: 0;
`;

const Petal = styled.div<{ $l: string; $d: string; $dur: string; $sz: number }>`
  position: fixed; top: -20px; left: ${p => p.$l};
  width: ${p => p.$sz}px; height: ${p => p.$sz * 1.5}px;
  background: linear-gradient(135deg, rgba(255,183,77,.5), rgba(255,112,67,.3));
  border-radius: 50% 0 50% 0;
  animation: ${petalFall} ${p => p.$dur} ${p => p.$d} infinite linear;
  pointer-events: none; z-index: 0;
`;

// ─── Page Header ─────────────────────────────────────────────────────────────

const PageHeader = styled.div`
  position: relative; z-index: 2;
  padding: 2rem 2rem 2.5rem;
  text-align: center;
`;

const Breadcrumb = styled.div`
  display: flex; align-items: center; justify-content: center;
  gap: 0.6rem; flex-wrap: wrap;
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(212,164,26,0.65); margin-bottom: 1.2rem;

  span { cursor: pointer; transition: color 0.2s; &:hover { color: #d4a41a; } }
  i   { font-size: 0.55rem; color: rgba(255,255,255,0.2); }
`;

const PageTitle = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 3.6rem; font-weight: 400; margin: 0 0 0.6rem;
  background: linear-gradient(135deg, #fff8e1, #d4a41a 50%, #fff8e1);
  background-size: 200% auto;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 600px) { font-size: 2.6rem; }
`;

const PageSub = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.88rem; color: rgba(255,255,255,0.38); margin: 0;
`;

// ─── STEP 1 — Chapter Grid ───────────────────────────────────────────────────

const ChapterGrid = styled.div`
  max-width: 1100px; margin: 0 auto;
  padding: 2rem 1.5rem 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  position: relative; z-index: 2;
  animation: ${fadeIn} 0.5s ease both;
  @media (max-width: 600px) { grid-template-columns: 1fr; padding: 1rem; }
`;

const ChapterCard = styled.div<{ $viewed: boolean }>`
  position: relative;
  background: ${p => p.$viewed
    ? 'linear-gradient(135deg, rgba(30,15,50,0.8), rgba(15,5,30,0.9))'
    : 'linear-gradient(135deg, rgba(15,10,30,0.7), rgba(5,5,15,0.8))'};
  border: 1px solid ${p => p.$viewed ? 'rgba(212,164,26,0.5)' : 'rgba(212,164,26,0.15)'};
  border-radius: 12px; padding: 1.75rem;
  cursor: pointer; overflow: hidden;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0,0,0,0.4), inset 0 0 20px rgba(212,164,26,0.05);

  /* Ornate Corner Accents */
  &::after {
    content: ''; position: absolute; inset: 4px;
    border: 1px solid rgba(212,164,26,0.1); border-radius: 8px;
    pointer-events: none;
  }

  &::before {
    content: 'ॐ';
    position: absolute; right: -5%; bottom: -15%;
    font-size: 8rem; font-family: 'Noto Sans Devanagari', sans-serif;
    color: ${p => p.$viewed ? 'rgba(212,164,26,0.08)' : 'rgba(212,164,26,0.03)'};
    pointer-events: none; transition: all 0.4s ease; z-index: 0;
  }

  > * { position: relative; z-index: 1; }

  &:hover {
    border-color: rgba(212,164,26,0.8);
    background: linear-gradient(135deg, rgba(40,20,60,0.9), rgba(20,10,40,0.95));
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 45px rgba(0,0,0,0.6), 0 0 30px rgba(212,164,26,0.25);
    
    &::before { color: rgba(212,164,26,0.15); transform: scale(1.1) rotate(-5deg); }
  }
`;

const ChNum = styled.div`
  font-family: 'DM Serif Display', serif;
  font-size: 3rem; color: rgba(212,164,26,0.4); line-height: 1; margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;
const ChName = styled.h3`
  font-family: 'Noto Sans Devanagari', sans-serif;
  font-size: 1.15rem; font-weight: 600; color: #fff; margin: 0 0 0.25rem; line-height: 1.3;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
`;
const ChNameEn = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.8rem; color: rgba(255,255,255,0.5); margin: 0 0 1.2rem;
`;
const ChMeta = styled.div`
  display: flex; align-items: center; justify-content: space-between;
`;
const ChCount = styled.span`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: #d4a41a;
`;
const ChProgressBar = styled.div<{ $pct: number }>`
  height: 3px; background: rgba(0,0,0,0.5); border-radius: 3px;
  margin-top: 0.8rem; position: relative; overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.8);
  &::after {
    content: ''; position: absolute; top: 0; left: 0; height: 100%;
    width: ${p => p.$pct}%;
    background: linear-gradient(90deg, #d4a41a, #ffe58f);
    border-radius: 3px; transition: width 0.5s ease;
    box-shadow: 0 0 10px rgba(212,164,26,0.8);
  }
`;
const ChBadge = styled.div`
  position: absolute; top: 0.9rem; right: 0.9rem;
  width: 22px; height: 22px; border-radius: 50%;
  background: linear-gradient(135deg, #d4a41a, #f0c84a);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.55rem; color: #3a2000; font-weight: 900;
  box-shadow: 0 2px 8px rgba(212,164,26,0.4);
`;
const ChPartialBadge = styled(ChBadge)`
  background: rgba(212,164,26,0.15);
  color: #d4a41a; border: 1px solid rgba(212,164,26,0.4);
  box-shadow: none; font-size: 0.6rem;
`;

// ─── STEP 2 — Shlok List ────────────────────────────────────────────────────

const ShlokListWrap = styled.div`
  max-width: 920px; margin: 0 auto;
  padding: 0 1.5rem 6rem; position: relative; z-index: 2;
  animation: ${slideRight} 0.4s ease both;
  @media (max-width: 600px) { padding: 0 1rem 4rem; }
`;

const BackBtn = styled.button`
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: 'Gothic A1', sans-serif; font-size: 0.75rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: rgba(212,164,26,0.65); background: transparent; border: none;
  cursor: pointer; padding: 0; margin-bottom: 1.75rem; transition: color 0.2s;
  &:hover { color: #d4a41a; }
  i { font-size: 0.65rem; }
`;

const ChapterBanner = styled.div`
  background: linear-gradient(135deg, rgba(30,15,50,0.8), rgba(15,5,30,0.9));
  border: 1px solid rgba(212,164,26,0.4); border-radius: 12px;
  padding: 1.5rem 2rem; margin-bottom: 2rem;
  display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(212,164,26,0.1);
  position: relative;
  
  &::after {
    content: ''; position: absolute; inset: 4px;
    border: 1px dashed rgba(212,164,26,0.2); border-radius: 8px; pointer-events: none;
  }
`;
const BannerNum = styled.div`
  font-family: 'DM Serif Display', serif;
  font-size: 4rem; color: rgba(212,164,26,0.3); line-height: 1; flex-shrink: 0;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
`;
const BannerInfo = styled.div` flex: 1; min-width: 0; z-index: 1; `;
const BannerTitle = styled.h2`
  font-family: 'Noto Sans Devanagari', sans-serif;
  font-size: 1.7rem; font-weight: 600; color: #fff; margin: 0 0 0.4rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
  @media (max-width: 480px) { font-size: 1.4rem; }
`;
const BannerSub = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.85rem; color: #d4a41a; margin: 0;
  letter-spacing: 0.05em; text-transform: uppercase;
`;

// ─── Skeleton loader ─────────────────────────────────────────────────────────

const SkeletonPulse = css`
  background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%);
  background-size: 400px 100%;
  animation: ${shimmerAnim} 1.4s ease infinite;
`;

const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.7rem;
`;
const SkeletonTile = styled.div<{ $i: number }>`
  aspect-ratio: 1; border-radius: 10px;
  ${SkeletonPulse}
  animation-delay: ${p => p.$i * 0.04}s;
`;

// ─── Shlok tile grid ─────────────────────────────────────────────────────────

const ShlokGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.7rem;
  @media (max-width: 480px) { grid-template-columns: repeat(5, 1fr); gap: 0.5rem; }
`;

const ShlokTile = styled.button<{ $viewed: boolean }>`
  position: relative; aspect-ratio: 1;
  border-radius: 8px; overflow: hidden;
  border: 1px solid ${p => p.$viewed ? 'rgba(212,164,26,0.6)' : 'rgba(255,255,255,0.15)'};
  background: ${p => p.$viewed
    ? 'linear-gradient(135deg, rgba(40,20,60,0.8), rgba(20,10,40,0.9))'
    : 'linear-gradient(135deg, rgba(20,15,40,0.6), rgba(10,5,20,0.8))'};
  cursor: pointer; transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 0.25rem;
  padding: 0.3rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);

  &::before {
    content: '';
    position: absolute; inset: 2px; border: 1px solid rgba(212,164,26,0.15);
    border-radius: 6px; pointer-events: none; opacity: ${p => p.$viewed ? 1 : 0};
  }

  &:hover {
    border-color: rgba(212,164,26,0.9);
    background: linear-gradient(135deg, rgba(60,30,80,0.9), rgba(30,15,50,0.95));
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0,0,0,0.6), 0 0 20px rgba(212,164,26,0.3);
    &::before { opacity: 1; border-color: rgba(212,164,26,0.4); }
  }
`;

const TileNum = styled.span<{ $viewed: boolean }>`
  font-family: 'DM Serif Display', serif;
  font-size: 1.4rem; line-height: 1;
  color: ${p => p.$viewed ? '#ffd700' : '#fff'};
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
  ${p => p.$viewed && css`animation: ${goldGlow} 2s ease-in-out infinite;`}
`;

const TileSnip = styled.span`
  font-family: 'Noto Sans Devanagari', sans-serif;
  font-size: 0.52rem; color: rgba(255,255,255,0.28); text-align: center;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  overflow: hidden; max-width: 100%; line-height: 1.3; padding: 0 2px;
`;

const TileCheck = styled.div`
  position: absolute; top: 4px; right: 4px;
  width: 14px; height: 14px; border-radius: 50%;
  background: linear-gradient(135deg, #d4a41a, #f0c84a);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.42rem; color: #3a2000; font-weight: 900;
  box-shadow: 0 1px 4px rgba(212,164,26,0.4);
`;

// ─── Error box ───────────────────────────────────────────────────────────────

const ErrorBox = styled.div`
  text-align: center; padding: 3rem 1rem;
  font-family: 'Gothic A1', sans-serif; font-size: 0.88rem;
  color: rgba(255,100,100,0.7);
  i { font-size: 2rem; display: block; margin-bottom: 0.75rem; }
`;

const RetryBtn = styled.button`
  margin-top: 1rem; padding: 0.6rem 1.4rem;
  border-radius: 8px; border: 1px solid rgba(255,100,100,0.3);
  background: rgba(255,100,100,0.08); color: rgba(255,150,150,0.9);
  font-family: 'Gothic A1', sans-serif; font-size: 0.78rem; font-weight: 700;
  letter-spacing: 0.08em; cursor: pointer; transition: all 0.2s;
  &:hover { background: rgba(255,100,100,0.15); }
`;

// ─── STEP 3 — Detail View (Animated Paper Scroll) ──────────────────────────────────

const DetailWrap = styled.div`
  max-width: 900px; width: 95%; margin: 0 auto;
  padding: 0 0 6rem; position: relative; z-index: 2;
  display: flex; flex-direction: column; align-items: center;
`;

const NavRow = styled.div`
  display: flex; align-items: center; gap: 1.5rem;
  flex-wrap: wrap; margin-bottom: 3rem;
  justify-content: center;
`;
const NavBtn = styled.button<{ $primary?: boolean }>`
  display: inline-flex; align-items: center; gap: 0.6rem;
  font-family: 'Gothic A1', sans-serif; font-size: 0.85rem;
  font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
  color: #fff;
  background: rgba(10,5,20,0.7);
  border: 1px solid ${p => p.$primary ? 'rgba(212,164,26,0.6)' : 'rgba(255,255,255,0.2)'};
  border-radius: 30px;
  cursor: pointer; padding: 0.7rem 1.5rem;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  backdrop-filter: blur(10px);
  &:hover {
    background: rgba(10,5,20,0.9); border-color: #d4a41a;
    transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  }
  i { font-size: 0.8rem; color: #d4a41a; }
`;
const PrevNextRow = styled.div` display: flex; gap: 1rem; `;
const PNBtn = styled.button<{ $dis: boolean }>`
  width: 46px; height: 46px; border-radius: 50%; border: 1px solid
    ${p => p.$dis ? 'rgba(255,255,255,0.1)' : 'rgba(212,164,26,0.6)'};
  background: rgba(10,5,20,0.7);
  color: ${p => p.$dis ? 'rgba(255,255,255,0.2)' : '#fff'};
  font-size: 1rem; display: flex; align-items: center; justify-content: center;
  cursor: ${p => p.$dis ? 'not-allowed' : 'pointer'}; transition: all 0.3s;
  backdrop-filter: blur(10px);
  &:not(:disabled):hover {
    background: rgba(10,5,20,0.9); border-color: #d4a41a;
    transform: scale(1.1); box-shadow: 0 0 20px rgba(212,164,26,0.3);
  }
`;

// ─── Realistic Scroll Effect ──────────────────────────────────────────────────────

const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
  animation: ${flyInPaper} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.1) both;
  
  /* Left Scroll Roller */
  &::before {
    content: ''; position: absolute; left: -15px; top: -15px; bottom: -15px; width: 35px;
    background: linear-gradient(90deg, #5c3c13 0%, #a67c43 30%, #ffd782 50%, #a67c43 70%, #3e2609 100%);
    border-radius: 20px; z-index: 4;
    box-shadow: 10px 0 20px rgba(0,0,0,0.6), inset 0 0 10px rgba(0,0,0,0.8);
  }
  /* Right Scroll Roller */
  &::after {
    content: ''; position: absolute; right: -15px; top: -15px; bottom: -15px; width: 35px;
    background: linear-gradient(90deg, #3e2609 0%, #a67c43 30%, #ffd782 50%, #a67c43 70%, #5c3c13 100%);
    border-radius: 20px; z-index: 4;
    box-shadow: -10px 0 20px rgba(0,0,0,0.6), inset 0 0 10px rgba(0,0,0,0.8);
  }
`;

// ─── Paper Scroll Effect ──────────────────────────────────────────────────────

const PaperScroll = styled.div`
  background: 
    linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 5%, rgba(255,255,255,0) 10%),
    linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 5%, rgba(255,255,255,0) 10%),
    radial-gradient(ellipse at center, #fff3d4 0%, #ebd49f 60%, #c49f57 100%);
  padding: 6rem 5rem;
  position: relative; 
  box-shadow: inset 0 0 50px rgba(100,50,0,0.3);
  min-height: 600px;
  display: flex; flex-direction: column; align-items: center;

  /* Subtle floral/mandala watermark */
  &::before {
    content: ''; position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' opacity='0.03'%3E%3Cpath fill='%235c3c13' d='M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z'/%3E%3C/svg%3E");
    background-size: 150px; background-position: center; pointer-events: none; z-index: 1;
  }
  
  /* Noise Texture */
  &::after {
    content: ''; position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
    pointer-events: none; mix-blend-mode: multiply; z-index: 1;
  }

  @media (max-width: 768px) { padding: 4rem 2rem; }
`;

// Left & Right Tassels
const Tassel = styled.div<{ $right?: boolean }>`
  position: absolute; top: -5px; ${p => p.$right ? 'right: -30px;' : 'left: -30px;'}
  width: 25px; height: 80px; z-index: 5; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 80'%3E%3Cpath d='M10 0 L10 10' stroke='%23d4a41a' stroke-width='2'/%3E%3Ccircle cx='10' cy='15' r='5' fill='%23d4a41a'/%3E%3Cpath d='M5 20 Q10 80 5 80 M7 20 Q10 80 10 80 M13 20 Q10 80 15 80' stroke='%23d4a41a' stroke-width='1' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat; filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
  animation: ${textReveal} 1s ease 1s both;
`;

const ContentZ = styled.div` position: relative; z-index: 2; width: 100%; display: flex; flex-direction: column; align-items: center; `;

const VerseTag = styled.div`
  font-family: 'DM Serif Display', serif; font-size: 1.2rem;
  color: #5c3c13; background: transparent;
  border: 1px solid rgba(92,60,19,0.3); border-radius: 30px; padding: 0.4rem 2rem;
  margin-bottom: 2rem;
  animation: ${textReveal} 0.6s ease 0.3s both;
`;

const Sanskrit = styled.p`
  font-family: 'Noto Sans Devanagari', serif;
  font-size: 2.5rem; font-weight: 600; line-height: 1.5;
  color: #3e1b04; margin: 0 0 1.5rem; white-space: pre-line;
  text-align: center; text-shadow: 1px 1px 2px rgba(255,255,255,0.7);
  animation: ${textReveal} 0.8s ease 0.4s both;
  @media (max-width: 768px) { font-size: 1.8rem; }
`;

const Translit = styled.p`
  font-family: 'Gothic A1', sans-serif; font-size: 1.1rem;
  font-style: italic; line-height: 1.8; color: rgba(80,30,0,0.7);
  margin: 0 0 2rem; white-space: pre-line; text-align: center;
  animation: ${textReveal} 0.8s ease 0.5s both;
`;

const Rule = styled.div`
  width: 70%; height: 1px; margin: 2.5rem auto;
  background: rgba(139,90,10,0.3);
  position: relative;
  &::after {
    content: 'ॐ'; position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    background: #e4c580; padding: 0 20px; border-radius: 50%;
    color: #8b5a0a; font-size: 1.5rem;
    font-family: 'Noto Sans Devanagari', sans-serif;
  }
  animation: ${textReveal} 0.8s ease 0.6s both;
`;

const Translation = styled.p`
  font-family: 'Gothic A1', sans-serif; font-size: 1.4rem;
  line-height: 2; color: #2d1604; margin: 0 0 3rem; text-align: center;
  font-weight: 500;
  animation: ${textReveal} 0.8s ease 0.7s both;
  @media (max-width: 768px) { font-size: 1.2rem; }
`;

// ─── Play / Audio Controls ───────────────────────────────────────────────────

const AudioBar = styled.div`
  display: flex; align-items: center; justify-content: center; gap: 2rem;
  margin-top: auto; padding-top: 2rem; width: 100%;
  border-top: 1px solid rgba(139,90,10,0.2);
  animation: ${textReveal} 0.8s ease 0.8s both;
`;
const BigPlayBtn = styled.button<{ $active?: boolean }>`
  width: 90px; height: 90px; border-radius: 50%;
  background: ${p => p.$active ? 'rgba(50,20,5,0.9)' : 'linear-gradient(135deg, #1f1104, #3a220a)'};
  border: 4px solid #ebd49f;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.8);
  position: relative;
  
  &::after {
    content: 'PLAY SHLOK'; position: absolute; bottom: -30px;
    font-family: 'Gothic A1', sans-serif; font-size: 0.8rem; font-weight: 700;
    letter-spacing: 0.15em; color: #ebd49f; width: 150px;
    opacity: ${p => p.$active ? 0 : 1}; transition: opacity 0.3s;
  }

  &:hover { transform: scale(1.05); border-color: #fff; box-shadow: 0 15px 30px rgba(0,0,0,0.5); }
  
  svg {
    width: 35px; height: 35px; fill: #ebd49f;
  }
`;

const SideBtn = styled.button`
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.6rem 1.8rem; border-radius: 30px;
  border: 1px solid rgba(139,90,10,0.5);
  background: transparent;
  color: #3e1b04;
  font-family: 'Gothic A1', sans-serif; font-size: 0.9rem;
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  cursor: pointer; transition: all 0.3s;
  &:hover { background: rgba(139,90,10,0.1); transform: translateY(-2px); }
  i { font-size: 1rem; }
`;

const NavDivider = styled.div` width: 1px; height: 20px; background: rgba(255,255,255,0.2); `;

// ─── Loading spinner ──────────────────────────────────────────────────────────

const LoadWrap = styled.div`
  display: flex; flex-direction: column; align-items: center;
  padding: 4rem 0; gap: 1rem;
`;
const Spinner = styled.div`
  width: 40px; height: 40px; border-radius: 50%;
  border: 3px solid rgba(212,164,26,0.15);
  border-top-color: #d4a41a;
  animation: ${spinner} 0.8s linear infinite;
`;
const LoadText = styled.p`
  font-family: 'Gothic A1', sans-serif; font-size: 0.82rem;
  color: rgba(255,255,255,0.35); margin: 0;
`;

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = 'chapters' | 'shloks' | 'detail';

// ─── Component ────────────────────────────────────────────────────────────────

const GitaSection: React.FC = () => {
  const { lang } = useLang();

  const [step, setStep]                         = useState<Step>('chapters');
  const [selChapter, setSelChapter]             = useState<number | null>(null);
  const [selVerse, setSelVerse]                 = useState<NormalizedVerse | null>(null);
  const [verses, setVerses]                     = useState<NormalizedVerse[]>([]);
  const [loading, setLoading]                   = useState(false);
  const [error, setError]                       = useState<string | null>(null);
  const [viewed, setViewed]                     = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying]               = useState(false);

  // Load history
  useEffect(() => { setViewed(getViewed()); }, []);
  useEffect(() => () => stopSpeaking(), []);

  const chapterData  = CHAPTERS.find(c => c.number === selChapter);
  const verseIdx     = selVerse ? verses.findIndex(v => v.verse === selVerse.verse) : -1;

  // ── Chapter viewed helpers ────
  const viewedCount = (chNum: number) => {
    const chVerses = verses.length && selChapter === chNum ? verses : [];
    // use localStorage count for chapters other than current
    if (selChapter !== chNum) {
      let count = 0;
      const ch = CHAPTERS.find(c => c.number === chNum);
      if (!ch) return 0;
      for (let v = 1; v <= ch.totalVerses; v++) {
        if (viewed.has(vKey(chNum, v))) count++;
      }
      return count;
    }
    return chVerses.filter(v => viewed.has(vKey(chNum, v.verse))).length;
  };

  // ── Navigation ────
  const goChapters = useCallback(() => {
    stopSpeaking(); setIsPlaying(false);
    setSelVerse(null); setSelChapter(null);
    setVerses([]); setStep('chapters');
  }, []);

  const goShloks = useCallback(async (chNum: number) => {
    stopSpeaking(); setIsPlaying(false);
    setSelVerse(null); setSelChapter(chNum); setStep('shloks');
    setLoading(true); setError(null); setVerses([]);

    const ch = CHAPTERS.find(c => c.number === chNum);
    if (!ch) return;

    try {
      const data = await fetchChapter(chNum, ch.totalVerses);
      setVerses(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load shloks. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  }, []);

  const openVerse = useCallback((v: NormalizedVerse) => {
    stopSpeaking(); setIsPlaying(false);
    setSelVerse(v); setStep('detail');
    const k = vKey(v.chapter, v.verse);
    markViewed(k);
    setViewed(prev => new Set([...prev, k]));
  }, []);

  const goPrev = () => { if (verseIdx > 0) openVerse(verses[verseIdx - 1]); };
  const goNext = () => { if (verseIdx < verses.length - 1) openVerse(verses[verseIdx + 1]); };

  // ── Audio ────
  const handlePlay = () => {
    if (!selVerse) return;
    if (isPlaying) { stopSpeaking(); setIsPlaying(false); return; }
    setIsPlaying(true);
    const text = `${selVerse.sanskrit} ... ${lang === 'hi' ? selVerse.hindi : selVerse.english}`;
    speak(text, () => setIsPlaying(false));
  };

  // ─── Petals & orbs ────────────────────────────────────────────────────────
  const petals = [
    { l:'4%', d:'0s', dur:'13s', sz:9 },  { l:'17%', d:'2s', dur:'16s', sz:6 },
    { l:'34%', d:'4s', dur:'11s', sz:11 }, { l:'51%', d:'1s', dur:'14s', sz:8 },
    { l:'68%', d:'3s', dur:'12s', sz:7 },  { l:'83%', d:'5s', dur:'15s', sz:10 },
    { l:'93%', d:'0.5s', dur:'13s', sz:6 },
  ];

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <Shell>
      <Orb $t="10%" $l="-5%" $s={500} $c="rgba(212,164,26,.4)" />
      <Orb $t="70%" $l="88%" $s={400} $c="rgba(180,80,20,.3)" />
      {petals.map((p, i) => <Petal key={i} $l={p.l} $d={p.d} $dur={p.dur} $sz={p.sz} />)}

      {/* Header */}
      <PageHeader>
        <Breadcrumb>
          <span onClick={goChapters}>{lang === 'hi' ? 'भगवद्गीता' : 'Bhagavad Gita'}</span>
          {selChapter && (
            <>
              <i className="fa-solid fa-chevron-right" />
              <span onClick={() => selChapter && goShloks(selChapter)}>
                {lang === 'hi' ? `अध्याय ${selChapter}` : `Chapter ${selChapter}`}
              </span>
            </>
          )}
          {selVerse && (
            <>
              <i className="fa-solid fa-chevron-right" />
              <span>{selVerse.chapter}.{selVerse.verse}</span>
            </>
          )}
        </Breadcrumb>

        <PageTitle>
          {step === 'chapters' && (lang === 'hi' ? 'अध्याय चुनें' : 'Choose a Chapter')}
          {step === 'shloks'   && (chapterData ? (lang === 'hi' ? chapterData.nameHindi : chapterData.nameEnglish) : '')}
          {step === 'detail'   && (lang === 'hi' ? 'श्लोक दर्शन' : 'Shlok Darshan')}
        </PageTitle>
        <PageSub>
          {step === 'chapters' && (lang === 'hi' ? '18 अध्यायों में से एक चुनें' : 'Select from 18 chapters')}
          {step === 'shloks'   && !loading && (lang === 'hi'
            ? `${verses.length} श्लोक उपलब्ध — सुनहरा = देखा गया`
            : `${verses.length} verses loaded — gold = already viewed`)}
          {step === 'shloks'   && loading && (lang === 'hi' ? 'श्लोक लोड हो रहे हैं…' : 'Loading verses…')}
          {step === 'detail'   && (lang === 'hi' ? 'पढ़ें · सुनें · अनुभव करें' : 'Read · Listen · Experience')}
        </PageSub>
      </PageHeader>

      {/* ══ STEP 1 — Chapter grid ══════════════════════════════════════════ */}
      {step === 'chapters' && (
        <ChapterGrid>
          {CHAPTERS.map((ch, idx) => {
            const vCount = viewedCount(ch.number);
            const dataCount = ch.totalVerses;
            const allDone  = vCount > 0 && vCount >= dataCount;
            const someDone = vCount > 0;
            return (
              <ChapterCard key={ch.number} $viewed={someDone} tabIndex={idx}
                onClick={() => goShloks(ch.number)} id={`ch-card-${ch.number}`}>
                {allDone   && <ChBadge>✓</ChBadge>}
                {someDone && !allDone && <ChPartialBadge>{vCount}</ChPartialBadge>}
                <ChNum>{ch.number}</ChNum>
                <ChName>{ch.nameHindi}</ChName>
                <ChNameEn>{ch.nameEnglish}</ChNameEn>
                <ChMeta>
                  <ChCount>
                    {`${vCount}/${dataCount} ${lang === 'hi' ? 'देखे' : 'viewed'}`}
                  </ChCount>
                </ChMeta>
                <ChProgressBar $pct={(vCount / dataCount) * 100} />
              </ChapterCard>
            );
          })}
        </ChapterGrid>
      )}

      {/* ══ STEP 2 — Shlok list ════════════════════════════════════════════ */}
      {step === 'shloks' && selChapter && chapterData && (
        <ShlokListWrap>
          <BackBtn onClick={goChapters} id="back-to-chapters">
            <i className="fa-solid fa-arrow-left" />
            {lang === 'hi' ? 'अध्याय सूची' : 'All Chapters'}
          </BackBtn>

          <ChapterBanner>
            <BannerNum>{selChapter}</BannerNum>
            <BannerInfo>
              <BannerTitle>{chapterData.nameHindi}</BannerTitle>
              <BannerSub>
                {chapterData.nameEnglish} · {chapterData.totalVerses} {lang === 'hi' ? 'श्लोक' : 'verses'}
                {' · '}{viewedCount(selChapter)} {lang === 'hi' ? 'देखे गए' : 'viewed'}
              </BannerSub>
            </BannerInfo>
          </ChapterBanner>

          {loading ? (
            <SkeletonGrid>
              {Array.from({ length: chapterData.totalVerses }, (_, i) => (
                <SkeletonTile key={i} $i={i} />
              ))}
            </SkeletonGrid>
          ) : error ? (
            <ErrorBox>
              <i className="fa-solid fa-triangle-exclamation" />
              {error}
              <br />
              <RetryBtn onClick={() => goShloks(selChapter)}>
                {lang === 'hi' ? 'पुनः प्रयास करें' : 'Retry'}
              </RetryBtn>
            </ErrorBox>
          ) : (
            <ShlokGrid>
              {verses.map(v => {
                const k = vKey(v.chapter, v.verse);
                const isViewed = viewed.has(k);
                return (
                  <ShlokTile key={k} $viewed={isViewed} tabIndex={v.verse}
                    onClick={() => openVerse(v)}
                    id={`shlok-${v.chapter}-${v.verse}`}
                    title={`${v.chapter}.${v.verse}`}>
                    {isViewed && <TileCheck>✓</TileCheck>}
                    <TileNum $viewed={isViewed}>{v.verse}</TileNum>
                    <TileSnip>{v.sanskrit.split('\n')[0].slice(0, 18)}…</TileSnip>
                  </ShlokTile>
                );
              })}
            </ShlokGrid>
          )}
        </ShlokListWrap>
      )}

      {/* ══ STEP 3 — Shlok detail ══════════════════════════════════════════ */}
      {step === 'detail' && selVerse && (
        <DetailWrap>
          {/* nav row */}
          <NavRow>
            <NavBtn onClick={goChapters}>
              <i className="fa-solid fa-om" />
              {lang === 'hi' ? 'सभी अध्याय' : 'Chapters'}
            </NavBtn>
            <NavDivider />
            <NavBtn $primary onClick={() => selChapter && goShloks(selChapter)}>
              <i className="fa-solid fa-list" />
              {lang === 'hi' ? `अध्याय ${selChapter}` : `Chapter ${selChapter}`}
            </NavBtn>
            <PrevNextRow>
              <PNBtn $dis={verseIdx <= 0} disabled={verseIdx <= 0}
                onClick={goPrev} id="prev-shlok" title="Previous">
                <i className="fa-solid fa-chevron-left" />
              </PNBtn>
              <PNBtn $dis={verseIdx >= verses.length - 1}
                disabled={verseIdx >= verses.length - 1}
                onClick={goNext} id="next-shlok" title="Next">
                <i className="fa-solid fa-chevron-right" />
              </PNBtn>
            </PrevNextRow>
          </NavRow>

          {/* Paper card */}
          <ScrollContainer>
            <Tassel />
            <Tassel $right />
            <PaperScroll>
              <ContentZ>
                <VerseTag>
                  {lang === 'hi'
                    ? `अध्याय ${selVerse.chapter}, श्लोक ${selVerse.verse}`
                    : `Chapter ${selVerse.chapter}, Verse ${selVerse.verse}`}
                </VerseTag>
                <Sanskrit>{selVerse.sanskrit}</Sanskrit>
                <Rule />
                <Translation>
                  {lang === 'hi' ? selVerse.hindi : selVerse.english}
                </Translation>

                <AudioBar>
                  <SideBtn onClick={() => {}}>
                    <i className="fa-solid fa-headphones" /> LISTEN
                  </SideBtn>

                  <BigPlayBtn $active={isPlaying} onClick={handlePlay} id="play-btn">
                    {isPlaying ? (
                      <svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </BigPlayBtn>

                  <SideBtn onClick={() => {}}>
                    <i className="fa-solid fa-book-open" /> READ
                  </SideBtn>
                </AudioBar>
              </ContentZ>
            </PaperScroll>
          </ScrollContainer>
        </DetailWrap>
      )}
    </Shell>
  );
};

export default GitaSection;
