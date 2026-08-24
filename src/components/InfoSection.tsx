import React, { useState } from 'react';
import styled from 'styled-components';
import { useLang } from '@/context/LanguageContext';
import { translations as T, t } from '@/lib/translations';

const SInfo = styled.section`
  padding-top: 6rem;
  padding-bottom: 8rem;
  background-color: #ffffff;
  position: relative;

  @media screen and (max-width: 800px) {
    padding-top: 4rem;
  }

  @media screen and (max-width: 600px) {
    padding-top: 3rem;
  }

  &::before {
    display: block;
    content: "";
    width: 55%;
    height: 65%;
    background-color: #ffffff;
    opacity: .5;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-image: url(/images/bg-info.jpg);
    position: absolute;
    right: 0;
    bottom: 0;
  }

  h1, h4 {
    margin-top: 0;
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
      background-color: #8dc63f;
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
    background-color: #8dc63f;
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
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    padding: 0 2rem;
  }
  
  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const TabNavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  font-size: 1.6rem;
  line-height: 6.8rem;
  position: relative;

  @media screen and (max-width: 800px) {
    justify-content: center;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }

  li {
    flex-shrink: 0;
    padding: 0;
    border-bottom: 1px solid #efefef;

    @media screen and (max-width: 800px) {
      border-bottom: none;
    }
  }

  a {
    display: block;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 3.2rem;
    position: relative;
    text-decoration: none;
    transition: all 0.3s ease;

    @media screen and (max-width: 800px) {
      padding: 0.8rem 1.5rem;
      border: 1px solid #efefef;
      border-radius: 4px;
      margin: 0.25rem;
      white-space: nowrap;
    }

    &:hover,
    &:focus,
    &:active {
      color: #000000;
    }
  }

  .active a {
    color: #000000;
    background-color: #efefef;
    border-radius: 4px 4px 0 0;
    position: relative;

    @media screen and (max-width: 800px) {
      background-color: #8dc63f;
      color: #ffffff;
      border-color: #8dc63f;
      border-radius: 4px;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 1.4;

    a {
      padding: 0.6rem 1.2rem;
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 400px) {
    justify-content: center;
    
    a {
      padding: 0.8rem 1rem;
      font-size: 1.2rem;
    }
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
  color: #000000;

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
      color: #8dc63f;
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
    color: #000000;

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
    color: #000000;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #8dc63f;
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
  color: #8dc63f;
  border-bottom: 1px solid #efefef;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: #8dc63f;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
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
    color: #000000;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #8dc63f;
    }

    &::after {
      content: "/";
      font-weight: 400;
      margin: 0 .6rem 0 1rem;
      color: #646464;
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
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    flex: 1;
    max-width: 100%;
    justify-content: center;
  }
`;

const ShivaImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  margin-left: auto;

  @media screen and (max-width: 1200px) {
    max-width: 250px;
    height: 320px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 220px;
    height: 280px;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    height: 300px;
    margin-left: 0;
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    height: 250px;
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
      color: rgba(0, 0, 0, 0.3);
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
                  <span>{t(T.info.tabs.about, lang)}</span>
                </a>
              </li>
              <li className={activeTab === 'tab-services' ? 'active' : ''}>
                <a href="#0" onClick={(e) => { e.preventDefault(); setActiveTab('tab-services'); }}>
                  <span>{t(T.info.tabs.services, lang)}</span>
                </a>
              </li>
              <li className={activeTab === 'tab-contact' ? 'active' : ''}>
                <a href="#0" onClick={(e) => { e.preventDefault(); setActiveTab('tab-contact'); }}>
                  <span>{t(T.info.tabs.contact, lang)}</span>
                </a>
              </li>
            </TabNavList>
          </TabNav>

          <TabContent>
            <TabContentItem $isActive={activeTab === 'tab-about'}>
              <Row>
                <Column>
                  <h1>{t(T.info.about.heading, lang)}</h1>
                </Column>
              </Row>

              <AboutContentRow>
                <TextColumn>
                  <Lead>
                    {t(T.info.about.desc, lang)}
                  </Lead>

                  
                </TextColumn>
                <ImageColumn>
                  <ShivaImage src="/shiva.png" alt="Shiva" />
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
