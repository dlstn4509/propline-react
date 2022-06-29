/* global daum */
import React, { useState, useEffect } from 'react';
import styled, { color, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

const ContractorCpWrapper = styled.div``;
const TableWrap = styled.table`
  color: #000000;
  font-size: 10pt;
  line-height: 11pt;
  border-top: solid 2px #000000;
  border-bottom: solid 2px #000000;
  td {
    background-color: ${(props) => props.bg};
  }
`;
const Tr = styled.tr`
  border-bottom: ${(props) => (props.bb ? props.bb : '1px solid #c6cfdc')};
  height: 50px;
`;
const TdTitle = styled.td`
  background-color: #f0f3f7;
  text-align: center;
  border-right: 1px solid #c6cfdc;
  border-left: ${(props) => (props.bl ? props.bl : '1px solid #c6cfdc')};
`;
const Td = styled.td`
  border-left: ${(props) => (props.bl ? props.bl : '1px solid #c6cfdc')};
`;
const Input = styled.input`
  border: 1px solid #c6cfdc;
  height: 20px;
  font-size: 9pt;
  width: ${(props) => (props.width ? props.width : '145px')};
  margin-left: 10px;
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;
const Select = styled.select`
  width: auto;
  height: 20px;
  font-size: 13px;
  color: #464d50;
`;
const LabelWrap = styled(FlexDiv)`
  font-size: 10pt;
  margin-top: 6px;
  cursor: pointer;
  svg {
    margin-right: 6px;
  }
`;

const ContractorCp = ({ contract }) => {
  const [labelCheck, setLabelCheck] = useState('');
  useEffect(() => {
    if (contract.agent_one_chk) {
      setLabelCheck(contract.agent_one_chk);
    }
  }, [contract]);
  const findAddress = (type) => {
    // grantor : 매도인, grantee : 매수인, agent1_office : 중개사1, agent2_office : 중개사2
    new daum.Postcode({
      oncomplete: async function (data) {
        document.querySelector(`input[name=${type}_address]`).value = data.jibunAddress;
      },
    }).open();
  };

  return (
    <ContractorCpWrapper>
      <TableWrap>
        <colgroup>
          <col style={{ width: '60px' }} />
          <col style={{ width: '150px' }} />
          <col style={{ width: '180px' }} />
          <col style={{ width: '45px' }} />
          <col style={{ width: '180px' }} />
          <col style={{ width: '45px' }} />
          <col style={{ width: '180px' }} />
          <col />
        </colgroup>
        <tbody>
          <Tr>
            <TdTitle rowSpan={3} bg={'#f0f3f7'} bl={'none'}>
              매<br />도<br />인
            </TdTitle>
            <TdTitle>주소</TdTitle>
            <Td colSpan={5}>
              <Input
                type="text"
                width={'570px'}
                readOnly
                name="grantor_address"
                onClick={() => {
                  findAddress('grantor');
                }}
                defaultValue={contract.grantor_address}
              />
            </Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </Tr>
          <Tr>
            <TdTitle>
              <Select name="grantor_identity_no_type" defaultValue={contract.grantor_identity_no_type}>
                <option value="1">주민등록번호</option>
                <option value="2">생년월일</option>
                <option value="3">사업자번호</option>
                <option value="4">법인등록번호</option>
              </Select>
            </TdTitle>
            <td>
              <Input type="text" name="grantor_identity_no" defaultValue={contract.grantor_identity_no} />
            </td>
            <TdTitle>전화</TdTitle>
            <td>
              <Input type="text" name="grantor_phone" defaultValue={contract.grantor_phone} />
            </td>
            <TdTitle>
              성명
              <br />
              또는
              <br />
              상호
            </TdTitle>
            <td>
              <Input type="text" name="grantor_name" defaultValue={contract.grantor_name} />
            </td>
          </Tr>
          <Tr>
            <TdTitle>
              <Select name="grantor_proxy_type" defaultValue={contract.grantor_proxy_type}>
                <option value="1">대리인</option>
                <option value="2">공동명의자</option>
              </Select>
            </TdTitle>
            <Td colSpan={5}>
              <Input
                type="text"
                width={'570px'}
                name="grantor_proxy_name"
                defaultValue={contract.grantor_proxy_name}
              />
            </Td>
          </Tr>
          <Tr>
            <TdTitle rowSpan={3} bg={'#f0f3f7'} bl={'none'}>
              매<br />수<br />인
            </TdTitle>
            <TdTitle>주소</TdTitle>
            <Td colSpan={5}>
              <Input
                type="text"
                width={'570px'}
                readOnly
                name="grantee_address"
                onClick={() => {
                  findAddress('grantee');
                }}
                defaultValue={contract.grantee_address}
              />
            </Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </Tr>
          <Tr>
            <TdTitle>
              <Select name="grantee_identity_no_type" defaultValue={contract.grantee_identity_no_type}>
                <option value="1">주민등록번호</option>
                <option value="2">생년월일</option>
                <option value="3">사업자번호</option>
                <option value="4">법인등록번호</option>
              </Select>
            </TdTitle>
            <td>
              <Input type="text" name="grantee_identity_no" defaultValue={contract.grantee_identity_no} />
            </td>
            <TdTitle>전화</TdTitle>
            <td>
              <Input type="text" name="grantee_phone" defaultValue={contract.grantee_phone} />
            </td>
            <TdTitle>
              성명
              <br />
              또는
              <br />
              상호
            </TdTitle>
            <td>
              <Input type="text" name="grantee_name" defaultValue={contract.grantee_name} />
            </td>
          </Tr>
          <Tr>
            <TdTitle>
              <Select name="grantee_proxy_type" defaultValue={contract.grantee_proxy_type}>
                <option value="1">대리인</option>
                <option value="2">공동명의자</option>
              </Select>
            </TdTitle>
            <Td colSpan={5}>
              <Input
                type="text"
                width={'570px'}
                name="grantee_proxy_name"
                defaultValue={contract.grantee_proxy_name}
              />
            </Td>
          </Tr>
          <Tr>
            <TdTitle rowSpan={3} bg={'#f0f3f7'} bl={'none'}>
              개업
              <br />
              공인
              <br />
              중개사
            </TdTitle>
            <TdTitle>사무소재지</TdTitle>
            <Td colSpan={5}>
              <Input
                type="text"
                width={'570px'}
                readOnly
                name="agent1_office_address"
                onClick={() => {
                  findAddress('agent1_office');
                }}
                defaultValue={contract.agent1_office_address}
              />
            </Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </Tr>
          <Tr>
            <TdTitle>사무소명</TdTitle>
            <Td colSpan={3}>
              <Input type="text" name="agent1_office_name" defaultValue={contract.agent1_office_name} />
            </Td>
            <TdTitle>전화</TdTitle>
            <Td>
              <Input type="text" name="agent1_office_phone" defaultValue={contract.agent1_office_phone} />
            </Td>
          </Tr>
          <Tr>
            <TdTitle>등록번호</TdTitle>
            <Td colSpan={3}>
              <Input
                type="text"
                name="agent1_office_registration_no"
                defaultValue={contract.agent1_office_registration_no}
              />
            </Td>
            <TdTitle>대표</TdTitle>
            <Td>
              <Input
                type="text"
                name="agent1_office_ceo_name"
                defaultValue={contract.agent1_office_ceo_name}
              />
            </Td>
          </Tr>
          <Tr>
            <TdTitle rowSpan={3} bg={'#f0f3f7'} bl={'none'}>
              개업
              <br />
              공인
              <br />
              중개사
            </TdTitle>
            <TdTitle>사무소재지</TdTitle>
            <Td colSpan={5}>
              <Input
                type="text"
                width={'570px'}
                readOnly
                name="agent2_office_address"
                onClick={() => {
                  findAddress('agent2_office');
                }}
                defaultValue={contract.agent2_office_address}
              />
            </Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </Tr>
          <Tr>
            <TdTitle>사무소명</TdTitle>
            <Td colSpan={3}>
              <Input type="text" name="agent2_office_name" defaultValue={contract.agent2_office_name} />
            </Td>
            <TdTitle>전화</TdTitle>
            <Td>
              <Input type="text" name="agent2_office_phone" defaultValue={contract.agent2_office_phone} />
            </Td>
          </Tr>
          <Tr>
            <TdTitle>등록번호</TdTitle>
            <Td colSpan={3}>
              <Input
                type="text"
                name="agent2_office_registration_no"
                defaultValue={contract.agent2_office_registration_no}
              />
            </Td>
            <TdTitle>대표</TdTitle>
            <Td>
              <Input
                type="text"
                name="agent2_office_ceo_name"
                defaultValue={contract.agent2_office_ceo_name}
              />
            </Td>
          </Tr>
        </tbody>
      </TableWrap>
      <LabelWrap
        onClick={() => {
          setLabelCheck(labelCheck == 0 ? 1 : 0);
        }}
      >
        {labelCheck == 0 && <FaRegSquare />}
        {labelCheck == 1 && <FaCheckSquare style={{ color: color.blue }} />}
        <span>개업공인중개사란 1개만 출력 (여백 조정이 가능하신 분만 사용하십시요.)</span>
        <input type="hidden" name="agent_one_chk" value={labelCheck} />
      </LabelWrap>
    </ContractorCpWrapper>
  );
};

export default React.memo(ContractorCp);
