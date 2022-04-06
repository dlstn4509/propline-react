import React, { useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TitleWrapper = styled.div`
  position: relative;
  padding-top: 30px;
`;
const TitleWrap = styled.div`
  position: absolute;
  font-size: 35px;
  color: #fff;
  letter-spacing: -0.06em;
  top: 230px;
  right: 50px;
`;
const FirstTitle = styled.div``;
const SecondTitle = styled.div`
  display: flex;
  justify-content: right;
  div {
    font-size: 54px;
    font-weight: bold;
    position: relative;
    margin-right: ${(props) => (props.mr ? props.mr : '5px')};
    ::after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: #fff;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

const TitleCp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <TitleWrapper className="titleWrapper">
      <img src={process.env.REACT_APP_URL + 'img/fs_con_bg.png'} alt="" />
      <TitleWrap data-aos="fade-down">
        <FirstTitle>10만 건물주와 중개업소 회원을 잇는</FirstTitle>
        <SecondTitle>
          <div>공</div>
          <div>실</div>
          <div>클</div>
          <div>럽</div>
        </SecondTitle>
      </TitleWrap>
    </TitleWrapper>
  );
};

export default React.memo(TitleCp);
