import React, { useState, useCallback } from 'react';
import styled, { Button, FlexDiv, color } from '@/style';
import { Link } from 'react-router-dom';

import IdPwCheckCp from './IdPwCheckCp';
import TelNumArrayCp from './TelNumArrayCp';
import MailOptionCp from './MailOptionCp';

const TableWrap = styled.table`
  font-size: 13px;
  color: #464d50;
  margin-bottom: 30px;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #464d50;
  margin-bottom: 20px;
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
  padding: 15px;
`;
const IsMarketingWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #888f91;
  margin-bottom: 40px;
  img {
    margin-right: 10px;
    cursor: pointer;
  }
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

const MembershipInfoCp = ({ checkAll }) => {
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
  const changePhone01 = useCallback((value) => {
    setPhone01(value);
  }, []);
  const changeMailOption = useCallback((value) => {
    setMailOptionValue(value);
  }, []);
  const [isMarketing, setIsMarketing] = useState(process.env.REACT_APP_URL + 'img/checkbox_01_on.png');
  const isMarketingClick = useCallback(() => {
    if (isMarketing === process.env.REACT_APP_URL + 'img/checkbox_01_on.png') {
      setIsMarketing(process.env.REACT_APP_URL + 'img/checkbox_01_off.png');
      setIs_agree_receive(0);
    } else {
      setIsMarketing(process.env.REACT_APP_URL + 'img/checkbox_01_on.png');
      setIs_agree_receive(1);
    }
  }, []);

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
          <IdPwCheckCp checkAll={checkAll} />
          <Tr>
            <TdTitle>
              본인인증 <span>*</span>
            </TdTitle>
            <Td colSpan="3">
              <Button width={'120px'} color={`${color.blue}`} bdc={`${color.blue}`}>
                휴대폰 번호인증
              </Button>
              <input type="hidden" name="birthday" value={birthday} />
              <input type="hidden" name="is_foreigner" value={is_foreigner} />
              <input type="hidden" name="gender" value={gender} />
              <input type="hidden" name="is_certified_mobile" value={is_certified_mobile} />
            </Td>
          </Tr>
          <Tr>
            <TdTitle>
              이름 <span>*</span>
            </TdTitle>
            <Td>
              <img src={process.env.REACT_APP_URL + 'img/icon_bang.gif'} alt="" /> 본인인증필요
              <input type="hidden" name="member_name" value={member_name} />
            </Td>
            <TdTitle>
              휴대폰 <span>*</span>
            </TdTitle>
            <Td>
              <img src={process.env.REACT_APP_URL + 'img/icon_bang.gif'} alt="" /> 본인인증필요
              <input type="hidden" name="mobile" value={mobile} />
              <input type="hidden" name="mobile_company" value={mobile_company} />
            </Td>
          </Tr>
          <Tr>
            <TdTitle>
              일반전화 <span>*</span>
            </TdTitle>
            <Td colSpan="3">
              <FlexDiv>
                <TelNumArrayCp changePhone01={changePhone01} />-
                <input type="hidden" name="phone01" value={phone01} />
                <Input
                  type="text"
                  width={'73px'}
                  mr={'10px'}
                  ml={'10px'}
                  name="phone02"
                  className="redStar"
                />
                -
                <Input type="text" width={'73px'} ml={'10px'} name="phone03" className="redStar" />
              </FlexDiv>
            </Td>
          </Tr>
          <Tr style={{ borderBottom: '1px solid #dae1e7' }}>
            <TdTitle>
              이메일 <span>*</span>
            </TdTitle>
            <Td colSpan="3">
              <FlexDiv>
                <Input type="text" mr={'10px'} name="email01" className="redStar" />@
                {!mailOptionValue && (
                  <Input type="text" mr={'20px'} ml={'10px'} name="email02" className="redStar" />
                )}
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
            </Td>
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
