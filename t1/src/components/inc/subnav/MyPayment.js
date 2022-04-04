import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SubNavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f0f3f7;
`;
const SubNavWrap = styled.div`
  width: 1000px;
  display: flex;
`;
const SubNav = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-right: 25px;
  font-size: 13px;
  color: #464d50;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

const MyPayment = ({ mouseLeave }) => {
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '540px' }}>
        <SubNav>
          <Link to="/main">유료서비스 결제</Link>
        </SubNav>
        <SubNav>
          <Link to="/main">부가서비스 결제</Link>
        </SubNav>
        <SubNav>
          <Link to="/main">G포인트 충전</Link>
        </SubNav>
        <SubNav>
          <Link to="/main">결제 내역</Link>
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(MyPayment);
