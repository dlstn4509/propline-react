import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const PaymentBtnWrap = styled.div`
  height: 162px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid #f0f3f7;
  background-color: #f9fbfc;
  margin-bottom: 70px;
`;
const Btn = styled.div`
  border-radius: 5px;
  width: 470px;
  height: 55px;
  background-color: #3168ff;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PaymentBtnCp = () => {
  return (
    <PaymentBtnWrap>
      <Btn>결제하기</Btn>
    </PaymentBtnWrap>
  );
};

export default React.memo(PaymentBtnCp);
