import React, { useState } from 'react';
import { SubTitle, TableWrap, Tr, TdFirst, TdSecond, IsMarketingWrap } from '@/style/businessSignUp';
import { Link } from 'react-router-dom';

import MailOptionCp from './MailOptionCp';

const MembershipInfoCp = () => {
  const [isMarketing, setIsMarketing] = useState(process.env.REACT_APP_URL + 'img/checkbox_01_on.png');
  const isMarketingClick = () => {
    isMarketing === 'https://t1.propline.co.kr/img/checkbox_01_on.png'
      ? setIsMarketing('https://t1.propline.co.kr/img/checkbox_01_off.png')
      : setIsMarketing('https://t1.propline.co.kr/img/checkbox_01_on.png');
  };
  return (
    <>
      <SubTitle>회원정보</SubTitle>
      <TableWrap>
        <tbody>
          <Tr>
            <TdFirst>
              아이디(대표) <span>*</span>
            </TdFirst>
            <TdSecond colSpan="3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input className="input01" type="text" />
                <div className="btn">아이디 중복체크</div>
                <div>
                  <div>* 영문 소문자, 숫자 조합 6자 ~ 12자 (변경불가)</div>
                  <div>
                    * 대표아이디에 순번이 붙은 직원아이디가 자동으로 생성됩니다. <span>?</span>
                  </div>
                </div>
              </div>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              비밀번호 <span>*</span>
            </TdFirst>
            <TdSecond colSpan="3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input className="input01" type="text" />
                <div>
                  <div>
                    * 8~20자 영문 대소문자, 숫자, 특수문자 2가지 이상 조합 (~!@#$%^&*()_+ 특수문자만 사용
                    가능)
                  </div>
                  <div>* 3개 이상 연속되는 동일한 문자/숫자 제외, 아이디와 동일한 비밀번호 제외</div>
                </div>
              </div>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              비밀번호 확인 <span>*</span>
            </TdFirst>
            <TdSecond colSpan="3">
              <div className="btn btnBlue">휴대폰 번호인증</div>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              이름 <span>*</span>
            </TdFirst>
            <TdSecond>
              <img src={process.env.REACT_APP_URL + 'img/icon_bang.gif'} alt="" /> 본인인증필요
            </TdSecond>
            <TdFirst>
              휴대폰 <span>*</span>
            </TdFirst>
            <TdSecond>
              <img src={process.env.REACT_APP_URL + 'img/icon_bang.gif'} alt="" /> 본인인증필요
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              일반전화 <span>*</span>
            </TdFirst>
            <TdSecond colSpan="3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input className="input02" type="text" />-
                <input className="input02" type="text" />-
                <input className="input02" type="text" />
              </div>
            </TdSecond>
          </Tr>
          <Tr style={{ borderBottom: '1px solid #dae1e7' }}>
            <TdFirst>
              이메일 <span>*</span>
            </TdFirst>
            <TdSecond colSpan="3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input className="input01" type="text" style={{ marginRight: '0' }} />@
                <input className="input01" type="text" />
                <MailOptionCp />
              </div>
            </TdSecond>
          </Tr>
        </tbody>
      </TableWrap>
      <IsMarketingWrap>
        <img src={isMarketing} alt="" onClick={isMarketingClick} />
        <div>공실클럽의 마케팅 정보 및 이벤트 소식을 수신하겠습니다.</div>
      </IsMarketingWrap>
    </>
  );
};

export default React.memo(MembershipInfoCp);
