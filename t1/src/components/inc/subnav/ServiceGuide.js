import React from 'react';
import styled from '@/style';
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
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

const ServiceGuide = ({ mouseLeave }) => {
  const { isPathname } = store();
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '520px' }}>
        <SubNav className={isPathname === '/serviceintro' ? 'active' : ''}>
          <Link to="/serviceintro">운영서비스</Link>
        </SubNav>
        <SubNav className={isPathname === '/charge' ? 'active' : ''}>
          <Link to="/charge">상품가격</Link>
        </SubNav>
        <SubNav className={isPathname === '/mobileapp' ? 'active' : ''}>
          <Link to="/mobileapp">모바일공실클럽</Link>
        </SubNav>
        <SubNav>
          <a href="http://www.propline.co.kr/intro.html" target="_blank" rel="noopener noreferrer">
            회사소개
          </a>
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(ServiceGuide);
