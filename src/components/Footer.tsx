"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { translations as T, t } from "@/lib/translations";

const FooterWrap = styled.footer`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5));
  border-top: 1px solid rgba(255, 153, 51, 0.15);
  padding: 2.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  font-family: "Gothic A1", sans-serif;
  backdrop-filter: blur(10px);
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .brand {
    font-family: "DM Serif Display", serif;
    font-size: 1.4rem;
    color: #FF9933;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .distributor {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.02em;
  }
`;

const Links = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.5rem;
  justify-content: center;
`;

const FooterLink = styled(Link)`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #FF9933;
    text-shadow: 0 0 12px rgba(255, 153, 51, 0.3);
  }
`;

const BottomSection = styled.div`
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
`;

export default function Footer() {
  const { lang } = useLang();
  const pathname = usePathname();

  if (pathname.startsWith('/gita') || pathname.startsWith('/talk') || pathname.startsWith('/choose')) {
    return null;
  }

  const LINKS = [
    { href: "/privacy-policy",       label: t(T.footer.privacy, lang) },
    { href: "/terms",                 label: t(T.footer.terms, lang) },
    { href: "/refund-policy",         label: t(T.footer.refund, lang) },
    { href: "/disclaimer",            label: t(T.footer.disclaimer, lang) },
    { href: "/community-guidelines",  label: t(T.footer.community, lang) },
    { href: "/grievance-redressal",   label: t(T.footer.grievance, lang) },
  ];

  return (
    <FooterWrap>
      <TopSection>
        <CompanyInfo>
          <div className="brand">
            <img src="/logo1.png" alt="Paramvani" style={{ height: "40px" }} />
          </div>
          <div className="distributor">Distributed by Ahaa AI Private Limited</div>
        </CompanyInfo>
        <Links aria-label="Legal pages">
          {LINKS.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </Links>
      </TopSection>
      <BottomSection>
        <Copyright>
          &copy; {new Date().getFullYear()} Paramvani. {t(T.footer.copyright, lang)}
        </Copyright>
      </BottomSection>
    </FooterWrap>
  );
}
