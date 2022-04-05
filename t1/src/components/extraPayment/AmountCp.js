import React from 'react';
import styled, { Title } from '@/style';
import { Link } from 'react-router-dom';

const AmountWrapper = styled.div`
  margin-bottom: 70px;
`;
const AmountWrap = styled.div`
  border-top: 2px solid #999;
  font-size: 14px;
  color: #464d50;
  padding-top: 23px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border: 1px solid #dae1e7;
  height: 35px;
  padding-left: 10px;
  width: 300px;
  margin-right: 10px;
  :focus {
    border: 2px solid #000;
  }
`;

const AmountCp = () => {
  return (
    <AmountWrapper>
      <Title>결제금액 입력</Title>
      <AmountWrap>
        <Input type="text" />원
      </AmountWrap>
    </AmountWrapper>
  );
};

export default React.memo(AmountCp);
