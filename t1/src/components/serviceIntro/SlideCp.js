import React, { useRef, useState, useEffect } from 'react';
import styled, { color } from '@/style';
import { Swiper, SwiperSlide } from 'swiper/react';
import store from '@/store/store';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
SwiperCore.use([Autoplay]);

const SlideCpWrapper = styled.div`
  width: 1000px;
  height: 650px;
  margin-top: 100px;
  display: flex;
  /* padding: 0 24px 60px 0px; */
  .swiper-pointer-events {
    width: 1000px;
  }
  .swiper-pagination-bullet {
    background-color: black;
    position: relative;
    top: -600px;
  }
  .swiper-pagination-bullet-active {
    opacity: 0.5;
  }
  .swiper-button-prev {
    color: ${color.blue};
    opacity: 0.5;
  }
  .swiper-button-next {
    color: ${color.blue};
    opacity: 0.5;
  }
  .swiper-button-disabled {
    color: ${color.blue};
    opacity: 0.3;
  }
`;
const SlideImgWrap = styled.div`
  width: 1000px;
  height: 440px;
`;
const Num = styled.div`
  margin-top: 70px;
  text-align: center;
  font-size: 41px;
  color: #282828;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 33px;
  color: #282828;
  text-align: center;
  font-weight: 500;
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;
const ImgWrap = styled.div`
  text-align: center;
  position: relative;
`;
const CircleText = styled.div`
  position: absolute;
  top: -10px;
  left: 205px;
  width: 142px;
  height: 142px;
  text-align: center;
  font-size: 25px;
  border-radius: 100%;
  background-color: #1a2e4d;
  color: #ffbc00;
  padding-top: 35px;
  box-sizing: border-box;
`;

const SlideCp = () => {
  const { isPageY } = store();
  const [slideY, setSlideY] = useState('');
  const swiperRef = useRef(null);
  useEffect(() => {
    setSlideY(document.querySelector('.slideCpWrapper').offsetTop);
    if (isPageY > slideY) {
      AOS.init({ duration: 1000 });
    }
  }, [isPageY]);
  return (
    <SlideCpWrapper
      className="slideCpWrapper"
      onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      data-aos="fade-up"
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
        <SwiperSlide>
          <SlideImgWrap>
            <Num>01</Num>
            <Title>양타 수수료 지급 매물 제공</Title>
            <SubTitle>공실의 상세 정보 및 사진, 동영상 확인 가능</SubTitle>
            <ImgWrap>
              <img src={process.env.REACT_APP_URL + 'img/fc_con_img01.png'} alt="" />
              <CircleText>
                수수료
                <br />
                지급
              </CircleText>
            </ImgWrap>
          </SlideImgWrap>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgWrap>
            <Num>02</Num>
            <Title>전 지역 공실정보 제공</Title>
            <SubTitle>지역 제한 없이 공실정보, 공동중개, 매매정보를 제공하여 다양한 매물 확보</SubTitle>
            <ImgWrap>
              <img src={process.env.REACT_APP_URL + 'img/fc_con_img02.png'} alt="" />
            </ImgWrap>
          </SlideImgWrap>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgWrap>
            <Num>03</Num>
            <Title>위치 기반 지도와 블록 지도</Title>
            <SubTitle>위치 기반 지도는 물론 지도 내 서낵한 블록의 골싱매물 확인 가능</SubTitle>
            <ImgWrap>
              <img src={process.env.REACT_APP_URL + 'img/fc_con_img03.png'} alt="" />
            </ImgWrap>
          </SlideImgWrap>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgWrap>
            <Num>04</Num>
            <Title>연락처 확인, 프린트하기 기능</Title>
            <SubTitle>공실 매물의 임대인(건물주)/관리인 연락처 확인 및 매물 프린트 가능</SubTitle>
            <ImgWrap>
              <img src={process.env.REACT_APP_URL + 'img/fc_con_img04.png'} alt="" />
            </ImgWrap>
          </SlideImgWrap>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgWrap>
            <Num>05</Num>
            <Title>관심 매물 담기</Title>
            <SubTitle>손님 조건에 맞는 매물 담기 기능 제공</SubTitle>
            <ImgWrap>
              <img src={process.env.REACT_APP_URL + 'img/fc_con_img05.png'} alt="" />
            </ImgWrap>
          </SlideImgWrap>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImgWrap>
            <Num>06</Num>
            <Title>빠른 카톡 상담 서비스</Title>
            <SubTitle>24시간 언제든지 접수가능</SubTitle>
            <ImgWrap>
              <img src={process.env.REACT_APP_URL + 'img/fc_con_img06.jpg'} alt="" />
            </ImgWrap>
          </SlideImgWrap>
        </SwiperSlide>
      </Swiper>
    </SlideCpWrapper>
  );
};

export default React.memo(SlideCp);
