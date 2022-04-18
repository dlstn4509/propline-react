import React from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';

import MyInfoCp from '@/components/card/MyInfoCp';
import PaymentCp from '@/components/card/PaymentCp';
import PaymentMethodCp from '@/components/card/PaymentMethodCp';
import AmountCp from '@/components/extraPayment/AmountCp';
import ApplicantInfoCp from '@/components/extraPayment/ApplicantInfoCp';
import PaymentBtnCp from '@/components/extraPayment/PaymentBtnCp';
import AgreePrivacyCp from '@/components/businessSignUp/AgreePrivacyCp';

const ExtraPaymentPage = () => {
  return (
    <PageWrapper>
      <PageWrap>
        <MyInfoCp />
        <PaymentCp />
        <PaymentMethodCp />
        <AmountCp />
        <ApplicantInfoCp />
        <PaymentBtnCp />
        <AgreePrivacyCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(ExtraPaymentPage);
