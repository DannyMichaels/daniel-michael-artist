import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

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
  align-items: center;
  justify-content: center;
  /* background: rgba(0, 0, 0, 0.4); */
  border-radius: var(--borderRadius);

  .hero-text {
    color: #fff;
    /* text-align: center; */

    h1 {
      font-size: 40px;
      text-align: left;
      text-transform: uppercase;
    }
  }
`;

export default Hero;
