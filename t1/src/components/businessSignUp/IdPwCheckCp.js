import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import styled, { Button, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

import IdQuestionMarkCp from './IdQuestionMarkCp';

const Reg = styled.div`
  color: ${(props) => props.color};
`;
const RegSame = styled.div`
  color: ${(props) => props.color};
`;
const PasswordCheckTxt = styled.div`
  margin-left: 20px;
  color: red;
`;
const Tr = styled.tr`
  border-top: 1px solid #dae1e7;
`;
const TdTitle = styled.td`
  background-color: #f9fbfc;
  padding-left: 15px;
  span {
    color: red;
  }
`;
const Td = styled.td`
  padding: 10px 15px;
`;
const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '177px')};
  color: ${(props) => props.color};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
  display: block;
  :focus {
    border: 2px solid #000000;
  }
`;

const IdPwCheckCp = ({ checkAll }) => {
  const [regColor, setRegColor] = useState('#888f91');
  const [regSameColor, setRegSameColor] = useState('#888f91');
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [isQuestionMark, setIsQuestionMark] = useState(false);
  const idDuplication = useCallback(async () => {
    let id = document.querySelector('#member_id').value;
    const { data } = await axios.get(process.env.REACT_APP_URL_API + `signup/idduplication?id=${id}`);
    if (id.length < 6 || id.length > 12) {
      alert('대표아이디를 6자 이상 12자 이내로 입력해주세요.');
    } else if (data.success) {
      alert('이미 사용중인 아이디 또는 탈퇴한 아이디 입니다.');
    } else if (!data.success && window.confirm('사용 가능한 아이디입니다. 사용하시겠습니까?') === true) {
    }
  }, []);
  const questionMarkHover = useCallback(() => {
    setIsQuestionMark(true);
  }, []);
  const questionMarkLeave = useCallback(() => {
    setIsQuestionMark(false);
  }, []);
  const passwordKeyUp = useCallback((e) => {
    let password = e.target.value;
    let reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
    let regSame = /(\w)\1\1/;
    if (!reg.test(password)) {
      setRegColor('red');
    } else if (regSame.test(password)) {
      setRegSameColor('red');
    } else {
      setRegColor('#888f91');
      setRegSameColor('#888f91');
    }
  }, []);
  const passwordCheckKeyUp = useCallback((e) => {
    let password = document.querySelector('#member_pw').value;
    let checkPassword = e.target.value;
    if (password === checkPassword) {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
    }
  }, []);
  useEffect(() => {
    check();
  }, [passwordKeyUp, passwordCheckKeyUp]);
  const check = () => {
    if (regColor === '#888f91' && regSameColor === '#888f91' && !passwordCheck) {
      checkAll(true);
    } else {
      checkAll(false);
    }
  };
  return (
    <>
      <Tr>
        <TdTitle>
          아이디(대표) <span>*</span>
        </TdTitle>
        <Td colSpan="3">
          <FlexDiv>
            <Input type="text" mr={'20px'} name="member_id" id="member_id" className="redStar" />
            <Button onClick={idDuplication} mr={'10px'}>
              아이디 중복체크
            </Button>
            <div>
              <div style={{ color: '#888f91' }}>* 영문 소문자, 숫자 조합 6자 ~ 12자 (변경불가)</div>
              <div style={{ position: 'relative', color: '#888f91' }}>
                * 대표아이디에 순번이 붙은 직원아이디가 자동으로 생성됩니다.{' '}
                <span onMouseEnter={questionMarkHover} onMouseLeave={questionMarkLeave}>
                  ?
                </span>
                {isQuestionMark && <IdQuestionMarkCp />}
              </div>
            </div>
          </FlexDiv>
        </Td>
      </Tr>
      <Tr>
        <TdTitle>
          비밀번호 <span>*</span>
        </TdTitle>
        <Td colSpan="3">
          <FlexDiv>
            <Input
              type="password"
              mr={'20px'}
              name="member_pw"
              id="member_pw"
              onKeyUp={passwordKeyUp}
              className="redStar"
            />
            <div>
              <Reg color={regColor}>
                * 8~20자 영문 대소문자, 숫자, 특수문자 2가지 이상 조합 (~!@#$%^&*()_+ 특수문자만 사용 가능)
              </Reg>
              <RegSame color={regSameColor}>
                * 3개 이상 연속되는 동일한 문자/숫자 제외, 아이디와 동일한 비밀번호 제외
              </RegSame>
            </div>
          </FlexDiv>
        </Td>
      </Tr>
      <Tr>
        <TdTitle>
          비밀번호 확인 <span>*</span>
        </TdTitle>
        <Td colSpan="3">
          <FlexDiv>
            <Input type="password" onKeyUp={passwordCheckKeyUp} className="redStar" />
            {passwordCheck && <PasswordCheckTxt>비밀번호 확인바람.</PasswordCheckTxt>}
          </FlexDiv>
        </Td>
      </Tr>
    </>
  );
};

export default React.memo(IdPwCheckCp);
