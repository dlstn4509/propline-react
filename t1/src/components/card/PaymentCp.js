import React, { useEffect, useCallback } from 'react';
import styled, { Title, color } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';
const PaymentWrapper = styled.div`
  margin-bottom: 60px;
`;
const PaymentWrap = styled.div`
  display: flex;
`;
const Tab = styled(Link)`
  width: 180px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
  &.active {
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: none;
    color: ${color.blue};
  }
`;
const EmptyTab = styled.div`
  width: 460px;
  height: 44px;
  border-bottom: 1px solid #000;
`;

const PaymentCp = () => {
  const { isPathname, setPathName } = store();
  let pathname = window.location.pathname;
  const onClick = useCallback(() => {
    setPathName(pathname);
  }, []);
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  return (
    <PaymentWrapper>
      <Title>결제하기</Title>
      <PaymentWrap>
        <Tab to="/card" className={isPathname === '/card' ? 'active' : ''} onClick={onClick}>
          공실클럽 유료서비스
        </Tab>
        <Tab to="/extrapayment" className={isPathname === '/extrapayment' ? 'active' : ''} onClick={onClick}>
          부가서비스
        </Tab>
        <Tab to="/gpoint" className={isPathname === '/gpoint' ? 'active' : ''} onClick={onClick}>
          G포인트
        </Tab>
        <EmptyTab></EmptyTab>
      </PaymentWrap>
    </PaymentWrapper>
  );
};

export default React.memo(PaymentCp);
