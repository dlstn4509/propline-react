import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const MainTenanceFeeCpWrap = styled.div`
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
  width: 150px;
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;
const Td = styled.td`
  padding-left: 10px;
  vertical-align: middle;
`;

const MainTenanceFeeCp = () => {
  return (
    <MainTenanceFeeCpWrap>
      <Title>4. 관리비등의 지불약정</Title>
      <TableWrap>
        <tbody>
          <tr>
            <TdTitle>관리비</TdTitle>
            <Td>
              <FlexDiv>
                임차인은 매월 차임일에 일반관리비 (&nbsp;
                <Input type="text" /> 원정&nbsp;) 를 지불하여야 한다.
              </FlexDiv>
            </Td>
          </tr>
          <tr>
            <TdTitle>공과금</TdTitle>
            <Td>
              <FlexDiv>
                임대차 기간중 발생하는&nbsp;
                <Input type="text" />
                &nbsp; 요금은 임차인이 부담 한다.
              </FlexDiv>
            </Td>
          </tr>
          <tr>
            <TdTitle>퇴실청소비</TdTitle>
            <Td>
              <FlexDiv>
                임차인은 퇴실시 침구세탁 및 청소비 (&nbsp;
                <Input type="text" />
                원정&nbsp;) 를 지불하여야 한다.
              </FlexDiv>
            </Td>
          </tr>
        </tbody>
      </TableWrap>
    </MainTenanceFeeCpWrap>
  );
};

export default React.memo(MainTenanceFeeCp);
