import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const TotalAmountWrap = styled.div`
  border: 6px solid #f0f3f7;
  padding: 35px;
  background-color: #f9fbfc;
  text-align: center;
  font-size: 13px;
  color: #464d50;
  margin-bottom: 50px;
`;
const Btn = styled.div`
  border-radius: 5px;
  width: 470px;
  height: 55px;
  background-color: #3168ff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalAmountCp = ({ idNum, money, month }) => {
  return (
    <TotalAmountWrap>
      <div style={{ marginBottom: '30px' }}>
        아이디 {idNum}개, 이용기간 {month}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Btn>{money} 결제하기</Btn>
      </div>
    </TotalAmountWrap>
  );
};

export default React.memo(TotalAmountCp);
