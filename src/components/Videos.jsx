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

const VIDEO_PLAYER_OPTIONS = {
  height: '660',
  width: '100%',
  playerVars: {
    autoplay: 0,
    controls: 1,
  },
};

function Videos() {
  return (
    <section className="page-section">
      <div className="inner-column">
        <SectionTitle
          title="Videos"
          subtitle="Watch the latest videos and subscribe on youtube."
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
          <SwiperSlide>
            <Youtube videoId={'8xvzResJNeY'} opts={VIDEO_PLAYER_OPTIONS} />
          </SwiperSlide>
          <SwiperSlide>
            <Youtube videoId={'sRem_O3qk8o'} opts={VIDEO_PLAYER_OPTIONS} />
          </SwiperSlide>

          <SwiperSlide>
            <Youtube videoId={'rPiDtVgdmrY'} opts={VIDEO_PLAYER_OPTIONS} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Videos;
