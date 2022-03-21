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
  const { isAuth } = store();
  return (
    <MainLoginBox>
      <AfterLoginTit>
        <User>root</User>
        <LogoutBtn to="/main" style={{ color: '#888f91' }} onClick={isAuth}>
          로그아웃
        </LogoutBtn>
      </AfterLoginTit>
      <UserInfoBox>
        <List>
          <span className="tit">업체명</span>
          <span className="txt">김홍근</span>
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
