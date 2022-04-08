import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
  border: 1px solid #dae1e7;
  border-radius: 5px;
  padding: 17px 0 10px 0;
  margin-bottom: 5px;
  font-size: 13px;
  color: #464d50;
  text-align: center;
`;
const LoginBtn = styled(Link)`
  display: block;
  font-size: 14px;
  font-weight: 600;
  width: 178px;
  background-color: #3168ff;
  padding: 8px 0;
  border-radius: 5px;
  margin: 10px 9px;
`;
const FindIdWrap = styled(FlexDiv)`
  margin: 14px 17px 10px 17px;
  color: #888f91;
`;
const Bar = styled.div`
  margin: 0 4px;
`;

const LoginCp = () => {
  return (
    <LoginWrapper>
      <div>로그인 후 이용 가능합니다.</div>
      <LoginBtn to="/login" style={{ color: '#fff' }}>
        공실클럽 로그인
      </LoginBtn>
      <Link to="/signup">회원가입</Link>
      <FindIdWrap>
        <Link to="/main">ID/비밀번호 찾기</Link>
        <Bar>|</Bar>
        <Link to="/main">MACID 찾기</Link>
      </FindIdWrap>
    </LoginWrapper>
  );
};

export default React.memo(LoginCp);
