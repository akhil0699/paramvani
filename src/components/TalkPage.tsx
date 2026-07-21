"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { useRouter, useParams } from "next/navigation";
import { Mic, MicOff, Send, ArrowLeft } from "lucide-react";
import { getLord, type LordConfig } from "@/lib/lords";
import {
  connectLipsyncAudio,
  getLipsyncManager,
  lerpMouthOpen,
  resolveAudioPlayableUrl,
  visemeToMouthOpen,
} from "@/lib/lipsync";
import { useAuth } from "@/context/AuthContext";
import SubscriptionModal from "./SubscriptionModal";

type SessionState = "idle" | "connecting" | "speaking" | "listening";

const VideoStack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

/** Single body video — plays continuously in a loop */
const Video = styled.video.withConfig({
  shouldForwardProp: (prop) => !["$objectPosition"].includes(prop),
})<{ $objectPosition: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  max-height: 100dvh;
  object-fit: contain;
  background-color: var(--page-bg, #0a1a0a);
  border: none;
  outline: none;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: ${(props) => props.$objectPosition};
  }
`;



const micPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 40px rgba(141, 198, 63, 0.8), 0 0 60px rgba(141, 198, 63, 0.4);
  }
`;

const HiddenAudio = styled.audio`
  display: none;
`;

const buttonGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(141, 198, 63, 0.6), 0 0 60px rgba(141, 198, 63, 0.3);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const toastIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const dotPulse = keyframes`
  0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
`;

const Spinner = styled.div<{ $color?: string }>`
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => props.$color || "white"};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const STalkPage = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  min-height: 100vh;
  min-height: 100dvh;
  max-width: 100%;
  max-height: 100%;
  background: radial-gradient(ellipse at center, #0a1a0a 0%, #000000 70%);
  --page-bg: #0a1a0a;
  --mobile-input-offset: 7.5rem;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    min-height: 100vh;
    min-height: 100dvh;
    --mobile-input-offset: 7rem;
  }

  @media screen and (max-width: 600px) {
    --mobile-input-offset: 6.5rem;
  }
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  padding-top: max(1.2rem, env(safe-area-inset-top));
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    transparent 100%
  );
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(141, 198, 63, 0.25);
  border-radius: 999px;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.85);
  font-family: "Gothic A1", sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(141, 198, 63, 0.12);
    border-color: rgba(141, 198, 63, 0.5);
    color: #fff;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const BrandLabel = styled.span`
  font-family: "DM Serif Display", serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.05em;
`;

const StatusPill = styled.div<{ $state: SessionState }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;

  ${(props) =>
    props.$state === "idle" &&
    css`
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.45);
    `}

  ${(props) =>
    props.$state === "connecting" &&
    css`
      background: rgba(141, 198, 63, 0.1);
      border: 1px solid rgba(141, 198, 63, 0.35);
      color: #a0d448;
    `}

  ${(props) =>
    props.$state === "speaking" &&
    css`
      background: rgba(141, 198, 63, 0.15);
      border: 1px solid rgba(141, 198, 63, 0.5);
      color: #8dc63f;
      box-shadow: 0 0 20px rgba(141, 198, 63, 0.2);
    `}

  ${(props) =>
    props.$state === "listening" &&
    css`
      background: rgba(255, 100, 100, 0.1);
      border: 1px solid rgba(255, 100, 100, 0.35);
      color: #ff8a8a;
    `}
`;

const StatusDot = styled.span<{ $state: SessionState }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: ${(props) =>
      props.$state === "connecting" ||
      props.$state === "speaking" ||
      props.$state === "listening"
        ? dotPulse
        : "none"}
    1.4s ease-in-out infinite;
`;

const Toast = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: 9rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  padding: 0.75rem 1.4rem;
  background: rgba(20, 20, 20, 0.92);
  border: 1px solid rgba(255, 100, 100, 0.4);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Gothic A1", sans-serif;
  font-size: 0.9rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
  animation: ${(props) => (props.$visible ? toastIn : "none")} 0.35s ease
    forwards;
  max-width: 90vw;
  text-align: center;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$show",
})<{ $show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--page-bg, #0a1a0a);
  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition: opacity 0.9s ease-out, visibility 0.9s ease-out;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--page-bg, #0a1a0a);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.15) 10%,
        transparent 28%,
        transparent 72%,
        rgba(0, 0, 0, 0.15) 90%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.4) 18%,
        transparent 42%
      ),
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.25) 12%,
        transparent 22%
      ),
      radial-gradient(
        ellipse at bottom left,
        rgba(0, 0, 0, 0.8) 0%,
        transparent 70%
      ),
      radial-gradient(
        ellipse at bottom right,
        rgba(0, 0, 0, 0.8) 0%,
        transparent 70%
      );
    pointer-events: none;
    z-index: 2;

    @media screen and (max-width: 800px) {
      background: linear-gradient(
          to bottom,
          var(--page-bg, #0a1a0a) 0%,
          rgba(10, 26, 10, 0.5) 6%,
          transparent 16%
        ),
        linear-gradient(to top, rgba(0, 0, 0, 0.35) 0%, transparent 12%),
        linear-gradient(to right, var(--page-bg, #0a1a0a) 0%, transparent 4%),
        linear-gradient(to left, var(--page-bg, #0a1a0a) 0%, transparent 4%);
    }
  }

  @media screen and (max-width: 800px) {
    height: calc(100dvh - var(--mobile-input-offset, 7rem));
    align-items: flex-end;
    justify-content: center;
  }
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: min(480px, 92vw);

  @media screen and (max-width: 800px) {
    bottom: 1.25rem;
    width: min(400px, 94vw);
  }

  @media screen and (max-width: 600px) {
    bottom: 1rem;
    width: min(400px, 94vw);
  }
`;

const ThinkingBar = styled.div<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: translateY(${(props) => (props.$visible ? "0" : "8px")});
  transition: all 0.35s ease;
  pointer-events: none;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;
  color: rgba(141, 198, 63, 0.8);
  letter-spacing: 0.03em;
`;

const ThinkingDots = styled.span`
  display: inline-flex;
  gap: 3px;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #8dc63f;
    animation: ${dotPulse} 1.4s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const ModernInput = styled.div.withConfig({
  shouldForwardProp: (prop) => !["$disabled"].includes(prop),
})<{ $disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(10, 15, 10, 0.88) !important;
  border: 1px solid rgba(141, 198, 63, 0.25);
  border-radius: 14px;
  padding: 0.35rem 0.9rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 14px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(141, 198, 63, 0.3),
      transparent 50%,
      rgba(141, 198, 63, 0.1)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(141, 198, 63, 0.4);
    box-shadow: 0 6px 28px rgba(141, 198, 63, 0.08);
  }

  &:focus-within {
    border-color: rgba(141, 198, 63, 0.55);
    box-shadow: 0 0 24px rgba(141, 198, 63, 0.12);

    &::before {
      opacity: 1;
    }
  }
`;

const TextInput = styled.input`
  && {
    display: block;
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    outline: none;
    color: rgba(255, 255, 255, 0.92) !important;
    font-size: 1rem !important;
    font-family: "Gothic A1", sans-serif;
    flex: 1;
    padding: 0.6rem 0.5rem !important;
    caret-color: #8dc63f;
    height: 3.2rem !important;
    line-height: 1.4 !important;
    border-radius: 0;
    box-shadow: none !important;
    max-width: none;
    width: 100%;
  }

  &&::placeholder {
    color: rgba(255, 255, 255, 0.35) !important;
  }

  &&:focus {
    color: rgba(255, 255, 255, 0.92) !important;
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media screen and (max-width: 600px) {
    && {
      font-size: 0.9rem !important;
      height: 3rem !important;
    }
  }
`;

const MicButton = styled.button<{ $isListening: boolean; disabled?: boolean }>`
  background: ${(props) =>
    props.$isListening
      ? "linear-gradient(135deg, #8dc63f, #a0d448)"
      : "rgba(141, 198, 63, 0.2)"};
  border: 2px solid
    ${(props) =>
      props.$isListening
        ? "rgba(141, 198, 63, 0.8)"
        : "rgba(141, 198, 63, 0.3)"};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${(props) => (props.$isListening ? "#000" : "#8dc63f")};
  animation: ${(props) => (props.$isListening ? micPulse : "none")} 2s infinite;
  flex-shrink: 0;
  margin-left: 5px;
  position: relative;
  z-index: 10;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${(props) =>
      props.disabled
        ? props.$isListening
          ? "linear-gradient(135deg, #8dc63f, #a0d448)"
          : "rgba(141, 198, 63, 0.2)"
        : props.$isListening
        ? "linear-gradient(135deg, #8dc63f, #a0d448)"
        : "rgba(141, 198, 63, 0.3)"};
    border-color: ${(props) =>
      props.disabled
        ? props.$isListening
          ? "rgba(141, 198, 63, 0.8)"
          : "rgba(141, 198, 63, 0.3)"
        : "rgba(141, 198, 63, 0.8)"};
    transform: ${(props) => (props.disabled ? "none" : "scale(1.05)")};
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "scale(0.95)")};
  }

  svg {
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 600px) {
    width: 28px;
    height: 28px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const SubmitButton = styled.button<{ disabled?: boolean }>`
  background: linear-gradient(135deg, #8dc63f, #6fa82e);
  border: 1px solid rgba(141, 198, 63, 0.6);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #0a1a0a;
  flex-shrink: 0;
  margin-left: 4px;
  position: relative;
  z-index: 10;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${(props) =>
      props.disabled
        ? "linear-gradient(135deg, #8dc63f, #6fa82e)"
        : "linear-gradient(135deg, #a0d448, #8dc63f)"};
    transform: ${(props) => (props.disabled ? "none" : "scale(1.06)")};
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0 0 16px rgba(141, 198, 63, 0.4)"};
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "scale(0.95)")};
  }

  svg {
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 600px) {
    width: 32px;
    height: 32px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const CaptionContainer = styled.div<{ $show: boolean }>`
  position: fixed;
  z-index: 4;
  left: 0;
  right: 0;
  bottom: calc(var(--mobile-input-offset, 7.5rem) + 1.25rem);
  padding: 0 1.25rem;
  display: flex;
  justify-content: center;
  pointer-events: none;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transform: ${(props) => (props.$show ? "translateY(0)" : "translateY(12px)")};
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media screen and (min-width: 801px) {
    bottom: 7.5rem;
    padding: 0 2rem;
  }
`;

const CaptionInner = styled.div`
  max-width: 42rem;
  width: 100%;
  text-align: center;
`;

const CaptionOrnament = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
  opacity: 0.7;

  &::before,
  &::after {
    content: "";
    flex: 1;
    max-width: 3.5rem;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(141, 198, 63, 0.55),
      transparent
    );
  }

  span {
    font-family: "DM Serif Display", serif;
    font-size: 0.95rem;
    color: rgba(141, 198, 63, 0.85);
    letter-spacing: 0.08em;
  }
`;

const CaptionText = styled.p`
  margin: 0;
  font-family: "DM Serif Display", serif;
  font-size: 1.2rem;
  line-height: 1.85;
  font-weight: 400;
  font-style: italic;
  color: rgba(255, 255, 255, 0.96);
  text-shadow:
    0 0 24px rgba(0, 0, 0, 0.95),
    0 2px 8px rgba(0, 0, 0, 0.9),
    0 4px 32px rgba(0, 0, 0, 0.75);
  word-wrap: break-word;
  hyphens: auto;

  @media screen and (max-width: 600px) {
    font-size: 1.05rem;
    line-height: 1.75;
  }

  @media screen and (min-width: 801px) {
    font-size: 1.35rem;
    line-height: 1.9;
  }
`;

const CaptionWord = styled.span<{ $state: "past" | "current" | "upcoming" }>`
  transition: color 0.2s ease, opacity 0.2s ease, text-shadow 0.2s ease;

  ${(props) =>
    props.$state === "current" &&
    css`
      color: #d4f0a0;
      font-style: normal;
      text-shadow:
        0 0 16px rgba(141, 198, 63, 0.45),
        0 2px 8px rgba(0, 0, 0, 0.9);
    `}

  ${(props) =>
    props.$state === "past" &&
    css`
      opacity: 0.55;
    `}

  ${(props) =>
    props.$state === "upcoming" &&
    css`
      opacity: 0.85;
    `}
`;

const TalkPage: React.FC = () => {
  const { lordId } = useParams<{ lordId: string }>();
  const lord = getLord(lordId);

  if (!lord) {
    return null;
  }

  return <TalkPageContent lord={lord} />;
};

const TalkPageContent: React.FC<{ lord: LordConfig }> = ({ lord }) => {
  const router = useRouter();
  const { user, profile } = useAuth();
  const [showVideo, setShowVideo] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState("/audio.mp3");
  const [captionText, setCaptionText] = useState("");
  const [showCaption, setShowCaption] = useState(false);
  const [wordDurations, setWordDurations] = useState<any[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioBlobUrlRef = useRef<string | null>(null);
  const mouthOpenRef = useRef(0);
  const recognitionRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const captionIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioStartTimeRef = useRef<number | null>(null);
  const wordDurationsRef = useRef<any[]>([]);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);
  const videoReadyRef = useRef(false);
  const revealStartedRef = useRef(false);

  const clip = lord.videoClip;

  const resetVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = clip.idleTime;
      video.playbackRate = 1;
      video.loop = false;
    }
  };

  const playVideoIntro = (video: HTMLVideoElement) =>
    new Promise<void>((resolve) => {
      if (clip.introEnd <= clip.idleTime) {
        // No intro — just position at start and resolve immediately
        video.currentTime = clip.idleTime;
        resolve();
        return;
      }

      video.currentTime = clip.idleTime;
      video.loop = false;

      const onTimeUpdate = () => {
        if (video.currentTime >= clip.introEnd) {
          video.removeEventListener('timeupdate', onTimeUpdate);
          resolve();
        }
      };

      video.addEventListener('timeupdate', onTimeUpdate);
      void video.play().catch(() => {
        video.removeEventListener('timeupdate', onTimeUpdate);
        resolve();
      });
    });

  const tryRevealVideo = () => {
    if (revealStartedRef.current || !videoReadyRef.current) {
      return;
    }
    revealStartedRef.current = true;
    setShowVideo(true);
  };

  const prepareVideoFrame = () => {
    const video = videoRef.current;
    if (!video || videoReadyRef.current) return;
    videoReadyRef.current = true;
    
    // Position body video at idle frame
    video.currentTime = clip.idleTime;
    tryRevealVideo();
  };

  const handleVideoReady = () => {
    prepareVideoFrame();
  };

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

  const showToastMessage = (message: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToastMessage(message);
    setShowToast(true);
    toastTimerRef.current = setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  useEffect(() => {
    // Prevent scrolling and fix mobile viewport issues
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";

    // Force viewport meta tag for mobile
    let viewport = document.querySelector("meta[name=viewport]");
    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.setAttribute("name", "viewport");
      document.head.appendChild(viewport);
    }
    viewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
    );

    return () => {
      // Clean up caption sync interval
      if (captionIntervalRef.current) {
        clearInterval(captionIntervalRef.current);
      }
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
      // Reset body styles on cleanup
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.documentElement.style.margin = "";
      document.documentElement.style.padding = "";
    };
  }, []);

  // Video reveal when lord changes
  useEffect(() => {
    videoReadyRef.current = false;
    revealStartedRef.current = false;
    setShowVideo(false);
    resetVideo();
    videoRef.current?.load();

    const fallbackTimer = setTimeout(() => {
      if (!videoReadyRef.current) {
        videoReadyRef.current = true;
        tryRevealVideo();
      }
    }, 4000);

    return () => {
      clearTimeout(fallbackTimer);
      if (audioBlobUrlRef.current) {
        URL.revokeObjectURL(audioBlobUrlRef.current);
        audioBlobUrlRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lord.id]);


  // Video control: play when speaking, pause at idle when silent
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    if (isAudioPlaying) {
      video.loop = true;
      if (video.paused) {
        void video.play().catch(() => { /* autoplay policy */ });
      }
    } else {
      video.loop = false;
      video.pause();
      video.currentTime = clip.idleTime;
    }
  }, [isAudioPlaying, showVideo, clip.idleTime]);

  useEffect(() => {
    if (!particlesRef.current) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particlesRef.current.appendChild(canvas);

    // Enhanced Particle class for more dramatic effect
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 600 + 400;

        // Mix of white and green particles
        const colors = ["#ffffff", "#8dc63f", "#a0d448", "#ffffff", "#ffffff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Add floating motion
        this.vx += (Math.random() - 0.5) * 0.008;
        this.vy += (Math.random() - 0.5) * 0.008;

        // Constrain velocity
        this.vx = Math.max(-1, Math.min(1, this.vx));
        this.vy = Math.max(-1, Math.min(1, this.vy));

        // Pulsing opacity
        this.opacity = Math.max(
          0.1,
          Math.min(0.9, this.opacity + (Math.random() - 0.5) * 0.005)
        );

        // Reset if particle is dead or out of bounds
        if (
          this.life > this.maxLife ||
          this.x < -50 ||
          this.x > canvas.width + 50 ||
          this.y < -50 ||
          this.y > canvas.height + 50
        ) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.opacity = Math.random() * 0.8 + 0.2;
          this.life = 0;
          this.maxLife = Math.random() * 600 + 400;
        }
      }

      draw() {
        if (!ctx) return;

        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Create glow effect
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 3
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + "66");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw main particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create optimized number of particles
    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 60 : 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [lord.id]);

  // Handle audio ending to stop video smoothly
  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const handleAudioEnd = () => {
      resetVideo();
      setIsAudioPlaying(false);
      if (captionIntervalRef.current) {
        clearInterval(captionIntervalRef.current);
        captionIntervalRef.current = null;
      }
      setShowCaption(false);
      setCurrentWordIndex(0);
      setCaptionText("");
    };

    audioElement.addEventListener("ended", handleAudioEnd);

    return () => {
      audioElement.removeEventListener("ended", handleAudioEnd);
    };
  }, [showVideo, currentAudioUrl]);



  const loadAudioSource = async (audio: HTMLAudioElement, url: string) => {
    if (audioBlobUrlRef.current) {
      URL.revokeObjectURL(audioBlobUrlRef.current);
      audioBlobUrlRef.current = null;
    }

    const playableUrl = await resolveAudioPlayableUrl(url);
    if (playableUrl.startsWith("blob:")) {
      audioBlobUrlRef.current = playableUrl;
    }

    await new Promise<void>((resolve, reject) => {
      const onReady = () => {
        cleanup();
        resolve();
      };
      const onError = () => {
        cleanup();
        reject(new Error("Failed to load audio"));
      };
      const cleanup = () => {
        audio.removeEventListener("canplaythrough", onReady);
        audio.removeEventListener("error", onError);
      };

      audio.pause();
      audio.currentTime = 0;
      audio.src = playableUrl;
      audio.load();

      if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        cleanup();
        resolve();
        return;
      }

      audio.addEventListener("canplaythrough", onReady);
      audio.addEventListener("error", onError);
    });
  };

  const playLordResponse = async (audioUrl: string, captionContent?: string) => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    setCurrentAudioUrl(audioUrl);

    if (!revealStartedRef.current) {
      revealStartedRef.current = true;
      setShowVideo(true);
    }

    try {
      await Promise.all([
        playVideoIntro(video),
        loadAudioSource(audio, audioUrl),
      ]);

      // Connect lipsync analyser to audio BEFORE play()
      connectLipsyncAudio(audio);

      // Generate progressive word durations if missing
      if (captionContent && wordDurationsRef.current.length === 0 && audio.duration) {
        const words = captionContent.split(/\s+/).filter(w => w.length > 0);
        if (words.length > 0) {
          const timePerWord = (audio.duration * 1000) / words.length;
          const fakeDurations = words.map((word, i) => ({
            word,
            startMs: i * timePerWord,
            endMs: (i + 1) * timePerWord
          }));
          setWordDurations(fakeDurations);
          wordDurationsRef.current = fakeDurations;
        }
      }

      // Video keeps playing after intro (loop = true handled by isAudioPlaying effect)
      await audio.play();

      setIsAudioPlaying(true);
      setTimeout(() => startCaptionSync(), 200);
    } catch (error) {
      console.error('Error starting audio:', error);
      showToastMessage('Could not play audio. Please try again.');
    }
  };

  const startCaptionSync = () => {
    const currentWordDurations = wordDurationsRef.current;

    if (captionIntervalRef.current) {
      clearInterval(captionIntervalRef.current);
    }

    setCurrentWordIndex(0);
    setShowCaption(true);

    captionIntervalRef.current = setInterval(() => {
      const intervalWordDurations = wordDurationsRef.current;
      if (intervalWordDurations.length > 0 && audioRef.current) {
        const currentTime = audioRef.current.currentTime * 1000; // Convert to milliseconds
        const isPaused = audioRef.current.paused;

        if (!isPaused && currentTime > 0) {
          // Find the current word based on audio time
          let newWordIndex = 0;

          // Find the word that should be playing right now
          for (let i = 0; i < intervalWordDurations.length; i++) {
            if (currentTime >= intervalWordDurations[i].startMs) {
              if (currentTime <= intervalWordDurations[i].endMs) {
                // We're exactly in this word's time range
                newWordIndex = i;
                break;
              } else {
                // We've passed this word, continue to find the right one
                newWordIndex = i;
              }
            } else {
              // We haven't reached this word yet, use previous word
              break;
            }
          }

          // Ensure we don't go beyond array bounds
          if (newWordIndex >= intervalWordDurations.length) {
            newWordIndex = intervalWordDurations.length - 1;
          }

          if (newWordIndex !== currentWordIndex) {
            setCurrentWordIndex(newWordIndex);
          }

          // Check if we've reached the end of all words
          const lastWordEndTime =
            intervalWordDurations[intervalWordDurations.length - 1]?.endMs || 0;
          if (currentTime > lastWordEndTime) {
            // Audio has finished playing all words, hide caption
            setShowCaption(false);
            setCurrentWordIndex(0);
            setCaptionText("");
          }
        } else if (currentWordIndex !== 0) {
          // Audio not playing or at start, show first word
          setCurrentWordIndex(0);
        }
      }
    }, 100); // Check every 100ms
  };

  const stopVideoAndAudio = () => {
    if (audioRef.current) {
      resetVideo();
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsAudioPlaying(false);

      // Stop caption sync
      if (captionIntervalRef.current) {
        clearInterval(captionIntervalRef.current);
        captionIntervalRef.current = null;
      }

      // Reset audio start time
      audioStartTimeRef.current = null;

      // Hide caption
      setShowCaption(false);
      setCaptionText("");
      setCurrentWordIndex(0);
    }
  };

  const sessionIdRef = useRef(
    `${lord.id}-${
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : Date.now().toString(36) + Math.random().toString(36).substring(2)
    }`
  );

  const callAudioAssistant = async (text: string, audioBlob?: Blob) => {
    try {
      // FRONTEND CREDIT CHECK: Prevent network call if out of credits & expired
      const isUnlimited = 
        profile?.subscriptionType !== "free" && 
        profile?.subscriptionType !== undefined &&
        profile?.subscriptionExpiry !== undefined &&
        profile.subscriptionExpiry > Date.now();

      if (!isUnlimited && profile?.freeCredits === 0) {
        setShowSubscriptionModal(true);
        return; // Stop early
      }

      setIsGeneratingAudio(true);
      console.log("Calling audio assistant API...", { lord: lord.id });

      const formData = new FormData();
      formData.append("lordId", lord.id);
      formData.append("sessionId", sessionIdRef.current);

      if (audioBlob) {
        formData.append("audio", audioBlob, "voice-input.wav");
        console.log("Sending audio blob to API");
      } else if (text.trim()) {
        formData.append("text", text.trim());
        console.log("Sending text to API:", text);
      } else {
        throw new Error("No input provided");
      }

      const token = user ? await user.getIdToken() : "";

      const response = await fetch("/api/talk", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "x-lord-id": lord.id,
          "x-session-id": sessionIdRef.current,
        },
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 402 || response.status === 403) {
          setShowSubscriptionModal(true);
          throw new Error("Payment required or insufficient credits");
        }
        throw new Error(`API call failed: ${response.status}`);
      }

      const result = await response.json();
      console.log("Audio assistant response:", result);

      if (result.audioFile) {
        console.log("Audio URL received:", result.audioFile);
        setCurrentAudioUrl(result.audioFile);

        // Set word durations for real-time captions
        if (result.wordDurations && result.wordDurations.length > 0) {
          setWordDurations(result.wordDurations);
          wordDurationsRef.current = result.wordDurations; // Keep ref in sync
          setCurrentWordIndex(0);
          setShowCaption(true);
          console.log(
            "Word durations set:",
            result.wordDurations.length,
            "words"
          );
          console.log("First few words:", result.wordDurations.slice(0, 5));
        }

        // Set caption text from API response (AI's response, not user input)
        if (
          result.transcript ||
          result.text ||
          result.caption ||
          result.response
        ) {
          const captionContent =
            result.transcript ||
            result.text ||
            result.caption ||
            result.response ||
            "";
          setCaptionText(captionContent);
          setShowCaption(true);
          console.log("AI Response Caption set:", captionContent);
        }

        // Test if audio URL is accessible
        try {
          const audioTest = new Audio();
          audioTest.oncanplaythrough = () => {
            console.log("Audio can play through - URL is accessible");
          };
          audioTest.onerror = (e) => {
            console.error("Audio loading error:", e);
            console.error("Failed to load audio from:", result.audioFile);
          };
          audioTest.src = result.audioFile;
          audioTest.load();
        } catch (audioError) {
          console.error("Error testing audio URL:", audioError);
        }

        await playLordResponse(result.audioFile, result.transcript || result.text || result.caption || result.response || "");
        return result;
      } else {
        throw new Error("No audio file in response");
      }
    } catch (error) {
      console.error("Error calling audio assistant:", error);
      // Fallback to default audio
      setCurrentAudioUrl("/audio.mp3");
      showToastMessage("Could not connect. Please try again.");
      return null;
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  const handleTextSubmit = async () => {
    if (inputText.trim()) {
      console.log("Text input:", inputText);
      const textToSend = inputText.trim();
      setInputText("");

      // Stop any current playback first
      stopVideoAndAudio();

      // Don't show user input as caption, wait for AI response

      // Call API to get AI audio and caption
      await callAudioAssistant(textToSend);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTextSubmit();
    }
  };

  const handleSpeak = () => {
    console.log("Mic button clicked, current isListening:", isListening);

    if (isListening) {
      // Stop listening
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      console.log("Stopping voice recognition");
      return;
    }

    // Start voice recognition
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      console.log("Starting voice recognition...");
      setIsListening(true); // Set immediately for UI feedback

      const SpeechRecognition =
        (window as any).webkitSpeechRecognition ||
        (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "hi-IN"; // Hindi language

      let speechTimeout: NodeJS.Timeout;
      let hasSpoken = false;
      let currentTranscript = ""; // Store the current transcript

      recognition.onstart = () => {
        console.log("Voice recognition started successfully");
        setIsListening(true);
        hasSpoken = false;
        currentTranscript = ""; // Reset transcript
      };

      recognition.onresult = async (event: any) => {
        let finalTranscript = "";
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        // Update current transcript
        currentTranscript = finalTranscript || interimTranscript;

        if (currentTranscript.trim()) {
          hasSpoken = true;
          console.log("Voice input:", currentTranscript);

          // Clear existing timeout
          if (speechTimeout) {
            clearTimeout(speechTimeout);
          }

          // Set timeout to detect when user stops speaking
          speechTimeout = setTimeout(async () => {
            if (hasSpoken && currentTranscript.trim()) {
              console.log("User stopped speaking, processing audio...");
              recognition.stop();
              setIsListening(false);

              // Stop any current playback first
              stopVideoAndAudio();

              // Don't show user transcript as caption, wait for AI response

              // For voice input, we'll send the transcript as text to the API
              await callAudioAssistant(currentTranscript);
            }
          }, 2000); // 2 seconds of silence after speech
        }
      };

      recognition.onspeechend = async () => {
        console.log("Speech ended");
        if (hasSpoken && currentTranscript.trim()) {
          setTimeout(async () => {
            if (hasSpoken && isListening && currentTranscript.trim()) {
              console.log("No more speech detected, processing audio...");
              recognition.stop();
              setIsListening(false);

              // Stop any current playback first
              stopVideoAndAudio();

              // Don't show user transcript as caption, wait for AI response

              // For voice input, we'll send the transcript as text to the API
              await callAudioAssistant(currentTranscript);
            }
          }, 1000);
        }
      };

      recognition.onerror = (event: any) => {
        console.error("Voice recognition error:", event.error);
        setIsListening(false);

        // For mobile browsers that might not support speech recognition
        if (
          event.error === "not-allowed" ||
          event.error === "service-not-allowed"
        ) {
          showToastMessage("Microphone access is required for voice input.");
        }
      };

      recognition.onend = () => {
        console.log("Voice recognition ended");
        if (isListening) {
          setIsListening(false);
          if (hasSpoken) {
            console.log("Recognition ended after speech, processing audio...");
            // Note: finalTranscript and interimTranscript are not available here
            // The processing should happen in onresult or onspeechend
          }
        }
      };

      try {
        recognition.start();
      } catch (error) {
        console.error("Error starting recognition:", error);
        setIsListening(false);
        showToastMessage("Voice input is not available right now.");
      }
    } else {
      showToastMessage("Voice input is not supported in this browser.");
    }
  };

  return (
    <STalkPage>
      <ParticlesContainer ref={particlesRef} />

      <TopBar>
        <BackButton type="button" onClick={() => router.push("/choose")}>
          <ArrowLeft />
          Back
        </BackButton>
        <BrandLabel>{lord.brandLabel}</BrandLabel>
        <StatusPill $state={sessionState}>
          <StatusDot $state={sessionState} />
          {statusLabel[sessionState]}
        </StatusPill>
      </TopBar>

      <VideoContainer $show={showVideo}>
        <VideoStack>
          <Video
            ref={videoRef}
            src={lord.video}
            poster={lord.image}
            muted
            playsInline
            preload="auto"
            onCanPlay={handleVideoReady}
            $objectPosition={lord.mobileObjectPosition || clip.objectPosition}
          />
        </VideoStack>
      </VideoContainer>

      <HiddenAudio ref={audioRef} src={currentAudioUrl} preload="auto" />

      <CaptionContainer $show={showCaption}>
        <CaptionInner>
          <CaptionOrnament>
            <span>वाणी</span>
          </CaptionOrnament>
          <CaptionText>
            {wordDurations.length > 0
              ? wordDurations
                  .slice(
                    Math.max(0, currentWordIndex - 2),
                    Math.min(currentWordIndex + 8, wordDurations.length)
                  )
                  .map((wordData, sliceIndex) => {
                    const actualIndex =
                      Math.max(0, currentWordIndex - 2) + sliceIndex;
                    const state =
                      actualIndex === currentWordIndex
                        ? "current"
                        : actualIndex < currentWordIndex
                        ? "past"
                        : "upcoming";

                    return (
                      <CaptionWord key={actualIndex} $state={state}>
                        {wordData.word}
                        {sliceIndex <
                        Math.min(currentWordIndex + 8, wordDurations.length) -
                          Math.max(0, currentWordIndex - 2) -
                          1
                          ? " "
                          : ""}
                      </CaptionWord>
                    );
                  })
              : captionText || null}
          </CaptionText>
        </CaptionInner>
      </CaptionContainer>

      {showSubscriptionModal && (
        <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
      )}

      <Toast $visible={showToast}>{toastMessage}</Toast>

      <InputContainer>
        <ThinkingBar $visible={isGeneratingAudio}>
          Receiving divine guidance
          <ThinkingDots>
            <span />
            <span />
            <span />
          </ThinkingDots>
        </ThinkingBar>
        <ModernInput $disabled={isGeneratingAudio}>
          <TextInput
            ref={inputRef}
            type="text"
            placeholder={
              isGeneratingAudio
                ? "Receiving guidance..."
                : isListening
                ? "Listening..."
                : "Share your heart..."
            }
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isGeneratingAudio}
          />
          {inputText.trim() ? (
            <SubmitButton
              onClick={handleTextSubmit}
              type="button"
              disabled={isGeneratingAudio}
            >
              {isGeneratingAudio ? <Spinner $color="#0a1a0a" /> : <Send />}
            </SubmitButton>
          ) : (
            <MicButton
              $isListening={isListening || isGeneratingAudio}
              onClick={handleSpeak}
              type="button"
              disabled={isGeneratingAudio}
            >
              {isGeneratingAudio ? (
                <Spinner $color="#8dc63f" />
              ) : isListening ? (
                <MicOff />
              ) : (
                <Mic />
              )}
            </MicButton>
          )}
        </ModernInput>
      </InputContainer>
    </STalkPage>
  );
};

export default TalkPage;
