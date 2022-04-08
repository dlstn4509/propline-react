import React, { useState, useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    width: 344px;
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
  width: 344px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  background-color: #3168ff;
  padding: 13px 0 14px 0;
  border-radius: 5px;
  display: inline-block;
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
  const navigate = useNavigate();
  const { setIsUser, setLoginUser, loginUser } = store();
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [loginIp, setLoginIp] = useState('');
  useEffect(() => {
    (async () => {
      const rs = await axios.get('https://api.ipify.org?format=json');
      setLoginIp(rs.data.ip);
    })();
  }, []);
  const checkboxClick = () => {
    setIsCheckbox(!isCheckbox);
  };

  const clickLogin = async (e) => {
    e.preventDefault();
    let id = document.querySelector('#member_id').value;
    let password = document.querySelector('#member_pw').value;
    const { data } = await axios.post(
      process.env.REACT_APP_URL_API + `login?id=${id}&password=${password}&loginIp=${loginIp}`
    );
    // if (data.success) {
    //   setIsUser();
    //   setLoginUser(data.user);
    //   navigate('/main');
    // } else {
    //   alert('ID와 비밀번호를 확인해주세요.');
    // }
  };
  const onClick = async (e) => {
    // const rs = await e.target.form.submit();
    // setLoginUser(rs);
    // setTimeout(() => {
    //   navigate('/main');
    // }, 0);
    axios({
      method: 'post',
      url: process.env.REACT_APP_URL_API + 'login',
      data: {
        member_id: 'dlstn4509',
        member_pw: 'dkfkek09**',
      },
    })
      .then((r) => {
        console.log(r.data);
        setLoginUser(r.data);
        setIsUser();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form action={process.env.REACT_APP_URL_API + 'login'} method="post">
        <input type="text" name="member_id" />
        <input type="password" name="member_pw" />
        <button type="button" onClick={onClick}>
          로그인
        </button>
        <div>loginUser.member_id</div>
        {loginUser && <div>{loginUser.member_id}</div>}
      </form>
    </div>
    // <LoginCpWrap>
    //   <LogoWrap>
    //     <img src={process.env.REACT_APP_URL + 'img/loggs.svg'} alt="" />
    //   </LogoWrap>
    //   <TextWrap>
    //     공실클럽에 오신 것을 환영합니다.
    //     <br />
    //     로그인 후 이용가능합니다.
    //   </TextWrap>
    //   <LoginForm>
    //     <input type="text" name="member_id" id="member_id" placeholder="ID" />
    //     <input type="password" name="member_pw" id="member_pw" placeholder="비밀번호" />
    //     <FindIdPwWrap>
    //       <FindIdPw>
    //         <Link to="/main">ID/비밀번호 찾기</Link>
    //         <span>&nbsp; | &nbsp;</span>
    //         <Link to="/main">MAC ID 찾기</Link>
    //       </FindIdPw>
    //       <ReMemberId>
    //         {!isCheckbox && (
    //           <img
    //             src={process.env.REACT_APP_URL + 'img/checkbox_01_off.png'}
    //             alt=""
    //             onClick={checkboxClick}
    //           />
    //         )}
    //         {isCheckbox && (
    //           <img
    //             src={process.env.REACT_APP_URL + 'img/checkbox_01_on.png'}
    //             alt=""
    //             onClick={checkboxClick}
    //           />
    //         )}
    //         <div>아이디저장</div>
    //       </ReMemberId>
    //     </FindIdPwWrap>
    //     <BtnWrap onClick={clickLogin}>공실클럽 로그인</BtnWrap>
    //     <SignUpWrap>
    //       <Link to="/signup">회원가입</Link>
    //     </SignUpWrap>
    //   </LoginForm>
    // </LoginCpWrap>
  );
};

export default React.memo(LoginCp);
