import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '../../../style/main';

const Servicecenter = ({ mouseLeave }) => {
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '378px' }}>
        <SubNav to="/main">공지사항</SubNav>
        <SubNav to="/main">자주하는질문</SubNav>
        <SubNav to="/main">요청게시판</SubNav>
        <SubNav to="/main">제휴&광고문의</SubNav>
        <SubNav to="/main">이벤트</SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(Servicecenter);
