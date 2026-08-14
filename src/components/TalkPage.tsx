"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { useRouter, useParams } from "next/navigation";
import { Mic, MicOff, Send, ArrowLeft } from "lucide-react";
import { getLord, type LordConfig } from "@/lib/lords";
import { useAuth } from "@/context/AuthContext";
import SubscriptionModal from "./SubscriptionModal";

type SessionState = "idle" | "connecting" | "speaking" | "listening";

// ─────────────────────────── Styled components ──────────────────────────────

const micPulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(141,198,63,.5); }
  50%       { transform: scale(1.1); box-shadow: 0 0 40px rgba(141,198,63,.8), 0 0 60px rgba(141,198,63,.4); }
`;

const buttonGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(141,198,63,.3); }
  50%       { box-shadow: 0 0 40px rgba(141,198,63,.6), 0 0 60px rgba(141,198,63,.3); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const toastIn = keyframes`
  from { opacity: 0; transform: translateX(-50%) translateY(12px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
`;

const dotPulse = keyframes`
  0%, 80%, 100% { opacity: .3; transform: scale(.8); }
  40%           { opacity: 1;  transform: scale(1); }
`;

const divineReveal = keyframes`
  from { opacity: 0; transform: scale(1.04); }
  to   { opacity: 1; transform: scale(1); }
`;

const Spinner = styled.div<{ $color?: string }>`
  width: 16px;
  height: 16px;
  border: 2px solid ${(p) => p.$color || "white"};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const STalkPage = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background: radial-gradient(ellipse at center, #0a1a0a 0%, #000 70%);
  --page-bg: #0a1a0a;
  --mobile-input-offset: 7.5rem;
  overflow: hidden;
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    --mobile-input-offset: 7rem;
  }
  @media (max-width: 600px) {
    --mobile-input-offset: 6.5rem;
  }
`;

const TopBar = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  padding-top: max(1.2rem, env(safe-area-inset-top));
  background: linear-gradient(to bottom, rgba(0,0,0,.7) 0%, transparent 100%);
  pointer-events: none;
  > * { pointer-events: auto; }
`;

const BackButton = styled.button`
  display: flex; align-items: center; gap: .5rem;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(141,198,63,.25);
  border-radius: 999px;
  padding: .5rem 1rem;
  color: rgba(255,255,255,.85);
  font-family: "Gothic A1", sans-serif;
  font-size: .85rem;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all .25s;
  &:hover { background: rgba(141,198,63,.12); border-color: rgba(141,198,63,.5); color: #fff; }
  svg { width: 16px; height: 16px; }
`;

const BrandLabel = styled.span`
  font-family: "DM Serif Display", serif;
  font-size: 1.1rem;
  color: rgba(255,255,255,.5);
  letter-spacing: .05em;
`;

const StatusPill = styled.div<{ $state: SessionState }>`
  display: flex; align-items: center; gap: .5rem;
  padding: .4rem .9rem;
  border-radius: 999px;
  font-family: "Gothic A1", sans-serif;
  font-size: .75rem; font-weight: 600;
  letter-spacing: .04em; text-transform: uppercase;
  backdrop-filter: blur(12px);
  transition: all .4s;

  ${(p) => p.$state === "idle" && css`
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.1);
    color: rgba(255,255,255,.45);
  `}
  ${(p) => p.$state === "connecting" && css`
    background: rgba(141,198,63,.1);
    border: 1px solid rgba(141,198,63,.35);
    color: #a0d448;
  `}
  ${(p) => p.$state === "speaking" && css`
    background: rgba(141,198,63,.15);
    border: 1px solid rgba(141,198,63,.5);
    color: #8dc63f;
    box-shadow: 0 0 20px rgba(141,198,63,.2);
  `}
  ${(p) => p.$state === "listening" && css`
    background: rgba(255,100,100,.1);
    border: 1px solid rgba(255,100,100,.35);
    color: #ff8a8a;
  `}
`;

const StatusDot = styled.span<{ $state: SessionState }>`
  width: 6px; height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: ${(p) =>
      ["connecting", "speaking", "listening"].includes(p.$state) ? dotPulse : "none"}
    1.4s ease-in-out infinite;
`;

const Toast = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: 9rem; left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  padding: .75rem 1.4rem;
  background: rgba(20,20,20,.92);
  border: 1px solid rgba(255,100,100,.4);
  border-radius: 10px;
  color: rgba(255,255,255,.9);
  font-family: "Gothic A1", sans-serif;
  font-size: .9rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0,0,0,.5);
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};
  animation: ${(p) => (p.$visible ? css`${toastIn} .35s ease forwards` : "none")};
  max-width: 90vw; text-align: center;
`;

const ParticlesContainer = styled.div`
  position: absolute; inset: 0;
  pointer-events: none; z-index: 3;
  canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
`;

// ── Media display ──────────────────────────────────────────────────────────

const MediaContainer = styled.div`
  position: absolute; inset: 0;
  z-index: 2;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  background: var(--page-bg, #0a1a0a);

  &::before {
    content: "";
    position: absolute; inset: 0;
    background: var(--page-bg, #0a1a0a);
    z-index: 0;
  }

  /* Cinematic vignette overlay */
  &::after {
    content: "";
    position: absolute; inset: 0;
    background:
      linear-gradient(to right,  rgba(0,0,0,.5) 0%, rgba(0,0,0,.15) 10%, transparent 28%, transparent 72%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.5) 100%),
      linear-gradient(to top,    rgba(0,0,0,.85) 0%, rgba(0,0,0,.4) 18%, transparent 42%),
      linear-gradient(to bottom, rgba(0,0,0,.7)  0%, rgba(0,0,0,.25) 12%, transparent 22%),
      radial-gradient(ellipse at bottom left,  rgba(0,0,0,.8) 0%, transparent 70%),
      radial-gradient(ellipse at bottom right, rgba(0,0,0,.8) 0%, transparent 70%);
    pointer-events: none; z-index: 2;

    @media (max-width: 800px) {
      background:
        linear-gradient(to bottom, var(--page-bg,#0a1a0a) 0%, rgba(10,26,10,.5) 6%, transparent 16%),
        linear-gradient(to top,    rgba(0,0,0,.35) 0%, transparent 12%),
        linear-gradient(to right,  var(--page-bg,#0a1a0a) 0%, transparent 4%),
        linear-gradient(to left,   var(--page-bg,#0a1a0a) 0%, transparent 4%);
    }
  }

  @media (max-width: 800px) {
    height: calc(100dvh - var(--mobile-input-offset, 7rem));
    align-items: flex-end;
  }
`;

const mediaBase = css<{ $objectPosition: string }>`
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: contain;
  background: var(--page-bg, #0a1a0a);
  z-index: 1;

  @media (max-width: 800px) {
    object-fit: cover;
    object-position: ${(p) => p.$objectPosition};
  }
`;

const LordImage = styled.img.withConfig({
  shouldForwardProp: (p) => !["$objectPosition", "$hide"].includes(p),
})<{ $objectPosition: string; $hide: boolean }>`
  ${mediaBase}
  opacity: ${(p) => (p.$hide ? 0 : 1)};
  transition: opacity .5s ease;
`;

const GeneratedVideo = styled.video.withConfig({
  shouldForwardProp: (p) => !["$objectPosition", "$show"].includes(p),
})<{ $objectPosition: string; $show: boolean }>`
  ${mediaBase}
  opacity: ${(p) => (p.$show ? 1 : 0)};
  transition: opacity .5s ease;
  animation: ${(p) => (p.$show ? css`${divineReveal} .6s ease forwards` : "none")};
  transform: translateZ(0);
  backface-visibility: hidden;
`;

// ── One-time arrival intro ─────────────────────────────────────────────────
// Plays Start_<Lord>.mp4 once when the page first loads, using the exact
// same sizing/positioning as the idle image + speaking video so the lord
// appears standing/sitting in the same on-screen spot when the intro ends
// and the main 4K presence takes over — no visual "jump".

const IntroOverlay = styled.div<{ $visible: boolean }>`
  position: absolute; inset: 0;
  z-index: 6;
  background: var(--page-bg, #0a1a0a);
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  pointer-events: none;
  transition: opacity .6s ease;
`;

const IntroVideo = styled.video.withConfig({
  shouldForwardProp: (p) => !["$objectPosition"].includes(p),
})<{ $objectPosition: string }>`
  ${mediaBase}
`;

// ── Loading overlay ────────────────────────────────────────────────────────

const breathe = keyframes`
  0%, 100% { opacity: .55; transform: scale(1); }
  50%       { opacity: .85; transform: scale(1.015); }
`;

const LoadingOverlay = styled.div<{ $visible: boolean }>`
  position: absolute; inset: 0;
  z-index: 4;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 1.2rem;
  background: rgba(0,0,0,.45);
  backdrop-filter: blur(2px);
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};
  transition: opacity .4s ease;
`;

const LoadingRing = styled.div`
  width: 64px; height: 64px;
  border: 2px solid rgba(141,198,63,.15);
  border-top-color: #8dc63f;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
`;

const LoadingText = styled.p`
  font-family: "DM Serif Display", serif;
  font-size: 1.1rem;
  color: rgba(255,255,255,.75);
  margin: 0;
  letter-spacing: .04em;
  animation: ${breathe} 2.5s ease-in-out infinite;
`;

// ── Input area ─────────────────────────────────────────────────────────────

const InputContainer = styled.div`
  position: fixed;
  bottom: 4rem; left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex; flex-direction: column;
  align-items: center; gap: .75rem;
  width: min(480px, 92vw);

  @media (max-width: 800px) { bottom: 1.25rem; width: min(400px, 94vw); }
  @media (max-width: 600px) { bottom: 1rem; }
`;

const ThinkingBar = styled.div<{ $visible: boolean }>`
  display: flex; align-items: center; gap: .6rem;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? "0" : "8px")});
  transition: all .35s ease;
  pointer-events: none;
  font-family: "Gothic A1", sans-serif;
  font-size: .8rem;
  color: rgba(141,198,63,.8);
  letter-spacing: .03em;
`;

const ThinkingDots = styled.span`
  display: inline-flex; gap: 3px;
  span {
    width: 4px; height: 4px;
    border-radius: 50%; background: #8dc63f;
    animation: ${dotPulse} 1.4s ease-in-out infinite;
    &:nth-child(2) { animation-delay: .2s; }
    &:nth-child(3) { animation-delay: .4s; }
  }
`;

const ModernInput = styled.div.withConfig({
  shouldForwardProp: (p) => !["$disabled"].includes(p),
})<{ $disabled?: boolean }>`
  position: relative;
  display: flex; align-items: center;
  width: 100%;
  background: rgba(10,15,10,.88) !important;
  border: 1px solid rgba(141,198,63,.25);
  border-radius: 14px;
  padding: .35rem .9rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 24px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.05);
  transition: all .3s;
  opacity: ${(p) => (p.$disabled ? .7 : 1)};

  &::before {
    content: "";
    position: absolute; inset: 0;
    border-radius: 14px; padding: 1px;
    background: linear-gradient(135deg, rgba(141,198,63,.3), transparent 50%, rgba(141,198,63,.1));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    pointer-events: none; opacity: 0; transition: opacity .3s;
  }

  &:hover { border-color: rgba(141,198,63,.4); box-shadow: 0 6px 28px rgba(141,198,63,.08); }
  &:focus-within { border-color: rgba(141,198,63,.55); box-shadow: 0 0 24px rgba(141,198,63,.12); &::before { opacity: 1; } }
`;

const TextInput = styled.input`
  && {
    display: block; background: transparent !important; border: none !important; outline: none;
    color: rgba(255,255,255,.92) !important;
    font-size: 1rem !important; font-family: "Gothic A1", sans-serif;
    flex: 1; padding: .6rem .5rem !important; caret-color: #8dc63f;
    height: 3.2rem !important; line-height: 1.4 !important;
    border-radius: 0; box-shadow: none !important; max-width: none; width: 100%;
  }
  &&::placeholder { color: rgba(255,255,255,.35) !important; }
  &&:focus { color: rgba(255,255,255,.92) !important; background: transparent !important; border: none !important; box-shadow: none !important; }
  &&:disabled { cursor: not-allowed; opacity: .6; }
  @media (max-width: 600px) { && { font-size: .9rem !important; height: 3rem !important; } }
`;

const MicButton = styled.button<{ $isListening: boolean; disabled?: boolean }>`
  background: ${(p) => p.$isListening ? "linear-gradient(135deg,#8dc63f,#a0d448)" : "rgba(141,198,63,.2)"};
  border: 2px solid ${(p) => p.$isListening ? "rgba(141,198,63,.8)" : "rgba(141,198,63,.3)"};
  opacity: ${(p) => (p.disabled ? .6 : 1)};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  border-radius: 50%; width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  transition: all .3s;
  color: ${(p) => (p.$isListening ? "#000" : "#8dc63f")};
  animation: ${(p) => (p.$isListening ? micPulse : "none")} 2s infinite;
  flex-shrink: 0; margin-left: 5px; position: relative; z-index: 10;
  touch-action: manipulation; -webkit-tap-highlight-color: transparent;
  &:hover { transform: ${(p) => (p.disabled ? "none" : "scale(1.05)")}; }
  &:active { transform: ${(p) => (p.disabled ? "none" : "scale(.95)")}; }
  svg { width: 16px; height: 16px; margin: 0; padding: 0; pointer-events: none; }
  @media (max-width: 600px) { width: 28px; height: 28px; svg { width: 14px; height: 14px; } }
`;

const SubmitButton = styled.button<{ disabled?: boolean }>`
  background: linear-gradient(135deg,#8dc63f,#6fa82e);
  border: 1px solid rgba(141,198,63,.6);
  opacity: ${(p) => (p.disabled ? .5 : 1)};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  border-radius: 50%; width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  transition: all .3s; color: #0a1a0a;
  flex-shrink: 0; margin-left: 4px; position: relative; z-index: 10;
  touch-action: manipulation; -webkit-tap-highlight-color: transparent;
  &:hover { transform: ${(p) => (p.disabled ? "none" : "scale(1.06)")}; }
  &:active { transform: ${(p) => (p.disabled ? "none" : "scale(.95)")}; }
  svg { width: 16px; height: 16px; pointer-events: none; }
  @media (max-width: 600px) { width: 32px; height: 32px; svg { width: 14px; height: 14px; } }
`;

const SpeechCaption = styled.div<{ $visible: boolean }>`
  width: 100%;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? "0" : "6px")});
  transition: opacity .3s, transform .3s;
  pointer-events: none; min-height: 1.5rem;
`;

const CaptionText = styled.p`
  margin: 0;
  font-family: "DM Serif Display", serif;
  font-size: 1rem; line-height: 1.4; font-weight: 400; font-style: italic;
  color: rgba(255,255,255,.96);
  text-shadow: 0 0 24px rgba(0,0,0,.95), 0 2px 8px rgba(0,0,0,.9);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: center;
  @media (max-width: 600px) { font-size: .95rem; }
`;

const HiddenAudio = styled.audio`display: none;`;

const LipsyncBadge = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 1.5rem; right: 1.5rem;
  z-index: 5;
  display: flex; align-items: center; gap: .45rem;
  padding: .38rem .85rem;
  background: rgba(0,0,0,.72);
  border: 1px solid rgba(141,198,63,.3);
  border-radius: 999px;
  color: rgba(141,198,63,.85);
  font-family: "Gothic A1", sans-serif;
  font-size: .7rem; font-weight: 600;
  letter-spacing: .04em;
  backdrop-filter: blur(12px);
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? "0" : "8px")});
  transition: opacity .4s ease, transform .4s ease;
  pointer-events: none;
`;

const CAPTION_WINDOW = 8;
/** Soft background while the lord speaks — keep speech clearly audible. */
const SPEAKING_BGM_SRC = "/mahabharat-theme.mp3";
const SPEAKING_BGM_VOLUME = 0.22;

function getVisibleWords(
  words: Array<{ word: string }>,
  idx: number
) {
  if (!words.length || idx < 0) return [];
  const start = Math.max(0, idx - CAPTION_WINDOW + 1);
  return words.slice(start, idx + 1).map((e, i) => ({ word: e.word, index: start + i }));
}

const CaptionWord = styled.span<{ $state: "past" | "current" }>`
  transition: color .2s, opacity .2s, text-shadow .2s;
  ${(p) => p.$state === "current" && css`
    color: #d4f0a0; font-style: normal;
    text-shadow: 0 0 16px rgba(141,198,63,.45), 0 2px 8px rgba(0,0,0,.9);
  `}
  ${(p) => p.$state === "past" && css`opacity: .65;`}
`;

// ─────────────────────────── Components ─────────────────────────────────────

const TalkPage: React.FC = () => {
  const { lordId } = useParams<{ lordId: string }>();
  const lord = getLord(lordId);
  if (!lord) return null;
  return <TalkPageContent lord={lord} />;
};

const TalkPageContent: React.FC<{ lord: LordConfig }> = ({ lord }) => {
  const router = useRouter();
  const { user, profile } = useAuth();

  // ── UI state ──────────────────────────────────────────────────────────────
  const [isListening, setIsListening] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [inputText, setInputText] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  // ── Media state ───────────────────────────────────────────────────────────
  /** True while the lord speaking video is looping over the audio. */
  const [isSpeakingVideoVisible, setIsSpeakingVideoVisible] = useState(false);

  // ── Arrival intro (plays every time the talk page is opened) ──────────────
  const [introState, setIntroState] = useState<"playing" | "done">("playing");
  const introVideoRef = useRef<HTMLVideoElement>(null);

  // ── Captions ──────────────────────────────────────────────────────────────
  const [wordDurations, setWordDurations] = useState<Array<{ word: string; startMs: number; endMs: number }>>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(false);
  const wordDurationsRef = useRef<typeof wordDurations>([]);
  const captionIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // ── Refs ──────────────────────────────────────────────────────────────────
  /** Video element — plays lord.video with audio-energy-driven lipsync. */
  const speakingVideoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const bgmRef = useRef<HTMLAudioElement>(null);
  /** Web Audio API — created once per component life, routes audio to speaker + analyser. */
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  /** requestAnimationFrame id for the lipsync animation loop. */
  const lipSyncFrameRef = useRef<number | null>(null);
  const audioBlobUrlRef = useRef<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const sessionIdRef = useRef(
    `${lord.id}-${
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : Date.now().toString(36) + Math.random().toString(36).slice(2)
    }`
  );

  const sessionState: SessionState = isListening
    ? "listening"
    : isGeneratingAudio
    ? "connecting"
    : isAudioPlaying
    ? "speaking"
    : "idle";

  const statusLabel: Record<SessionState, string> = {
    idle: "Present",
    connecting: "Receiving",
    speaking: "Speaking",
    listening: "Listening",
  };

  // ── Toast ─────────────────────────────────────────────────────────────────
  const showToastMessage = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    setShowToast(true);
    toastTimerRef.current = setTimeout(() => setShowToast(false), 4000);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      showToastMessage((e as CustomEvent<string>).detail);
    };
    window.addEventListener("show-toast", handler);
    return () => window.removeEventListener("show-toast", handler);
  }, []);

  // ── Body / viewport lock ──────────────────────────────────────────────────
  useEffect(() => {
    const prev = {
      overflow: document.body.style.overflow,
      pos: document.body.style.position,
    };
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    let vp = document.querySelector("meta[name=viewport]");
    if (!vp) {
      vp = document.createElement("meta");
      vp.setAttribute("name", "viewport");
      document.head.appendChild(vp);
    }
    vp.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
    );

    return () => {
      document.body.style.overflow = prev.overflow;
      document.body.style.position = prev.pos;
      document.documentElement.style.overflow = "";
      document.body.style.width = "";
      document.body.style.height = "";
      if (captionIntervalRef.current) clearInterval(captionIntervalRef.current);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (lipSyncFrameRef.current) cancelAnimationFrame(lipSyncFrameRef.current);
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
        analyserRef.current = null;
      }
      if (audioBlobUrlRef.current) {
        URL.revokeObjectURL(audioBlobUrlRef.current);
        audioBlobUrlRef.current = null;
      }
      if (bgmRef.current) {
        bgmRef.current.pause();
        bgmRef.current.currentTime = 0;
      }
    };
  }, []);

  // ── Arrival intro playback (plays in full every time the talk page opens) ─
  const finishIntro = () => {
    const vid = introVideoRef.current;
    if (vid) {
      vid.pause();
      vid.removeAttribute("src");
      vid.load();
    }
    setIntroState("done");
  };

  useEffect(() => {
    setIntroState("playing");
    const vid = introVideoRef.current;
    if (!vid) return;

    vid.src = lord.introVideo;
    vid.currentTime = 0;
    vid.volume = 1;
    vid.muted = false;
    vid.load();

    const onEnded = () => finishIntro();
    const onError = () => finishIntro();
    vid.addEventListener("ended", onEnded);
    vid.addEventListener("error", onError);

    // primeAutoplayAudio() (fired on the lord-card click in /choose) already
    // established the user gesture this unmuted play() relies on — Next.js
    // client-side navigation keeps the same document, so that permission
    // carries over here. Muted is only a last-resort fallback for a direct
    // page load/refresh with no prior interaction at all.
    vid.play().catch(() => {
      vid.muted = true;
      vid.play().catch(() => {});
    });

    return () => {
      vid.removeEventListener("ended", onEnded);
      vid.removeEventListener("error", onError);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lord.id]);

  // ── Particles ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!particlesRef.current) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesRef.current.appendChild(canvas);

    class Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; life: number; maxLife: number; color: string;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - .5) * .5;
        this.vy = (Math.random() - .5) * .5;
        this.size = Math.random() * 2 + .5;
        this.opacity = Math.random() * .8 + .2;
        this.life = 0;
        this.maxLife = Math.random() * 600 + 400;
        const colors = ["#ffffff","#8dc63f","#a0d448","#ffffff","#ffffff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.vx; this.y += this.vy; this.life++;
        this.vx += (Math.random()-.5)*.008; this.vy += (Math.random()-.5)*.008;
        this.vx = Math.max(-1, Math.min(1, this.vx));
        this.vy = Math.max(-1, Math.min(1, this.vy));
        this.opacity = Math.max(.1, Math.min(.9, this.opacity + (Math.random()-.5)*.005));
        if (this.life > this.maxLife || this.x < -50 || this.x > canvas.width+50 || this.y < -50 || this.y > canvas.height+50) {
          this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
          this.vx = (Math.random()-.5)*.5; this.vy = (Math.random()-.5)*.5;
          this.opacity = Math.random()*.8+.2; this.life = 0;
          this.maxLife = Math.random()*600+400;
        }
      }
      draw() {
        ctx!.save(); ctx!.globalAlpha = this.opacity;
        const g = ctx!.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size*3);
        g.addColorStop(0, this.color); g.addColorStop(.5, this.color+"66"); g.addColorStop(1, "transparent");
        ctx!.fillStyle = g; ctx!.beginPath(); ctx!.arc(this.x,this.y,this.size*3,0,Math.PI*2); ctx!.fill();
        ctx!.fillStyle = this.color; ctx!.beginPath(); ctx!.arc(this.x,this.y,this.size,0,Math.PI*2); ctx!.fill();
        ctx!.restore();
      }
    }

    const count = window.innerWidth < 768 ? 60 : 100;
    const particles = Array.from({ length: count }, () => new Particle());
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.parentNode?.removeChild(canvas);
    };
  }, [lord.id]);

  // ── Caption sync ──────────────────────────────────────────────────────────
  const startCaptionSync = (getTime: () => number) => {
    if (captionIntervalRef.current) clearInterval(captionIntervalRef.current);
    setCurrentWordIndex(0);
    setShowCaption(true);

    captionIntervalRef.current = setInterval(() => {
      const durations = wordDurationsRef.current;
      if (!durations.length) return;
      const t = getTime() * 1000;
      let idx = 0;
      for (let i = 0; i < durations.length; i++) {
        if (t >= durations[i].startMs) idx = i;
        else break;
      }
      setCurrentWordIndex(idx);
    }, 100);
  };

  const stopCaptionSync = () => {
    if (captionIntervalRef.current) { clearInterval(captionIntervalRef.current); captionIntervalRef.current = null; }
    setShowCaption(false);
    setCurrentWordIndex(0);
  };

  // ── Stop lipsync animation ────────────────────────────────────────────────
  const stopLipSync = () => {
    if (lipSyncFrameRef.current) {
      cancelAnimationFrame(lipSyncFrameRef.current);
      lipSyncFrameRef.current = null;
    }
  };

  const stopBackgroundMusic = () => {
    const bgm = bgmRef.current;
    if (!bgm) return;
    bgm.pause();
    bgm.currentTime = 0;
  };

  const startBackgroundMusic = async () => {
    const bgm = bgmRef.current;
    if (!bgm) return;
    bgm.volume = SPEAKING_BGM_VOLUME;
    bgm.loop = true;
    bgm.currentTime = 0;
    try {
      await bgm.play();
    } catch {
      // Autoplay may be blocked until user gesture — speech still works.
    }
  };

  // ── Stop playback ─────────────────────────────────────────────────────────
  const stopPlayback = () => {
    stopLipSync();
    stopBackgroundMusic();
    setIsAudioPlaying(false);
    setIsSpeakingVideoVisible(false);
    stopCaptionSync();

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (speakingVideoRef.current) {
      speakingVideoRef.current.pause();
      speakingVideoRef.current.currentTime = 0;
    }
    if (audioBlobUrlRef.current) {
      URL.revokeObjectURL(audioBlobUrlRef.current);
      audioBlobUrlRef.current = null;
    }
  };

  // ── Audio ended ───────────────────────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => {
      if (lipSyncFrameRef.current) {
        cancelAnimationFrame(lipSyncFrameRef.current);
        lipSyncFrameRef.current = null;
      }
      stopBackgroundMusic();
      stopCaptionSync();
      setIsAudioPlaying(false);
      setIsSpeakingVideoVisible(false);
      if (speakingVideoRef.current) {
        speakingVideoRef.current.pause();
        speakingVideoRef.current.currentTime = 0;
      }
    };
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Build word durations from full text when not provided by API ──────────
  const buildFakeWordDurations = (text: string, durationSec: number) => {
    const words = text.split(/\s+/).filter(Boolean);
    if (!words.length || !durationSec) return [];
    const msPerWord = (durationSec * 1000) / words.length;
    return words.map((word, i) => ({ word, startMs: i * msPerWord, endMs: (i + 1) * msPerWord }));
  };

  // ── Audio-energy lipsync (100% free, runs in browser via Web Audio API) ───
  //
  // Connects Murf audio → Web Audio AnalyserNode → speaker.
  // Every animation frame: reads speech-band energy, maps it to video playback
  // rate, and loops the video within mouthScrubStart…mouthScrubEnd.
  // High energy = faster playback = more mouth movement. Looks like the lord
  // is actually speaking without any external API.
  const startSpeakingVideo = async () => {
    const vid   = speakingVideoRef.current;
    const audio = audioRef.current;
    if (!vid || !audio) return;

    // ── Set up Web Audio graph (only once per component) ──────────────────
    if (!audioContextRef.current) {
      try {
        const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
        const src = audioContextRef.current.createMediaElementSource(audio);
        analyserRef.current  = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;
        // route: source → analyser → speakers (so audio still plays)
        src.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      } catch (e) {
        console.warn("[lipsync] Web Audio unavailable:", e);
      }
    }
    if (audioContextRef.current?.state === "suspended") {
      await audioContextRef.current.resume();
    }

    // ── Load lord video, seek to mouth-scrub start ─────────────────────────
    vid.muted       = true;
    vid.loop        = false;
    vid.src         = lord.video;
    vid.load();
    await new Promise<void>((resolve) => {
      if (vid.readyState >= 2) { resolve(); return; }
      vid.addEventListener("canplay",  () => resolve(), { once: true });
      vid.addEventListener("error",    () => resolve(), { once: true });
    });

    const {
      mouthScrubStart,
      mouthScrubEnd,
      mouthRateMin          = 0.24,
      mouthRateMax          = 0.82,
      mouthEnergySmoothing  = 0.38,
    } = lord.videoClip;

    vid.currentTime  = mouthScrubStart;
    vid.playbackRate = mouthRateMin;
    vid.play().catch(() => {});
    setIsSpeakingVideoVisible(true);

    // ── Animation loop: energy → playback rate ─────────────────────────────
    const analyser  = analyserRef.current;
    const dataArray = analyser ? new Uint8Array(analyser.frequencyBinCount) : null;
    let smoothEnergy = 0;

    const tick = () => {
      // Read audio energy from speech frequencies (~300 Hz – 3 kHz)
      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 2; i <= 20; i++) sum += dataArray[i];
        const rawEnergy = sum / (19 * 255);
        smoothEnergy += (rawEnergy - smoothEnergy) * mouthEnergySmoothing;
      } else {
        // Web Audio unavailable — just animate at mid-speed
        smoothEnergy = 0.5;
      }

      // Map energy → playback rate (high energy = faster mouth movement)
      const rate = mouthRateMin + smoothEnergy * (mouthRateMax - mouthRateMin);
      vid.playbackRate = Math.max(0.05, Math.min(1, rate));

      // Loop within mouth-scrub range
      if (vid.currentTime >= mouthScrubEnd || vid.ended) {
        vid.currentTime = mouthScrubStart;
        vid.play().catch(() => {});
      }

      lipSyncFrameRef.current = requestAnimationFrame(tick);
    };

    lipSyncFrameRef.current = requestAnimationFrame(tick);
  };

  // ── Main API call ─────────────────────────────────────────────────────────
  const callAudioAssistant = async (text: string) => {
    // Frontend credit guard
    const isUnlimited =
      profile?.subscriptionType !== "free" &&
      profile?.subscriptionExpiry != null &&
      profile.subscriptionExpiry > Date.now();
    if (!isUnlimited && profile?.freeCredits === 0) {
      setShowSubscriptionModal(true);
      return;
    }

    setIsGeneratingAudio(true);

    try {
      const formData = new FormData();
      formData.append("lordId", lord.id);
      formData.append("sessionId", sessionIdRef.current);
      formData.append("text", text.trim());

      const token = user ? await user.getIdToken() : "";
      const response = await fetch("/api/talk", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "x-lord-id": lord.id,
          "x-session-id": sessionIdRef.current,
        },
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 402 || response.status === 403) {
          setShowSubscriptionModal(true);
          return;
        }
        throw new Error(`API call failed: ${response.status}`);
      }

      const result = await response.json() as {
        audioFile?: string;
        transcript?: string;
      };

      const transcript = result.transcript || "";

      if (result.audioFile) {
        stopPlayback();

        const audio = audioRef.current;
        if (!audio) return;

        audio.src = result.audioFile;
        audio.load();

        await new Promise<void>((resolve) => {
          const onReady = () => { cleanup(); resolve(); };
          const onError = () => { cleanup(); resolve(); };
          const cleanup = () => {
            audio.removeEventListener("canplaythrough", onReady);
            audio.removeEventListener("error", onError);
          };
          if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) { resolve(); return; }
          audio.addEventListener("canplaythrough", onReady);
          audio.addEventListener("error", onError);
        });

        // Build captions from transcript + audio duration
        if (transcript) {
          const dur = isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 20;
          const durations = buildFakeWordDurations(transcript, dur);
          setWordDurations(durations);
          wordDurationsRef.current = durations;
        }

        setIsAudioPlaying(true);
        // Start animated lord video loop in sync with audio (free — no API)
        await startSpeakingVideo();
        await startBackgroundMusic();
        await audio.play();
        startCaptionSync(() => audio.currentTime);
      }
    } catch (err) {
      console.error("Error calling audio assistant:", err);
      showToastMessage("Could not connect. Please try again.");
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  // ── Text submit ───────────────────────────────────────────────────────────
  const handleTextSubmit = async () => {
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setInputText("");
    stopPlayback();
    await callAudioAssistant(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleTextSubmit();
  };

  // ── Voice input ───────────────────────────────────────────────────────────
  const handleSpeak = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      showToastMessage("Voice input is not supported in this browser.");
      return;
    }

    setIsListening(true);
    const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SR();
    recognitionRef.current = recognition;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "hi-IN";

    let speechTimeout: NodeJS.Timeout;
    let hasSpoken = false;
    let currentTranscript = "";

    recognition.onstart = () => { setIsListening(true); hasSpoken = false; currentTranscript = ""; };

    recognition.onresult = (event: any) => {
      let final = ""; let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) final += t; else interim += t;
      }
      currentTranscript = final || interim;
      if (!currentTranscript.trim()) return;
      hasSpoken = true;
      if (speechTimeout) clearTimeout(speechTimeout);
      speechTimeout = setTimeout(async () => {
        if (!hasSpoken || !currentTranscript.trim()) return;
        recognition.stop(); setIsListening(false);
        stopPlayback();
        await callAudioAssistant(currentTranscript);
      }, 2000);
    };

    recognition.onspeechend = () => {
      setTimeout(async () => {
        if (!hasSpoken || !isListening || !currentTranscript.trim()) return;
        recognition.stop(); setIsListening(false);
        stopPlayback();
        await callAudioAssistant(currentTranscript);
      }, 1000);
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        showToastMessage("Microphone access is required for voice input.");
      }
    };

    recognition.onend = () => { if (isListening) setIsListening(false); };

    try { recognition.start(); }
    catch { setIsListening(false); showToastMessage("Voice input is not available right now."); }
  };

  // ── Image / video positioning ─────────────────────────────────────────────
  const objPosition = lord.mobileObjectPosition || lord.videoClip.objectPosition;

  // ─────────────────────────── Render ───────────────────────────────────────
  return (
    <STalkPage>
      <ParticlesContainer ref={particlesRef} />

      <TopBar>
        <BackButton type="button" onClick={() => router.push("/choose")}>
          <ArrowLeft /> Back
        </BackButton>
        <BrandLabel>{lord.brandLabel}</BrandLabel>
        <StatusPill $state={sessionState}>
          <StatusDot $state={sessionState} />
          {statusLabel[sessionState]}
        </StatusPill>
      </TopBar>

      {/* Lord presence — static image when idle, animated video when speaking */}
      <MediaContainer>
        <LordImage
          src={lord.image}
          alt={lord.name}
          $objectPosition={objPosition}
          $hide={isSpeakingVideoVisible}
        />

        {/* Lord speaking video — loops lord.video while Murf audio plays (free, no API) */}
        <GeneratedVideo
          ref={speakingVideoRef}
          $objectPosition={objPosition}
          $show={isSpeakingVideoVisible}
          playsInline
        />

        {/* Generating overlay — shown while waiting for API response */}
        <LoadingOverlay $visible={isGeneratingAudio}>
          <LoadingRing />
          <LoadingText>Receiving divine wisdom…</LoadingText>
        </LoadingOverlay>

        {/* Cinematic arrival — plays in full, same sizing as idle image/video
            so the lord lands in the exact same on-screen position when this
            ends and the main 4K presence takes over. */}
        <IntroOverlay $visible={introState !== "done"}>
          <IntroVideo
            ref={introVideoRef}
            $objectPosition={objPosition}
            playsInline
          />
        </IntroOverlay>
      </MediaContainer>

      {/* Lord speech — src set imperatively only, never via React prop */}
      <HiddenAudio ref={audioRef} preload="none" />
      {/* Soft Mahabharat theme while the lord speaks */}
      <HiddenAudio ref={bgmRef} src={SPEAKING_BGM_SRC} preload="auto" />

      {showSubscriptionModal && (
        <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
      )}

      <Toast $visible={showToast}>{toastMessage}</Toast>

      <InputContainer>
        {/* Word-by-word captions */}
        <SpeechCaption $visible={showCaption && wordDurations.length > 0}>
          <CaptionText>
            {getVisibleWords(wordDurations, currentWordIndex).map((entry, si, all) => (
              <CaptionWord
                key={entry.index}
                $state={entry.index === currentWordIndex ? "current" : "past"}
              >
                {entry.word}
                {si < all.length - 1 ? " " : ""}
              </CaptionWord>
            ))}
          </CaptionText>
        </SpeechCaption>

        <ThinkingBar $visible={isGeneratingAudio}>
          Receiving divine guidance
          <ThinkingDots><span /><span /><span /></ThinkingDots>
        </ThinkingBar>

        <ModernInput $disabled={isGeneratingAudio || isAudioPlaying || introState !== "done"}>
          <TextInput
            ref={inputRef}
            type="text"
            placeholder={
              introState !== "done" ? "The divine presence is arriving…"
              : isGeneratingAudio ? "Preparing divine vision…"
              : isListening ? "Listening…"
              : isAudioPlaying ? "Speaking…"
              : "Share your heart…"
            }
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isGeneratingAudio || isAudioPlaying || introState !== "done"}
          />

          {inputText.trim() ? (
            <SubmitButton
              onClick={handleTextSubmit}
              type="button"
              disabled={isGeneratingAudio || isAudioPlaying || introState !== "done"}
            >
              {isGeneratingAudio ? <Spinner $color="#0a1a0a" /> : <Send />}
            </SubmitButton>
          ) : (
            <MicButton
              $isListening={isListening || isGeneratingAudio}
              onClick={handleSpeak}
              type="button"
              disabled={isGeneratingAudio || isAudioPlaying || introState !== "done"}
            >
              {isGeneratingAudio ? <Spinner $color="#8dc63f" />
               : isListening ? <MicOff />
               : <Mic />}
            </MicButton>
          )}
        </ModernInput>
      </InputContainer>
    </STalkPage>
  );
};

export default TalkPage;
