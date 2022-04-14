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
  &.active,
  :hover {
    font-weight: bold;
  }
`;

const Community = ({ mouseLeave }) => {
  const { isPathname } = store();
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '270px' }}>
        <SubNav className={isPathname === '/freeboard' ? 'active' : ''}>
          <Link to="/freeboard">자유게시판</Link>
        </SubNav>
        <SubNav className={isPathname === '/knowhow' ? 'active' : ''}>
          <Link to="/knowhow">팁&노하우</Link>
        </SubNav>
        <SubNav className={isPathname === '/recruit' ? 'active' : ''}>
          <Link to="/recruit">구인구직</Link>
        </SubNav>
        <SubNav className={isPathname === '/consult' ? 'active' : ''}>
          <Link to="/consult">부동산전문상담</Link>
        </SubNav>
        <SubNav className={isPathname === '/direct' ? 'active' : ''}>
          <Link to="/direct">부동산자리직거래</Link>
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(Community);
