import React from 'react';
import styled from 'styled-components';

const SocialList = styled.ul`
  z-index: 2;
  list-style: none;
  font-size: 13px;
  line-height: 1.6rem;
  margin: 0;
  padding-bottom: 9.6rem;
  width: 1.5rem;
  text-align: center;
  position: absolute;
  right: 8rem;
  bottom: 0;

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 7.8rem;
    background-color: rgba(255, 255, 255, 0.4);
    position: absolute;
    left: 50%;
    bottom: 0;
  }

  @media screen and (max-width: 1100px) {
    right: 4rem;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const SocialItem = styled.li`
  padding-left: 0;
  margin-bottom: 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus,
    &:active {
      color: #ffffff;
    }
  }
`;

const SocialLinks: React.FC = () => {
  return (
    <SocialList>
      <SocialItem>
        <a href="#0" aria-label="Facebook">
          <i className="fab fa-facebook" aria-hidden="true"></i>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="#0" aria-label="Twitter">
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="#0" aria-label="Instagram">
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="#0" aria-label="Dribbble">
          <i className="fab fa-dribbble" aria-hidden="true"></i>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="#0" aria-label="Behance">
          <i className="fab fa-behance" aria-hidden="true"></i>
        </a>
      </SocialItem>
    </SocialList>
  );
};

export default SocialLinks;
