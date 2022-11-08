import React, { useMemo } from 'react';
import SectionTitle from './SectionTitle';
import Youtube from 'react-youtube';
import useMediaQuery from './../hooks/useMediaQuery.hook';
import { useStaticQuery, graphql } from 'gatsby';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}>
          {vids.map((vid) => (
            <SwiperSlide key={vid.videoId}>
              <Youtube videoId={vid.videoId} opts={vidPlayerOpts} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Videos;
