import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SearchPublicMyWrapper = styled.div``;
const InfoWrap = styled.div`
  font-size: 13px;
  color: #464d50;
  margin-bottom: 50px;
`;
const TypeWrap = styled.div`
  border: 1px solid #dae1e7;
  padding-bottom: 24px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  color: #464d50;
  cursor: pointer;
  font-size: 13px;
  div {
    padding: 24px 26px 0 26px;
  }
`;

const SearchPublicMyCp = () => {
  return (
    <SearchPublicMyWrapper>
      <InfoWrap>
        <div>* 공동중개 광고기간은 등록일 기준 30일입니다. (기간 만료 시 자동 광고 off)</div>
        <div>* 본인이 등록한 매물만 삭제가 가능합니다.</div>
        <div style={{ fontWeight: 'bold' }}>
          * [복사 등록] 하는 경우 이전 매물과 다른 매물번호로 추가 등록됩니다.
        </div>
      </InfoWrap>
      <TypeWrap>
        <div>공장/창고(1)</div>
        <div>단독/다가구(2)</div>
        <div>빌라/연립(1)</div>
        <div>사무실(2)</div>
        <div>상가/점포(5)</div>
        <div>아파트/주상복합(3)</div>
        <div>아파트분양권(1)</div>
        <div>오피스텔(1)</div>
        <div>원룸(54)</div>
        <div>토지/임야(5)</div>
      </TypeWrap>
    </SearchPublicMyWrapper>
  );
};

export default React.memo(SearchPublicMyCp);
