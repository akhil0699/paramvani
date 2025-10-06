import React from 'react';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  z-index: 2;
  line-height: 12px;
  position: absolute;
  left: 8rem;
  bottom: 0;
  transform: rotate(-90deg) translate3d(0, 100%, 0);
  transform-origin: left bottom;

  &::before {
    display: block;
    content: "";
    background-color: rgba(255, 255, 255, 0.1);
    width: 7.8rem;
    height: 1px;
    position: absolute;
    left: 0;
    top: 50%;
  }

  @media screen and (max-width: 1100px) {
    left: 4rem;
  }

  @media screen and (max-width: 500px) {
    transform: translate3d(100%, 0, 0) rotate(-90deg);
    right: 3.2rem;
    left: auto;
  }
`;

const ScrollLink = styled.a`
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: left;
  color: rgba(255, 255, 255, 0.4);
  padding-left: 9.6rem;
  margin: 0;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #ffffff;
  }
`;

interface ScrollLinkProps {
  target: string;
  children: React.ReactNode;
}

const ScrollLinkComponent: React.FC<ScrollLinkProps> = ({ target, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContainer>
      <ScrollLink href={target} onClick={handleClick} className="smoothscroll">
        {children}
      </ScrollLink>
    </ScrollContainer>
  );
};

export default ScrollLinkComponent;
