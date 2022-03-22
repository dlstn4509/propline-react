import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const LoginCpWrap = styled.div`
  width: 344px;
  margin: 70px;
`;
const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;
const TextWrap = styled.div`
  text-align: center;
  font-size: 14px;
  color: #464d50;
  margin-bottom: 25px;
`;
const LoginForm = styled.form`
  input {
    height: 50px;
    font-size: 13px;
    color: #888f91;
    border: 1px solid #dae1e7;
    border-radius: 5px;
    text-indent: 10px;
    margin-bottom: 15px;
  }
`;
const FindIdPwWrap = styled.div`
  margin-bottom: 25px;
  display: flex;
  font-size: 13px;
  font-weight: 400;
  color: #464d50;
  text-decoration: none;
  letter-spacing: 1px;
  justify-content: space-between;
`;
const FindIdPw = styled.div`
  display: flex;
  div {
    cursor: pointer;
  }
`;
const ReMemberId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 10px;
    cursor: pointer;
  }
`;
const BtnWrap = styled.button`
  width: 100%;
  padding: 13px 0;
  background-color: #3168ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;
const SignUpWrap = styled.div`
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  color: #464d50;
  text-align: center;
`;

const LoginCp = () => {
  const [isCheckbox, setIsCheckbox] = useState(false);
  const checkboxClick = () => {
    setIsCheckbox(!isCheckbox);
  };
  return (
    <LoginCpWrap>
      <LogoWrap>
        <img src={process.env.REACT_APP_URL + 'img/loggs.svg'} alt="" />
      </LogoWrap>
      <TextWrap>
        공실클럽에 오신 것을 환영합니다.
        <br />
        로그인 후 이용가능합니다.
      </TextWrap>
      <LoginForm>
        <input type="text" name="userId" placeholder="ID" />
        <input type="text" name="userPw" placeholder="비밀번호" />
        <FindIdPwWrap>
          <FindIdPw>
            <Link to="/main">ID/비밀번호 찾기</Link>
            <span>&nbsp; | &nbsp;</span>
            <Link to="/main">MAC ID 찾기</Link>
          </FindIdPw>
          <ReMemberId>
            {!isCheckbox && (
              <img
                src={process.env.REACT_APP_URL + 'img/checkbox_01_off.png'}
                alt=""
                onClick={checkboxClick}
              />
            )}
            {isCheckbox && (
              <img
                src={process.env.REACT_APP_URL + 'img/checkbox_01_on.png'}
                alt=""
                onClick={checkboxClick}
              />
            )}
            <div>아이디저장</div>
          </ReMemberId>
        </FindIdPwWrap>
        <BtnWrap>공실클럽 로그인</BtnWrap>
        <SignUpWrap>
          <Link to="/signup">회원가입</Link>
        </SignUpWrap>
      </LoginForm>
    </LoginCpWrap>
  );
};

export default React.memo(LoginCp);
