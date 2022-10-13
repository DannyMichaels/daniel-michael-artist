import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Button from './Button';

function Hero() {
  return (
    <HeroContainer>
      <StaticImage
        src="../assets/images/hero.svg"
        alt="portfolio"
        className="hero-img"
        placeholder="tracedSVG"
        layout="fullWidth"
      />

      <HeroTextContainer>
        <div className="hero-text">
          <h1>Daniel Michael</h1>
          <h4>Singer | Song Writer | Producer | Performer</h4>
        </div>
        <div className="hero-btn">
          <Button text="Contact Me" />
        </div>
      </HeroTextContainer>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
  margin-bottom: 2rem;

  .hero-img {
    height: 100%;
  }
`;

const HeroTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  /* width: 100%; */
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* background: rgba(0, 0, 0, 0.4); */
  border-radius: var(--borderRadius);
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
