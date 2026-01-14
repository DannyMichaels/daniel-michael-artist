import React from 'react';
import SectionTitle from './SectionTitle';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const query = graphql`
  query GetPressReleases {
    allAirtable(
      filter: { table: { eq: "PressReleases" }, data: { active: { eq: true } } }
      sort: [{ data: { order: ASC } }, { data: { date: DESC } }]
    ) {
      nodes {
        id
        data {
          title
          publication
          date
          url
          excerpt
          featured
          image {
            localFiles {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 800)
              }
            }
          }
        }
      }
    }
  }
`;

function PressReleases() {
  const data = useStaticQuery(query);
  const nodes = data.allAirtable.nodes;

  if (!nodes || nodes.length === 0) {
    return null;
  }

  return (
    <Wrapper className="page-section press-releases">
      <div className="inner-column">
        <SectionTitle title="In The Press" />

        <Grid>
          {nodes.map((node, idx) => {
            const {
              id,
              data: { title, publication, date, url, excerpt, featured, image },
            } = node;

            const imageSrc = image?.localFiles?.[0]?.childrenImageSharp?.[0]
              ? getImage(image.localFiles[0].childrenImageSharp[0])
              : null;

            const formattedDate = date
              ? new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })
              : null;

            // First item or featured items get the large card treatment
            const isLarge = idx === 0 || featured;

            return (
              <PressCard
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                isLarge={isLarge}>
                {imageSrc && (
                  <div className="press-card__image-wrapper">
                    <GatsbyImage
                      image={imageSrc}
                      alt={title || `${publication} article`}
                      className="press-card__image"
                    />
                    <div className="press-card__overlay" />
                  </div>
                )}

                <div className="press-card__content">
                  <span className="press-card__publication">{publication}</span>
                  <h3 className="press-card__title">{title}</h3>
                  {excerpt && (
                    <p className="press-card__excerpt">"{excerpt}"</p>
                  )}
                  <div className="press-card__meta">
                    {formattedDate && (
                      <span className="press-card__date">{formattedDate}</span>
                    )}
                    <span className="press-card__read">
                      Read Article <FaExternalLinkAlt />
                    </span>
                  </div>
                </div>
              </PressCard>
            );
          })}
        </Grid>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 44px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

const PressCard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #111;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${({ isLarge }) =>
    isLarge &&
    `
    grid-column: span 2;
    grid-row: span 2;

    @media screen and (max-width: 600px) {
      grid-column: span 1;
      grid-row: span 1;
    }

    .press-card__title {
      font-size: 28px;

      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
    }

    .press-card__image-wrapper {
      height: 300px !important;

      @media screen and (max-width: 600px) {
        height: 200px !important;
      }
    }
  `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);

    .press-card__image {
      transform: scale(1.05);
    }

    .press-card__overlay {
      opacity: 0.3;
    }

    .press-card__read {
      color: #38b0f6;
    }
  }

  .press-card__image-wrapper {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
  }

  .press-card__image {
    width: 100%;
    height: 100%;
    transition: transform 0.4s ease;
  }

  .press-card__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 50%);
    opacity: 0.6;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .press-card__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .press-card__publication {
    display: inline-block;
    align-self: flex-start;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #fff;
    background: #38b0f6;
    padding: 4px 10px;
    margin-bottom: 12px;
  }

  .press-card__title {
    font-family: 'Kodchasan', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
    margin: 0 0 12px 0;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .press-card__excerpt {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
    margin: 0 0 16px 0;
    line-height: 1.6;
    flex: 1;
  }

  .press-card__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .press-card__date {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .press-card__read {
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.25s ease;

    svg {
      font-size: 10px;
    }
  }
`;

export default PressReleases;
