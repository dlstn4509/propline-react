import React, { useState, useEffect } from 'react';
import {
  NavbarWrapper,
  NavbarWrap,
  Menu,
  MenuLink,
  Type02,
  Type02Link,
  Menul,
  MenulLink,
} from '@/style/main';

import Gongsilmaemul from './subnav/Gongsilmaemul';
import Gongdongjunggae from './subnav/Gongdongjunggae';
import MamulSelf from './subnav/MamulSelf';
import Community from './subnav/Community';
import Servicecenter from './subnav/Servicecenter';
import ServiceGuide from './subnav/ServiceGuide';
import MyPayment from './subnav/MyPayment';

const Navbar = () => {
  const [navNum, setNavNum] = useState(-1);
  useEffect(() => {
    document.querySelectorAll('.menu').forEach((v, i) => {
      v.addEventListener('mouseenter', () => {
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
          <Menu className="menu">
            <MenuLink to="/item">공실매물</MenuLink>
            {navNum === 0 && <Gongsilmaemul mouseLeave={mouseLeave} />}
          </Menu>
          <Menu className="menu">
            <MenuLink to="/main">공동중개</MenuLink>
            {navNum === 1 && <Gongdongjunggae mouseLeave={mouseLeave} />}
          </Menu>
          <Menu className="menu">
            <MenuLink to="/main">매매정보</MenuLink>
          </Menu>
          <Menu className="menu">
            <MenuLink to="/main">매물셀프코너</MenuLink>
            {navNum === 3 && <MamulSelf mouseLeave={mouseLeave} />}
          </Menu>
          <Type02 className="menu">
            <Type02Link to="/main">커뮤니티</Type02Link>
            {navNum === 4 && <Community mouseLeave={mouseLeave} />}
          </Type02>
          <Type02 className="menu">
            <Type02Link to="/main">고객센터</Type02Link>
            {navNum === 5 && <Servicecenter mouseLeave={mouseLeave} />}
          </Type02>
          <Type02 className="menu">
            <Type02Link to="/main">서비스안내</Type02Link>
            {navNum === 6 && <ServiceGuide mouseLeave={mouseLeave} />}
          </Type02>
          <Type02 className="menu">
            <Type02Link to="/main">MY결제</Type02Link>
            {navNum === 7 && <MyPayment mouseLeave={mouseLeave} />}
          </Type02>
          <Menul>
            <MenulLink to="/main">매물의뢰</MenulLink>
          </Menul>
        </NavbarWrap>
      </NavbarWrapper>
    </>
  );
};

export default React.memo(Navbar);
