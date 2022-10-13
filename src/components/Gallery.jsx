import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Button from './Button';
import FlipMove from 'react-flip-move';

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
  const [showMore, setShowMore] = useState(false);
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  const nodesToDisplay = showMore ? nodes : nodes.slice(0, 6);

  return (
    <Wrapper className="page-section gallery">
      <div className="inner-column">
        <SectionTitle title="My Gallery" />

        <FlipMove>
          <Grid>
            {nodesToDisplay.map((node, idx, arr) => {
              const { id, childImageSharp: image } = node;
              const imageSrc = getImage(image);

              return (
                <GatsbyImage
                  key={id}
                  image={imageSrc}
                  className="gallery-image"
                  alt={`Daniel Michael gallery image ${idx} of ${arr.length}`}
                />
              );
            })}
          </Grid>
        </FlipMove>

        <div className="button-container">
          <Button
            text={showMore ? 'Show Less' : 'Show More'}
            onClick={() => setShowMore((prevState) => !prevState)}
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .button-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Grid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-gap: 29px;
  margin-top: 44px;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  /* grid-auto-rows: 280px; */

  @media screen and (max-width: 500px) {
    grid-gap: 10px;
  }

  .gallery-image {
    height: 100%;
    width: 100%;
  }
`;

export default Gallery;
