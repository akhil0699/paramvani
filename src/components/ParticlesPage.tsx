import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  background-color: #010e0f;
  overflow: hidden;
  position: relative;

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  max-width: 45%;
  height: 400px;
  background-image: url('/hero-image.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-left: 3rem;
 
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(1, 14, 15, 0.3);
    border-radius: 4px;
    z-index: 1;
  }

  @media screen and (max-width: 1200px) {
    height: 450px;
    margin-left: 2rem;
  }

  @media screen and (max-width: 1024px) {
    height: 400px;
    margin-left: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    flex: none;
    width: 100%;
    max-width: 100%;
    height: 250px;
    margin-left: 0;
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    height: 390px;
  }

  @media screen and (max-width: 400px) {
    height: 350px;
  }
`;

const IntroParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 0;
  margin: 0;
  opacity: .35;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const GridOverlay = styled.div`
  z-index: 2;
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
  z-index: 3;
  height: 100%;
  padding-top: 15vh;
  padding-bottom: 20rem;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    padding-top: 12rem;
    padding-bottom: 16rem;
  }

  @media screen and (max-width: 600px) {
    padding-top: 10rem;
    padding-bottom: 12rem;
  }
`;

const Row = styled.div`
  width: 89%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  z-index: 2;
  align-items: center;

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
    max-width: 90vw;
    flex-direction: column;
    padding-top: 0;
  }

  @media screen and (max-width: 600px) {
    max-width: 95vw;
    padding-bottom: 0;
  }

  @media screen and (max-width: 500px) {
    max-width: 95vw;
  }
`;

const Column = styled.div`
  flex: 1;
  max-width: 55%;
  padding: 0 20px;

  @media screen and (max-width: 800px) {
    max-width: 100%;
    padding: 0 10px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 5px;
  }
`;

const IntroText = styled.div`
  h3 {
    display: inline-block;
    font-family: "Gothic A1", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
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
      font-size: 1rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 0.9rem;
    }
  }

  h1 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: 6.5rem;
    line-height: 1.2;
    color: #ffffff;
    letter-spacing: normal;
    margin-top: 0;
    margin-bottom: .8rem;

    @media screen and (max-width: 1800px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 1600px) {
      font-size: 5.5rem;
    }

    @media screen and (max-width: 1400px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 4.5rem;
    }

    @media screen and (max-width: 1024px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 3.5rem;

      br {
        display: none;
      }
    }

    @media screen and (max-width: 700px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.8rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 2rem;
    }
  }
`;

const IntroBottom = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  position: static;
  margin-top: 2.5rem;
  left: 0;
  bottom: auto;
  gap: 2rem;

  @media screen and (max-width: 800px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.5rem;
    gap: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0;
    margin-top: 1rem;
    gap: 1rem;
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
    margin-top: 2.5rem;
    height: 5rem !important;
    line-height: 4.8rem !important;
    font-size: 0.9rem;
    padding: 0 1.5rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    height: 4.5rem !important;
    line-height: 4.3rem !important;
    font-size: 0.8rem;
    padding: 0 1.2rem;
    letter-spacing: .4rem;
  }

  @media screen and (max-width: 400px) {
    height: 4rem !important;
    line-height: 3.8rem !important;
    font-size: 0.75rem;
    padding: 0 1rem;
    letter-spacing: .3rem;
  }
`;

const ParticlesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && particlesRef.current) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particlesRef.current.appendChild(canvas);

      // Particle class
      class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        opacity: number;
        life: number;
        maxLife: number;

        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = (Math.random() - 0.5) * 0.3;
          this.vy = (Math.random() - 0.5) * 0.3;
          this.size = Math.random() * 1.5 + 0.5;
          this.opacity = Math.random() * 0.6 + 0.2;
          this.life = 0;
          this.maxLife = Math.random() * 400 + 300;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.life++;

          // Add some floating motion (slower)
          this.vx += (Math.random() - 0.5) * 0.005;
          this.vy += (Math.random() - 0.5) * 0.005;

          // Constrain velocity (slower max speed)
          this.vx = Math.max(-0.8, Math.min(0.8, this.vx));
          this.vy = Math.max(-0.8, Math.min(0.8, this.vy));

          // Pulsing opacity (slower)
          this.opacity = Math.max(0.1, Math.min(0.7, this.opacity + (Math.random() - 0.5) * 0.003));

          // Reset if particle is dead or out of bounds
          if (this.life > this.maxLife || this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.6 + 0.2;
            this.life = 0;
            this.maxLife = Math.random() * 400 + 300;
          }
        }

        draw() {
          if (!ctx) return;
          
          ctx.save();
          ctx.globalAlpha = this.opacity;
          
          // Create glow effect (smaller)
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
          gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw main particle
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        }
      }

      // Create particles
      const particles: Particle[] = [];
      for (let i = 0; i < 120; i++) {
        particles.push(new Particle());
      }

      // Animation loop
      const animate = () => {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        requestAnimationFrame(animate);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      };
    }
  }, [isLoading]);

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      <SIntro id="intro">
        <Header />
        
        <IntroParticles ref={particlesRef} id="particles-js" />
        
        <GridOverlay>
          <div></div>
        </GridOverlay>

        <IntroContent>
          <Row>
            <Column>
              <IntroText>
                <h3>Dev Vani</h3>
                <h1>
                मन की बात प्रभु संग।<br/>
यहाँ प्रार्थना बनाती है शांति—<br/>
तनाव से मुक्ति की राह।
                </h1>
              </IntroText>

              <IntroBottom>
                <NotifyButton onClick={() => navigate('/talk')}>
                Connect Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 12l-9-9v7h-15v4h15v7z"/>
                  </svg>
                </NotifyButton>
              </IntroBottom>
            </Column>
            
            <HeroImage />
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

export default ParticlesPage;
