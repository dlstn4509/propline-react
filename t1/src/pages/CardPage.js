import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import MyInfoCp from '../components/card/MyInfoCp';
import PaymentCp from '../components/card/PaymentCp';
import PaymentMethodCp from '../components/card/PaymentMethodCp';
import ProductCp from '../components/card/ProductCp';
import ApplicantInfoCp from '../components/card/ApplicantInfoCp';
import CardGuideCp from '../components/card/CardGuideCp';
import TaxBillCp from '../components/card/TaxBillCp';
import DepositInfoCp from '../components/card/DepositInfoCp';
import TotalAmountCp from '../components/card/TotalAmountCp';
import BtnCp from '../components/card/BtnCp';

const CardPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  /*  */
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [idNum, setIdNum] = useState('2');
  const [money, setMoney] = useState('462,000원');
  const [month, setMonth] = useState('3개월');
  const changePayment = (val) => {
    setPaymentMethod(val);
  };
  const changeId = (val) => {
    setIdNum(val);
  };
  const changeMoney = (val) => {
    setMoney(val);
  };
  const changeMonth = (val) => {
    setMonth(val);
  };
  return (
    <PageWrapper>
      <PageWrap>
        <MyInfoCp />
        <PaymentCp />
        <PaymentMethodCp paymentMethod={paymentMethod} changePayment={changePayment} />
        <ProductCp
          paymentMethod={paymentMethod}
          changeId={changeId}
          changeMoney={changeMoney}
          changeMonth={changeMonth}
        />
        {paymentMethod !== 'deposit' && <ApplicantInfoCp />}
        {paymentMethod === 'card' && <CardGuideCp />}
        {paymentMethod === 'deposit' && <DepositInfoCp />}
        {paymentMethod !== 'card' && <TaxBillCp />}
        <TotalAmountCp idNum={idNum} money={money} month={month} />
        <BtnCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(CardPage);
