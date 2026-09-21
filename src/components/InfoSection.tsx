import React, { useState } from 'react';
import styled from 'styled-components';
import { useLang } from '@/context/LanguageContext';
import { translations as T, t } from '@/lib/translations';

const SInfo = styled.section`
  padding-top: 6rem;
  padding-bottom: 8rem;
  background-color: #0B0806;
  position: relative;
  color: #FFF8E1;

  @media screen and (max-width: 800px) {
    padding-top: 4rem;
  }

  @media screen and (max-width: 600px) {
    padding-top: 3rem;
  }

  /* Subtle top gradient connector */
  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 153, 51, 0.3), transparent);
    position: absolute;
    top: 0;
    left: 0;
  }

  h1, h4 {
    margin-top: 0;
    color: #FFF8E1;
  }

  p {
    color: rgba(255, 248, 225, 0.75);
  }

  h1 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    padding-bottom: 3.6rem;
    margin-bottom: 3.6rem;
    position: relative;

    &::after {
      display: block;
      content: "";
      width: 8rem;
      height: 1px;
      background-color: #FF9933;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  footer {
    margin-top: 9.6rem;
  }
`;

const VertLine = styled.div`
  width: 1.5rem;
  height: 20rem;
  position: absolute;
  top: 12rem;
  right: 9.2rem;

  &::before {
    content: "";
    display: block;
    height: inherit;
    width: 1px;
    background-color: #FF9933;
    position: absolute;
    left: 50%;
    top: 0;
  }

  @media screen and (max-width: 1100px) {
    right: 5.2rem;
    top: 10rem;
  }

  @media screen and (max-width: 800px) {
    top: 8rem;
    right: 3rem;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Row = styled.div`
  width: 89%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 800px) {
    width: 95%;
    padding: 0 1rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 2rem;
  }
`;

const Column = styled.div`
  flex: 1 1 0%;
  padding: 0 20px;

  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 5px;
  }
`;

const TabNav = styled.nav`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  justify-content: center;
  padding: 0 1.5rem;
`;

const TabNavList = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0 auto;
  padding: 0.6rem 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 153, 51, 0.2);
  border-radius: 16px;
  gap: 0;

  li {
    flex-shrink: 0;
    padding: 0;
    border: none;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255, 248, 225, 0.5);
    padding: 0.7rem 1.8rem;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.25s ease;
    gap: 0.4rem;
    min-width: 70px;

    .tab-icon {
      font-size: 1.3rem;
      line-height: 1;
    }

    .tab-label {
      font-family: 'Gothic A1', sans-serif;
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      line-height: 1;
    }

    &:hover {
      color: rgba(255, 248, 225, 0.85);
      background: rgba(255, 153, 51, 0.06);
    }

    @media screen and (max-width: 600px) {
      padding: 0.6rem 1.3rem;
      min-width: 60px;
    }
  }

  .active a {
    color: #FF9933;
    background: rgba(255, 153, 51, 0.15);
    border-radius: 12px;
  }
`;

const TabContent = styled.div`
  margin-top: 6.4rem;
  position: relative;
  width: 100%;

  @media screen and (max-width: 800px) {
    margin-top: 4rem;
    padding-right: 0;
  }

  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
`;

const TabContentItem = styled.div<{ $isActive: boolean }>`
  display: ${props => props.$isActive ? 'block' : 'none'};
`;

const Lead = styled.p`
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-size: 2.6rem;
  line-height: 1.846;
  margin-bottom: 3.6rem;
  color: #FFF8E1;

  @media screen and (max-width: 1200px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const ServicesList = styled.div`
  margin-top: 4rem;
  counter-reset: ctr;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  @media screen and (max-width: 800px) {
    margin-top: 3rem;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    gap: 1.5rem;
  }

  .services-list__item {
    flex: 0 0 calc(50% - 1.2rem);
    margin-bottom: 2.4rem;

    @media screen and (max-width: 800px) {
      flex: 0 0 100%;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 600px) {
      margin-bottom: 1.5rem;
    }
  }

  .services-list__item-content {
    position: relative;
    padding-right: 60px;

    &::before {
      display: block;
      content: counter(ctr, decimal-leading-zero) ".";
      counter-increment: ctr;
      margin-bottom: 2rem;
      font-family: "Gothic A1", sans-serif;
      font-weight: 700;
      font-size: 3.6rem;
      line-height: 1;
      color: #FF9933;
    }

    @media screen and (max-width: 800px) {
      padding-right: 0;
      
      &::before {
        font-size: 3.2rem;
        margin-bottom: 1.5rem;
      }
    }

    @media screen and (max-width: 600px) {
      &::before {
        font-size: 2.8rem;
        margin-bottom: 1rem;
      }
    }

    @media screen and (max-width: 400px) {
      &::before {
        font-size: 2.5rem;
      }
    }
  }

  .item-title {
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.333;
    margin: 0 0 1.6rem 0;
    color: #FFF8E1;

    @media screen and (max-width: 800px) {
      font-size: 1.9rem;
      margin-bottom: 1.2rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 1.7rem;
      margin-bottom: 1rem;
    }
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin-left: 0;

  li {
    padding-left: 0;
  }

  a {
    color: #FFF8E1;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #FF9933;
    }
  }
`;

const ContactEmail = styled.a`
  display: inline-block;
  font-family: "Gothic A1", sans-serif;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  margin: 5.6rem 0 .8rem;
  color: #FF9933;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: #FF9933;
    border-bottom: 1px solid rgba(255, 248, 225, 0.6);
  }

  @media screen and (max-width: 800px) {
    font-size: 5.8vw;
  }
`;

const ContactNumber = styled.div`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.8;

  a {
    color: #FFF8E1;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #FF9933;
    }

    &::after {
      content: "/";
      font-weight: 400;
      margin: 0 .6rem 0 1rem;
      color: rgba(255, 248, 225, 0.4);
    }

    &:last-child::after {
      display: none;
    }
  }
`;

const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3.6rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const AboutContentRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const TextColumn = styled.div`
  flex: 0 0 70%;
  max-width: 70%;

  @media screen and (max-width: 800px) {
    flex: 1;
    max-width: 100%;
  }
`;

const ImageColumn = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex: 1;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-self: center;
  }
`;

const VishnuImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: 420px;
  object-fit: contain;
  object-position: center top;
  flex-shrink: 0;
  margin: 0 auto;
  /* Removed border, background, and shadow as requested */

  @media screen and (max-width: 1200px) {
    max-width: 280px;
    height: 380px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 250px;
    height: 340px;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    height: 300px;
    margin: 0 auto;
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    height: 260px;
  }
`;

const Copyright = styled.div`
  z-index: 2;
  position: relative;

  span {
    font-size: 1.5rem;
    display: inline-block;

    &::after {
      content: "|";
      display: inline-block;
      padding: 0 .8rem 0 1rem;
      color: rgba(255, 248, 225, 0.3);
    }

    &:last-child::after {
      display: none;
    }

    @media screen and (max-width: 800px) {
      display: block;

      &::after {
        display: none;
      }
    }
  }
`;


const InfoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab-about');
  const { lang } = useLang();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SInfo id="info">
      <VertLine />
      
      <Row>
        <Column>
          <TabNav>
            <TabNavList>
              <li className={activeTab === 'tab-about' ? 'active' : ''}>
                <a href="#0" onClick={(e) => { e.preventDefault(); setActiveTab('tab-about'); }}>
                  <span className="tab-icon">🏠</span>
                  <span className="tab-label">Home</span>
                </a>
              </li>
              <li className={activeTab === 'tab-services' ? 'active' : ''}>
                <a href="#0" onClick={(e) => { e.preventDefault(); setActiveTab('tab-services'); }}>
                  <span className="tab-icon">🧘</span>
                  <span className="tab-label">Meditations</span>
                </a>
              </li>
              <li className={activeTab === 'tab-about' ? '' : activeTab === 'tab-scriptures' ? 'active' : ''}>
                <a href="#0" onClick={(e) => { e.preventDefault(); setActiveTab('tab-about'); }}>
                  <span className="tab-icon">📖</span>
                  <span className="tab-label">Scriptures</span>
                </a>
              </li>
              <li className={activeTab === 'tab-contact' ? 'active' : ''}>
                <a href="#0" onClick={(e) => { e.preventDefault(); setActiveTab('tab-contact'); }}>
                  <span className="tab-icon">🙏</span>
                  <span className="tab-label">Offerings</span>
                </a>
              </li>
            </TabNavList>
          </TabNav>

          <TabContent>
            <TabContentItem $isActive={activeTab === 'tab-about'}>
              <AboutContentRow>
                <TextColumn>
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{
                      fontFamily: "'Gothic A1', sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#FF9933',
                      margin: '0 0 0.5rem',
                    }}>Guidance from the Divine Preserver</p>
                    <h1 style={{
                      fontFamily: "'Gothic A1', sans-serif",
                      fontWeight: 900,
                      fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                      color: '#FFF8E1',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      margin: '0 0 0.4rem',
                      lineHeight: 1.1,
                      paddingBottom: 0,
                    }}>Lord Vishnu</h1>
                    <p style={{
                      fontFamily: "'Noto Sans Devanagari', 'Gothic A1', sans-serif",
                      fontSize: '1.1rem',
                      color: 'rgba(255,248,225,0.75)',
                      margin: '0 0 1.2rem',
                      fontWeight: 500,
                    }}>Om Namo Bhagavate Vasudevaya</p>
                  </div>
                  <Lead>
                    {t(T.info.about.desc, lang)}
                  </Lead>
                </TextColumn>
                <ImageColumn>
                  <VishnuImage src="/hero-image.png" alt="Lord Vishnu" />
                </ImageColumn>
              </AboutContentRow>
            </TabContentItem>

            <TabContentItem $isActive={activeTab === 'tab-services'}>
              <Row>
                <Column>
                  <h1>{t(T.info.services.heading, lang)}</h1>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Lead>
                    {t(T.info.services.desc, lang)}
                  </Lead>
                </Column>
              </Row>

              <ServicesList>
                {T.info.services.items.map((item, idx) => (
                  <div className="services-list__item" key={idx}>
                    <div className="services-list__item-content">
                      <h4 className="item-title">{t(item.title, lang)}</h4>
                      <p>
                        {t(item.desc, lang)}
                      </p>
                    </div>
                  </div>
                ))}
              </ServicesList>
            </TabContentItem>

            <TabContentItem $isActive={activeTab === 'tab-contact'}>
              <Row>
                <Column>
                  <h1>{t(T.info.contact.heading, lang)}</h1>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Lead>
                    {t(T.info.contact.desc, lang)}
                  </Lead>

                  <Row>
                    <Column style={{ flex: '0 0 50%', maxWidth: '50%' }}>
                      <h4>{t(T.info.contact.where, lang)}</h4>
                      <p>
                        1600 Amphitheatre Parkway<br />
                        Mountain View, CA<br />
                        94043 US
                      </p>
                    </Column>

                    <Column style={{ flex: '0 0 50%', maxWidth: '50%' }}>
                      <h4>{t(T.info.contact.follow, lang)}</h4>
                      <LinkList>
                        <li><a href="#0">Facebook</a></li>
                        <li><a href="#0">Twitter</a></li>
                        <li><a href="#0">Instagram</a></li>
                      </LinkList>
                    </Column>
                  </Row>

                  <div>
                    <ContactEmail href="mailto:hello@paramvani.com">hello@paramvani.com</ContactEmail>
                    <ContactNumber>
                      <a href="tel:197-543-2345">+197 543 2345</a>
                      <a href="tel:123-456-9000">+123 456 9000</a>
                    </ContactNumber>
                  </div>
                </Column>
              </Row>
            </TabContentItem>
          </TabContent>
        </Column>
      </Row>
    </SInfo>
  );
};

export default InfoSection;
