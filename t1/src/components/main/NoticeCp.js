import React, { useEffect, useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const NoticeWrapper = styled.div`
  width: 370px;
  color: #5e6667;
  font-size: 13px;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 17px;
  border-bottom: 1px solid #000;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;
const MoreText = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;
const ListWrap = styled.div`
  padding: 12px 0;
`;
const List = styled.div`
  font-size: 14px;
  color: #888f91;
  &.active {
    font-weight: 500;
    color: #464d50;
  }
  span {
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    background-color: #ffba31;
    border-radius: 3px;
    padding: 1px 4px;
    margin-right: 4px;
  }
`;

const NoticeCp = ({ notice }) => {
  return (
    <NoticeWrapper>
      <TitleWrap>
        <Title>공지사항</Title>
        <MoreText to="/main">더보기</MoreText>
      </TitleWrap>
      {notice.map((v, i) => (
        <ListWrap key={i}>
          <List className="active">
            {v.title}
            {v.isNew && <span>N</span>}
          </List>
        </ListWrap>
      ))}
    </NoticeWrapper>
  );
};

export default React.memo(NoticeCp);
