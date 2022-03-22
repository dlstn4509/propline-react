import React from 'react';
import {
  MainLoginBox,
  MainLoginTit,
  MainLoginBtn,
  MainJoinBtn,
  FindIdPwWrap,
  FindIdPwLink,
} from '@/style/main';

const LoginCp = () => {
  return (
    <MainLoginBox>
      <MainLoginTit>로그인 후 이용 가능합니다</MainLoginTit>
      <MainLoginBtn style={{ color: '#ffffff' }} to="/login">
        공실클럽 로그인
      </MainLoginBtn>
      <MainJoinBtn to="/signup">회원가입</MainJoinBtn>
      <FindIdPwWrap>
        <FindIdPwLink>ID/비밀번호 찾기</FindIdPwLink>
        <FindIdPwLink>MACID 찾기</FindIdPwLink>
      </FindIdPwWrap>
    </MainLoginBox>
  );
};

export default React.memo(LoginCp);
