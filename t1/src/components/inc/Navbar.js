import React, { useState, useEffect } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import Gongsilmaemul from './subnav/Gongsilmaemul';
import Gongdongjunggae from './subnav/Gongdongjunggae';
import MamulSelf from './subnav/MamulSelf';
import Community from './subnav/Community';
import Servicecenter from './subnav/Servicecenter';
import ServiceGuide from './subnav/ServiceGuide';
import MyPayment from './subnav/MyPayment';

const NavbarWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: ${color.blue};
`;
const NavWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;
const NavLeft = styled.div`
  display: flex;
`;
const NavRight = styled.div`
  display: flex;
`;
const Nav = styled.div`
  color: #fff;
  line-height: 70px;
  font-size: ${(props) => (props.fs ? props.fs : '18px')};
  letter-spacing: -0.06em;
  margin-right: ${(props) => (props.mr ? props.mr : '45px')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  &.active {
    font-weight: 600;
    ::after {
      content: '';
      width: 90%;
      height: 5px;
      background-color: #fff;
      position: absolute;
      bottom: 0;
    }
  }
  :hover {
    font-weight: 600;
    ::after {
      content: '';
      width: 90%;
      height: 5px;
      background-color: #fff;
      position: absolute;
      bottom: 0;
    }
  }
  img {
    margin-right: 10px;
  }
`;

const Navbar = () => {
  const [navNum, setNavNum] = useState(-1);
  const { isPathname, setPathName } = store();
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
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <>
      <NavbarWrapper>
        <NavWrap>
          <NavLeft>
            <Nav
              onMouseEnter={() => {
                setNavNum(1);
              }}
              className={isPathname === '/item' ? 'active' : ''}
            >
              <Link to="/item?type=all">공실매물</Link>
            </Nav>
            <Nav
              onMouseEnter={() => {
                setNavNum(2);
              }}
              className={isPathname === '/itempublic' ? 'active' : ''}
            >
              <Link to="/itempublic?type=all">공동중개</Link>
            </Nav>
            <Nav
              onMouseEnter={() => {
                setNavNum(-1);
              }}
              className={isPathname === '/saleinfo' ? 'active' : ''}
            >
              <Link to="/saleinfo">매매정보</Link>
            </Nav>
            <Nav
              onMouseEnter={() => {
                setNavNum(4);
              }}
              className={
                isPathname === '/finditem' || isPathname === '/saleitem' || isPathname === '/request'
                  ? 'active'
                  : ''
              }
            >
              <Link to="/finditem">매물셀프코너</Link>
            </Nav>
            <Nav
              onMouseEnter={() => {
                setNavNum(5);
              }}
              className={
                isPathname === '/freeboard' ||
                isPathname === '/knowhow' ||
                isPathname === '/recruit' ||
                isPathname === '/consult' ||
                isPathname === '/direct'
                  ? 'active'
                  : ''
              }
              fs={'15px'}
            >
              <Link to="/freeboard">커뮤니티</Link>
            </Nav>
            <Nav
              onMouseEnter={() => {
                setNavNum(6);
              }}
              className={
                isPathname === '/notice' ||
                isPathname === '/question' ||
                isPathname === '/requestboard' ||
                isPathname === '/inquiry' ||
                isPathname === '/event'
                  ? 'active'
                  : ''
              }
              fs={'15px'}
            >
              <Link to="/notice">고객센터</Link>
            </Nav>
            <Nav
              onMouseEnter={() => {
                setNavNum(7);
              }}
              className={
                isPathname === '/serviceintro' || isPathname === '/charge' || isPathname === '/mobileapp'
                  ? 'active'
                  : ''
              }
              fs={'15px'}
            >
              <Link to="/serviceintro">서비스안내</Link>
            </Nav>
            <Nav
              onMouseEnter={() => {
                setNavNum(8);
              }}
              className={isPathname === '/main' ? 'active' : ''}
              fs={'15px'}
            >
              <Link to="/main">MY결제</Link>
            </Nav>
          </NavLeft>
          <NavRight>
            <Nav mr={'0'}>
              <img src={process.env.REACT_APP_URL + 'img/mamul_wr.png'} alt="" />
              <div>매물의뢰</div>
            </Nav>
          </NavRight>
        </NavWrap>
      </NavbarWrapper>
      {navNum === -1 && <div style={{ height: '50px' }}></div>}
      {navNum === 1 && <Gongsilmaemul mouseLeave={mouseLeave} />}
      {navNum === 2 && <Gongdongjunggae mouseLeave={mouseLeave} />}
      {navNum === 4 && <MamulSelf mouseLeave={mouseLeave} />}
      {navNum === 5 && <Community mouseLeave={mouseLeave} />}
      {navNum === 6 && <Servicecenter mouseLeave={mouseLeave} />}
      {navNum === 7 && <ServiceGuide mouseLeave={mouseLeave} />}
      {navNum === 8 && <MyPayment mouseLeave={mouseLeave} />}
    </>
  );
};

export default React.memo(Navbar);
