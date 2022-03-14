import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../style';

const HeaderWrap = styled.div`
  background-color: #f0f3f7;
  width: 100vw;
  height: 39px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 0 10px 0;
`;

const HeadWrap = styled.div`
  display: flex;
  width: 1000px;
  .right {
    display: flex;
    margin-left: auto;
  }
  .left {
    margin-right: auto;
  }
`;

const HeaderLink = styled.div`
  margin-right: 1em;
  color: #000000;
  cursor: pointer;
`.withComponent(Link);

const Header = () => {
  return (
    <HeaderWrap>
      <HeadWrap>
        <div className="left">
          <HeaderLink to="/main">즐겨찾기</HeaderLink>
          <HeaderLink to="/about">이용안내</HeaderLink>
        </div>
        <div className="right">
          <div>IP: 106.246.230.90</div>
          <div>로그아웃</div>
        </div>
      </HeadWrap>
    </HeaderWrap>
  );
};

export default React.memo(Header);
