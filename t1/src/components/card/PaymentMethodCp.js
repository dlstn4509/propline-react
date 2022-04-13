import React, { useCallback } from 'react';
import styled, { Title } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

const PaymentMethodWrapper = styled.div`
  border-top: 2px solid #999;
  padding-top: 23px;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #464d50;
  margin-bottom: 70px;
  input {
    margin-right: 5px;
  }
  div {
    margin-right: 20px;
  }
`;

const PaymentMethodCp = ({ changePayment }) => {
  const { isPathname } = store();
  const onChange = useCallback((e) => {
    changePayment(e.target.value);
  }, []);
  return (
    <>
      <Title>결제방식 선택</Title>
      <PaymentMethodWrapper>
        <input type="radio" name="payment" value="card" onChange={onChange} defaultChecked />
        <div>신용카드</div>
        {isPathname === '/card' && (
          <>
            <input type="radio" name="payment" value="transfer" onChange={onChange} />
            <div>실시간 계좌이체</div>
            <input type="radio" name="payment" value="virtual" onChange={onChange} />
            <div>가상계좌</div>
            <input type="radio" name="payment" value="deposit" onChange={onChange} />
            <div>무통장입금</div>
          </>
        )}
      </PaymentMethodWrapper>
    </>
  );
};

export default React.memo(PaymentMethodCp);
