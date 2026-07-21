"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useAuth } from '@/context/AuthContext';
import SubscriptionModal from './SubscriptionModal';

const SHeader = styled.header`
  z-index: 100;
  width: 100%;
  height: 8rem;
  position: absolute;
  top: 4rem;
  left: 0;
`;

const HeaderLogo = styled.div`
  z-index: 101;
  display: inline-block;
  margin: 0;
  padding: 0;
  transition: all .3s;
  transform: translate3d(0, -50%, 0);
  position: absolute;
  right: 8rem;
  top: 50%;

  a {
    display: block;
    padding: 0;
    outline: 0;
    border: none;
  }

  img {
    width: auto;
    height: 40px;
  }

  @media screen and (max-width: 1100px) {
    right: 4rem;
  }

  @media screen and (max-width: 800px) {
    img {
      width: auto;
      height: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      width: auto;
      height: 40px;
    }
  }

  @media screen and (max-width: 500px) {
    right: 3.2rem;
  }

  @media screen and (max-width: 400px) {
    right: auto;
    left: 4.2rem;
  }
`;

const HeaderEmail = styled.div`
  font-size: 1.5rem;
  line-height: 3.2rem;
  transform: translate3d(0, -50%, 0);
  position: absolute;
  top: 50%;
  left: 8rem;

  svg {
    fill: #72a130;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .4rem;
    transform: translate3d(0, 3px, 0);
  }

  a {
    color: rgba(255, 255, 255, 0.4);
    display: inline-block;
    position: relative;
    text-decoration: none;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background-color: #72a130;
      transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      position: absolute;
      left: 0;
      bottom: 0;
    }

    &:hover {
      color: #ffffff;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 1100px) {
    left: 4rem;
  }

  @media screen and (max-width: 500px) {
    left: 3.2rem;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const HeaderAuth = styled.div`
  transform: translate3d(0, -50%, 0);
  position: absolute;
  top: 50%;
  left: 8rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media screen and (max-width: 1100px) {
    left: 4rem;
  }

  @media screen and (max-width: 500px) {
    left: 3.2rem;
  }

  @media screen and (max-width: 400px) {
    /* To avoid overlap with the left-aligned logo on tiny screens */
    left: auto;
    right: 1rem;
  }
`;

const BalancePill = styled.div`
  background: rgba(114, 161, 48, 0.2);
  border: 1px solid rgba(114, 161, 48, 0.5);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    background: rgba(114, 161, 48, 0.4);
  }

  i {
    color: #ffd700;
  }
`;

const LogoutButton = styled.button`
  background: rgba(255, 60, 60, 0.2);
  border: 1px solid rgba(255, 60, 60, 0.4);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 60, 60, 0.4);
  }
`;

const Header: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const expiry = profile?.subscriptionExpiry ?? 0;
  const isUnlimited = 
    profile?.subscriptionType !== "free" && 
    profile?.subscriptionType !== undefined &&
    expiry > Date.now();

  const remainingDays = isUnlimited && expiry > 0
    ? Math.ceil((expiry - Date.now()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <SHeader>
      <HeaderLogo>
        <Link href="/" className="site-logo">
          <img src="/logo-1.png" alt="Homepage" />
        </Link>
      </HeaderLogo>

      {!user && (
        <HeaderEmail>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/>
          </svg>
          <a href="mailto:hello@paramvani.com">hello@paramvani.com</a>
        </HeaderEmail>
      )}

      {user && profile && (
        <HeaderAuth>
          <BalancePill onClick={() => {
            if (!isUnlimited) {
              setShowSubscriptionModal(true);
            }
          }}>
            <i className="fa-solid fa-coins"></i>
            {isUnlimited ? `Unlimited (${remainingDays}d left)` : `${profile.freeCredits} Credits`}
          </BalancePill>
          <LogoutButton onClick={signOut} title="Sign Out">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </LogoutButton>
        </HeaderAuth>
      )}

      {showSubscriptionModal && (
        <SubscriptionModal onClose={() => setShowSubscriptionModal(false)} />
      )}
    </SHeader>
  );
};

export default Header;
