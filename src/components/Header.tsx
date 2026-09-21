"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styled, { keyframes, css } from 'styled-components';
import { useAuth } from '@/context/AuthContext';
import { useLang } from '@/context/LanguageContext';
import { translations as T, t } from '@/lib/translations';
import SubscriptionModal from './SubscriptionModal';

// ─── Animations ──────────────────────────────────────────────────────────────
const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

// ─── Header shell ─────────────────────────────────────────────────────────────
const SHeader = styled.header<{ $transparent?: boolean }>`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem;
  background: transparent;
  pointer-events: none;
  animation: ${slideDown} 0.4s ease;
  transition: background 0.3s ease;

  @media (max-width: 480px) {
    padding: 0 1rem;
    height: 56px;
  }
`;

// ─── Left side – hamburger + avatar ──────────────────────────────────────────
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  pointer-events: auto;
`;

// ─── Center – Logo ─────────────────────────────────────────────────────────────
const LogoLink = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  gap: 0.5rem;

  @media (max-width: 480px) {
    /* On mobile, show logo on right side like mockup */
    position: static;
    transform: none;
  }
`;

// ─── Right side – "Spiritual Connect" logo branding ──────────────────────────
const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  pointer-events: auto;
`;

// ─── "Spiritual Connect" image logo ──────────────────────────────────────────
const BrandLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    height: 48px;
    width: auto;
  }

  @media (max-width: 400px) {
    img {
      height: 40px;
    }
  }
`;

// ─── Credits / subscription pill ─────────────────────────────────────────────
const CreditPill = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  border: 1px solid ${(p) => (p.$active ? "rgba(255,153,51,0.4)" : "rgba(255,255,255,0.12)")};
  background: ${(p) => (p.$active ? "rgba(255,153,51,0.12)" : "rgba(255,255,255,0.05)")};
  color: ${(p) => (p.$active ? "#FF9933" : "rgba(255,255,255,0.6)")};
  font-family: "Gothic A1", sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: ${(p) => (p.$active ? "default" : "pointer")};
  transition: all 0.2s;
  white-space: nowrap;
  letter-spacing: 0.02em;

  .icon { font-size: 0.65rem; opacity: 0.8; }

  &:not([disabled]):hover {
    background: ${(p) => (p.$active ? "rgba(255,153,51,0.16)" : "rgba(255,255,255,0.1)")};
    border-color: ${(p) => (p.$active ? "rgba(255,153,51,0.6)" : "rgba(255,255,255,0.22)")};
  }

  @media (max-width: 400px) { display: none; }
`;

// ─── Profile avatar ──────────────────────────────────────────────────────────
const AvatarLink = styled(Link)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(255,153,51,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,153,51,0.12);
  flex-shrink: 0;
  text-decoration: none;
  color: #FF9933;
  font-size: 0.65rem;
  transition: all 0.2s;

  img { width: 100%; height: 100%; object-fit: cover; display: block; }

  &:hover { border-color: rgba(255,153,51,0.7); transform: scale(1.08); }
`;

// ─── Icon button (sign out) ────────────────────────────────────────────────
const IconBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  background: transparent;
  color: rgba(255,255,255,0.4);
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255,60,60,0.1);
    border-color: rgba(255,80,80,0.3);
    color: #ff8080;
  }
`;

// ─── Header Back Button ──────────────────────────────────────────────────────
const HeaderBackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.25);
  }

  i {
    font-size: 1rem;
  }
`;

// ─── Language toggle ─────────────────────────────────────────────────────────
const LangToggle = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
`;

const LangOption = styled.span<{ $active: boolean }>`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.28rem 0.6rem;
  color: ${(p) => (p.$active ? '#000' : 'rgba(255,255,255,0.35)')};
  background: ${(p) => (p.$active ? '#FF9933' : 'transparent')};
  transition: all 0.2s;
  line-height: 1;
  user-select: none;
`;

// ─── Divider ─────────────────────────────────────────────────────────────────
const Sep = styled.div`
  width: 1px;
  height: 16px;
  background: rgba(255,255,255,0.1);
  flex-shrink: 0;
`;

// ─── Component ───────────────────────────────────────────────────────────────
const Header: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const isTalkPage = pathname?.startsWith('/talk') ?? false;

  const expiry = profile?.subscriptionExpiry ?? 0;
  const isActive =
    profile?.subscriptionType !== "free" &&
    profile?.subscriptionType !== undefined &&
    expiry > Date.now();

  const daysLeft = isActive && expiry > 0
    ? Math.ceil((expiry - Date.now()) / 86_400_000)
    : 0;

  const planLabel = profile?.subscriptionType === "weekly"
    ? (lang === 'hi' ? 'स्पार्क' : 'Spark')
    : (lang === 'hi' ? 'भक्त' : 'Devotee');

  return (
    <>
      <SHeader $transparent={isTalkPage}>

        {/* LEFT – Logo + optional avatar on mobile */}
        <LeftGroup>
          {pathname === '/' ? (
            <BrandLogo href="/" aria-label="Paramvani home">
              <img src="/logo1.png" alt="Spiritual Connect" />
            </BrandLogo>
          ) : !pathname?.startsWith('/choose') ? (
            <HeaderBackBtn onClick={() => router.back()} aria-label="Go back" title={t(T.choose.back, lang)}>
              <i className="fa-solid fa-arrow-left" />
            </HeaderBackBtn>
          ) : null}

          {/* Show avatar next to hamburger on mobile when logged in */}
          {user && profile && (
            <AvatarLink href="/profile" title={t(T.header.profile, lang)} style={{ display: 'none' }}
              className="mobile-avatar">
              {user.photoURL
                ? <img src={user.photoURL} alt={profile.name} referrerPolicy="no-referrer" />
                : <i className="fa-solid fa-user" />}
            </AvatarLink>
          )}
        </LeftGroup>

        {/* RIGHT – "Spiritual Connect" branding + auth controls */}
        {!isTalkPage && (
          <RightGroup>
            {/* Language toggle */}
            <LangToggle
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              title={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
              aria-label="Switch language"
            >
              <LangOption $active={lang === 'en'}>EN</LangOption>
              <LangOption $active={lang === 'hi'}>हि</LangOption>
            </LangToggle>

            <Sep />

            {/* Authenticated controls */}
            {user && profile && (
              <>
                <CreditPill
                  $active={isActive}
                  onClick={() => { if (!isActive) setShowSubscriptionModal(true); }}
                  title={isActive
                    ? `${planLabel} — ${daysLeft} ${t(T.header.daysLeft, lang)}`
                    : t(T.header.upgrade, lang)}
                >
                  <i className={`fa-solid ${isActive ? "fa-infinity" : "fa-coins"} icon`} />
                  {isActive
                    ? `${planLabel} · ${daysLeft}${lang === 'hi' ? 'दि' : 'd'}`
                    : `${profile.freeCredits} ${t(T.header.credits, lang)}`}
                </CreditPill>

                <AvatarLink href="/profile" title={t(T.header.profile, lang)}>
                  {user.photoURL
                    ? <img src={user.photoURL} alt={profile.name} referrerPolicy="no-referrer" />
                    : <i className="fa-solid fa-user" />}
                </AvatarLink>

                <IconBtn onClick={signOut} title={t(T.header.signOut, lang)} aria-label="Sign out">
                  <i className="fa-solid fa-arrow-right-from-bracket" />
                </IconBtn>
              </>
            )}

          </RightGroup>
        )}
      </SHeader>

      {showSubscriptionModal && (
        <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
      )}
    </>
  );
};

export default Header;
