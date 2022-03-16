import React from 'react';
import { SubMenuWrap } from '../../../style/main';

const Gongsilmaemul = ({ mouseLeave }) => {
  return (
    <SubMenuWrap to="/main" onMouseLeave={mouseLeave}>
      <li className="sub-menu">전체</li>
      <li className="sub-menu">일반룸</li>
      <li className="sub-menu">풀옵션</li>
      <li className="sub-menu">사무실</li>
      <li className="sub-menu">상가</li>
      <li className="sub-menu">오피스텔</li>
      <li className="sub-menu">아파트</li>
    </SubMenuWrap>
  );
};

export default React.memo(Gongsilmaemul);
