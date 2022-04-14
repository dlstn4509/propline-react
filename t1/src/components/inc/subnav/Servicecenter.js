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

const Servicecenter = ({ mouseLeave }) => {
  const { isPathname } = store();
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '378px' }}>
        <SubNav className={isPathname === '/notice' ? 'active' : ''}>
          <Link to="/notice">공지사항</Link>
        </SubNav>
        <SubNav className={isPathname === '/question' ? 'active' : ''}>
          <Link to="/question">자주하는질문</Link>
        </SubNav>
        <SubNav className={isPathname === '/requestboard' ? 'active' : ''}>
          <Link to="/requestboard">요청게시판</Link>
        </SubNav>
        <SubNav className={isPathname === '/inquiry' ? 'active' : ''}>
          <Link to="/inquiry">제휴&광고문의</Link>
        </SubNav>
        <SubNav className={isPathname === '/event' ? 'active' : ''}>
          <Link to="/event">이벤트</Link>
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(Servicecenter);
