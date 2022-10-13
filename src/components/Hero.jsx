import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Button from './Button';
import { onContactButtonClick } from '../utils/onContactButtonClick';

function Hero() {
  return (
    <HeroContainer>
      <div className="hero__inner">
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />

        <HeroBackground />

        <HeroTextContainer>
          <div className="hero-text">
            <h1>Daniel Michael</h1>
            <h4>Singer | Song Writer | Producer | Performer</h4>
          </div>
          <div className="hero-btn">
            <Button text="Contact Me" onClick={onContactButtonClick} />
          </div>
        </HeroTextContainer>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  .hero__inner {
    height: 100vh;
    position: relative;

    .hero-img {
      height: 100%;
    }
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #000000 31.15%, rgba(0, 0, 0, 0) 47.19%);
`;

const HeroTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  .hero-text {
    color: #fff;

    h1 {
      font-size: 40px;
      text-align: left;
      text-transform: uppercase;
    }

    h4 {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 300;
      line-height: 24px;
    }
  }

  .hero-btn {
    margin-top: 20px;
  }
`;

export default Hero;
