import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Youtube from 'react-youtube';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const VIDEO_PLAYER_OPTIONS = {
  height: '660',
  width: '100%',
  playerVars: {
    autoplay: 0,
    controls: 1,
  },
};

function Videos() {
  const [vids, setVids] = useState({ items: [] });
  const [_isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchVids = async () => {
      try {
        const maxResults = 16;
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCALzl6bkWkTM9QZr3JeqAOw&maxResults=${maxResults}&order=date&type=video&key=${process.env.GATSBY_YOUTUBE_API_KEY}`;
        const res = await fetch(url);

        setVids(await res.json());
      } catch (err) {
        setVids({ items: [] });
      } finally {
        setLoaded(true);
      }
    };
    fetchVids();
  }, []);

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
          {vids.items?.length ? (
            vids.items.map((vid) => (
              <SwiperSlide key={vid.etag}>
                <Youtube videoId={vid.id.videoId} opts={VIDEO_PLAYER_OPTIONS} />
              </SwiperSlide>
            ))
          ) : (
            <>
              <SwiperSlide>
                <Youtube videoId={'8xvzResJNeY'} opts={VIDEO_PLAYER_OPTIONS} />
              </SwiperSlide>
              <SwiperSlide>
                <Youtube videoId={'sRem_O3qk8o'} opts={VIDEO_PLAYER_OPTIONS} />
              </SwiperSlide>

              <SwiperSlide>
                <Youtube videoId={'rPiDtVgdmrY'} opts={VIDEO_PLAYER_OPTIONS} />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Videos;
