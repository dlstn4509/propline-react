import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const ShortPeriodCpWrap = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const TableWrap = styled.table`
  color: #000000;
  font-size: 10pt;
  line-height: 11pt;
  border-top: solid 2px #000000;
  border-bottom: solid 2px #000000;
  tbody {
    tr {
      height: 50px;
      border-bottom: 1px solid #c6cfdc;
      :last-child {
        border-bottom: none;
      }
    }
  }
`;
const TdTitle = styled.td`
  background-color: #f0f3f7;
  color: #000000;
  font-size: 10pt;
  text-align: center;
  width: 150px;
`;
const Input = styled.input`
  border: 1px solid #c6cfdc;
  height: 20px;
  font-size: 9pt;
  width: ${(props) => (props.width ? props.width : '30px')};
  margin-left: 10px;
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;
const Td = styled.td`
  padding-left: 10px;
  vertical-align: middle;
`;

const ShortPeriodCp = () => {
  return (
    <ShortPeriodCpWrap>
      <Title>2. 임대차 기간</Title>
      <TableWrap>
        <tbody>
          <tr>
            <TdTitle>임대차기간</TdTitle>
            <td>
              <FlexDiv>
                <Input type="text" width={'50px'} />년 <Input type="text" />월 <Input type="text" />
                일부터
                <Input type="text" width={'50px'} />년 <Input type="text" />월 <Input type="text" />일 까지로
                한다.
              </FlexDiv>
            </td>
          </tr>
          <tr>
            <TdTitle>기간연장</TdTitle>
            <Td>임대인에게 부득이한 사정이 없는 한 임차인의 월세 납입으로 임대기간은 자동연장된다.</Td>
          </tr>
        </tbody>
      </TableWrap>
    </ShortPeriodCpWrap>
  );
};

export default React.memo(ShortPeriodCp);
