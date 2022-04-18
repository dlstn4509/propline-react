import React, { useState } from 'react';
import styled, { Title } from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';

const NaverAdWrapper = styled.div`
  margin-bottom: 70px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e6e6e6;
`;
const NaverAdWrap = styled.div`
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #464d50;
  div {
    padding-left: 15px;
  }
`;
const SubTitle = styled.div`
  height: 57px;
  background-color: #f5f5f5;
  width: 160px;
  display: flex;
  align-items: center;
`;

const NaverAdCp = () => {
  const [isNaverAd, setIsNaverAd] = useState(2); // 1 요청 , 2 안요청
  return (
    <NaverAdWrapper>
      <input type="hidden" name="is_want_naverad" value={isNaverAd} />
      <Title>네이버 부동산 광고</Title>
      <NaverAdWrap>
        <SubTitle>네이버부동산 광고요청</SubTitle>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setIsNaverAd(isNaverAd === 1 ? 2 : 1);
          }}
        >
          {isNaverAd === 2 && <FaRegSquare />}
          {isNaverAd === 1 && <FaCheckSquare />}
          광고를 원합니다.
        </div>
        <div style={{ fontSize: '12px', color: '#888f91' }}>
          <div>* 중개업소가 네이버 부동산에 광고하는것을 허용합니다.</div>
          <div>* 의뢰인이 소유주일 경우에만 네이버 부동산 광고 요청을 하실수 있습니다.</div>
        </div>
      </NaverAdWrap>
    </NaverAdWrapper>
  );
};

export default React.memo(NaverAdCp);
