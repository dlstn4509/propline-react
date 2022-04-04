import React, { useEffect, useState } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutGingsilWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 100px 50px 50px 50px;
`;
const AboutGingsilWrap = styled.div`
  display: flex;
  padding-bottom: 100px;
`;
const TextWrap = styled.div`
  padding: 10px;
`;
const Title = styled.div`
  font-size: 42px;
  color: #282828;
  margin-bottom: 40px;
`;
const SubTitle = styled.div`
  font-size: 25px;
  line-height: 30px;
  color: #464d50;
`;
const IconWrapper = styled.div`
  display: flex;
  width: 910px;
  border-top: 4px solid #003168;
  background-color: #fff;
`;
const IconWrap = styled.div`
  width: 33.33%;
  padding: 50px 20px;
  color: #282828;
  font-size: 19px;
  line-height: 26px;
  letter-spacing: -0.1em;
  border-right: 1px solid #f2f2f2;
`;
const ImgWrap = styled.div`
  text-align: right;
`;
const Icon = styled.div`
  margin-bottom: 40px;
`;

const AboutGingsilCp = () => {
  const { isPageY } = store();
  const [titleY, setTitleY] = useState('');
  useEffect(() => {
    setTitleY(document.querySelector('.aboutGingsilWrap').offsetTop);
    if (isPageY > titleY) {
      AOS.init({ duration: 1000 });
    }
  }, [isPageY]);
  return (
    <AboutGingsilWrapper>
      <AboutGingsilWrap className="aboutGingsilWrap">
        <TextWrap data-aos="fade-right">
          <Title>공실클럽은</Title>
          <SubTitle>
            임대인과 부동산 중개업소의 연결고리 역할로 중개업소 회원사분들께 계약 가능한 매물 정보를
            실시간으로 제공하는 플랫폼입니다.
          </SubTitle>
        </TextWrap>
        <div>
          <img src={process.env.REACT_APP_URL + 'img/sc_con_bg.png'} alt="" />
        </div>
      </AboutGingsilWrap>
      <IconWrapper data-aos="fade-down">
        <IconWrap>
          <Icon>
            공실 매물의 정보와 공동중개,
            <br />
            매매정보까지 다양하게 제공
          </Icon>
          <ImgWrap>
            <img src={process.env.REACT_APP_URL + 'img/sc_bg_icon01.png'} alt="" />
          </ImgWrap>
        </IconWrap>
        <IconWrap>
          <Icon>
            네이버 부동산 공식 제휴사로
            <br />
            네이버 부동산에 광고 등록 가능
          </Icon>
          <ImgWrap>
            <img src={process.env.REACT_APP_URL + 'img/sc_bg_icon02.png'} alt="" />
          </ImgWrap>
        </IconWrap>
        <IconWrap>
          <Icon style={{ marginBottom: '20px' }}>
            언제 어디서나
            <br />
            중개업무가 가능하도록
            <br />
            PC / 모바일 앱 서비스 제공
          </Icon>
          <ImgWrap>
            <img src={process.env.REACT_APP_URL + 'img/sc_bg_icon03.png'} alt="" />
          </ImgWrap>
        </IconWrap>
      </IconWrapper>
    </AboutGingsilWrapper>
  );
};

export default React.memo(AboutGingsilCp);
