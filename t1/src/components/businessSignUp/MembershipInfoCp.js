import React, { useState } from 'react';
import {
  SubTitle,
  TableWrap,
  Tr,
  TdFirst,
  TdSecond,
  IsMarketingWrap,
  Input,
  FlexDiv,
  RedStar,
} from '@/style/businessSignUp';
import { Link } from 'react-router-dom';

import IdPwCheckCp from './IdPwCheckCp';
import TelNumArrayCp from './TelNumArrayCp';
import MailOptionCp from './MailOptionCp';

const MembershipInfoCp = () => {
  const [phone01, setPhone01] = useState('02');
  const [mailOptionValue, setMailOptionValue] = useState('');
  const [birthday, setBirthday] = useState('');
  const [member_name, setMember_name] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [mobile_company, setMobile_company] = useState('');
  const [is_foreigner, setIs_foreigner] = useState('');
  const [is_certified_mobile, setIs_certified_mobile] = useState('');
  const [is_agree_receive, setIs_agree_receive] = useState(1);
  const changePhone01 = (value) => {
    setPhone01(value);
  };
  const changeMailOption = (value) => {
    setMailOptionValue(value);
  };
  const [isMarketing, setIsMarketing] = useState(process.env.REACT_APP_URL + 'img/checkbox_01_on.png');
  const isMarketingClick = () => {
    if (isMarketing === process.env.REACT_APP_URL + 'img/checkbox_01_on.png') {
      setIsMarketing(process.env.REACT_APP_URL + 'img/checkbox_01_off.png');
      setIs_agree_receive(0);
    } else {
      setIsMarketing(process.env.REACT_APP_URL + 'img/checkbox_01_on.png');
      setIs_agree_receive(1);
    }
  };
  return (
    <>
      <SubTitle>회원정보</SubTitle>
      <TableWrap>
        <colgroup>
          <col style={{ width: '180px' }} />
          <col style={{ width: '320px' }} />
          <col style={{ width: '180px' }} />
          <col style={{ width: '320px' }} />
        </colgroup>
        <tbody>
          <IdPwCheckCp />
          <Tr>
            <TdFirst>
              본인인증 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <div className="btn btnBlue">휴대폰 번호인증</div>
              <input type="hidden" name="birthday" value={birthday} />
              <input type="hidden" name="is_foreigner" value={is_foreigner} />
              <input type="hidden" name="gender" value={gender} />
              <input type="hidden" name="is_certified_mobile" value={is_certified_mobile} />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              이름 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <img src={process.env.REACT_APP_URL + 'img/icon_bang.gif'} alt="" /> 본인인증필요
              <input type="hidden" name="member_name" value={member_name} />
            </TdSecond>
            <TdFirst>
              휴대폰 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <img src={process.env.REACT_APP_URL + 'img/icon_bang.gif'} alt="" /> 본인인증필요
              <input type="hidden" name="mobile" value={mobile} />
              <input type="hidden" name="mobile_company" value={mobile_company} />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              일반전화 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv>
                <TelNumArrayCp changePhone01={changePhone01} />-
                <input type="hidden" name="phone01" value={phone01} />
                <Input type="text" width={'73px'} mr={'10px'} ml={'10px'} name="phone02" />-
                <Input type="text" width={'73px'} ml={'10px'} name="phone03" />
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr style={{ borderBottom: '1px solid #dae1e7' }}>
            <TdFirst>
              이메일 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv>
                <Input type="text" mr={'10px'} name="email01" />@
                {!mailOptionValue && <Input type="text" mr={'20px'} ml={'10px'} name="email02" />}
                {mailOptionValue && (
                  <Input
                    type="text"
                    mr={'20px'}
                    ml={'10px'}
                    name="email02"
                    value={mailOptionValue}
                    readOnly
                  />
                )}
                <MailOptionCp changeMailOption={changeMailOption} />
              </FlexDiv>
            </TdSecond>
          </Tr>
        </tbody>
      </TableWrap>
      <IsMarketingWrap>
        <img src={isMarketing} alt="" onClick={isMarketingClick} />
        <div>공실클럽의 마케팅 정보 및 이벤트 소식을 수신하겠습니다.</div>
        <input type="hidden" name="is_agree_receive" value={is_agree_receive} />
      </IsMarketingWrap>
    </>
  );
};

export default React.memo(MembershipInfoCp);
