import React, { useMemo } from 'react';
import SectionTitle from './SectionTitle';
import Youtube from 'react-youtube';
import useMediaQuery from './../hooks/useMediaQuery.hook';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from './Carousel';

function Videos() {
  const data = useStaticQuery(graphql`
    query {
      allId {
        nodes {
          videoId
        }
      }
    }
  `);

  const vids = data.allId.nodes;

  const isSmScreen = useMediaQuery('(max-width: 768px)');

  const vidPlayerOpts = useMemo(() => {
    const height = isSmScreen ? '440' : '660';
    return {
      height,
      width: '100%',
      playerVars: {
        autoplay: 0,
        controls: 1,
      },
    };
  }, [isSmScreen]);

  const getImageFromId = (id) =>
    `https://unsplash.it/${600}/${600}?image=${id}`;

  return (
    <section className="page-section">
      <div className="inner-column">
        <SectionTitle
          title="Videos"
          subtitle={
            <span>
              Watch the latest videos and&nbsp;
              <a
                href="https://www.youtube.com/c/DanielMichael"
                target="_blank"
                rel="noreferrer"
                className="link">
                subscribe on youtube.
              </a>
            </span>
          }
        />
      </div>

      <div>
        <Carousel visibleItemsCount={3}>
          {/* {[0, 1, 2, 3, 4, 5].map((i, k) => (
            <img src={getImageFromId(i)} alt={k} />
          ))} */}

          {[0, 1, 2, 3, 4, 5].map((i, k) => (
            <div style={{ fontSize: 32 }} k={k}>
              {i}
            </div>
          ))}

          {/* {vids.map((vid) => (
            <div key={vid.videoId}>
              <Youtube videoId={vid.videoId} opts={vidPlayerOpts} />
            </div>
          ))} */}
        </Carousel>
      </div>
    </section>
  );
}

export default Videos;
