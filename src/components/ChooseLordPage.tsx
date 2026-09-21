'use client';
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { LORD_LIST } from '@/lib/lords';
import { preloadLordVideo } from '@/lib/preloadVideo';
import { primeAutoplayAudio } from '@/lib/primeAutoplay';
import { useLang } from '@/context/LanguageContext';
import { translations as T, t } from '@/lib/translations';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardGlow = keyframes`
  0%, 100% {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 153, 51, 0.15);
  }
  50% {
    box-shadow: 0 12px 40px rgba(255, 153, 51, 0.12), 0 0 0 1px rgba(255, 153, 51, 0.35);
  }
`;

const Page = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  background: radial-gradient(ellipse at center, #0a1a0a 0%, #000000 70%);
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const ParticlesLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  canvas {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 3rem;
  padding-top: max(1.5rem, env(safe-area-inset-top));
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 153, 51, 0.25);
  border-radius: 999px;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.85);
  font-family: "Gothic A1", sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  backdrop-filter: blur(12px);

  &:hover {
    background: rgba(255, 153, 51, 0.12);
    border-color: rgba(255, 153, 51, 0.5);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 0.6s ease forwards;
`;

const Eyebrow = styled.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #FF9933;
  margin: 0 0 0.75rem;
`;

const Title = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  margin: 0 0 0.75rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  max-width: 520px;
  margin-inline: auto;
  line-height: 1.6;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 380px;
    margin: 0 auto;
  }
`;

const LordCard = styled.button<{ $delay: number }>`
  position: relative;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
  border-radius: 18px;
  overflow: hidden;
  animation: ${fadeIn} 0.7s ease forwards;
  animation-delay: ${props => props.$delay}ms;
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover .card-image img {
    transform: scale(1.04);
  }

  &:hover .card-overlay {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.45) 45%,
      rgba(10, 26, 10, 0.15) 100%
    );
  }

  &:hover .card-frame {
    border-color: rgba(255, 153, 51, 0.55);
    animation: ${cardGlow} 2s ease-in-out infinite;
  }
`;

const CardFrame = styled.div.attrs({ className: 'card-frame' })`
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 153, 51, 0.2);
  background: #0a1a0a;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`;

const CardImage = styled.div.attrs({ className: 'card-image' })`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #0a1a0a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 0.5s ease;
  }
`;

const CardOverlay = styled.div.attrs({ className: 'card-overlay' })`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.35) 42%,
    rgba(10, 26, 10, 0.1) 100%
  );
  transition: background 0.3s ease;
`;

const CardContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.25rem 1.2rem 1.35rem;
  z-index: 1;
`;

const LordName = styled.h2`
  font-family: "DM Serif Display", serif;
  font-size: 1.65rem;
  margin: 0 0 0.25rem;
  color: #fff;
`;

const LordNameEn = styled.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #FF9933;
  margin: 0 0 0.5rem;
`;

const LordTagline = styled.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
  line-height: 1.5;
`;

const ConnectHint = styled.span`
  display: inline-block;
  margin-top: 0.85rem;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 153, 51, 0.85);
`;

const ChooseLordPage: React.FC = () => {
  const router = useRouter();
  const particlesRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    LORD_LIST.forEach((lord) => {
      router.prefetch(`/talk/${lord.id}`);
      preloadLordVideo(lord.video);
    });
  }, [router]);

  useEffect(() => {
    if (!particlesRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    particlesRef.current.appendChild(canvas);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    class Particle {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      vx = (Math.random() - 0.5) * 0.4;
      vy = (Math.random() - 0.5) * 0.4;
      size = Math.random() * 1.5 + 0.5;
      opacity = Math.random() * 0.5 + 0.2;
      color = ['#ffffff', '#FF9933', '#FFD700'][Math.floor(Math.random() * 3)];

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: window.innerWidth < 768 ? 50 : 80 }, () => new Particle());

    let frameId = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      frameId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
      canvas.remove();
    };
  }, []);

  return (
    <Page>
      <ParticlesLayer ref={particlesRef} />
      <Content>
        <TopBar>
          <BackButton type="button" onClick={() => router.push('/')}>
            <ArrowLeft />
            {t(T.choose.back, lang)}
          </BackButton>
        </TopBar>

        <Header>
          <Eyebrow>{t(T.home.eyebrow, lang)}</Eyebrow>
          <Title>{t(T.choose.heading, lang)}</Title>
          <Subtitle>
            {t(T.choose.subheading, lang)}
          </Subtitle>
        </Header>

        <CardGrid>
          {LORD_LIST.map((lord, index) => (
            <LordCard
              key={lord.id}
              type="button"
              $delay={120 + index * 120}
              onMouseEnter={() => preloadLordVideo(lord.video)}
              onFocus={() => preloadLordVideo(lord.video)}
              onClick={() => {
                // Runs inside the click's user-gesture context, so the
                // browser allows unmuted playback — this permission then
                // carries over to the talk page's intro video since Next.js
                // navigates client-side (same document, no reload).
                primeAutoplayAudio();
                router.push(`/talk/${lord.id}`);
              }}
            >
              <CardFrame>
                <CardImage>
                  <img src={lord.image} alt={lord.nameEn} loading="eager" />
                  <CardOverlay />
                  <CardContent>
                    <LordName>{lord.name}</LordName>
                    <LordNameEn>{lord.nameEn}</LordNameEn>
                    <LordTagline>{lord.tagline}</LordTagline>
                    <ConnectHint>{t(T.choose.connectHint, lang)}</ConnectHint>
                  </CardContent>
                </CardImage>
              </CardFrame>
            </LordCard>
          ))}
        </CardGrid>
      </Content>
    </Page>
  );
};

export default ChooseLordPage;
