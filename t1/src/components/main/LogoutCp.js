import React from 'react';
import store from '@/store/store';
import {
  MainLoginBox,
  AfterLoginTit,
  User,
  LogoutBtn,
  UserInfoBox,
  List,
  AfterLoginBtnArea,
  PayMentBtn,
  ChargeBtn,
  AfterLoginOptionArea,
  MyCoBrokenBtn,
  MyInfoModifyBtn,
  ContractMgmBtn,
} from '@/style/main';

const LogoutCp = () => {
  const { setIsUser, loginUser } = store();
  const clickLogOut = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      setIsUser();
    }
  };
  return (
    <MainLoginBox>
      <AfterLoginTit>
        <User>{loginUser.member_id}</User>
        <LogoutBtn to="/main" style={{ color: '#888f91' }} onClick={clickLogOut}>
          로그아웃
        </LogoutBtn>
      </AfterLoginTit>
      <UserInfoBox>
        <List>
          <span className="tit">업체명</span>
          <span className="txt">{loginUser.company_name}</span>
        </List>
        <List>
          <span className="tit">만기</span>
          <span className="txt">2022-12-31 (D-290)</span>
        </List>
        <List>
          <span className="tit">잔여 G포인트</span>
          <span className="txt">748,400P</span>
        </List>
      </UserInfoBox>
      <AfterLoginBtnArea>
        <PayMentBtn to="/main">결제하기</PayMentBtn>
        <ChargeBtn to="/main">G포인트 충전</ChargeBtn>
      </AfterLoginBtnArea>
      <AfterLoginOptionArea>
        <MyCoBrokenBtn to="/main">
          나의
          <br />
          공동중개
        </MyCoBrokenBtn>
        <MyInfoModifyBtn to="/main">
          회원정보
          <br />
          수정
        </MyInfoModifyBtn>
        <ContractMgmBtn to="/main">
          계약서
          <br />
          관리
        </ContractMgmBtn>
      </AfterLoginOptionArea>
    </MainLoginBox>
  );
};

export default React.memo(LogoutCp);
