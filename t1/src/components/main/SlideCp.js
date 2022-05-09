import React, { useRef, useEffect } from 'react';
import styled from '@/style';
import store from '@/store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Autoplay]);

const SlideCpWrapper = styled.div`
  padding-bottom: 60px;
  .swiper-pagination-bullet {
    background-color: black;
  }
  .swiper-pagination-bullet-active {
    opacity: 0.5;
  }
  .swiper-button-prev {
    color: black;
    opacity: 0.5;
  }
  .swiper-button-next {
    color: black;
    opacity: 0.5;
  }
  .swiper-button-disabled {
    color: black;
    opacity: 0.3;
  }
`;

const SlideCp = () => {
  const { isBanner } = store();
  const swiperRef = useRef(null);
  const banner = isBanner.filter((v) => {
    return v.area_code === '1';
  });
  return (
    <SlideCpWrapper
      className="aaa"
      onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true, color: '#ffffff' }}
      >
        {banner.map((v, i) => (
          <SwiperSlide key={i}>
            <a href={v.link_url} target={v.link_target === 2 ? '_blank' : ''} rel="noopener noreferrer">
              <img src={process.env.REACT_APP_URL + v.bannerSrc} alt="" className="mw-100" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideCpWrapper>
  );
};

export default React.memo(SlideCp);
