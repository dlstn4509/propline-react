import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '../../../style/main';

const Gongsilmaemul = ({ mouseLeave }) => {
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave}>
        <SubNav to="/main">전체</SubNav>
        <SubNav to="/main">일반룸</SubNav>
        <SubNav to="/main">풀옵션</SubNav>
        <SubNav to="/main">사무실</SubNav>
        <SubNav to="/main">상가</SubNav>
        <SubNav to="/main">오피스텔</SubNav>
        <SubNav to="/main">아파트</SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(Gongsilmaemul);
