import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Header: React.FC = () => {
  return (
    <SHeader>
      <HeaderLogo>
        <Link to="/" className="site-logo">
          <img src="/logo-1.png" alt="Homepage" />
        </Link>
      </HeaderLogo>

      <HeaderEmail>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/>
        </svg>
        <a href="mailto:hello@paramvani.com">hello@paramvani.com</a>
      </HeaderEmail>
    </SHeader>
  );
};

export default Header;
