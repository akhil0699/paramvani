'use client';
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Preloader from './Preloader';
import InfoSection from './InfoSection';
import { useAuth, POST_LOGIN_REDIRECT_KEY } from '@/context/AuthContext';
import { useLang } from '@/context/LanguageContext';
import { translations as T, t } from '@/lib/translations';
import { SHLOKS } from '@/lib/gitaData';

// ─── Animations ───────────────────────────────────────────────────────────────
const floatUp = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
`;
const glowPulse = keyframes`
  0%, 100% { opacity: 0.5; box-shadow: 0 0 20px rgba(212,164,26,0.3); }
  50%       { opacity: 1;   box-shadow: 0 0 40px rgba(212,164,26,0.6); }
`;
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const particleDrift = keyframes`
  0%   { transform: translateY(0px) translateX(0px); opacity: 0.4; }
  50%  { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
  100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
`;

// ─── Wrapper ──────────────────────────────────────────────────────────────────
const PageWrapper = styled.div`
  background-color: #0B0806;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

// ─── Hero Section ─────────────────────────────────────────────────────────────

const SHero = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background: #0B0806;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/hero.png');
  background-size: cover;
  background-position: center 30%;
  background-repeat: no-repeat;
  z-index: 0;

  /* Dark overlay so text is readable */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(11, 8, 6, 0.5) 0%,
      rgba(11, 8, 6, 0.2) 30%,
      rgba(11, 8, 6, 0.35) 60%,
      rgba(11, 8, 6, 0.95) 100%
    );
  }
`;

const ParticlesLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.55;

  canvas {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
  padding-top: 61vh;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding-top: 55vh;
  }
`;

const HeroEyebrow = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #FF9933;
  margin: 0 0 1.2rem;
  animation: ${fadeInUp} 0.6s ease both;
`;

const HeroTitle = styled.h1<{ $lang?: string }>`
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 1.18;
  color: #fff8e1;
  margin: 0 0 2rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
  animation: ${fadeInUp} 0.7s 0.1s ease both;

  ${p => p.$lang === 'hi' && `
    font-family: "Noto Sans Devanagari", "DM Serif Display", serif;
    font-size: clamp(2.2rem, 5vw, 4rem);
  `}

  @media (max-width: 500px) {
    font-size: 2.2rem;
  }
`;

const ConnectBtn = styled.button<{ $lang?: string }>`
  background: linear-gradient(135deg, #FF9933 0%, #FF7E27 100%);
  border: none;
  border-radius: 50px;
  color: #1a0a00;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: 0.03em;
  padding: 1rem 2.8rem;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(255,153,51,0.45);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  animation: ${fadeInUp} 0.8s 0.2s ease both;

  ${p => p.$lang === 'hi' && `
    font-family: "Noto Sans Devanagari", "DM Serif Display", serif;
    font-size: 1.35rem;
  `}

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(255,153,51,0.6);
  }

  span.emoji {
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.9rem 2.2rem;
  }
`;

// ─── Spacer to push carousel below the image's focal point ───────────────────
const HeroSpacer = styled.div`
  position: relative;
  z-index: 2;
  /* This gives space for the background image to show */
  flex: 1;
  min-height: 30vh;

  @media (max-width: 600px) {
    min-height: 22vh;
  }
`;

// ─── Carousel Section ─────────────────────────────────────────────────────────

const CarouselSection = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 0 0 3rem;
  background: transparent;
  /* Negative margin to overlap with hero bg image bottom */
  margin-top: -6rem;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 0 5%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (min-width: 801px) {
    justify-content: center;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
`;

const Dot = styled.div<{ $active?: boolean }>`
  width: ${p => p.$active ? '20px' : '6px'};
  height: 6px;
  border-radius: 3px;
  background: ${p => p.$active ? '#FF9933' : 'rgba(255,255,255,0.25)'};
  transition: all 0.3s ease;
`;

// ─── Shared Card Base ─────────────────────────────────────────────────────────

const CardBase = styled.div`
  flex: 0 0 85%;
  max-width: 380px;
  scroll-snap-align: start;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

// ─── Gita Card ────────────────────────────────────────────────────────────────

const GitaCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 2rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  background: rgba(10, 6, 0, 0.55);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  transition: all 0.35s ease;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);

  &:hover {
    border-color: rgba(255,153,51,0.4);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.6), 0 0 40px rgba(255,153,51,0.1);
  }
`;

const OmRing = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,164,26,0.25) 0%, rgba(180,80,20,0.08) 60%, transparent 100%);
  border: 2px solid rgba(212,164,26,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${floatUp} 4s ease-in-out infinite;
  margin-bottom: 1.2rem;

  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(212,164,26,0.25);
  }
  &::before { inset: -10px; animation: ${glowPulse} 2.5s ease-in-out infinite; }
  &::after  { inset: -18px; opacity: 0.4; animation: ${glowPulse} 3.5s 0.5s ease-in-out infinite; }
`;

const OmText = styled.span`
  font-family: 'Noto Sans Devanagari', sans-serif;
  font-size: 3rem;
  background: linear-gradient(135deg, #d4a41a, #f0c84a, #d4a41a);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
  line-height: 1;
`;

const CardEyebrow = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #d4a41a;
  margin: 0 0 0.5rem;
`;

const CardTitle = styled.h2`
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  font-weight: 400;
  margin: 0 0 1rem;
  color: #fff;
  line-height: 1.2;

  span {
    background: linear-gradient(135deg, #fff8e1 0%, #d4a41a 60%, #fff8e1 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 4s linear infinite;
  }

  @media (max-width: 400px) { font-size: 1.7rem; }
`;

const CardDesc = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.5);
  margin: 0 0 1.5rem;
  line-height: 1.65;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
`;

const StatNum = styled.span`
  font-family: 'DM Serif Display', serif;
  font-size: 1.8rem;
  color: #d4a41a;
  line-height: 1;
`;

const StatLabel = styled.span`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
`;

// ─── Connect Card ─────────────────────────────────────────────────────────────

const ConnectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 2rem;
  background: rgba(10, 6, 0, 0.55);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    border-color: rgba(255,153,51,0.4);
    transform: translateY(-4px);
  }
`;

const ConnectIconRing = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,153,51,0.25) 0%, rgba(255,80,0,0.08) 60%, transparent 100%);
  border: 2px solid rgba(255,153,51,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  position: relative;
  animation: ${floatUp} 4s 1s ease-in-out infinite;
  margin-bottom: 1.2rem;

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 1px solid rgba(255,153,51,0.25);
    animation: ${glowPulse} 2.5s ease-in-out infinite;
  }
`;

const ConnectCardTitle = styled.h2`
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  font-weight: 400;
  margin: 0 0 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #FF9933, #FFD700, #FF9933);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;

  @media (max-width: 400px) { font-size: 1.7rem; }
`;

const ConnectCardDesc = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.5);
  margin: 0 0 1.8rem;
  line-height: 1.65;
`;

const ConnectCardBtn = styled.button`
  background: linear-gradient(135deg, #FF9933 0%, #FF7E27 100%);
  border: none;
  border-radius: 50px;
  color: #1a0a00;
  font-family: 'Gothic A1', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.8rem 2.2rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(255,153,51,0.4);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255,153,51,0.6);
  }
`;

// ─── Info Section Wrapper already in InfoSection.tsx ─────────────────────────

const Page: React.FC = () => {
  const [isLoading, setIsLoading]     = useState(true);
  const [activeCard, setActiveCard]   = useState(0);
  const [viewedCount, setViewedCount] = useState(0);
  const particlesRef = useRef<HTMLDivElement>(null);
  const carouselRef  = useRef<HTMLDivElement>(null);
  const router       = useRouter();
  const { user, signInWithGoogle } = useAuth();
  const { lang }     = useLang();
  const [isConnecting, setIsConnecting] = useState(false);
  const totalShloks = SHLOKS.length;

  // ── auth redirect
  const handleConnect = async () => {
    if (user) { router.push('/choose'); return; }
    if (isConnecting) return;
    setIsConnecting(true);
    try {
      const ok = await signInWithGoogle();
      if (ok) router.push('/choose');
    } finally { setIsConnecting(false); }
  };

  React.useEffect(() => {
    if (!user) return;
    const redirect = sessionStorage.getItem(POST_LOGIN_REDIRECT_KEY);
    if (redirect) { sessionStorage.removeItem(POST_LOGIN_REDIRECT_KEY); router.push(redirect); }
  }, [user, router]);

  // ── preloader
  React.useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  // ── read viewed gita count
  useEffect(() => {
    try {
      const s = localStorage.getItem('gita_viewed');
      if (s) setViewedCount((JSON.parse(s) as string[]).length);
    } catch { /* ok */ }
  }, []);

  // ── carousel scroll → dot sync
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveCard(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // ── saffron particles
  useEffect(() => {
    if (!isLoading && particlesRef.current) {
      const canvas = document.createElement('canvas');
      const ctx    = canvas.getContext('2d');
      if (!ctx) return;

      canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current.appendChild(canvas);

      class Particle {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        vx = (Math.random() - 0.5) * 0.25;
        vy = (Math.random() - 0.5) * 0.25;
        size = Math.random() * 1.4 + 0.4;
        opacity = Math.random() * 0.5 + 0.2;
        life = 0;
        maxLife = Math.random() * 400 + 300;

        update() {
          this.x += this.vx; this.y += this.vy; this.life++;
          this.vx += (Math.random() - 0.5) * 0.004;
          this.vy += (Math.random() - 0.5) * 0.004;
          this.vx = Math.max(-0.6, Math.min(0.6, this.vx));
          this.vy = Math.max(-0.6, Math.min(0.6, this.vy));
          this.opacity = Math.max(0.1, Math.min(0.65, this.opacity + (Math.random() - 0.5) * 0.003));
          if (this.life > this.maxLife || this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
            this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.25; this.vy = (Math.random() - 0.5) * 0.25;
            this.opacity = Math.random() * 0.5 + 0.2; this.life = 0; this.maxLife = Math.random() * 400 + 300;
          }
        }

        draw() {
          if (!ctx) return;
          ctx.save(); ctx.globalAlpha = this.opacity;
          const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
          g.addColorStop(0, 'rgba(255,200,80,0.9)');
          g.addColorStop(0.5, 'rgba(255,153,51,0.35)');
          g.addColorStop(1, 'rgba(255,100,0,0)');
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#FFD700';
          ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }
      }

      const particles = Array.from({ length: 100 }, () => new Particle());
      let rafId: number;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        rafId = requestAnimationFrame(animate);
      };
      animate();

      const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(rafId);
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      };
    }
  }, [isLoading]);

  return (
    <PageWrapper>
      <Preloader isLoading={isLoading} />

      {/* ── HERO ── */}
      <SHero id="intro">
        <HeroBg />
        <ParticlesLayer ref={particlesRef} />

        <HeroContent>
          <HeroEyebrow>{t(T.home.eyebrow, lang)}</HeroEyebrow>

          <HeroTitle $lang={lang}>
            {lang === 'hi' ? (
              <>मन की बात प्रभु संग।<br />यहाँ प्रार्थना बनाती है शांति।</>
            ) : (
              <>Speak your heart<br />to God</>
            )}
          </HeroTitle>

          <ConnectBtn onClick={handleConnect} $lang={lang} disabled={isConnecting}>
            <span className="emoji">🙏</span>
            {isConnecting
              ? (lang === 'hi' ? 'जोड़ रहे हैं...' : 'Connecting...')
              : (lang === 'hi' ? 'जोड़ें और मार्गदर्शन पाएं' : 'Connect & Find Guidance')}
          </ConnectBtn>
        </HeroContent>

        {/* Spacer lets the bg image shine through */}
        <HeroSpacer />
      </SHero>

      {/* ── CAROUSEL ── */}
      <CarouselSection>
        <CarouselTrack ref={carouselRef}>

          {/* Card 1 – Bhagavad Gita */}
          <CardBase>
            <GitaCard href="/gita" id="gita-home-card" style={{
              backgroundImage: "url('/card.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '340px',
              border: '1px solid rgba(212,164,26,0.35)',
            }}>
              {/* Semi-transparent brownish overlay so text is legible but image is visible */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '20px',
                background: 'rgba(0, 0, 0, 0.65)',
              }} />

              {/* Content floats above overlay */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '0.8rem' }}>
                <CardEyebrow>
                  {lang === 'hi' ? 'दिव्य ज्ञान' : 'The Divine Wisdom'}
                </CardEyebrow>

                <CardTitle style={{ marginBottom: '0.5rem' }}>
                  {lang === 'hi'
                    ? <><span>भगवद् गीता</span></>
                    : <><span>BHAGAVAD GITA</span></>
                  }
                </CardTitle>

                <CardDesc>
                  {lang === 'hi'
                    ? '18 अध्यायों के श्लोकों का चयन करें, सुनें और अनुभव करें।'
                    : 'Choose a chapter, pick a shlok, read it in full, hear it recited & watch its video.'}
                </CardDesc>

                <StatsRow>
                  <Stat>
                    <StatNum>18</StatNum>
                    <StatLabel>{lang === 'hi' ? 'अध्याय' : 'Chapters'}</StatLabel>
                  </Stat>
                  <Stat>
                    <StatNum>{totalShloks}+</StatNum>
                    <StatLabel>{lang === 'hi' ? 'श्लोक' : 'Shloks'}</StatLabel>
                  </Stat>
                  {viewedCount > 0 && (
                    <Stat>
                      <StatNum>{viewedCount}</StatNum>
                      <StatLabel>{lang === 'hi' ? 'देखे गए' : 'Viewed'}</StatLabel>
                    </Stat>
                  )}
                </StatsRow>
              </div>
            </GitaCard>
          </CardBase>

          {/* Card 2 – Connect to God */}
          <CardBase>
            <ConnectCard onClick={handleConnect} style={{
              backgroundImage: "url('/card.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '340px',
              border: '1px solid rgba(212,164,26,0.35)',
              padding: '2.5rem 2rem',
            }}>
              {/* Semi-transparent brownish overlay so text is legible but image is visible */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '20px',
                background: 'rgba(0, 0, 0, 0.65)',
              }} />
              
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '0.5rem', paddingTop: '1.5rem' }}>

                <CardEyebrow>
                  {lang === 'hi' ? 'दिव्य संवाद' : 'Divine Connection'}
                </CardEyebrow>

                <ConnectCardTitle>
                  {lang === 'hi'
                    ? <>प्रभु से बात करें</>
                    : <>Talk to God</>
                  }
                </ConnectCardTitle>

                <ConnectCardDesc>
                  {lang === 'hi'
                    ? 'अपने मन की बात सीधे प्रभु से कहें। शांति और मार्गदर्शन पाएं।'
                    : 'Share your heart directly with the Divine. Receive peace, clarity, and guidance.'}
                </ConnectCardDesc>


              </div>
            </ConnectCard>
          </CardBase>

        </CarouselTrack>

        <CarouselDots>
          <Dot $active={activeCard === 0} />
          <Dot $active={activeCard === 1} />
        </CarouselDots>
      </CarouselSection>

      {/* ── INFO / LORD SHIVA SECTION ── */}
      <InfoSection />
    </PageWrapper>
  );
};

export default Page;
