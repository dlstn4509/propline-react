import React from 'react';
import styled from '../../../style';

const GongsilmaemulWrap = styled.ul`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  .menu {
    padding-right: 25px;
    line-height: 50px;
  }
`;

const Gongsilmaemul = () => {
  return (
    <GongsilmaemulWrap>
      <li className="menu">전체</li>
      <li className="menu">일반룸</li>
      <li className="menu">풀옵션</li>
      <li className="menu">사무실</li>
      <li className="menu">상가</li>
      <li className="menu">오피스텔</li>
      <li className="menu">아파트</li>
    </GongsilmaemulWrap>
  );
};

export default React.memo(Gongsilmaemul);
