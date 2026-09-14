'use client';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import { CHAPTERS, SHLOKS } from '@/lib/gitaData';

// ─── Animations ───────────────────────────────────────────────────────────────

const floatUp = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Wrapper ──────────────────────────────────────────────────────────────────

const Wrapper = styled.section`
  background: #0a0600;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(212,164,26,0.12) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 50%, rgba(180,80,20,0.08) 0%, transparent 60%);
    pointer-events: none;
  }
`;

// ─── Card ─────────────────────────────────────────────────────────────────────

const Card = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 900px;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(212,164,26,0.07) 0%,
    rgba(0,0,0,0) 40%,
    rgba(180,80,20,0.05) 100%
  );
  border: 1px solid rgba(212,164,26,0.28);
  border-radius: 24px;
  padding: 3rem 3.5rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  animation: ${fadeIn} 0.7s ease both;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(212,164,26,0.12), transparent 60%);
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    border-color: rgba(212,164,26,0.55);
    transform: translateY(-4px);
    box-shadow:
      0 20px 60px rgba(0,0,0,0.5),
      0 0 40px rgba(212,164,26,0.12);

    &::before { opacity: 1; }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2.5rem 2rem;
    gap: 2rem;
    text-align: center;
  }
`;

// ─── OM Symbol ────────────────────────────────────────────────────────────────

const OmContainer = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(212,164,26,0.15), rgba(180,80,20,0.1));
  border: 1px solid rgba(212,164,26,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${floatUp} 4s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 1px solid rgba(212,164,26,0.15);
    animation: ${glowPulse} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const OmText = styled.span`
  font-family: 'Noto Sans Devanagari', sans-serif;
  font-size: 3.5rem;
  background: linear-gradient(135deg, #d4a41a, #f0c84a, #d4a41a);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
  line-height: 1;

  @media (max-width: 768px) { font-size: 2.5rem; }
`;

// ─── Content ──────────────────────────────────────────────────────────────────

const Content = styled.div`
  flex: 1;
`;

const Eyebrow = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #d4a41a;
  margin: 0 0 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: '';
    width: 1.5rem;
    height: 1px;
    background: #d4a41a;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
    &::before { display: none; }
  }
`;

const Title = styled.h2`
  font-family: 'DM Serif Display', serif;
  font-size: 3.2rem;
  font-weight: 400;
  margin: 0 0 1rem;
  line-height: 1.15;
  color: #fff;

  span {
    background: linear-gradient(135deg, #fff8e1 0%, #d4a41a 60%, #fff8e1 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 4s linear infinite;
  }

  @media (max-width: 768px) { font-size: 2.4rem; }
  @media (max-width: 480px) { font-size: 2rem; }
`;

const Desc = styled.p`
  font-family: 'Gothic A1', sans-serif;
  font-size: 1rem;
  color: rgba(255,255,255,0.5);
  margin: 0 0 2rem;
  line-height: 1.7;

  @media (max-width: 480px) { font-size: 0.9rem; }
`;

// ─── Stats Row ────────────────────────────────────────────────────────────────

const StatsRow = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.5rem;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StatNum = styled.span`
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  color: #d4a41a;
  line-height: 1;
`;

const StatLabel = styled.span`
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
`;

// ─── CTA Arrow ────────────────────────────────────────────────────────────────

const Arrow = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(212,164,26,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4a41a;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  ${Card}:hover & {
    background: rgba(212,164,26,0.15);
    transform: translateX(4px);
    border-color: rgba(212,164,26,0.7);
  }

  @media (max-width: 768px) { display: none; }
`;

// ─── Viewed Badge ─────────────────────────────────────────────────────────────

const ViewedBadge = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Gothic A1', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: rgba(212,164,26,0.7);
  background: rgba(212,164,26,0.08);
  border: 1px solid rgba(212,164,26,0.2);
  border-radius: 20px;
  padding: 0.25rem 0.7rem;

  @media (max-width: 480px) { display: none; }
`;

// ─── Component ────────────────────────────────────────────────────────────────

const GitaHomeCard: React.FC = () => {
  const { lang } = useLang();
  const [viewedCount, setViewedCount] = useState(0);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('gita_viewed');
      if (stored) {
        const parsed = JSON.parse(stored) as string[];
        setViewedCount(parsed.length);
      }
    } catch { /* ignore */ }
  }, []);

  const totalShloks = SHLOKS.length;

  return (
    <Wrapper>
      <Card href="/gita" id="gita-home-card">
        {viewedCount > 0 && (
          <ViewedBadge>
            ✓ {viewedCount} {lang === 'hi' ? 'देखे' : 'viewed'}
          </ViewedBadge>
        )}

        <OmContainer>
          <OmText>ॐ</OmText>
        </OmContainer>

        <Content>
          <Eyebrow>
            {lang === 'hi' ? 'श्रीमद्भगवद्गीता' : 'Bhagavad Gita'}
          </Eyebrow>
          <Title>
            {lang === 'hi' ? (
              <>परमात्मा का <span>दिव्य संदेश</span></>
            ) : (
              <>The <span>Song of God</span></>
            )}
          </Title>
          <Desc>
            {lang === 'hi'
              ? '18 अध्यायों के श्लोकों का चयन करें, सुनें और अनुभव करें — अपनी गति से।'
              : 'Choose a chapter, pick a shlok, read it in full, hear it recited & watch its video — at your own pace.'}
          </Desc>
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
        </Content>

        <Arrow>
          <i className="fa-solid fa-arrow-right" />
        </Arrow>
      </Card>
    </Wrapper>
  );
};

export default GitaHomeCard;
