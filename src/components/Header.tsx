"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '@/context/AuthContext';
import { useLang } from '@/context/LanguageContext';
import { translations as T, t } from '@/lib/translations';
import SubscriptionModal from './SubscriptionModal';

// ─── Animations ──────────────────────────────────────────────────────────────
const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Header shell ─────────────────────────────────────────────────────────────
const SHeader = styled.header<{ $transparent?: boolean }>`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: ${(p) => p.$transparent ? 'transparent !important' : 'rgba(6, 14, 6, 0.72)'};
  backdrop-filter: ${(p) => p.$transparent ? 'none !important' : 'blur(18px)'};
  -webkit-backdrop-filter: ${(p) => p.$transparent ? 'none !important' : 'blur(18px)'};
  border-bottom: ${(p) => p.$transparent ? 'none !important' : '1px solid rgba(141, 198, 63, 0.1)'};
  box-shadow: ${(p) => p.$transparent ? 'none !important' : 'auto'};
  animation: ${slideDown} 0.4s ease;

  @media (max-width: 600px) {
    padding: 0 1.1rem;
  }
`;

// ─── Logo ─────────────────────────────────────────────────────────────────────
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  outline: none;

  img {
    height: 28px;
    width: auto;
    display: block;
  }
`;

// ─── Right side ───────────────────────────────────────────────────────────────
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// ─── Email link (unauthenticated) ────────────────────────────────────────────
const EmailLink = styled.a`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.38);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  i { color: #8dc63f; font-size: 0.68rem; }

  &:hover { color: rgba(255, 255, 255, 0.75); }

  @media (max-width: 480px) { display: none; }
`;

// ─── Credits / subscription pill ─────────────────────────────────────────────
const CreditPill = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  border: 1px solid ${(p) => (p.$active ? "rgba(141,198,63,0.35)" : "rgba(255,255,255,0.12)")};
  background: ${(p) => (p.$active ? "rgba(141,198,63,0.1)" : "rgba(255,255,255,0.05)")};
  color: ${(p) => (p.$active ? "#8dc63f" : "rgba(255,255,255,0.6)")};
  font-family: "Gothic A1", sans-serif;
  font-size: 0.73rem;
  font-weight: 600;
  cursor: ${(p) => (p.$active ? "default" : "pointer")};
  transition: all 0.2s;
  white-space: nowrap;
  letter-spacing: 0.02em;

  .icon {
    font-size: 0.65rem;
    opacity: 0.8;
  }

  &:not([disabled]):hover {
    background: ${(p) => (p.$active ? "rgba(141,198,63,0.14)" : "rgba(255,255,255,0.1)")};
    border-color: ${(p) => (p.$active ? "rgba(141,198,63,0.5)" : "rgba(255,255,255,0.22)")};
    transform: translateY(-1px);
  }
`;

// ─── Icon button (sign out, etc.) ────────────────────────────────────────────
const IconBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 60, 60, 0.1);
    border-color: rgba(255, 80, 80, 0.3);
    color: #ff8080;
  }
`;

// ─── Profile avatar ──────────────────────────────────────────────────────────
const AvatarLink = styled(Link)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(141, 198, 63, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(141, 198, 63, 0.1);
  flex-shrink: 0;
  text-decoration: none;
  color: #8dc63f;
  font-size: 0.65rem;
  transition: all 0.2s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    border-color: rgba(141, 198, 63, 0.7);
    transform: scale(1.08);
  }
`;

// ─── Divider ──────────────────────────────────────────────────────────────────
const Sep = styled.div`
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
`;

// ─── Language toggle ─────────────────────────────────────────────────────────
const LangToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
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
  background: ${(p) => (p.$active ? '#8dc63f' : 'transparent')};
  transition: all 0.2s;
  line-height: 1;
  user-select: none;
`;
const Header: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const { lang, setLang } = useLang();
  const pathname = usePathname();
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
        {/* Logo */}
        <Logo href="/" aria-label="Paramvani home">
          <img src="/logo-1.png" alt="Paramvani" />
        </Logo>

        {/* Right side - hidden on Talk page */}
        {!isTalkPage && (
          <Right>
            {/* Language toggle — always visible */}
          <LangToggle
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            title={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            aria-label="Switch language"
          >
            <LangOption $active={lang === 'en'}>EN</LangOption>
            <LangOption $active={lang === 'hi'}>हि</LangOption>
          </LangToggle>

          {/* Unauthenticated — show email */}
          {!user && (
            <EmailLink href="mailto:hello@paramvani.com">
              <i className="fa-solid fa-envelope" />
              {t(T.header.email, lang)}
            </EmailLink>
          )}

          {/* Authenticated */}
          {user && profile && (
            <>
              {/* Credits / plan pill */}
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

              <Sep />

              {/* Avatar → profile */}
              <AvatarLink href="/profile" title={t(T.header.profile, lang)}>
                {user.photoURL
                  ? <img src={user.photoURL} alt={profile.name} referrerPolicy="no-referrer" />
                  : <i className="fa-solid fa-user" />}
              </AvatarLink>

              {/* Sign out */}
              <IconBtn onClick={signOut} title={t(T.header.signOut, lang)} aria-label="Sign out">
                <i className="fa-solid fa-arrow-right-from-bracket" />
              </IconBtn>
            </>
          )}
        </Right>
        )}
      </SHeader>

      {showSubscriptionModal && (
        <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
      )}
    </>
  );
};

export default Header;
