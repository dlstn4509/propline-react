import React from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';

const EventWrapper = styled.div`
  display: flex;
  margin-bottom: 200px;
`;
const EventWrap = styled.div`
  line-height: 26px;
  font-size: 13px;
  margin-right: ${(props) => (props.mr ? props.mr : '25px')};
  cursor: pointer;
`;
const ImgDiv = styled.div`
  margin-bottom: 10px;
`;
const SpanWrap = styled.div``;
const SpanBlue = styled.span`
  display: inline-block;
  text-align: center;
  background-color: ${(props) => (props.bg ? props.bg : color.blue)};
  color: #fff;
  width: 64px;
  height: 26px;
  margin-right: 20px;
`;
const DateWrap = styled.div`
  font-size: 14px;
`;

const EventCp = () => {
  return (
    <EventWrapper>
      <EventWrap>
        <ImgDiv>
          <img src={process.env.REACT_APP_URL + 'img/bm-20210226181509006.jpg'} alt="" />
        </ImgDiv>
        <SpanWrap>
          <SpanBlue>진행중</SpanBlue>
          <span>이벤트</span>
        </SpanWrap>
        <DateWrap>2021-01-01 ~ 2022-12-31</DateWrap>
      </EventWrap>
      <EventWrap>
        <ImgDiv>
          <img src={process.env.REACT_APP_URL + 'img/bm-20220217094808007.gif'} alt="" />
        </ImgDiv>
        <SpanWrap>
          <SpanBlue>진행중</SpanBlue>
          <span>공실제보 이벤트</span>
        </SpanWrap>
        <DateWrap>2021-01-01 ~ 2022-12-31</DateWrap>
      </EventWrap>
      <EventWrap mr={'0'}>
        <ImgDiv>
          <img src={process.env.REACT_APP_URL + 'img/bm-20201130114839046.jpg'} alt="" />
        </ImgDiv>
        <SpanWrap>
          <SpanBlue bg={'#888f91'}>종료</SpanBlue>
          <span>공클가족 감사 이벤트</span>
        </SpanWrap>
        <DateWrap>2021-01-01 ~ 2022-12-31</DateWrap>
      </EventWrap>
    </EventWrapper>
  );
};

export default React.memo(EventCp);
