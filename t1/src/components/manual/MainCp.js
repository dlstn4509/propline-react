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
const SubText = styled.div`
  display: block;
  font-size: 15px;
  font-weight: 200;
  padding-left: 30px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #3168ff;
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const MainCp = ({ setChoiceList, setChoiceListWrap }) => {
  return (
    <MainWrapper>
      <TitleWrap>공실클럽 이용안내</TitleWrap>
      <ContentsWrap padding={'30px'}>
        <Title>공실클럽 이용안내 목차</Title>
        {/************************************************/}
        <SubTitle>포탈 이용안내</SubTitle>
        <SubTextWrap
          onClick={() => {
            setChoiceListWrap('portal');
          }}
        >
          <SubText
            onClick={() => {
              setChoiceList('singUp');
            }}
          >
            1. 공실클럽 회원 가입 방법
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('payment');
            }}
          >
            2. 공실클럽 유료서비스 결제하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('gpoint');
            }}
          >
            3. G포인트 충전하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('notice');
            }}
          >
            4. 공지사항 & 기능개선 업데이트 내역 확인하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('request');
            }}
          >
            5. 매물의뢰하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('service');
            }}
          >
            6. 원격지원 서비스 요청 방법
          </SubText>
          <SubText>7. 맥 수동설치 방법(익스플로러 전용)</SubText>
        </SubTextWrap>
        {/************************************************/}
        <SubTitle>공실매물 이용안내</SubTitle>
        <SubTextWrap
          onClick={() => {
            setChoiceListWrap('gongsilMamul');
            setChoiceList('mamulSearch');
          }}
        >
          <SubText>1. 공실매물 조회하기</SubText>
        </SubTextWrap>
        {/************************************************/}
        <SubTitle>공동중개 이용안내</SubTitle>
        <SubTextWrap
          onClick={() => {
            setChoiceListWrap('gongdongJunggae');
          }}
        >
          <SubText
            onClick={() => {
              setChoiceList('junggaeSearch');
            }}
          >
            1. 공동중개 조회하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('junggaeReg');
            }}
          >
            2. 공동중개 매물등록하기
          </SubText>
        </SubTextWrap>
        {/************************************************/}
        <SubTitle>매매정보 이용안내</SubTitle>
        <SubTextWrap
          onClick={() => {
            setChoiceListWrap('saleInfo');
            setChoiceList('saleSearch');
          }}
        >
          <SubText>1. 매매정보 조회하기</SubText>
        </SubTextWrap>
        {/************************************************/}
        <SubTitle>관심매물 이용안내</SubTitle>
        <SubTextWrap
          onClick={() => {
            setChoiceListWrap('interest');
            setChoiceList('interest');
          }}
        >
          <SubText>1. 관심매물 담기 및 조회하기</SubText>
        </SubTextWrap>
        {/************************************************/}
        <SubTitle>매물셀프코너 이용안내</SubTitle>
        <SubTextWrap
          onClick={() => {
            setChoiceListWrap('self');
          }}
        >
          <SubText
            onClick={() => {
              setChoiceList('howToSearch');
            }}
          >
            1. 매물 찾습니다&매물내놓습니다 이용방법
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('commission');
            }}
          >
            2. 중개의뢰현황 이용방법
          </SubText>
        </SubTextWrap>
        {/************************************************/}
        <SubTitle>커뮤니티 이용안내</SubTitle>
        <SubTextWrap
          onClick={() => {
            setChoiceListWrap('community');
          }}
        >
          <SubText
            onClick={() => {
              setChoiceList('freeBoard');
            }}
          >
            1. 자유게시판 이용하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('knowHow');
            }}
          >
            2. 팁&노하우 이용하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('recruit');
            }}
          >
            3. 구인구직 이용하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('consult');
            }}
          >
            4. 부동산 전문상담 이용하기
          </SubText>
          <SubText
            onClick={() => {
              setChoiceList('direct');
            }}
          >
            5. 부동산자리직거래 이용하기
          </SubText>
        </SubTextWrap>
      </ContentsWrap>
    </MainWrapper>
  );
};

export default React.memo(MainCp);
