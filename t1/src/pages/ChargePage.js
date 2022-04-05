import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap, color } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import ChargeCp from '../components/charge/ChargeCp';
import NaverChargeCp from '../components/charge/NaverChargeCp';
import NaverCouponCp from '../components/charge/NaverCouponCp';

const TextWrap = styled.div`
  margin-bottom: 70px;
  span {
    color: ${color.blue};
  }
`;

const ChargePage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper style={{ fontSize: '13px' }}>
      <PageWrap>
        <Title>공실클럽이란?</Title>
        <TextWrap>
          공실클럽에서 제공하는 공실매물은 직접 확인 및 관리하는
          <span>
            실매물이며, 양타수수료(건물주 수수료 + 세입자 수수료) 지급이 가능한 매물 정보를 볼수 있는 사이트
          </span>
          입니다.
        </TextWrap>
        <ChargeCp />
        <NaverChargeCp />
        <NaverCouponCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(ChargePage);
