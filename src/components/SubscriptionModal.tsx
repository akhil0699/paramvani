"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase/client";

// ─── Razorpay global type ────────────────────────────────────────────────────
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: new (options: Record<string, unknown>) => { open(): void };
  }
}

// ─── Animations ──────────────────────────────────────────────────────────────
const backdropFadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const modalSlideUp = keyframes`
  from { opacity: 0; transform: translateY(28px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 1px rgba(141,198,63,0.45), 0 0 28px rgba(141,198,63,0.12); }
  50%       { box-shadow: 0 0 0 1px rgba(141,198,63,0.75), 0 0 44px rgba(141,198,63,0.22); }
`;

const badgePop = keyframes`
  from { transform: translateY(-50%) scale(0.8); opacity: 0; }
  to   { transform: translateY(-50%) scale(1);   opacity: 1; }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

// ─── Overlay & Shell ─────────────────────────────────────────────────────────
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  animation: ${backdropFadeIn} 0.25s ease;
`;

const Shell = styled.div`
  position: relative;
  background: linear-gradient(145deg, #0d1f0d 0%, #0a1a0a 60%, #061206 100%);
  border: 1px solid rgba(141, 198, 63, 0.18);
  border-radius: 24px;
  padding: 2.5rem 2rem 2rem;
  max-width: 640px;
  width: 100%;
  color: #fff;
  animation: ${modalSlideUp} 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: hidden;

  /* subtle top-edge highlight */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 55%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(141, 198, 63, 0.6),
      transparent
    );
  }

  @media (max-width: 480px) {
    padding: 2rem 1.25rem 1.5rem;
    border-radius: 20px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 1.25rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.25);
  }
`;

// ─── Header ──────────────────────────────────────────────────────────────────
const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const OmBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(141, 198, 63, 0.1);
  border: 1px solid rgba(141, 198, 63, 0.28);
  border-radius: 999px;
  padding: 0.3rem 0.9rem;
  margin-bottom: 1rem;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8dc63f;
`;

const Title = styled.h2`
  font-family: "DM Serif Display", serif !important;
  font-size: clamp(1.6rem, 4vw, 2.15rem) !important;
  font-weight: 400 !important;
  color: #fff !important;
  margin: 0 0 0.55rem !important;
  line-height: 1.25 !important;
`;

const Subtitle = styled.p`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.52);
  margin: 0 !important;
  line-height: 1.55;
  max-width: 400px;
  margin-inline: auto !important;
`;

const ExpiredNote = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.25);
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;
  color: #ff8a8a;
  margin-top: 0.75rem;
`;

// ─── Plans grid ──────────────────────────────────────────────────────────────
const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// ─── Regular plan card ───────────────────────────────────────────────────────
const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.6rem 1.4rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s, background 0.25s, transform 0.25s;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

// ─── Featured (popular) plan card ────────────────────────────────────────────
const FeaturedCard = styled(Card)`
  background: rgba(141, 198, 63, 0.06);
  border-color: rgba(141, 198, 63, 0.45);
  position: relative;
  animation: ${glowPulse} 3.5s ease-in-out infinite;

  &:hover {
    background: rgba(141, 198, 63, 0.1);
    border-color: rgba(141, 198, 63, 0.7);
    transform: translateY(-3px);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #7ab832, #8dc63f, #a8e05a);
  background-size: 200% auto;
  animation: ${shimmer} 3s linear infinite, ${badgePop} 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
  color: #0a1a0a;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.28rem 0.9rem;
  border-radius: 999px;
  white-space: nowrap;
`;

const PlanName = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 0.6rem;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
`;

const PriceCurrency = styled.span`
  font-family: "Gothic A1", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
`;

const PriceAmount = styled.span<{ $accent?: boolean }>`
  font-family: "DM Serif Display", serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1;
  color: ${(p) => (p.$accent ? "#8dc63f" : "#fff")};
`;

const PricePeriod = styled.span`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.38);
  margin-left: 0.1rem;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 1rem 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.83rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.4;
`;

const CheckIcon = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(141, 198, 63, 0.15);
  border: 1px solid rgba(141, 198, 63, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.6rem;
  color: #8dc63f;
`;

// ─── CTA buttons ─────────────────────────────────────────────────────────────
const PlanBtn = styled.button`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.9);
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.22s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  &:not(:disabled):active {
    transform: translateY(0);
  }
`;

const PrimaryBtn = styled(PlanBtn)`
  background: linear-gradient(135deg, #7ab832, #8dc63f);
  border-color: transparent;
  color: #0a1a0a;
  box-shadow: 0 4px 20px rgba(141, 198, 63, 0.3);

  &:not(:disabled):hover {
    background: linear-gradient(135deg, #8dc63f, #a8e05a);
    border-color: transparent;
    box-shadow: 0 6px 28px rgba(141, 198, 63, 0.42);
  }
`;

const Spinner = styled.span`
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// ─── Error banner ─────────────────────────────────────────────────────────────
const ErrorBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.28);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.82rem;
  color: #ff8a8a;
  text-align: left;
`;

// ─── Trust bar ────────────────────────────────────────────────────────────────
const TrustBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.03em;

  i {
    color: rgba(141, 198, 63, 0.55);
    font-size: 0.75rem;
  }
`;

// ─── Plan config ─────────────────────────────────────────────────────────────
const PLANS = {
  weekly: {
    name: "7-Day Spark",
    price: 79,
    period: "/ week",
    amountPaise: 7900,
    features: [
      "Unlimited divine conversations",
      "All 4 sacred avatars",
      "Voice input & audio responses",
      "No interruptions",
    ],
  },
  monthly: {
    name: "Monthly Devotee",
    price: 149,
    period: "/ month",
    amountPaise: 14900,
    features: [
      "Everything in 7-Day Spark",
      "Priority response speed",
      "Exclusive monthly avatar",
      "Early access to new lords",
      "Save over 50%",
    ],
  },
} as const;

type PlanKey = keyof typeof PLANS;

// ─── Utility: load Razorpay checkout script ──────────────────────────────────
function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) { resolve(true); return; }
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function SubscriptionModal({ onClose }: { onClose: () => void }) {
  const { user, profile } = useAuth();
  const [loadingPlan, setLoadingPlan] = useState<PlanKey | null>(null);
  const [error, setError] = useState<string | null>(null);

  const hasExpired =
    profile?.subscriptionExpiry && profile.subscriptionExpiry < Date.now();

  const handleSubscribe = async (plan: PlanKey) => {
    if (!user) return;
    setError(null);
    setLoadingPlan(plan);

    // Get a fresh ID token once — reuse for all backend calls in this flow
    let idToken: string | undefined;
    try {
      idToken = await auth.currentUser?.getIdToken(/* forceRefresh */ true);
    } catch {
      setError("Session expired. Please refresh the page.");
      setLoadingPlan(null);
      return;
    }

    try {
      // ── Step 1: Load Razorpay checkout script ─────────────────────────────
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error("Failed to load payment gateway. Please check your connection.");
      }

      // ── Step 2: Create order on the backend (auth required) ───────────────
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          amount: PLANS[plan].amountPaise,
          currency: "INR",
        }),
      });

      if (!orderRes.ok) {
        const { error: errMsg } = await orderRes.json() as { error?: string };
        throw new Error(errMsg || "Could not initiate payment. Please try again.");
      }

      const { order_id, amount, currency } = await orderRes.json() as {
        order_id: string;
        amount: number;
        currency: string;
      };

      // ── Step 3: Open Razorpay modal ───────────────────────────────────────
      await new Promise<void>((resolve, reject) => {
        const rzp = new window.Razorpay({
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount,
          currency,
          order_id,
          name: "Paramvani – Dev Vani",
          description: `${PLANS[plan].name} Subscription`,
          image: "/favicon.ico",
          prefill: {
            name: profile?.name || user.displayName || "",
            email: user.email || "",
          },
          theme: { color: "#8dc63f" },

          handler: async (response: {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
          }) => {
            try {
              // ── Step 4: Verify signature on backend & activate subscription ──
              const verifyRes = await fetch("/api/verify-payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${idToken}`,
                },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  plan,
                }),
              });

              if (!verifyRes.ok) {
                const { error: errMsg } = await verifyRes.json() as { error?: string };
                reject(new Error(errMsg || "Payment verified but activation failed."));
                return;
              }

              window.dispatchEvent(
                new CustomEvent("show-toast", {
                  detail: `✅ Payment successful! Your ${PLANS[plan].name} subscription is now active.`,
                })
              );
              resolve();
            } catch (err) {
              reject(err);
            }
          },

          modal: {
            ondismiss: () => {
              fetch("/api/log-payment-event", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${idToken}`,
                },
                body: JSON.stringify({ event: "dismissed", orderId: order_id, plan }),
              }).catch(() => { /* best-effort */ });
              reject(new Error("DISMISSED"));
            },
          },
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (rzp as any).on("payment.failed", (resp: {
          error: { description: string; reason: string; code: string };
        }) => {
          const description = resp.error?.description || "Payment failed. Please try again.";
          fetch("/api/log-payment-event", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${idToken}`,
            },
            body: JSON.stringify({
              event: "payment_failed",
              orderId: order_id,
              plan,
              reason: resp.error?.reason ?? null,
              code: resp.error?.code ?? null,
              description,
            }),
          }).catch(() => { /* best-effort */ });
          reject(new Error(description));
        });

        rzp.open();
      });

      onClose();
    } catch (err) {
      if (err instanceof Error && err.message === "DISMISSED") {
        // user intentionally closed — no error needed
      } else {
        setError(err instanceof Error ? err.message : "Something went wrong.");
        console.error("[SubscriptionModal]", err);
      }
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <Shell onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <CloseBtn onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark" />
        </CloseBtn>

        {/* Header */}
        <Header>
          <OmBadge>
            <span style={{ fontSize: "1rem", lineHeight: 1 }}>🪷</span>
            Paramvani Premium
          </OmBadge>
          <Title>Unlock Full Divine Access</Title>
          <Subtitle>
            Continue your sacred journey — unlimited conversations with the divine.
          </Subtitle>
          {hasExpired && (
            <ExpiredNote>
              <i className="fa-solid fa-clock-rotate-left" />
              Your previous subscription has expired
            </ExpiredNote>
          )}
        </Header>

        {/* Error */}
        {error && (
          <ErrorBanner>
            <i className="fa-solid fa-triangle-exclamation" />
            {error}
          </ErrorBanner>
        )}

        {/* Plans */}
        <PlansGrid>
          {/* Weekly */}
          <Card>
            <PlanName>7-Day Spark</PlanName>
            <PriceRow>
              <PriceCurrency>₹</PriceCurrency>
              <PriceAmount>79</PriceAmount>
              <PricePeriod>/ week</PricePeriod>
            </PriceRow>
            <Divider />
            <FeatureList>
              {PLANS.weekly.features.map((f) => (
                <Feature key={f}>
                  <CheckIcon><i className="fa-solid fa-check" /></CheckIcon>
                  {f}
                </Feature>
              ))}
            </FeatureList>
            <PlanBtn
              id="btn-subscribe-weekly"
              onClick={() => handleSubscribe("weekly")}
              disabled={loadingPlan !== null}
            >
              {loadingPlan === "weekly" ? (
                <><Spinner /> Opening…</>
              ) : (
                <>Get Started &rarr;</>
              )}
            </PlanBtn>
          </Card>

          {/* Monthly (featured) */}
          <FeaturedCard>
            <PopularBadge>✦ Most Popular</PopularBadge>
            <PlanName style={{ color: "rgba(141,198,63,0.65)" }}>Monthly Devotee</PlanName>
            <PriceRow>
              <PriceCurrency style={{ color: "#8dc63f", opacity: 0.8 }}>₹</PriceCurrency>
              <PriceAmount $accent>149</PriceAmount>
              <PricePeriod>/ month</PricePeriod>
            </PriceRow>
            <Divider style={{ background: "rgba(141,198,63,0.12)" }} />
            <FeatureList>
              {PLANS.monthly.features.map((f) => (
                <Feature key={f}>
                  <CheckIcon style={{
                    background: "rgba(141,198,63,0.18)",
                    borderColor: "rgba(141,198,63,0.5)",
                  }}>
                    <i className="fa-solid fa-check" />
                  </CheckIcon>
                  {f}
                </Feature>
              ))}
            </FeatureList>
            <PrimaryBtn
              id="btn-subscribe-monthly"
              onClick={() => handleSubscribe("monthly")}
              disabled={loadingPlan !== null}
            >
              {loadingPlan === "monthly" ? (
                <><Spinner /> Opening…</>
              ) : (
                <>Subscribe Now &rarr;</>
              )}
            </PrimaryBtn>
          </FeaturedCard>
        </PlansGrid>

        {/* Trust bar */}
        <TrustBar>
          <TrustItem>
            <i className="fa-solid fa-lock" />
            Secure Payment
          </TrustItem>
          <TrustItem>
            <i className="fa-solid fa-shield-halved" />
            256-bit Encryption
          </TrustItem>
          <TrustItem>
            <i className="fa-solid fa-rotate-left" />
            Cancel Anytime
          </TrustItem>
          <TrustItem>
            <i className="fa-solid fa-star" />
            Powered by Razorpay
          </TrustItem>
        </TrustBar>
      </Shell>
    </Overlay>
  );
}
