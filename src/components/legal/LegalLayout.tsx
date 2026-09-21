"use client";

import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { translations as T, t } from "@/lib/translations";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const PageWrap = styled.div`
  min-height: 100vh;
  background: radial-gradient(ellipse at top, #1a0a00 0%, #0B0806 70%);
  color: #fff;
  font-family: "Gothic A1", sans-serif;
  padding-top: 72px;
  padding-bottom: 5rem;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

/* ── Sidebar ─────────────────────────────────────────────── */
const Sidebar = styled.aside`
  position: sticky;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 860px) {
    display: none;
  }
`;

const SidebarLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 0.25rem;
  padding-left: 0.75rem;
`;

const TocLink = styled.a<{ $active?: boolean }>`
  display: block;
  padding: 0.45rem 0.75rem;
  font-size: 0.8rem;
  color: ${(p) => (p.$active ? "#FF9933" : "rgba(255,255,255,0.45)")};
  border-left: 2px solid ${(p) => (p.$active ? "#FF9933" : "transparent")};
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
  border-radius: 0 6px 6px 0;
  background: ${(p) => (p.$active ? "rgba(255,153,51,0.07)" : "transparent")};

  &:hover {
    color: rgba(255, 255, 255, 0.85);
    border-left-color: rgba(255, 153, 51, 0.4);
  }
`;

const SidebarDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin: 0.75rem 0;
`;

const OtherPagesLabel = styled(SidebarLabel)`
  margin-top: 0;
`;

const OtherPageLink = styled(Link)`
  display: block;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.05);
  }
`;

/* ── Main content ─────────────────────────────────────────── */
const Main = styled.main`
  animation: ${fadeIn} 0.5s ease;
`;

const Eyebrow = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #FF9933;
  margin: 0 0 0.75rem;
`;

const PageTitle = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: #fff;
  margin: 0 0 0.6rem;
  line-height: 1.2;
`;

const LastUpdated = styled.p`
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.35);
  margin: 0 0 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  i { color: rgba(255, 153, 51, 0.5); }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, rgba(255,153,51,0.3), transparent);
  margin-bottom: 2.5rem;
`;

export const Section = styled.section`
  margin-bottom: 2.75rem;
  scroll-margin-top: 5rem;

  h2 {
    font-family: "DM Serif Display", serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: #fff;
    margin: 0 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;

    &::before {
      content: "";
      width: 3px;
      height: 1.1em;
      background: #FF9933;
      border-radius: 2px;
      flex-shrink: 0;
    }
  }

  h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.85);
    margin: 1.25rem 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-size: 0.82rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.62);
    margin: 0 0 0.9rem;
  }

  ul, ol {
    padding-left: 1.4rem;
    margin: 0 0 0.9rem;

    li {
      font-size: 0.9rem;
      line-height: 1.75;
      color: rgba(255, 255, 255, 0.62);
      margin-bottom: 0.3rem;
    }
  }

  a {
    color: #FF9933;
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover { color: #FFD700; }
  }

  strong {
    color: rgba(255, 255, 255, 0.85);
    font-weight: 600;
  }

  code {
    font-family: monospace;
    background: rgba(255, 153, 51, 0.1);
    border: 1px solid rgba(255, 153, 51, 0.2);
    padding: 0.1em 0.4em;
    border-radius: 4px;
    font-size: 0.85em;
    color: #FFD700;
  }
`;

const InfoBox = styled.div`
  background: rgba(255, 153, 51, 0.07);
  border: 1px solid rgba(255, 153, 51, 0.25);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.65;
  margin-bottom: 1rem;

  strong { color: #FF9933; }
`;

const LEGAL_PAGES = [
  { href: "/privacy-policy",        labelKey: "privacy" as const },
  { href: "/terms",                  labelKey: "terms" as const },
  { href: "/refund-policy",          labelKey: "refund" as const },
  { href: "/disclaimer",             labelKey: "disclaimer" as const },
  { href: "/community-guidelines",   labelKey: "community" as const },
  { href: "/grievance-redressal",    labelKey: "grievance" as const },
];

interface TocItem { id: string; label: string }

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  toc: TocItem[];
  currentHref: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  toc,
  currentHref,
  children,
}: LegalLayoutProps) {
  const { lang } = useLang();
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );

    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [toc]);

  return (
    <PageWrap>
      <Inner>
        {/* Sidebar */}
        <Sidebar>
          <SidebarLabel>{t(T.profile.legalLayout.onThisPage, lang)}</SidebarLabel>
          {toc.map(({ id, label }) => (
            <TocLink key={id} href={`#${id}`} $active={activeId === id}>
              {label}
            </TocLink>
          ))}

          <SidebarDivider />
          <OtherPagesLabel>{t(T.profile.legalLayout.legalPages, lang)}</OtherPagesLabel>
          {LEGAL_PAGES.filter((p) => p.href !== currentHref).map((p) => (
            <OtherPageLink key={p.href} href={p.href}>
              {t(T.profile.legalLinks[p.labelKey], lang)}
            </OtherPageLink>
          ))}
        </Sidebar>

        {/* Content */}
        <Main>
          <Eyebrow>{eyebrow}</Eyebrow>
          <PageTitle>{title}</PageTitle>
          <LastUpdated>
            <i className="fa-regular fa-calendar" />
            {t(T.profile.legalLayout.lastUpdated, lang)} {lastUpdated}
          </LastUpdated>
          <Divider />
          {children}
        </Main>
      </Inner>
    </PageWrap>
  );
}

export { InfoBox };
