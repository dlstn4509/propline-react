import React, { useState, useEffect } from 'react';
import styled from '../../style';

import SubNavbar from './SubNavbar';

const NavbarWrapper = styled.div`
  background-color: #3168ff;
  height: 70px;
  width: 100%;
`;

const NavMenu = styled.ul`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  vertical-align: middle;
  padding: 25px 0;
  color: #fff;
  .li {
    cursor: pointer;
  }
  .menu {
    align-items: center;
    justify-content: center;
    padding-right: 45px;
    font-size: 18px;
  }
  .sub-menu {
    font-size: 15px;
    padding-right: 27px;
  }
  .qus {
    margin-left: auto;
  }
`;

const Navbar = () => {
  const [navNum, setNavNum] = useState('-1');
  useEffect(() => {
    document.querySelectorAll('.li').forEach((v, i) => {
      v.addEventListener('mouseenter', (e) => {
        setNavNum(i);
      });
    });
  }, []);
  const mouseLeave = () => {
    setNavNum(-1);
  };
  return (
    <>
      <NavbarWrapper>
        <NavMenu>
          <li className="li menu">공실매물</li>
          <li className="li menu">공동중개</li>
          <li className="li menu">매매정도</li>
          <li className="li menu">매물셀프코너</li>
          <li className="li sub-menu">커뮤니티</li>
          <li className="li sub-menu">고객센터</li>
          <li className="li sub-menu">서비스안내</li>
          <li className="li sub-menu">MY결제</li>
          <li className="li qus">매물의뢰</li>
        </NavMenu>
      </NavbarWrapper>
      {navNum > -1 && <SubNavbar navNum={navNum} mouseLeave={mouseLeave} />}
    </>
  );
};

export default React.memo(Navbar);
