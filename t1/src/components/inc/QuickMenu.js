import React, { useRef, useState, useEffect } from 'react';
import styled from '@/style';
import store from '@/store/store';
import { Link } from 'react-router-dom';

const QuickMenuContainer = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
`;

const QuiclMenuWrapper = styled.div`
  position: absolute;
  right: -18%;
`;
const Title = styled.div`
  width: 150px;
  background-color: rgba(22, 51, 127, 0.64);
  padding: 4px 0 5px 16px;
  font-size: 13px;
  color: #ffffff;
`;
const QuickMenuWrap = styled.div`
  width: 150px;
  padding: 25px 0 20px 20px;
  margin-top: 6px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 1px #ddd;
`;
const QuiceMenu = styled(Link)`
  color: #464d50;
  font-size: 14px;
  width: 130px;
  display: flex;
  margin-bottom: 8px;
  :hover {
    color: #3168ff;
  }
  i {
    display: inline-block;
    width: 16px;
    height: 15px;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 10px;
  }
`;
const QuiceMenu01 = styled.div`
  i {
    background-image: url(${process.env.REACT_APP_URL + 'img/q_icon1.svg'});
  }
  :hover {
    i {
      background-image: url(${process.env.REACT_APP_URL + 'img/q_icon1_on.svg'});
    }
  }
`.withComponent(QuiceMenu);
const QuiceMenu02 = styled.div`
  i {
    background-image: url(${process.env.REACT_APP_URL + 'img/q_icon2.svg'});
  }
  :hover {
    i {
      background-image: url(${process.env.REACT_APP_URL + 'img/q_icon2_on.svg'});
    }
  }
`.withComponent(QuiceMenu);
const QuiceMenu03 = styled.div`
  i {
    background-image: url(${process.env.REACT_APP_URL + 'img/q_icon3.svg'});
  }
  :hover {
    i {
      background-image: url(${process.env.REACT_APP_URL + 'img/q_icon3_on.svg'});
    }
  }
`.withComponent(QuiceMenu);
const QuiceMenu04 = styled.div`
  i {
    background-image: url(${process.env.REACT_APP_URL + 'img/q_icon4.svg'});
  }
  :hover {
    i {
      background-image: url(${process.env.REACT_APP_URL + 'img/q_icon4_on.svg'});
    }
  }
`.withComponent(QuiceMenu);
const TopWrap = styled.div`
  margin: 20px 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888f91;
  cursor: pointer;
  img {
    margin-right: 4px;
  }
`;
const ImgWrap = styled(Link)`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const QuickMenu = () => {
  const { quickMenuTop, setQuickMenuTop } = store();
  const topClick = () => {
    window.scrollTo(0, 0);
  };
  const onWheel = (e) => {
    let y = e.deltaY;
    if (y > 0 && quickMenuTop < 800) {
      setQuickMenuTop(y);
    } else if (y < 0 && quickMenuTop > 0) {
      setQuickMenuTop(y);
    }
  };
  return (
    <QuickMenuContainer>
      <QuiclMenuWrapper style={{ top: quickMenuTop }} onWheel={onWheel}>
        <Title>빠른메뉴</Title>
        <QuickMenuWrap>
          <QuiceMenu01 to="/main">
            <i></i>
            관심매물보기
          </QuiceMenu01>
          <QuiceMenu02 to="/main">
            <i></i>
            카카오톡 1:1 문의
          </QuiceMenu02>
          <QuiceMenu03 to="/main">
            <i></i>
            원격지원
          </QuiceMenu03>
          <QuiceMenu04 to="/main">
            <i></i>
            네이버 매물관리
          </QuiceMenu04>
        </QuickMenuWrap>
        <TopWrap onClick={topClick}>
          <img src={process.env.REACT_APP_URL + 'img/top_btn112.png'} alt="" />
          TOP
        </TopWrap>
        <ImgWrap to="/main">
          <img src={process.env.REACT_APP_URL + 'img/bm-20220216154225092.gif'} alt="" />
        </ImgWrap>
        <ImgWrap to="/main" target="_blank">
          <img src={process.env.REACT_APP_URL + 'img/bm-20220224094955049.jpg'} alt="" />
        </ImgWrap>
      </QuiclMenuWrapper>
    </QuickMenuContainer>
  );
};

export default React.memo(QuickMenu);
