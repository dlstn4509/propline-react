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
export const HeaderLink = styled.div`
  display: inline-block;
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
  position: relative;
  input {
    width: 312px;
    height: 40px;
    text-indent: 18px;
    border: 1px solid #dae1e7;
    border-radius: 50px;
    color: #464d50;
    font-size: 13px;
  }
  .icon {
    position: absolute;
    vertical-align: middle;
    align-items: center;
    right: 15px;
    top: 9px;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
  }
`;
export const IdWrap = styled.div`
  margin-top: 10px;
  ${Flr};
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
  margin-right: 10px;
  font-size: 13px;
`;
export const PayBtn = styled(Link)`
  vertical-align: middle;
  margin-left: 8px;
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
  position: relative;
  margin-bottom: 60px;
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
  a {
    color: #fff;
  }
`;
export const MenuLink = styled(Link)`
  display: inline-block;
  height: 70px;
  line-height: 70px;
  font-size: 18px;
  margin-right: 45px;
  position: relative;
  :hover {
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
export const Type02 = styled.ul`
  a {
    color: #fff;
  }
`;
export const Type02Link = styled(Link)`
  display: inline-block;
  float: left;
  height: 70px;
  line-height: 70px;
  font-size: 18px;
  margin-right: 27px;
  font-size: 15px;
  position: relative;
  :hover {
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
export const Menul = styled.li`
  float: right;
  display: inline-block;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-size: 18px;
  position: relative;
`;
export const MenulLink = styled(Link)`
  margin-right: 0;
  padding-left: 25px;
  background-image: url(${process.env.REACT_APP_URL + 'img/mamul_wr.png'});
  background-repeat: no-repeat;
  background-position: left center;
  :hover {
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

/******************************** SubNav ********************************/
export const SubNavWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f0f3f7;
  position: absolute;
  left: 0;
  bottom: -50px;
  font-size: 0;
  .active {
    font-weight: 600;
  }
`;
export const SubNavWrap = styled.ul`
  width: 1000px;
  margin: 0 auto;
  a {
    color: #464d50;
  }
`;
export const SubNav = styled(Link)`
  margin-right: 25px;
  line-height: 50px;
  display: inline-block;
  font-size: 14px;
  :hover {
    font-weight: 600;
  }
  span {
    color: #fff;
    background-color: #f1174b;
    border-radius: 3px;
    font-size: 11px;
    font-weight: bold;
    padding: 0px 4px 0px 3px;
    cursor: default;
  }
`;

/*************************** Login, Logout *****************/
export const MainLoginBox = styled.div`
  border: 1px solid #dae1e7;
  border-radius: 5px;
  padding: 0 8px;
  text-align: center;
  a:second-child {
    color: #ffffff;
  }
`;
export const MainLoginTit = styled.div`
  padding-top: 17px;
  color: #464d50;
  font-size: 13px;
`;
export const MainLoginBtn = styled(Link)`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  background-color: #3168ff;
  padding: 8px 0 8px 0;
  border-radius: 5px;
  margin-top: 13px;
`;
export const MainJoinBtn = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  color: #464d50;
  font-size: 13px;
`;
export const FindIdPwWrap = styled.div`
  padding: 16px 0px 10px;
`;
export const FindIdPwLink = styled.div`
  color: #888f91;
  font-size: 13px;
  display: inline-block;
  padding: 0 6px;
  position: relative;
  :hover {
    text-decoration: underline;
  }
  :after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 70%;
    background-color: #888f91;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  :first-child::after {
    display: none;
  }
`;
export const AfterLoginTit = styled.div`
  padding: 10px 0;
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;
export const User = styled.span`
  font-size: 13px;
  color: #3168ff;
  float: left;
`;
export const LogoutBtn = styled(Link)`
  font-size: 13px;
  float: right;
`;
export const UserInfoBox = styled.div`
  padding: 5px 0 10px 10px;
  background-color: #f0f3f7;
  border-radius: 5px;
`;
export const List = styled.div`
  font-size: 0;
  margin-top: 5px;
  text-align: left;
  :first-child {
    margin-top: 0;
  }
  .tit {
    font-size: 13px;
    color: #464d50;
  }
  .txt {
    font-size: 13px;
    color: #000000;
    margin-left: 5px;
  }
`;
export const AfterLoginBtnArea = styled.div`
  font-size: 0;
  margin-top: 10px;
  a {
    color: #ffffff;
  }
`;
export const PayMentBtn = styled(Link)`
  display: inline-block;
  width: 49%;
  background-color: #3168ff;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
`;
export const ChargeBtn = styled(Link)`
  display: inline-block;
  width: 49%;
  background-color: #888f91;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  margin-left: 2%;
`;
export const AfterLoginOptionArea = styled.div`
  font-size: 0;
  padding: 10px 0;
  > a {
    width: 33.3%;
    display: inline-block;
    padding-top: 15px;
  }
`;
export const MyCoBrokenBtn = styled(Link)`
  font-size: 12px;
  font-weight: 300;
  color: #464d50;
  line-height: 14px;
  background-image: url(${process.env.REACT_APP_URL + 'img/sitemap.png'});
  background-repeat: no-repeat;
  background-position: center top;
  :hover {
    background-image: url(${process.env.REACT_APP_URL + 'img/sitemap02.png'});
    color: #3168ff;
  }
`;
export const MyInfoModifyBtn = styled(Link)`
  font-size: 12px;
  font-weight: 300;
  color: #464d50;
  line-height: 14px;
  background-image: url(${process.env.REACT_APP_URL + 'img/Profile.png'});
  background-repeat: no-repeat;
  background-position: center top;
  :hover {
    background-image: url(${process.env.REACT_APP_URL + 'img/Profile02.png'});
    color: #3168ff;
  }
`;
export const ContractMgmBtn = styled(Link)`
  font-size: 12px;
  font-weight: 300;
  color: #464d50;
  line-height: 14px;
  background-image: url(${process.env.REACT_APP_URL + 'img/file-alt.png'});
  background-repeat: no-repeat;
  background-position: center top;
  :hover {
    background-image: url(${process.env.REACT_APP_URL + 'img/file-alt02.png'});
    color: #3168ff;
  }
`;

/*************************** mamul list *****************/
export const TableWrap = styled.table`
  width: 370px;
`;
export const TableTheadTr = styled.tr`
  border-bottom: 1px solid #888f91;
  th {
    padding: 0 0 17px 0;
  }
`;
export const TableListTitle = styled.th`
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;
export const TableListTitlePlus = styled.th`
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  color: #464d50;
`;
export const PlusSpan = styled(Link)`
  display: inline-block;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const TableTbodyTr = styled.tr`
  width: 100%;
  td {
    padding: 12px 0;
    font-size: 13px;
    font-weight: 400;
    color: #464d50;
  }
`;
export const TableTbodyType = styled.td`
  width: 60px;
`;
export const TableTbodyAddr = styled.td`
  width: 180px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  img {
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
  }
`;
export const TableTbodyPrice = styled.td`
  width: 130px;
  span {
    font-size: 12px;
    color: #ffffff;
    width: 18px;
    height: 18px;
    text-align: center;
    text-decoration: none;
    background-color: #8abcff;
    border-radius: 3px;
    display: inline-block;
  }
`;
export const NoticeTbodyTd = styled.td`
  width: 100%;
  color: #888f91;
  a {
    color: #888f91;
  }
`;
export const NoticeTbodyLink = styled(Link)`
  display: inline-block;
  font-size: 14px;

  span {
    width: 18px;
    height: 18px;
    line-height: 18px;
    background-color: #ffba31;
    border-radius: 3px;
    display: inline-block;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
  }
`;
