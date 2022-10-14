import React from 'react';
import SectionTitle from './SectionTitle';
import Youtube from 'react-youtube';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useStaticQuery, graphql } from 'gatsby';

const VIDEO_PLAYER_OPTIONS = {
  height: '660',
  width: '100%',
  playerVars: {
    autoplay: 0,
    controls: 1,
  },
};

function Videos() {
  const data = useStaticQuery(graphql`
    query {
      allYoutubeVideos {
        nodes {
          items {
            etag
            id {
              videoId
            }
          }
        }
      }
    }
  `);

  const vids = data.allYoutubeVideos.nodes[0].items;

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
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          {vids.map((vid) => (
            <SwiperSlide key={vid.etag}>
              <Youtube videoId={vid.id.videoId} opts={VIDEO_PLAYER_OPTIONS} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Videos;
