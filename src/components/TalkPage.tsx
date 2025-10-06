import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from './ui/neon-button';
import { Mic, MicOff } from 'lucide-react';

const glowAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
    filter: blur(5px);
  }
  30% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
    filter: blur(2px);
  }
  70% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5);
    filter: blur(3px);
  }
`;

const particleFloat = keyframes`
  0% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-30px) translateX(15px) rotate(90deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-15px) translateX(-10px) rotate(180deg);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-40px) translateX(20px) rotate(270deg);
    opacity: 0.9;
  }
  100% {
    transform: translateY(0px) translateX(0px) rotate(360deg);
    opacity: 0.3;
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

const STalkPage = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile */
  min-height: 100vh;
  min-height: 100dvh;
  max-width: 100%;
  max-height: 100%;
  background-color: #000000;
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
  }
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

const GlowEffect = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'show',
})<{ show: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.6) 20%,
    rgba(141, 198, 63, 0.4) 40%,
    rgba(141, 198, 63, 0.2) 60%,
    transparent 80%
  );
  border-radius: 50%;
  z-index: 4;
  animation: ${props => props.show ? glowAnimation : 'none'} 3s ease-out forwards;
  pointer-events: none;
  will-change: transform, opacity, filter;
`;


const VideoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'show',
})<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: ${props => props.show ? 1 : 0};
  transition: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 8%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.1) 92%, rgba(0, 0, 0, 0.3) 100%),
      linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0.2) 30%, transparent 40%),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 10%, transparent 20%),
      radial-gradient(ellipse at bottom left, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 80%),
      radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 80%),
      radial-gradient(ellipse at center, transparent 20%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.05) 60%, transparent 80%);
    pointer-events: none;
    z-index: 1;

    @media screen and (max-width: 800px) {
      background: 
        linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0.2) 30%, transparent 40%),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.6) 30%, transparent 40%),
        radial-gradient(ellipse at center, transparent 20%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.05) 60%, transparent 80%);
    }
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  object-fit: contain;
  border: none;
  outline: none;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

const HiddenAudio = styled.audio`
  display: none;
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    bottom: 3rem;
  }

  @media screen and (max-width: 600px) {
    bottom: 2rem;
  }
`;

const ModernInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(141, 198, 63, 0.3);
  border-radius: 9px;
  padding: 0.4rem 1rem;
  min-width: 400px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: rgba(141, 198, 63, 0.5);
    box-shadow: 0 6px 25px rgba(141, 198, 63, 0.15);
  }

  &:focus-within {
    border-color: rgba(141, 198, 63, 0.8);
    box-shadow: 0 0 20px rgba(141, 198, 63, 0.2);
  }

  @media screen and (max-width: 600px) {
    min-width: 300px;
    padding: 0.3rem 0.8rem;
  }

  @media screen and (max-width: 400px) {
    min-width: 280px;
    padding: 0.3rem 0.7rem;
  }
`;

const TextInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #333;
  font-size: 1.2rem !important;
  font-family: "Gothic A1", sans-serif;
  flex: 1;
  padding: 0.5rem 24px 0.5rem !important;
  caret-color: #8dc63f;
  height: 3.8rem !important;

  &::placeholder {
    color: rgba(51, 51, 51, 0.6);
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
    height: 4rem !important;
  }

  @media screen and (max-width: 400px) {
    height: 3.8rem !important;
  }
`;

const MicButton = styled.button<{ isListening: boolean; disabled?: boolean }>`
  background: ${props => props.isListening 
    ? 'linear-gradient(135deg, #8dc63f, #a0d448)' 
    : 'rgba(141, 198, 63, 0.2)'};
  border: 2px solid ${props => props.isListening 
    ? 'rgba(141, 198, 63, 0.8)' 
    : 'rgba(141, 198, 63, 0.3)'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.isListening ? '#000' : '#8dc63f'};
  animation: ${props => props.isListening ? micPulse : 'none'} 2s infinite;
  flex-shrink: 0;
  margin-left: 5px;
  position: relative;
  z-index: 10;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${props => props.disabled ? 
      (props.isListening ? 'linear-gradient(135deg, #8dc63f, #a0d448)' : 'rgba(141, 198, 63, 0.2)') :
      (props.isListening ? 'linear-gradient(135deg, #8dc63f, #a0d448)' : 'rgba(141, 198, 63, 0.3)')};
    border-color: ${props => props.disabled ? 
      (props.isListening ? 'rgba(141, 198, 63, 0.8)' : 'rgba(141, 198, 63, 0.3)') : 
      'rgba(141, 198, 63, 0.8)'};
    transform: ${props => props.disabled ? 'none' : 'scale(1.05)'};
  }

  &:active {
    transform: ${props => props.disabled ? 'none' : 'scale(0.95)'};
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

const LoadingText = styled.div`
  position: absolute;
  bottom: 12rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-family: "Gothic A1", sans-serif;
  font-size: 1.4rem;
  text-align: center;
  z-index: 5;

  @media screen and (max-width: 600px) {
    bottom: 10rem;
    font-size: 1.2rem;
  }
`;

const CaptionContainer = styled.div<{ show: boolean }>`
  position: absolute;
  z-index: 4;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;

  @media screen and (max-width: 800px) {
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 90%;
    text-align: center;
  }

  @media screen and (min-width: 801px) {
    top: 50%;
    transform: translateY(-50%);
    max-width: 300px;
    text-align: left;
    
    &.left {
      left: 2rem;
    }
    
    &.right {
      right: 2rem;
    }
  }
`;

const CaptionText = styled.div`
  color: white;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  word-wrap: break-word;
  transition: all 0.3s ease;

  @media screen and (max-width: 800px) {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  @media screen and (min-width: 801px) {
    font-size: 1.3rem;
    line-height: 1.6;
    font-weight: 800;
  }
`;

const CurrentWord = styled.span`
  background: rgba(141, 198, 63, 0.3);
  padding: 2px 4px;
  border-radius: 4px;
  animation: wordHighlight 0.3s ease;
`;

const wordHighlight = keyframes`
  0% {
    background: rgba(141, 198, 63, 0.6);
    transform: scale(1.05);
  }
  100% {
    background: rgba(141, 198, 63, 0.3);
    transform: scale(1);
  }
`;

const CaptionLine = styled.div`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TalkPage: React.FC = () => {
  const [showGlow, setShowGlow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState('/audio.mp3');
  const [captionText, setCaptionText] = useState('');
  const [showCaption, setShowCaption] = useState(false);
  const [wordDurations, setWordDurations] = useState<any[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const particlesRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const recognitionRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const captionIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioStartTimeRef = useRef<number | null>(null);
  const wordDurationsRef = useRef<any[]>([]);

  useEffect(() => {
    // Prevent scrolling and fix mobile viewport issues
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    
    // Force viewport meta tag for mobile
    let viewport = document.querySelector('meta[name=viewport]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    
    // Start glow effect immediately on page load
    setShowGlow(true);
    setIsLoading(false);

    // Show video after glow animation completes
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 3200);

    return () => {
      clearTimeout(videoTimer);
      // Clean up caption sync interval
      if (captionIntervalRef.current) {
        clearInterval(captionIntervalRef.current);
      }
      // Reset body styles on cleanup
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
    };
  }, []);

  useEffect(() => {
    if (showVideo && particlesRef.current) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
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
          const colors = ['#ffffff', '#8dc63f', '#a0d448', '#ffffff', '#ffffff'];
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
          this.opacity = Math.max(0.1, Math.min(0.9, this.opacity + (Math.random() - 0.5) * 0.005));

          // Reset if particle is dead or out of bounds
          if (this.life > this.maxLife || this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
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
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(0.5, this.color + '66');
          gradient.addColorStop(1, 'transparent');
          
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
        
        particles.forEach(particle => {
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

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      };
    }
  }, [showVideo]);

  // Handle audio ending to stop video smoothly
  useEffect(() => {
    const audioElement = audioRef.current;
    const videoElement = videoRef.current;
    
    if (audioElement && videoElement) {
      const handleAudioEnd = () => {
        console.log('Audio ended, stopping video');
        videoElement.pause();
        videoElement.currentTime = 0;
        setIsVideoPlaying(false);
        setIsAudioPlaying(false);
        // Stop caption sync when audio ends
        if (captionIntervalRef.current) {
          clearInterval(captionIntervalRef.current);
          captionIntervalRef.current = null;
        }
        
        // Hide caption when audio ends
        setTimeout(() => {
          setShowCaption(false);
          setCaptionText('');
          setCurrentWordIndex(0);
        }, 2000); // Keep caption visible for 2 seconds after audio ends
      };
      
      audioElement.addEventListener('ended', handleAudioEnd);
      
      return () => {
        audioElement.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, [showVideo, currentAudioUrl]);

  // Force reload audio when URL changes
  useEffect(() => {
    if (audioRef.current && currentAudioUrl) {
      console.log('Audio URL changed, reloading audio element');
      // Stop any current playback
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      // Set new source and load
      audioRef.current.src = currentAudioUrl;
      audioRef.current.load(); // Force reload
    }
  }, [currentAudioUrl]);

  // Handle smooth video looping during audio playback
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement && isVideoPlaying) {
      const handleVideoTimeUpdate = () => {
        // If audio is still playing and video is near end, seamlessly loop
        if (isAudioPlaying && audioRef.current && !audioRef.current.ended) {
          const videoDuration = videoElement.duration;
          const currentTime = videoElement.currentTime;
          
          // When video is near end (last 0.1 seconds), restart it
          if (videoDuration - currentTime < 0.1) {
            videoElement.currentTime = 0;
          }
        }
      };
      
      videoElement.addEventListener('timeupdate', handleVideoTimeUpdate);
      
      return () => {
        videoElement.removeEventListener('timeupdate', handleVideoTimeUpdate);
      };
    }
  }, [isVideoPlaying, isAudioPlaying]);

  const startVideoAndAudio = () => {
    console.log('startVideoAndAudio called');
    console.log('Video ref:', videoRef.current);
    console.log('Audio ref:', audioRef.current);
    console.log('Current audio URL:', currentAudioUrl);
    
    if (videoRef.current && audioRef.current) {
      console.log('Starting video and audio...');
      
      // Reset video to start and play
      videoRef.current.currentTime = 0;
      videoRef.current.play()
        .then(() => {
          console.log('Video started successfully');
          setIsVideoPlaying(true);
        })
        .catch(error => {
          console.error('Error starting video:', error);
        });
      
      // Set up audio event listeners for debugging
      audioRef.current.onloadstart = () => {
        console.log('Audio loading started');
      };
      audioRef.current.oncanplay = () => {
        console.log('Audio can play');
      };
      audioRef.current.oncanplaythrough = () => {
        console.log('Audio can play through');
      };
      audioRef.current.onerror = (e) => {
        console.error('Audio error:', e);
        console.error('Audio error details:', {
          error: audioRef.current?.error,
          src: audioRef.current?.src,
          networkState: audioRef.current?.networkState,
          readyState: audioRef.current?.readyState
        });
      };
      audioRef.current.onloadeddata = () => {
        console.log('Audio data loaded');
      };
      
      // Set crossOrigin for CORS
      audioRef.current.crossOrigin = 'anonymous';
      
      // Add event listeners for audio state tracking
      audioRef.current.onplay = () => {
        setIsAudioPlaying(true);
        
        // Start caption sync when audio actually starts playing
        setTimeout(() => {
          startCaptionSync();
        }, 200);
      };
      
      audioRef.current.onpause = () => {
        setIsAudioPlaying(false);
      };
      
      // Wait for audio to be ready before playing
      const playAudio = () => {
        if (audioRef.current && audioRef.current.readyState >= 2) {
          audioRef.current.currentTime = 0;
          audioRef.current.play()
            .then(() => {
              setIsAudioPlaying(true);
              
              // Fallback: If onplay event didn't fire, start caption sync manually
              setTimeout(() => {
                if (wordDurations.length > 0 && !captionIntervalRef.current) {
                  startCaptionSync();
                }
              }, 200);
            })
            .catch(error => {
              console.error('Error starting audio:', error);
            });
        } else {
          // Wait a bit and try again
          setTimeout(playAudio, 100);
        }
      };
      
      // Start trying to play audio
      playAudio();
      
      // Caption sync will be started by the audio onplay event or fallback timer
    } else {
      console.log('Video or audio ref is null');
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
        } else if (currentWordIndex !== 0) {
          // Audio not playing or at start, show first word
          setCurrentWordIndex(0);
        }
      }
    }, 100); // Check every 100ms
  };

  const stopVideoAndAudio = () => {
    if (videoRef.current && audioRef.current) {
      // Stop and reset video
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
      
      // Stop audio
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
      setCaptionText('');
      setCurrentWordIndex(0);
    }
  };

  const callAudioAssistant = async (text: string, audioBlob?: Blob) => {
    try {
      setIsGeneratingAudio(true);
      console.log('Calling audio assistant API...');
      
      const formData = new FormData();
      
      if (audioBlob) {
        // If we have audio from voice input, send audio
        formData.append('audio', audioBlob, 'voice-input.wav');
        console.log('Sending audio blob to API');
      } else if (text.trim()) {
        // If we have text input, send text
        formData.append('text', text.trim());
        console.log('Sending text to API:', text);
      } else {
        throw new Error('No input provided');
      }
      
      const response = await fetch('https://paramvani123.app.n8n.cloud/webhook/audio-assistant', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Audio assistant response:', result);
      
      if (result.audioFile) {
        console.log('Audio URL received:', result.audioFile);
        setCurrentAudioUrl(result.audioFile);
        
        // Set word durations for real-time captions
        if (result.wordDurations && result.wordDurations.length > 0) {
          setWordDurations(result.wordDurations);
          wordDurationsRef.current = result.wordDurations; // Keep ref in sync
          setCurrentWordIndex(0);
          setShowCaption(true);
          console.log('Word durations set:', result.wordDurations.length, 'words');
          console.log('First few words:', result.wordDurations.slice(0, 5));
        }
        
        // Set caption text from API response (AI's response, not user input)
        if (result.transcript || result.text || result.caption || result.response) {
          const captionContent = result.transcript || result.text || result.caption || result.response || '';
          setCaptionText(captionContent);
          setShowCaption(true);
          console.log('AI Response Caption set:', captionContent);
        }
        
        // Test if audio URL is accessible
        try {
          const audioTest = new Audio();
          audioTest.crossOrigin = 'anonymous';
          audioTest.oncanplaythrough = () => {
            console.log('Audio can play through - URL is accessible');
          };
          audioTest.onerror = (e) => {
            console.error('Audio loading error:', e);
            console.error('Failed to load audio from:', result.audioFile);
          };
          audioTest.src = result.audioFile;
          audioTest.load();
        } catch (audioError) {
          console.error('Error testing audio URL:', audioError);
        }
        
        return result;
      } else {
        throw new Error('No audio file in response');
      }
    } catch (error) {
      console.error('Error calling audio assistant:', error);
      // Fallback to default audio
      setCurrentAudioUrl('/audio.mp3');
      alert('Failed to generate AI audio. Using default audio.');
      return null;
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  const handleTextSubmit = async () => {
    if (inputText.trim()) {
      console.log('Text input:', inputText);
      const textToSend = inputText.trim();
      setInputText('');
      
      // Stop any current playback first
      stopVideoAndAudio();
      
      // Don't show user input as caption, wait for AI response
      
      // Call API to get AI audio and caption
      await callAudioAssistant(textToSend);
      
      // Wait a bit for audio to load, then start video and audio
      setTimeout(() => {
        startVideoAndAudio();
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTextSubmit();
    }
  };

  const handleSpeak = () => {
    console.log('Mic button clicked, current isListening:', isListening);
    
    if (isListening) {
      // Stop listening
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      console.log('Stopping voice recognition');
      return;
    }

    // Start voice recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      console.log('Starting voice recognition...');
      setIsListening(true); // Set immediately for UI feedback
      
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'hi-IN'; // Hindi language
      
      let speechTimeout: NodeJS.Timeout;
      let hasSpoken = false;
      let currentTranscript = ''; // Store the current transcript
      
      recognition.onstart = () => {
        console.log('Voice recognition started successfully');
        setIsListening(true);
        hasSpoken = false;
        currentTranscript = ''; // Reset transcript
      };
      
      recognition.onresult = async (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';
        
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
          console.log('Voice input:', currentTranscript);
          
          // Clear existing timeout
          if (speechTimeout) {
            clearTimeout(speechTimeout);
          }
          
          // Set timeout to detect when user stops speaking
          speechTimeout = setTimeout(async () => {
            if (hasSpoken && currentTranscript.trim()) {
              console.log('User stopped speaking, processing audio...');
              recognition.stop();
              setIsListening(false);
              
              // Stop any current playback first
              stopVideoAndAudio();
              
              // Don't show user transcript as caption, wait for AI response
              
              // For voice input, we'll send the transcript as text to the API
              await callAudioAssistant(currentTranscript);
              
              // Wait a bit for audio to load, then start video and audio
              setTimeout(() => {
                startVideoAndAudio();
              }, 500);
            }
          }, 2000); // 2 seconds of silence after speech
        }
      };
      
      recognition.onspeechend = async () => {
        console.log('Speech ended');
        if (hasSpoken && currentTranscript.trim()) {
          setTimeout(async () => {
            if (hasSpoken && isListening && currentTranscript.trim()) {
              console.log('No more speech detected, processing audio...');
              recognition.stop();
              setIsListening(false);
              
              // Stop any current playback first
              stopVideoAndAudio();
              
              // Don't show user transcript as caption, wait for AI response
              
              // For voice input, we'll send the transcript as text to the API
              await callAudioAssistant(currentTranscript);
              
              // Wait a bit for audio to load, then start video and audio
              setTimeout(() => {
                startVideoAndAudio();
              }, 500);
            }
          }, 1000);
        }
      };
      
      recognition.onerror = (event: any) => {
        console.error('Voice recognition error:', event.error);
        setIsListening(false);
        
        // For mobile browsers that might not support speech recognition
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          alert('Microphone permission denied or speech recognition not available');
        }
      };
      
      recognition.onend = () => {
        console.log('Voice recognition ended');
        if (isListening) {
          setIsListening(false);
          if (hasSpoken) {
            console.log('Recognition ended after speech, processing audio...');
            // Note: finalTranscript and interimTranscript are not available here
            // The processing should happen in onresult or onspeechend
          }
        }
      };
      
      try {
        recognition.start();
      } catch (error) {
        console.error('Error starting recognition:', error);
        setIsListening(false);
        alert('Speech recognition failed to start');
      }
    } else {
      console.log('Speech recognition not supported');
      alert('Voice recognition not supported in this browser');
    }
  };

  return (
    <STalkPage>
      <ParticlesContainer ref={particlesRef} />
      
      <GlowEffect show={showGlow} />
      
      <VideoContainer show={showVideo}>
        <Video 
          ref={videoRef}
          src="/ai-video.mp4"
          loop
          muted
          playsInline
        />
      </VideoContainer>
      
      <HiddenAudio 
        ref={audioRef}
        src={currentAudioUrl}
        crossOrigin="anonymous"
        preload="auto"
      />
      
      <CaptionContainer show={showCaption} className="left">
        <CaptionText>
          <>
            {wordDurations.length > 0 ? (
              // Show real-time word-by-word captions
              <>
                {wordDurations.slice(currentWordIndex, Math.min(currentWordIndex + 5, wordDurations.length)).map((wordData, index) => {
                  const isCurrentWord = index === 0;
                  const actualIndex = currentWordIndex + index;
                  
                  return (
                    <span key={actualIndex}>
                      {isCurrentWord ? (
                        <CurrentWord>{wordData.word}</CurrentWord>
                      ) : (
                        <span style={{opacity: 0.7}}>{wordData.word}</span>
                      )}
                      {index < 4 && actualIndex + 1 < wordDurations.length ? ' ' : ''}
                    </span>
                  );
                })}
              </>
            ) : captionText ? (
              // Fallback to regular caption text
              <>
                <div style={{fontSize: '0.8rem', color: 'yellow', marginBottom: '5px'}}>
                  DEBUG: Regular caption
                </div>
                {captionText.split('\n').map((line, index) => (
                  <CaptionLine key={index}>{line}</CaptionLine>
                ))}
              </>
            ) : (
              <div style={{color: 'red'}}>No caption data available</div>
            )}
          </>
        </CaptionText>
      </CaptionContainer>

      <InputContainer>
        <ModernInput>
          <TextInput
            ref={inputRef}
            type="text"
            placeholder={isGeneratingAudio ? "Generating AI audio..." : "Type your message or use voice..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isGeneratingAudio}
          />
          <MicButton 
            isListening={isListening || isGeneratingAudio}
            onClick={handleSpeak}
            type="button"
            disabled={isGeneratingAudio}
          >
            {isGeneratingAudio ? (
              <div style={{width: '16px', height: '16px', border: '2px solid #8dc63f', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite'}} />
            ) : isListening ? (
              <MicOff />
            ) : (
              <Mic />
            )}
          </MicButton>
        </ModernInput>
      </InputContainer>
    </STalkPage>
  );
};

export default TalkPage;
