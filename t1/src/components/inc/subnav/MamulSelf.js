import React from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

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
  &.active {
    font-weight: bold;
  }
`;

const MamulSelf = ({ mouseLeave }) => {
  const { isPathname } = store();
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '235px' }}>
        <SubNav className={isPathname === '/finditem' ? 'active' : ''}>
          <Link to="/finditem">매물찾습니다</Link>
        </SubNav>
        <SubNav className={isPathname === '/saleitem' ? 'active' : ''}>
          <Link to="/saleitem">매물내놓습니다</Link>
        </SubNav>
        <SubNav to="/request" className={isPathname === '/request' ? 'active' : ''}>
          <Link to="/request">중개의뢰현황</Link> <span>N</span>
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(MamulSelf);
