import React from 'react';
import SectionTitle from './SectionTitle';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
  query GetGalleryImages {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`;

function Gallery() {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <section className="page-section gallery">
      <div className="inner-column">
        <SectionTitle title="My Gallery" />

        <Grid>
          {nodes.map((node) => {
            const { id, childImageSharp: image } = node;
            const imageSrc = getImage(image);

            return (
              <GatsbyImage
                key={id}
                image={imageSrc}
                alt="Daniel Michael Gallery"
              />
            );
          })}
        </Grid>
      </div>
    </section>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 29px;
  margin-top: 44px;
  grid-auto-rows: minmax(336px, 336px);
`;

export default Gallery;
