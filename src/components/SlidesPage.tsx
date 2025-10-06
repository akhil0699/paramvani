import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Preloader from './Preloader';
import Modal from './Modal';
import SocialLinks from './SocialLinks';
import ScrollLinkComponent from './ScrollLink';
import InfoSection from './InfoSection';

const SIntro = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 82rem;
  background-color: #000000;
  overflow: hidden;
  position: relative;
`;

const IntroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IntroSliderImg = styled.div<{ isActive: boolean; opacity: number }>`
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 100vh;
  min-height: 82rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 3s ease-in-out;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: ${props => props.opacity};
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, black 100%);
    opacity: .8;
  }
`;

const GridOverlay = styled.div`
  z-index: 1;
  display: block;
  width: 89%;
  height: 100%;
  max-width: 1200px;
  opacity: .65;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transform: translate3d(-50%, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;

  > div,
  &::before,
  &::after {
    background-color: rgba(255, 255, 255, 0.1);
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    content: "";
    left: 25%;
  }

  &::after {
    content: "";
    right: 25%;
  }

  > div {
    left: 50%;
  }

  @media screen and (max-width: 1600px) {
    border-right: none !important;
    border-left: none !important;

    &::before {
      left: 22.5%;
    }

    &::after {
      right: 22.5%;
    }
  }

  @media screen and (max-width: 400px) {
    > div,
    &::before,
    &::after {
      display: none;
    }
  }
`;

const IntroContent = styled.div`
  z-index: 2;
  height: 100%;
  padding-top: 20vh;
  padding-bottom: 24rem;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  width: 89%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 1700px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1600px) {
    max-width: 1080px;
  }

  @media screen and (max-width: 1400px) {
    max-width: 900px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 600px;
  }

  @media screen and (max-width: 800px) {
    max-width: 70vw;
    padding-top: 16rem;
  }

  @media screen and (max-width: 600px) {
    max-width: 80vw;
    padding-bottom: 12rem;
  }

  @media screen and (max-width: 500px) {
    max-width: 90vw;
  }
`;

const Column = styled.div`
  flex: 1 1 0%;
  padding: 0 20px;
`;

const IntroText = styled.div`
  h3 {
    display: inline-block;
    font-family: "Gothic A1", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: uppercase;
    letter-spacing: .3em;
    color: #8dc63f;
    padding-left: .6rem;
    margin-top: 0;
    margin-bottom: .8rem;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 7.2rem;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.15);
      position: absolute;
      top: 1rem;
      right: calc(100% + 2.8rem);
    }

    @media screen and (max-width: 1100px) {
      &::before {
        width: 4rem;
      }
    }

    @media screen and (max-width: 800px) {
      &::before {
        display: none;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h1 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: 8rem;
    line-height: 1.2;
    color: #ffffff;
    letter-spacing: normal;
    margin-top: 0;
    margin-bottom: .8rem;

    @media screen and (max-width: 1800px) {
      font-size: 7.3rem;
    }

    @media screen and (max-width: 1600px) {
      font-size: 7rem;
    }

    @media screen and (max-width: 1400px) {
      font-size: 6.6rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 6.3rem;
    }

    @media screen and (max-width: 1024px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 4.8rem;

      br {
        display: none;
      }
    }

    @media screen and (max-width: 700px) {
      font-size: 4.2rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 3.8rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 3.4rem;
    }
  }
`;

const IntroBottom = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  position: static;
  margin-top: 3rem;
  left: 0;
  bottom: auto;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0;
  }
`;

const NotifyButton = styled.button`
  z-index: 2;
  font-size: 1rem;
  margin: 0;
  height: 5.6rem !important;
  line-height: 5.4rem !important;
  border: 1px solid #ffffff !important;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background: transparent;
  padding: 0 2rem;
  font-family: "Gothic A1", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .6rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    fill: #ffffff;
    height: 1rem;
    width: 1rem;
    margin-left: .4rem;
  }

  &::before {
    z-index: -1;
    content: "";
    height: 100%;
    width: 0;
    background-color: #ffffff;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    color: #000000;

    svg {
      fill: #000000;
    }

    &::before {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 3.6rem;
  }
`;

const slides = [
  { image: '/images/slides/slide-01.jpg', opacity: 0.4 },
  { image: '/images/slides/slide-02.jpg', opacity: 0.5 },
  { image: '/images/slides/slide-03.jpg', opacity: 0.5 }
];

const SlidesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      <SIntro id="intro">
        <Header />
        
        <IntroSlider>
          {slides.map((slide, index) => (
            <IntroSliderImg
              key={index}
              isActive={index === currentSlide}
              opacity={slide.opacity}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </IntroSlider>
        
        <GridOverlay>
          <div></div>
        </GridOverlay>

        <IntroContent>
          <Row>
            <Column>
              <IntroText>
                <h3>Coming Soon</h3>
                <h1>
                  Get ready everyone. <br />
                  We are currently <br />
                  working on a super <br />
                  awesome website.
                </h1>
              </IntroText>

              <IntroBottom>
                <NotifyButton onClick={() => setIsModalOpen(true)}>
                  Notify Me
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 12l-9-9v7h-15v4h15v7z"/>
                  </svg>
                </NotifyButton>
              </IntroBottom>
            </Column>
          </Row>
        </IntroContent>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <SocialLinks />
        <ScrollLinkComponent target="#info">Scroll For More</ScrollLinkComponent>
      </SIntro>

      <InfoSection />
    </>
  );
};

export default SlidesPage;
