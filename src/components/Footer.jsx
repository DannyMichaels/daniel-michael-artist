import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import Button from './Button';
import { onContactButtonClick } from '../utils/onContactButtonClick';

function Footer() {
  return (
    <StyledFooter>
      <div className="footer__inner">
        <StaticImage
          src="../assets/images/footer.png"
          layout="fullWidth"
          placeholder="dominantColor"
          quality={100}
          className="footer-img"
          alt="Daniel Michael with keyboard"
        />

        <FooterBackground />

        <FooterContent className="inner-column">
          <div>
            <h1>Daniel Michael</h1>
          </div>

          <div className="center">
            <SocialLinks />
          </div>

          <div className="center">
            <Button text="Say Hello!" onClick={onContactButtonClick} />
          </div>
        </FooterContent>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  .footer__inner {
    height: 800px;
    position: relative;
    overflow: hidden;
    background: #000;

    .footer-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      [data-main-image] {
        object-fit: cover;
        object-position: right center;
      }
    }

    @media screen and (max-width: 1400px) {
      height: 600px;
    }

    @media screen and (max-width: 1000px) {
      height: 500px;
    }

    @media screen and (max-width: 800px) {
      height: 400px;

      .footer-img {
        display: none;
      }
    }
  }
`;

const FooterContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h1 {
    color: #fff;
    font-size: 72px;
    padding: 0;
    margin: 0;
    text-align: center;

    font-size: clamp(22px, 10vw, 72px);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .center {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #000000 63.12%,
    #000000 70.92%,
    rgba(0, 0, 0, 0) 73.52%,
    rgba(0, 0, 0, 0) 100.62%
  );
`;

export default Footer;
