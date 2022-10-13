import React from 'react';
import styled from 'styled-components';
import MusicCard from './MusicCard';
import SectionTitle from './SectionTitle';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Button from './Button';

const query = graphql`
  query GetSongCovers {
    allFile(filter: { absolutePath: { regex: "/album-covers/" } }) {
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

const TITLES = {
  'place-in-my-mind': 'A Place In My Mind',
  give: 'Give',
};

function MusicCatalog() {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <section className="page-section music">
      <Centered className="inner-column">
        <SectionTitle title="My Music Player" />

        <Grid>
          {nodes.map((node) => {
            const { name, id, childImageSharp: image } = node;
            const title = TITLES[name];
            const imageSrc = getImage(image);

            return <MusicCard key={id} title={title} imageSrc={imageSrc} />;
          })}
        </Grid>

        <Centered style={{ marginTop: '20px' }}>
          <Button text="View More" />
        </Centered>
      </Centered>
    </section>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 48px;
`;

const Centered = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default MusicCatalog;
