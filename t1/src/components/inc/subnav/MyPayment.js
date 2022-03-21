import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '@/style/main';

const MyPayment = ({ mouseLeave }) => {
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '540px' }}>
        <SubNav to="/main">유료서비스 결제</SubNav>
        <SubNav to="/main">부가서비스 결제</SubNav>
        <SubNav to="/main">G포인트 충전</SubNav>
        <SubNav to="/main">결제 내역</SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(MyPayment);
