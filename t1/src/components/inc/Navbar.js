import React, { useState, useEffect } from 'react';
import { NavbarWrapper, NavbarWrap, Menu, MenuLink, Type02, Menul } from '../../style/main';

import Gongsilmaemul from './subnav/Gongsilmaemul';
import Gongdongjunggae from './subnav/Gongdongjunggae';

const Navbar = () => {
  const [navNum, setNavNum] = useState(-1);
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
        <NavbarWrap>
          <Menu className="li">
            <MenuLink to="/main">공실매물</MenuLink>
            {navNum === 0 && <Gongsilmaemul mouseLeave={mouseLeave} />}
          </Menu>
          <Menu className="li">
            <MenuLink to="/main">공동중개</MenuLink>
            {navNum === 1 && <Gongdongjunggae mouseLeave={mouseLeave} />}
          </Menu>
          <Menu className="li">
            <MenuLink to="/main">매매정도</MenuLink>
          </Menu>
          <Menu className="li">
            <MenuLink to="/main">매물셀프코너</MenuLink>
          </Menu>
          <Type02 className="type02">
            <MenuLink to="/main">커뮤니티</MenuLink>
          </Type02>
          <Type02 className="type02">
            <MenuLink to="/main">고객센터</MenuLink>
          </Type02>
          <Type02 className="type02">
            <MenuLink to="/main">서비스안내</MenuLink>
          </Type02>
          <Type02 className="type02">
            <MenuLink to="/main">MY결제</MenuLink>
          </Type02>
          <Menul className="type02">
            <MenuLink to="/main">매물의뢰</MenuLink>
          </Menul>
        </NavbarWrap>
      </NavbarWrapper>
    </>
  );
};

export default React.memo(Navbar);
