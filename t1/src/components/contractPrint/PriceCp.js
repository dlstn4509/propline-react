import React, { useState, useEffect } from 'react';
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
  const [interim1Date, setInterim1Date] = useState([]);
  const [interim2Date, setInterim2Date] = useState([]);
  const [balanceDate, setBalanceDate] = useState([]);
  useEffect(() => {
    if (contract.interim1_date) {
      setInterim1Date(contract.interim1_date.split('-'));
    }
    if (contract.interim2_date) {
      setInterim2Date(contract.interim2_date.split('-'));
    }
    if (contract.balance_date) {
      setBalanceDate(contract.balance_date.split('-'));
    }
  }, [contract]);
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
            <TdTitle>{contract.trade_type === 1 ? '매매대금' : '보증금'}</TdTitle>
            <Td>
              一金{' '}
              <span>{contract.trade_type === 1 ? contract.selling_amount_txt : contract.security_txt}</span>
            </Td>
            <Td>정(￦ {contract.trade_type === 1 ? contract.selling_amount : contract.security})</Td>
          </tr>
          <tr>
            <TdTitle>{contract.trade_type === 1 ? '계 약 금' : '계약금'}</TdTitle>
            <Td>
              一金 <span>{contract.earnest_txt}</span>
            </Td>
            <Td>정은 계약시에 지불하고 영수함.</Td>
          </tr>
          <tr>
            <TdTitle>{contract.trade_type === 1 && '1차'}중도금</TdTitle>
            <Td>
              一金 <span>{contract.interim1_amount_txt}</span>
            </Td>
            <Td>
              정은 {interim1Date[0]}년 {interim1Date[1]}월 {interim1Date[2]}일에
            </Td>
          </tr>
          {contract.trade_type === 1 && (
            <tr>
              <TdTitle>2차중도금</TdTitle>
              <Td>
                一金 <span>{contract.interim2_amount_txt}</span>
              </Td>
              <Td>
                정은 {interim2Date[0]}년 {interim2Date[1]}월 {interim2Date[2]}일에
              </Td>
            </tr>
          )}
          <tr>
            <TdTitle>잔금</TdTitle>
            <Td>
              一金 <span>{contract.balance_txt}</span>
            </Td>
            <Td>
              정은 {balanceDate[0]}년 {balanceDate[1]}월 {balanceDate[2]}일에 지불한다
            </Td>
          </tr>
          {contract.trade_type === 1 && (
            <tr>
              <TdTitle>융자금</TdTitle>
              <Td>
                一金 <span>{contract.loan_amount_txt}</span>
              </Td>
              <Td>정은 영수 한다</Td>
            </tr>
          )}
        </tbody>
      </Table>
    </PriceCpWrap>
  );
};

export default React.memo(PriceCp);
