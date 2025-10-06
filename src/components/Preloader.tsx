import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0.2;
  }
  80% {
    opacity: 1;
  }
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1d1d1d;
  z-index: 500;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  padding: 0;
  display: inline-block;
  transform: translate3d(-50%, -50%, 0);
`;

const LoaderDot = styled.div`
  content: "";
  background: #ffffff;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  animation: ${fadeAnimation} 1.6s infinite ease;
  animation-delay: 0.4s;

  &:nth-of-type(1) {
    left: 15px;
    animation-delay: 0.8s;
  }

  &:nth-of-type(3) {
    left: -15px;
    animation-delay: 0s;
  }
`;

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <PreloaderContainer>
      <Loader>
        <LoaderDot />
        <LoaderDot />
        <LoaderDot />
      </Loader>
    </PreloaderContainer>
  );
};

export default Preloader;
