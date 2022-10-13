import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isBackgroundShowing, setIsBackgroundShowing] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setIsBackgroundShowing(true);
    } else setIsBackgroundShowing(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <StyledNav isBackgroundShowing={isBackgroundShowing}>
      <div className="nav__container inner-column">
        <div className="nav__logo">
          <h1>Daniel Michael</h1>
        </div>
        <div className="nav__links">
          <SocialLinks />
        </div>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: ${({ isBackgroundShowing }) =>
    isBackgroundShowing ? '#000' : 'transparent'};

  transition: background 250ms ease-in-out;

  color: #fff;

  h1 {
    padding: 0;
    margin: 0;
  }

  z-index: 999;
  position: fixed;
  width: 100%;

  .nav__container {
    display: flex;
    max-width: 1100px;
    width: 90%;
    margin: 36px auto;
    justify-content: space-between;
  }

  .nav__logo {
    h1 {
      font-size: 36px;
      line-height: 36px;
    }
  }
`;
