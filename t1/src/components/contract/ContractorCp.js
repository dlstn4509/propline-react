import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

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

const ContractorCp = () => {
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
              <Input type="text" width={'570px'} />
            </Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </Tr>
          <Tr>
            <TdTitle>
              <Select name="" id="">
                <option value="">주민등록번호</option>
                <option value="">생년월일</option>
                <option value="">사업자번호</option>
                <option value="">법인등록번호</option>
              </Select>
            </TdTitle>
            <td>
              <Input type="text" />
            </td>
            <TdTitle>전화</TdTitle>
            <td>
              <Input type="text" />
            </td>
            <TdTitle>
              성명
              <br />
              또는
              <br />
              상호
            </TdTitle>
            <td>
              <Input type="text" />
            </td>
          </Tr>
          <Tr>
            <TdTitle>
              <Select name="" id="">
                <option value="">대리인</option>
                <option value="">공동명의자</option>
              </Select>
            </TdTitle>
            <Td colSpan={5}>
              <Input type="text" width={'570px'} />
            </Td>
          </Tr>
          <Tr>
            <TdTitle rowSpan={3} bg={'#f0f3f7'} bl={'none'}>
              매<br />수<br />인
            </TdTitle>
            <TdTitle>주소</TdTitle>
            <Td colSpan={5}>
              <Input type="text" width={'570px'} />
            </Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </Tr>
          <Tr>
            <TdTitle>
              <Select name="" id="">
                <option value="">주민등록번호</option>
                <option value="">생년월일</option>
                <option value="">사업자번호</option>
                <option value="">법인등록번호</option>
              </Select>
            </TdTitle>
            <td>
              <Input type="text" />
            </td>
            <TdTitle>전화</TdTitle>
            <td>
              <Input type="text" />
            </td>
            <TdTitle>
              성명
              <br />
              또는
              <br />
              상호
            </TdTitle>
            <td>
              <Input type="text" />
            </td>
          </Tr>
          <Tr>
            <TdTitle>
              <Select name="" id="">
                <option value="">대리인</option>
                <option value="">공동명의자</option>
              </Select>
            </TdTitle>
            <Td colSpan={5}>
              <Input type="text" width={'570px'} />
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
              <Input type="text" width={'570px'} />
            </Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </Tr>
          <Tr>
            <TdTitle>사무소명</TdTitle>
            <Td colSpan={3}>
              <Input type="text" />
            </Td>
            <TdTitle>전화</TdTitle>
            <Td>
              <Input type="text" />
            </Td>
          </Tr>
          <Tr>
            <TdTitle>등록번호</TdTitle>
            <Td colSpan={3}>
              <Input type="text" />
            </Td>
            <TdTitle>대표</TdTitle>
            <Td>
              <Input type="text" />
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
              <Input type="text" width={'570px'} />
            </Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </Tr>
          <Tr>
            <TdTitle>사무소명</TdTitle>
            <Td colSpan={3}>
              <Input type="text" />
            </Td>
            <TdTitle>전화</TdTitle>
            <Td>
              <Input type="text" />
            </Td>
          </Tr>
          <Tr>
            <TdTitle>등록번호</TdTitle>
            <Td colSpan={3}>
              <Input type="text" />
            </Td>
            <TdTitle>대표</TdTitle>
            <Td>
              <Input type="text" />
            </Td>
          </Tr>
        </tbody>
      </TableWrap>
    </ContractorCpWrapper>
  );
};

export default React.memo(ContractorCp);
