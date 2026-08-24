"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { translations as T, t } from "@/lib/translations";

const FooterWrap = styled.footer`
  background: rgba(0, 0, 0, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: "Gothic A1", sans-serif;
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.28);
  margin: 0;
`;

const Links = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.73rem;
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #8dc63f;
  }
`;

export default function Footer() {
  const { lang } = useLang();

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
      <Copyright>
        &copy; {new Date().getFullYear()} Paramvani. {t(T.footer.copyright, lang)} &nbsp;
        <span style={{ color: "rgba(141,198,63,0.5)" }}>🪷</span>
      </Copyright>
      <Links aria-label="Legal pages">
        {LINKS.map((l) => (
          <FooterLink key={l.href} href={l.href}>
            {l.label}
          </FooterLink>
        ))}
      </Links>
    </FooterWrap>
  );
}
