import React, { useState, useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';
import { color } from '../../style';
import store from '@/store/store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CircleWrapper = styled.div`
  background-image: url(${process.env.REACT_APP_URL + 'img/thr_con_bg.jpg'});
  height: 408px;
  padding: 75px 45px;
`;
const TitleWrap = styled.div`
  margin-bottom: 55px;
  width: 100%;
`;
const Title = styled.div`
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #fff;
`;
const IconWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 143px;
  height: 143px;
  border-radius: 100%;
  border: 2px solid #cccccc;
  box-sizing: border-box;
  background-color: #fff;
`;
const ImgWrap = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  top: 25px;
`;
const Text = styled.div`
  color: ${(props) => (props.color ? props.color : '#000')};
  font-size: 21px;
  letter-spacing: -0.06em;
  text-align: center;
`;
const SubText = styled.div`
  color: #fff;
  font-size: 13px;
  letter-spacing: -0.06em;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 113px;
`;

const CircleCp = () => {
  const { isPageY } = store();
  const [circleY, setCircleY] = useState('');
  useEffect(() => {
    setCircleY(document.querySelector('.circleWrapper').offsetTop);
    if (isPageY > circleY) {
      AOS.init({ duration: 1000 });
    }
  }, [isPageY]);
  return (
    <CircleWrapper className="circleWrapper">
      <TitleWrap data-aos="fade-down">
        <Title>공실클럽은 전문 매물 관리 센터에서 특정 주기마다 매물정보를 파악하여</Title>
        <Title>검증된 매물을 정확하고 빠르게 제공해드리고 있습니다.</Title>
      </TitleWrap>
      <IconWrap data-aos="flip-down">
        <Icon>
          <ImgWrap>
            <img src={process.env.REACT_APP_URL + 'img/thr_bg_icon01.png'} alt="" />
          </ImgWrap>
          <Text>임대인</Text>
        </Icon>
        <SubText>
          매물 등록 의뢰
          <FaCaretRight />
        </SubText>
        <Icon>
          <ImgWrap>
            <img src={process.env.REACT_APP_URL + 'img/thr_bg_icon02.png'} alt="" />
          </ImgWrap>
          <Text color={color.blue}>공실클럽</Text>
        </Icon>
        <SubText>
          공실클럽이 검증한
          <br />
          확인매물 제공
          <FaCaretRight />
        </SubText>
        <Icon>
          <ImgWrap>
            <img src={process.env.REACT_APP_URL + 'img/thr_bg_icon03.png'} alt="" />
          </ImgWrap>
          <Text>공인중개사</Text>
        </Icon>
        <SubText>
          진성매물 중개
          <FaCaretRight />
        </SubText>
        <Icon>
          <ImgWrap>
            <img src={process.env.REACT_APP_URL + 'img/thr_bg_icon04.png'} alt="" />
          </ImgWrap>
          <Text>임차인</Text>
        </Icon>
      </IconWrap>
    </CircleWrapper>
  );
};

export default React.memo(CircleCp);
