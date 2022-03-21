import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '@/style/main';

const Community = ({ mouseLeave }) => {
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '270px' }}>
        <SubNav to="/main">자유게시판</SubNav>
        <SubNav to="/main">팁&노하우</SubNav>
        <SubNav to="/main">구인구직</SubNav>
        <SubNav to="/main">부동산전문상담</SubNav>
        <SubNav to="/main">부동산자리직거래</SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(Community);
