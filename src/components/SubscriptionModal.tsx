"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/context/AuthContext";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #112211;
  border: 1px solid rgba(141, 198, 63, 0.3);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  width: 90%;
  color: white;
  text-align: center;
  position: relative;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);

  h2 {
    font-size: 2rem;
    color: #8dc63f;
    margin-bottom: 1rem;
    font-family: "Gothic A1", sans-serif;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div<{ $highlight?: boolean }>`
  background: ${(props) => (props.$highlight ? "rgba(141, 198, 63, 0.1)" : "rgba(255, 255, 255, 0.05)")};
  border: 1px solid ${(props) => (props.$highlight ? "#8dc63f" : "rgba(255, 255, 255, 0.1)")};
  border-radius: 15px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  .duration {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .price {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => (props.$highlight ? "#8dc63f" : "white")};
    margin-bottom: 1rem;

    span {
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .features {
    flex: 1;
    margin-bottom: 1.5rem;
    text-align: left;
    
    li {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i {
        color: #8dc63f;
      }
    }
  }

  button {
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    background: ${(props) => (props.$highlight ? "#8dc63f" : "rgba(255, 255, 255, 0.1)")};
    color: ${(props) => (props.$highlight ? "black" : "white")};
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${(props) => (props.$highlight ? "#9ed84f" : "rgba(255, 255, 255, 0.2)")};
    }
  }
`;

export default function SubscriptionModal({ onClose }: { onClose: () => void }) {
  const { user, profile } = useAuth();
  const [loadingPlan, setLoadingPlan] = useState<"weekly" | "monthly" | null>(null);

  const hasExpired = profile?.subscriptionExpiry && profile.subscriptionExpiry < Date.now();

  const handleSubscribe = async (plan: "weekly" | "monthly") => {
    if (!user) return;
    
    setLoadingPlan(plan);
    
    // MOCK PAYMENT PROCESS
    // In production, you would redirect to Razorpay/Stripe here.
    // For now, we instantly activate the subscription in Firestore.
    
    try {
      const durationMs = plan === "weekly" ? 7 * 24 * 60 * 60 * 1000 : 30 * 24 * 60 * 60 * 1000;
      const expiry = Date.now() + durationMs;

      await updateDoc(doc(db, "users", user.uid), {
        subscriptionType: plan,
        subscriptionExpiry: expiry,
      });

      // Show success and close
      alert(`Payment Successful! You are now subscribed to the ${plan} plan.`);
      onClose();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Failed to process payment");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}><i className="fa-solid fa-xmark"></i></CloseButton>
        <h2>Get Unlimited Access</h2>
        <p>
          {hasExpired 
            ? "Your subscription has expired. Subscribe again to continue your spiritual journey without any limits." 
            : "You have run out of free credits. Subscribe to continue your spiritual journey without any limits."}
        </p>

        <PlansGrid>
          <PlanCard>
            <div className="duration">1 Week</div>
            <div className="price">₹79</div>
            <ul className="features">
              <li><i className="fa-solid fa-check"></i> Unlimited Talks</li>
              <li><i className="fa-solid fa-check"></i> All Avatars</li>
              <li><i className="fa-solid fa-check"></i> No interruptions</li>
            </ul>
            <button 
              onClick={() => handleSubscribe("weekly")} 
              disabled={loadingPlan !== null}
            >
              {loadingPlan === "weekly" ? "Processing..." : "Select Plan"}
            </button>
          </PlanCard>

          <PlanCard $highlight>
            <div className="duration">1 Month</div>
            <div className="price">₹149 <span>/mo</span></div>
            <ul className="features">
              <li><i className="fa-solid fa-check"></i> Unlimited Talks</li>
              <li><i className="fa-solid fa-check"></i> All Avatars</li>
              <li><i className="fa-solid fa-check"></i> Priority Access</li>
              <li><i className="fa-solid fa-check"></i> Save 50%</li>
            </ul>
            <button 
              onClick={() => handleSubscribe("monthly")}
              disabled={loadingPlan !== null}
            >
              {loadingPlan === "monthly" ? "Processing..." : "Select Plan"}
            </button>
          </PlanCard>
        </PlansGrid>
      </ModalContent>
    </ModalOverlay>
  );
}
