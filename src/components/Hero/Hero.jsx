import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import TypeIt from 'typeit-react';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle1, subtitle2, subtitle3, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
          </h1>
          <h2 className="hero-subtitle">{subtitle1}<TypeIt options={{
            strings: ['a developer', 'a cat lover', 'a problem solver', 'an cycling fanatic', 'a media designer'],
            speed: 150,
            breakLines: false,
            nextStringDelay: [400, 1000],
            startDelete: true,
            loop: true, element:'span'
          }} element={"span"}>{subtitle2}</TypeIt>{subtitle3 || "I'm the Unknown Developer."}</h2>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          {/* <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">
              {cta || 'Know more'}
            </a>
          </p> */}
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
