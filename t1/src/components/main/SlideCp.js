import React, { useRef } from 'react';
import styled from '../../style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Autoplay]);

const SlideCpWrapper = styled.div`
  width: 780px;
  height: 440px;
  padding: 0 24px 60px 0;
  border: 1px solid red;
  margin-bottom: 50px;
`;
const SlideImgWrap = styled.div`
  width: 754px;
  height: 440px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SlideCp = () => {
  const swiperRef = useRef(null);
  return (
    <SlideCpWrapper
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
        pagination={{ clickable: true, color: 'black' }}
      >
        <SwiperSlide>
          <SlideImgWrap className="slideImg">
            <img src={process.env.REACT_APP_URL + 'img/top_logo.svg'} alt="" className="slideImg mw-100" />
          </SlideImgWrap>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgWrap className="slideImg">
            <img src={process.env.REACT_APP_URL + 'img/top_logo.svg'} alt="" className="mw-100" />
          </SlideImgWrap>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgWrap className="slideImg">
            <img src={process.env.REACT_APP_URL + 'img/top_logo.svg'} alt="" className="mw-100" />
          </SlideImgWrap>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgWrap className="slideImg">
            <img src={process.env.REACT_APP_URL + 'img/top_logo.svg'} alt="" className="mw-100" />
          </SlideImgWrap>
        </SwiperSlide>
      </Swiper>
    </SlideCpWrapper>
  );
};

export default React.memo(SlideCp);
