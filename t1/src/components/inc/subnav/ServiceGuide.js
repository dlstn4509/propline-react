import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '../../../style/main';

const ServiceGuide = ({ mouseLeave }) => {
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '520px' }}>
        <SubNav to="/main">운영서비스</SubNav>
        <SubNav to="/main">상품가격</SubNav>
        <SubNav to="/main">모바일공실클럽</SubNav>
        <SubNav to="/main">회사소개</SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(ServiceGuide);
