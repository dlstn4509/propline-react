import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import { MainWrapper, TitleWrap, ContentsWrap } from './bassStyle.js';

const SubTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
`;
const SubTextWrap = styled.div`
  margin-bottom: 20px;
`;
const SubText = styled(Link)`
  display: block;
  font-size: 15px;
  font-weight: 200;
  padding-left: 30px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #3168ff;
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const MainCp = () => {
  return (
    <MainWrapper>
      <TitleWrap>공실클럽 이용안내</TitleWrap>
      <ContentsWrap padding={'30px'}>
        <Title>공실클럽 이용안내 목차</Title>
        <SubTitle>포탈 이용안내</SubTitle>
        <SubTextWrap>
          <SubText to="">1. 공실클럽 회원 가입 방법</SubText>
          <SubText to="">2. 공실클럽 유료서비스 결제하기</SubText>
          <SubText to="">3. G포인트 충전하기</SubText>
          <SubText to="">4. 공지사항 & 기능개선 업데이트 내역 확인하기</SubText>
          <SubText to="">5. 매물의뢰하기</SubText>
          <SubText to="">6. 원격지원 서비스 요청 방법</SubText>
          <SubText to="">7. 맥 수동설치 방법(익스플로러 전용)</SubText>
        </SubTextWrap>
        <SubTitle>공실매물 이용안내</SubTitle>
        <SubTextWrap>
          <SubText to="">1. 공실매물 조회하기</SubText>
        </SubTextWrap>
        <SubTitle>공동중개 이용안내</SubTitle>
        <SubTextWrap>
          <SubText to="">1. 공동중개 조회하기</SubText>
          <SubText to="">2. 공동중개 매물등록하기</SubText>
        </SubTextWrap>
        <SubTitle>매매정보 이용안내</SubTitle>
        <SubTextWrap>
          <SubText to="">1. 매매정보 조회하기</SubText>
        </SubTextWrap>
        <SubTitle>관심매물 이용안내</SubTitle>
        <SubTextWrap>
          <SubText to="">1. 관심매물 담기 및 조회하기</SubText>
        </SubTextWrap>
        <SubTitle>매물셀프코너 이용안내</SubTitle>
        <SubTextWrap>
          <SubText to="">1. 매물 찾습니다&매물내놓습니다 이용방법</SubText>
          <SubText to="">2. 중개의뢰현황 이용방법</SubText>
        </SubTextWrap>
        <SubTitle>커뮤니티 이용안내</SubTitle>
        <SubTextWrap>
          <SubText to="">1. 자유게시판 이용하기</SubText>
          <SubText to="">2. 팁&노하우 이용하기</SubText>
          <SubText to="">3. 구인구직 이용하기</SubText>
          <SubText to="">4. 부동산 전문상담 이용하기</SubText>
          <SubText to="">5. 부동산자리직거래 이용하기</SubText>
        </SubTextWrap>
      </ContentsWrap>
    </MainWrapper>
  );
};

export default React.memo(MainCp);
