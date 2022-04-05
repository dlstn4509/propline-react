import React from 'react';
import styled, { Title, Button } from '@/style';
import { Link } from 'react-router-dom';

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #999;
  height: 82px;
  padding-left: 25px;
  font-size: 13px;
  margin-bottom: 70px;
`;
const SubTitle01 = styled.div`
  color: #888f91;
  margin-right: 10px;
`;
const SubTitle02 = styled.div`
  color: #464d50;
  margin-right: 30px;
`;

const MyInfoCp = () => {
  return (
    <>
      <Title>나의 이용 현황</Title>
      <InfoWrap>
        <SubTitle01>만기</SubTitle01>
        <SubTitle02>2059-03-04</SubTitle02>
        <SubTitle01>ID갯수</SubTitle01>
        <SubTitle02>206개 이용중</SubTitle02>
        <SubTitle01>잔여 G포인트</SubTitle01>
        <SubTitle02>17,000P</SubTitle02>
        <SubTitle01>담당자</SubTitle01>
        <SubTitle02>1644-5510(내선번호 2번)</SubTitle02>
        <Button>원격지원</Button>
      </InfoWrap>
    </>
  );
};

export default React.memo(MyInfoCp);
