import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const Table = styled.table`
  border-top: 1px solid #f0f3f7;
  border-bottom: 1px solid #f0f3f7;
`;
const Tr = styled.tr`
  border-bottom: 1px solid #f0f3f7;
`;
const TdTitle = styled.td`
  padding: 20px;
  width: 150px;
  background-color: #f9fbfc;
`;
const InputWrap = styled.td`
  display: flex;
  height: 59px;
  align-items: center;
`;
const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '270px')};
  margin-left: ${(props) => (props.ml ? props.ml : '10px')};
  margin-right: ${(props) => (props.mr ? props.mr : '0')};
`;

const TableCp = () => {
  return (
    <Table>
      <tbody>
        <Tr>
          <TdTitle>회사명</TdTitle>
          <td>
            <Input type="text" />
          </td>
          <TdTitle>업종</TdTitle>
          <td>
            <Input type="text" />
          </td>
        </Tr>
        <Tr>
          <TdTitle>담당자</TdTitle>
          <td>
            <Input type="text" />
          </td>
          <TdTitle>직책</TdTitle>
          <td>
            <Input type="text" />
          </td>
        </Tr>
        <Tr>
          <TdTitle>휴대폰</TdTitle>
          <InputWrap>
            <Input width={'80px'} mr={'5px'} type="text" />-
            <Input width={'80px'} mr={'5px'} ml={'5px'} type="text" />-
            <Input width={'80px'} ml={'5px'} type="text" />
          </InputWrap>
          <TdTitle>회사전화</TdTitle>
          <InputWrap>
            <Input width={'80px'} mr={'5px'} type="text" />-
            <Input width={'80px'} mr={'5px'} ml={'5px'} type="text" />-
            <Input width={'80px'} ml={'5px'} type="text" />
          </InputWrap>
        </Tr>
        <Tr>
          <TdTitle>홈페이지</TdTitle>
          <td colSpan={3}>
            <Input type="text" />
          </td>
        </Tr>
        <Tr>
          <TdTitle>이메일</TdTitle>
          <td colSpan={3}>
            <Input type="text" />
          </td>
        </Tr>
      </tbody>
    </Table>
  );
};

export default React.memo(TableCp);
