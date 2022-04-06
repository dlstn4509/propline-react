import React from 'react';
import {
  TableWrap,
  TableTheadTr,
  TableListTitle,
  TableListTitlePlus,
  PlusSpan,
  TableTbodyTr,
  NoticeTbodyTd,
  NoticeTbodyLink,
} from '@/style/main';
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

const NoticeCp = () => {
  return (
    <NoticeWrapper>
      <TitleWrap>
        <Title>공지사항</Title>
        <MoreText to="/main">더보기</MoreText>
      </TitleWrap>
      <ListWrap>
        <List className="active">
          4월 5일(화) 사이트 장애 및 임시 점... <span>N</span>
        </List>
      </ListWrap>
      <ListWrap>
        <List>4월 5일(화) 사이트 장애 및 임시 점...</List>
      </ListWrap>
      <ListWrap>
        <List>4월 5일(화) 사이트 장애 및 임시 점...</List>
      </ListWrap>
      <ListWrap>
        <List>4월 5일(화) 사이트 장애 및 임시 점...</List>
      </ListWrap>
      <ListWrap>
        <List>4월 5일(화) 사이트 장애 및 임시 점...</List>
      </ListWrap>
    </NoticeWrapper>
  );
};

export default React.memo(NoticeCp);
