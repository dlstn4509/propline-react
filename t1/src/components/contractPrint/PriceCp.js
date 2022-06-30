import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const PriceCpWrap = styled.div`
  font-family: 굴림, 돋움, Arial, verdana, sans-serif;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;
const Table = styled.table`
  border: 1px solid #000;
  tbody {
    tr {
      height: 21px;
      border-bottom: 1px solid #000;
      :last-child {
        border-bottom: none;
      }
      td {
        border-right: 1px solid #000;
        :last-child {
          border-right: none;
        }
      }
    }
  }
`;
const TdTitle = styled.td`
  background-color: #dddddd;
  text-align: center;
`;
const Td = styled.td`
  padding: 0 10px;
  span {
    color: #464d50;
    font-weight: 600;
  }
`;

const PriceCp = ({ contract, Text }) => {
  return (
    <PriceCpWrap>
      <Title>2. 계약내용</Title>
      <Text>제 1조 위 부동산의 매매에 있어 매매대금 및 매수인의 대금 지불시기는 다음과 같다.</Text>
      <Table>
        <colgroup>
          <col style={{ width: '14%' }} />
          <col style={{ width: '36%' }} />
          <col style={{ width: '50%' }} />
        </colgroup>
        <tbody>
          <tr>
            <TdTitle>매매대금</TdTitle>
            <Td>
              一金 <span>{contract.selling_amount_txt}</span>
            </Td>
            <Td>정(￦ {contract.selling_amount})</Td>
          </tr>
          <tr>
            <TdTitle>계 약 금</TdTitle>
            <Td>
              一金 <span>{contract.earnest_txt}</span>
            </Td>
            <Td>정(￦ {contract.earnest})</Td>
          </tr>
          <tr>
            <TdTitle>1차중도금</TdTitle>
            <Td>
              一金 <span>{contract.interim1_amount_txt}</span>
            </Td>
            <Td>정(￦ {contract.interim1_amount})</Td>
          </tr>
          <tr>
            <TdTitle>2차중도금</TdTitle>
            <Td>
              一金 <span>{contract.interim2_amount_txt}</span>
            </Td>
            <Td>정(￦ {contract.interim2_amount})</Td>
          </tr>
          <tr>
            <TdTitle>잔금</TdTitle>
            <Td>
              一金 <span>{contract.balance_txt}</span>
            </Td>
            <Td>정(￦ {contract.balance})</Td>
          </tr>
          <tr>
            <TdTitle>융자금</TdTitle>
            <Td>
              一金 <span>{contract.loan_amount_txt}</span>
            </Td>
            <Td>정(￦ {contract.loan_amount})</Td>
          </tr>
        </tbody>
      </Table>
    </PriceCpWrap>
  );
};

export default React.memo(PriceCp);
