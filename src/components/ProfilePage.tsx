"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useLang } from "@/context/LanguageContext";
import { translations as T, t } from "@/lib/translations";
import { auth, db } from "@/lib/firebase/client";
import { deleteUser } from "firebase/auth";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import SubscriptionModal from "./SubscriptionModal";

// ─── Animations ──────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%,100% { box-shadow: 0 0 0 3px rgba(141,198,63,0.15); }
  50%      { box-shadow: 0 0 0 6px rgba(141,198,63,0.08); }
`;

// ─── Layout ──────────────────────────────────────────────────────────────────
const Page = styled.div`
  min-height: 100vh;
  background: radial-gradient(ellipse at top, #0d1f0d 0%, #000 70%);
  color: #fff;
  font-family: "Gothic A1", sans-serif;
  padding: 72px 1.5rem 5rem;
`;

const Inner = styled.div`
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeUp} 0.5s ease;
`;

// ─── Section card ────────────────────────────────────────────────────────────
const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 1.75rem 1.75rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.13);
  }
`;

const CardTitle = styled.div`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i { color: #8dc63f; font-size: 0.75rem; }
`;

// ─── Hero / avatar ───────────────────────────────────────────────────────────
const HeroCard = styled(Card)`
  background: linear-gradient(135deg, rgba(141,198,63,0.06) 0%, rgba(0,0,0,0) 60%);
  border-color: rgba(141, 198, 63, 0.2);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const Avatar = styled.div<{ $src?: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${(p) => (p.$src ? `url(${p.$src}) center/cover` : "rgba(141,198,63,0.2)")};
  border: 2px solid rgba(141, 198, 63, 0.4);
  flex-shrink: 0;
  animation: ${pulseGlow} 4s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const HeroInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const UserName = styled.h1`
  font-family: "DM Serif Display", serif;
  font-size: 1.65rem;
  font-weight: 400;
  margin: 0 0 0.2rem;
  color: #fff;
`;

const UserEmail = styled.p`
  font-size: 0.83rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 0.5rem;
`;

const JoinedBadge = styled.span`
  font-size: 0.72rem;
  color: rgba(141, 198, 63, 0.7);
  background: rgba(141, 198, 63, 0.1);
  border: 1px solid rgba(141, 198, 63, 0.2);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
`;

// ─── Subscription status ─────────────────────────────────────────────────────
const SubRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SubBadge = styled.div<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  background: ${(p) => (p.$active ? "rgba(141,198,63,0.12)" : "rgba(255,255,255,0.06)")};
  border: 1px solid ${(p) => (p.$active ? "rgba(141,198,63,0.4)" : "rgba(255,255,255,0.12)")};
  color: ${(p) => (p.$active ? "#8dc63f" : "rgba(255,255,255,0.5)")};

  i { font-size: 0.75rem; }
`;

const ProgressBar = styled.div<{ $pct: number }>`
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.08);
  margin-top: 0.75rem;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: ${(p) => p.$pct}%;
    background: linear-gradient(90deg, #7ab832, #8dc63f);
    border-radius: 2px;
    transition: width 1s ease;
  }
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 0.35rem;
`;

// ─── Stats grid ──────────────────────────────────────────────────────────────
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
`;

const StatItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;

  .value {
    font-family: "DM Serif Display", serif;
    font-size: 1.8rem;
    color: #8dc63f;
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  .label {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.38);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`;

// ─── Actions grid ─────────────────────────────────────────────────────────────
const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const ActionBtn = styled.button<{ $variant?: "danger" | "warning" | "primary" }>`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.85rem 1.1rem;
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: left;
  transition: all 0.2s;
  background: transparent;

  ${(p) =>
    p.$variant === "danger"
      ? `
    border-color: rgba(255,80,80,0.25);
    color: #ff8080;
    &:hover { background: rgba(255,80,80,0.08); border-color: rgba(255,80,80,0.45); }
  `
      : p.$variant === "warning"
      ? `
    border-color: rgba(255,180,50,0.25);
    color: #ffbe55;
    &:hover { background: rgba(255,180,50,0.08); border-color: rgba(255,180,50,0.45); }
  `
      : p.$variant === "primary"
      ? `
    border-color: rgba(141,198,63,0.35);
    color: #8dc63f;
    &:hover { background: rgba(141,198,63,0.08); border-color: rgba(141,198,63,0.55); }
  `
      : `
    border-color: rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.65);
    &:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.25); }
  `}

  i { font-size: 1rem; width: 20px; text-align: center; }

  .btn-text { flex: 1; }
  .btn-label { display: block; }
  .btn-desc { display: block; font-size: 0.72rem; font-weight: 400; opacity: 0.6; margin-top: 0.1rem; }
`;

// ─── Legal links ─────────────────────────────────────────────────────────────
const LegalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.5rem;
`;

const LegalLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.9rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.8);
  }
`;

// ─── Delete confirmation modal ────────────────────────────────────────────────
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(12px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const DeleteModal = styled.div`
  background: #0d1f0d;
  border: 1px solid rgba(255, 80, 80, 0.3);
  border-radius: 20px;
  padding: 2rem;
  max-width: 440px;
  width: 100%;
  animation: ${fadeUp} 0.3s ease;

  h3 {
    font-family: "DM Serif Display", serif;
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0 0 0.75rem;
    color: #ff8080;
  }

  p {
    font-size: 0.87rem;
    color: rgba(255,255,255,0.55);
    line-height: 1.65;
    margin: 0 0 1.25rem;
  }
`;

const ConfirmInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,80,80,0.3);
  border-radius: 10px;
  color: #fff;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus { border-color: rgba(255,80,80,0.6); }
  &::placeholder { color: rgba(255,255,255,0.25); }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    flex: 1;
    padding: 0.8rem;
    border-radius: 10px;
    border: none;
    font-family: "Gothic A1", sans-serif;
    font-weight: 600;
    font-size: 0.88rem;
    cursor: pointer;
    transition: all 0.2s;

    &:first-child {
      background: rgba(255,255,255,0.07);
      color: rgba(255,255,255,0.7);
      border: 1px solid rgba(255,255,255,0.12);
      &:hover { background: rgba(255,255,255,0.12); }
    }

    &:last-child {
      background: rgba(255,80,80,0.15);
      color: #ff8080;
      border: 1px solid rgba(255,80,80,0.3);
      &:not(:disabled):hover { background: rgba(255,80,80,0.25); }
      &:disabled { opacity: 0.45; cursor: not-allowed; }
    }
  }
`;

// ─── Legal pages config ───────────────────────────────────────────────────────
const LEGAL = [
  { href: "/privacy-policy",       icon: "fa-shield-halved", labelKey: "privacy" as const },
  { href: "/terms",                 icon: "fa-file-contract", labelKey: "terms" as const },
  { href: "/refund-policy",         icon: "fa-rotate-left",   labelKey: "refund" as const },
  { href: "/disclaimer",            icon: "fa-circle-info",   labelKey: "disclaimer" as const },
  { href: "/community-guidelines",  icon: "fa-users",         labelKey: "community" as const },
  { href: "/grievance-redressal",   icon: "fa-headset",       labelKey: "grievance" as const },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const { user, profile, signOut } = useAuth();
  const { lang } = useLang();
  const router = useRouter();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteInput, setDeleteInput] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  if (!user || !profile) return null;

  // Subscription info
  const now = Date.now();
  const isActive =
    profile.subscriptionType !== "free" &&
    profile.subscriptionExpiry != null &&
    profile.subscriptionExpiry > now;

  const daysLeft = isActive && profile.subscriptionExpiry
    ? Math.ceil((profile.subscriptionExpiry - now) / 86_400_000)
    : 0;

  const planDuration = profile.subscriptionType === "weekly" ? 7 : 30;
  const pct = isActive ? Math.min(100, (daysLeft / planDuration) * 100) : 0;

  // Joined date
  const joined = profile.createdAt
    ? new Date(profile.createdAt).toLocaleDateString(lang === 'hi' ? "hi-IN" : "en-IN", { year: "numeric", month: "long", day: "numeric" })
    : "—";

  // Handle account deletion
  const handleDeleteAccount = async () => {
    if (!auth.currentUser) return;
    setDeleting(true);
    setDeleteError(null);
    try {
      // Write deletion request to Firestore before deleting (for audit)
      await updateDoc(doc(db, "users", user.uid), {
        deletionRequestedAt: serverTimestamp(),
        deletionStatus: "requested",
      });
      // Delete Firebase Auth account
      await deleteUser(auth.currentUser);
      router.replace("/");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Deletion failed.";
      if (msg.includes("requires-recent-login")) {
        setDeleteError("For security, please sign out and sign back in before deleting your account.");
      } else {
        setDeleteError(msg);
      }
      setDeleting(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <Page>
      <Inner>
        {/* ── Hero ── */}
        <HeroCard>
          <Avatar $src={user.photoURL ?? undefined}>
            {!user.photoURL && "🙏"}
          </Avatar>
          <HeroInfo>
            <UserName>{profile.name || "Devotee"}</UserName>
            <UserEmail>{profile.email}</UserEmail>
            <JoinedBadge>{t(T.profile.joined, lang)} {joined}</JoinedBadge>
          </HeroInfo>
        </HeroCard>

        {/* ── Subscription ── */}
        <Card>
          <CardTitle><i className="fa-solid fa-crown" /> {t(T.profile.subscription, lang)}</CardTitle>
          <SubRow>
            <div>
              <SubBadge $active={isActive}>
                <i className={`fa-solid ${isActive ? "fa-circle-check" : "fa-circle-xmark"}`} />
                {isActive
                  ? `${profile.subscriptionType === "weekly" ? t(T.profile.sparkPlan, lang) : t(T.profile.devotePlan, lang)} · ${daysLeft} ${t(T.profile.daysLeft, lang)}`
                  : t(T.profile.freePlan, lang)}
              </SubBadge>
            </div>
            {!isActive && (
              <ActionBtn $variant="primary" onClick={() => setShowSubscriptionModal(true)}>
                <i className="fa-solid fa-arrow-up-right-dots" />
                <span className="btn-text">
                  <span className="btn-label">{t(T.profile.upgrade, lang)}</span>
                  <span className="btn-desc">{t(T.profile.unlockUnlimited, lang)}</span>
                </span>
              </ActionBtn>
            )}
          </SubRow>
          {isActive && (
            <>
              <ProgressBar $pct={pct} />
              <ProgressLabel>
                <span>{daysLeft} {t(T.profile.daysLeft, lang)}</span>
                <span>{planDuration} {t(T.profile.planDays, lang)}</span>
              </ProgressLabel>
            </>
          )}
        </Card>

        {/* ── Usage Stats ── */}
        <Card>
          <CardTitle><i className="fa-solid fa-chart-simple" /> {t(T.profile.usage, lang)}</CardTitle>
          <StatsGrid>
            <StatItem>
              <div className="value">{isActive ? "∞" : profile.freeCredits}</div>
              <div className="label">{isActive ? "Unlimited" : "Credits Left"}</div>
            </StatItem>
            <StatItem>
              <div className="value">{profile.subscriptionType === "free" ? "Free" : profile.subscriptionType === "weekly" ? "Weekly" : "Monthly"}</div>
              <div className="label">Current Plan</div>
            </StatItem>
            <StatItem>
              <div className="value">3</div>
              <div className="label">Divine Avatars</div>
            </StatItem>
            <StatItem>
              <div className="value">🪷</div>
              <div className="label">Paramvani Member</div>
            </StatItem>
          </StatsGrid>
        </Card>

        {/* ── Account Actions ── */}
        <Card>
          <CardTitle><i className="fa-solid fa-gear" /> {t(T.profile.account, lang)}</CardTitle>
          <ActionsGrid>
            <ActionBtn onClick={handleSignOut}>
              <i className="fa-solid fa-arrow-right-from-bracket" />
              <span className="btn-text">
                <span className="btn-label">{t(T.profile.signOut, lang)}</span>
                <span className="btn-desc">{t(T.profile.signOutDesc, lang)}</span>
              </span>
            </ActionBtn>

            <ActionBtn $variant="danger" onClick={() => setShowDeleteModal(true)}>
              <i className="fa-solid fa-user-xmark" />
              <span className="btn-text">
                <span className="btn-label">{t(T.profile.deleteAccount, lang)}</span>
                <span className="btn-desc">{t(T.profile.deleteDesc, lang)}</span>
              </span>
            </ActionBtn>
          </ActionsGrid>
        </Card>

        {/* ── Legal Links ── */}
        <Card>
          <CardTitle><i className="fa-solid fa-scale-balanced" /> {t(T.profile.legal, lang)}</CardTitle>
          <LegalGrid>
            {LEGAL.map((l) => (
              <LegalLink key={l.href} href={l.href}>
                <i
                  className={`fa-solid ${l.icon}`}
                  style={{
                    color: "rgba(141, 198, 63, 0.65)",
                    fontSize: "0.8rem",
                    minWidth: "14px",
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                />
                {t(T.profile.legalLinks[l.labelKey], lang)}
              </LegalLink>
            ))}
          </LegalGrid>
        </Card>
      </Inner>

      {/* ── Subscription Modal ── */}
      {showSubscriptionModal && (
        <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
      )}

      {/* ── Delete Account Modal ── */}
      {showDeleteModal && (
        <Overlay onClick={() => !deleting && setShowDeleteModal(false)}>
          <DeleteModal onClick={(e) => e.stopPropagation()}>
            <h3>{t(T.profile.deleteModalTitle, lang)}</h3>
            <p>{t(T.profile.deleteModalBody, lang)}</p>
            <p>{t(T.profile.deleteModalConfirm, lang)}</p>
            <ConfirmInput
              value={deleteInput}
              onChange={(e) => { setDeleteInput(e.target.value); setDeleteError(null); }}
              placeholder={t(T.profile.deleteModalPlaceholder, lang)}
              disabled={deleting}
            />
            {deleteError && (
              <p style={{ color: "#ff8080", fontSize: "0.82rem", marginBottom: "1rem" }}>
                {deleteError}
              </p>
            )}
            <ModalActions>
              <button onClick={() => { setShowDeleteModal(false); setDeleteInput(""); setDeleteError(null); }}>
                {t(T.profile.cancel, lang)}
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={deleteInput !== "DELETE" || deleting}
              >
                {deleting ? t(T.profile.deleting, lang) : t(T.profile.deleteAccount, lang)}
              </button>
            </ModalActions>
          </DeleteModal>
        </Overlay>
      )}
    </Page>
  );
}
