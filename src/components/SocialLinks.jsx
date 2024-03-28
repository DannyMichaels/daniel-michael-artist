import React from 'react';
import styled from 'styled-components';
// import { StaticImage } from 'gatsby-plugin-image';
import {
  FaYoutube,
  FaFacebook,
  FaSpotify,
  FaSoundcloud,
  FaInstagram,
  FaTiktok,
  FaApple,
} from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';

const iconMapper = {
  youtube: FaYoutube,
  facebook: FaFacebook,
  spotify: FaSpotify,
  soundcloud: FaSoundcloud,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  apple: FaApple,
};

function SocialLinks() {
  const {
    site: {
      siteMetadata: { socialLinks = [] },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              name
              url
              hidden
            }
          }
        }
      }
    `
  );

  return (
    <Ul>
      {socialLinks
        ?.filter?.((item) => !item.hidden)
        ?.map((item) => {
          const Icon = iconMapper[item.name.toLowerCase()];

          return (
            <li key={item.name} aria-label="social media link">
              <a
                aria-label="social media link"
                href={item.url}
                className={item.name}
                target="_blank"
                rel="noreferrer">
                <Icon />
              </a>
            </li>
          );
        })}
    </Ul>
  );
}

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;

  li {
    margin-left: 10px;
  }

  a {
    color: #fff;
    font-size: 48px;

    &.youtube {
      font-size: ;
    }
  }
`;
export default SocialLinks;
