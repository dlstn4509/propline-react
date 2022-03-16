import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default styled;

/************************** common **************************/
const Inner = { width: '1000px', margin: '0 auto' };
const Flr = { float: 'right' };
const Fll = { float: 'left' };

/************************** Header **************************/
export const HeaderWrap = styled.div`
  font-size: 0;
  background-color: #f0f3f7;
  padding: 9px 10px;
  a {
    font-size: 14px;
    color: #464d50;
    vertical-align: middle;
    margin-left: 20px;
    :hover {
      text-decoration: underline;
      color: #888f91;
    }
    :first-child {
      margin-left: 0;
    }
  }
  span {
    font-size: 13px;
    font-weight: 400;
    color: #888f91;
    vertical-align: middle;
  }
`;

export const InnerWrap = styled.div`
  ${Inner};
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const FllWrap = styled.div`
  ${Fll}
`;
export const FlrWrap = styled.div`
  ${Flr}
`;

export const HeaderLink = styled(Link)`
  font-size: 14px;
  color: #464d50;
  vertical-align: middle;
  margin-left: 20px;
  :hover {
    text-decoration: underline;
    color: #888f91;
  }
  :first-child {
    margin-left: 0;
  }
`;

export const Bookmark = styled.a`
  font-size: 14px;
  color: #464d50;
  vertical-align: middle;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #888f91;
  }
  :first-child {
    margin-left: 0;
  }
`;

/**************************** SearchArea ****************************/
export const MainSearchArea = styled.div`
  ${'' /* main-srch-area */}
  padding:42px 0;
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const LogoBox = styled.div`
  display: inline-block;
  width: 130px;
  vertical-align: middle;
  margin-right: 25px;
`.withComponent(Link);

export const InputWrap = styled.div`
  display: inline-block;
  vertical-align: middle;
  input {
    width: 312px;
    height: 40px;
    text-indent: 18px;
    border: 1px solid #dae1e7;
    border-radius: 50px;
    color: #464d50;
    font-size: 13px;
  }
`;

export const IdWrap = styled.div`
  margin-top: 10px;
  ${Flr};
  .pay-btn {
    width: 50px;
    border-radius: 50px;
    display: inline-block;
    background-color: #3168ff;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
  span {
    vertical-align: middle;
    font-size: 13px;
    color: #464d50;
  }
  a {
    color: #ffffff;
    :first-child {
      color: #3168ff;
    }
  }
`;

export const Id = styled(Link)`
  vertical-align: middle;
  font-size: 13px;
  text-decoration: underline;
`;

export const PayBtn = styled(Link)`
  vertical-align: middle;
  width: 50px;
  border-radius: 50px;
  display: inline-block;
  background-color: #3168ff;
  text-align: center;
  font-size: 14px;
`;

/******************************* NavWrapper *******************************/
export const NavbarWrapper = styled.div`
  background-color: #3168ff;
`;

export const NavbarWrap = styled.ul`
  width: 1000px;
  margin: 0 auto;
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const Menu = styled.li`
  float: left;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-size: 18px;
  margin-right: 45px;
  position: relative;
  cursor: pointer;
  a:hover {
    font-weight: 600;
    ::after {
      content: '';
      display: inline-block;
      width: 90%;
      height: 5px;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

export const MenuLink = styled(Link)``;

export const Type02 = styled(Menu)`
  margin-right: 27px;
  font-size: 15px;
`;

export const Menul = styled(Menu)`
  float: right;
  margin-right: 0;
  padding-left: 25px;
  background-image: url(${process.env.REACT_APP_URL + 'img/mamul_wr.png'});
  background-repeat: no-repeat;
  background-position: left center;
`;

/******************************** SubNav ********************************/
export const SubMenuWrap = styled(Link)`
  width: 100%;
  height: 50px;
  background-color: #f0f3f7;
  position: absolute;
  left: 0;
  bottom: -50px;
  font-size: 0;
  .sub-menu {
    margin-right: 25px;
    display: inline-block;
    font-size: 14px;
    color: #464d50;
  }
`;
