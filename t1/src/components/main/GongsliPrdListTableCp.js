import React from 'react';
import styled from '../../style';
import { Link } from 'react-router-dom';

const GongsliPrdListTable = styled.div`
  border: 1px solid #dae1e7;
  margin-top: 6px;
  border-radius: 5px;
`;
const Tit = styled.div`
  font-size: 14px;
  color: #464d50;
  padding: 8px 0 8px 15px;
`;
const ListWrap = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #dae1e7;
`;
const List = styled.div`
  margin-top: 10px;
  :after {
    content: '';
    display: block;
    clear: both;
  }
  :first-child {
    margin-top: 0px;
  }
`;
const Name = styled.span`
  font-size: 13px;
  color: #464d50;
  float: left;
`;
const MonthlyCharterBtnBox = styled.div`
  float: right;
  a {
    color: #ffffff;
  }
`;
const MonthlyBtn = styled(Link)`
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  background-color: #8abcff;
  font-size: 12px;
  text-align: center;
  border-radius: 3px;
  margin-right: 3px;
`;
const CharterBtn = styled(Link)`
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  background-color: #7ed48f;
  font-size: 12px;
  text-align: center;
  border-radius: 3px;
`;

const GongsliPrdListTableCp = () => {
  return (
    <GongsliPrdListTable>
      <Tit>공실매물</Tit>
      <ListWrap>
        <List>
          <Name>일반룸</Name>
          <MonthlyCharterBtnBox>
            <MonthlyBtn to="/main">월</MonthlyBtn>
            <CharterBtn to="/main">전</CharterBtn>
          </MonthlyCharterBtnBox>
        </List>
        <List>
          <Name>풀옵션</Name>
          <MonthlyCharterBtnBox>
            <MonthlyBtn to="/main">월</MonthlyBtn>
            <CharterBtn to="/main">전</CharterBtn>
          </MonthlyCharterBtnBox>
        </List>
        <List>
          <Name>사무실</Name>
          <MonthlyCharterBtnBox>
            <MonthlyBtn to="/main">월</MonthlyBtn>
            <CharterBtn to="/main">전</CharterBtn>
          </MonthlyCharterBtnBox>
        </List>
        <List>
          <Name>상가</Name>
          <MonthlyCharterBtnBox>
            <MonthlyBtn to="/main">월</MonthlyBtn>
            <CharterBtn to="/main">전</CharterBtn>
          </MonthlyCharterBtnBox>
        </List>
        <List>
          <Name>오피스텔</Name>
          <MonthlyCharterBtnBox>
            <MonthlyBtn to="/main">월</MonthlyBtn>
            <CharterBtn to="/main">전</CharterBtn>
          </MonthlyCharterBtnBox>
        </List>
        <List>
          <Name>아파트</Name>
          <MonthlyCharterBtnBox>
            <MonthlyBtn to="/main">월</MonthlyBtn>
            <CharterBtn to="/main">전</CharterBtn>
          </MonthlyCharterBtnBox>
        </List>
      </ListWrap>
    </GongsliPrdListTable>
  );
};

export default React.memo(GongsliPrdListTableCp);
