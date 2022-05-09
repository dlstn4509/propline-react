import React from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

const EventWrapper = styled.div`
  display: flex;
  margin-bottom: 200px;
`;
const EventWrap = styled.a`
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
  const { isBanner } = store();
  const banner = isBanner.filter((v) => {
    return v.area_code === '12';
  });
  return (
    <EventWrapper>
      {banner.map((v, i) => (
        <EventWrap
          key={i}
          href={v.link_url}
          target={v.link_target === 2 ? '_blank' : ''}
          rel="noopener noreferrer"
        >
          <ImgDiv>
            <img src={process.env.REACT_APP_URL + v.bannerSrc} alt="" />
          </ImgDiv>
          <SpanWrap>
            <SpanBlue>진행중</SpanBlue>
            <span>{v.title}</span>
          </SpanWrap>
          <DateWrap>
            {v.start_date} ~ {v.end_date}
          </DateWrap>
        </EventWrap>
      ))}
    </EventWrapper>
  );
};

export default React.memo(EventCp);
