import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

function SocialLinks() {
  return (
    <Ul>
      <li>
        <a
          href="https://www.youtube.com/c/DanielMichael"
          target="_blank"
          rel="noreferrer">
          <StaticImage src="../assets/icons/youtube.svg" layout="fixed" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/DanielVocals"
          target="_blank"
          rel="noreferrer">
          <StaticImage src="../assets/icons/facebook.svg" layout="fixed" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/_dannymichaels/"
          target="_blank"
          rel="noreferrer">
          <StaticImage src="../assets/icons/instagram.svg" layout="fixed" />
        </a>
      </li>
    </Ul>
  );
}

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
  list-style: none;

  li {
    margin-left: 10px;
  }
`;
export default SocialLinks;
