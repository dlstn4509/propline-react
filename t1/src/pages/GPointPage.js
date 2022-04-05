import React from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';

import MyInfoCp from '../components/card/MyInfoCp';
import PaymentCp from '../components/card/PaymentCp';
import PaymentMethodCp from '../components/card/PaymentMethodCp';
import GPointInfoCp from '../components/gpoint/GPointInfoCp';
import AmountCp from '../components/extraPayment/AmountCp';
import ApplicantInfoCp from '../components/extraPayment/ApplicantInfoCp';
import PaymentBtnCp from '../components/extraPayment/PaymentBtnCp';
import AggrePrivacyCp from '../components/businessSignUp/AggrePrivacyCp';

const GPointPage = () => {
  return (
    <PageWrapper>
      <PageWrap>
        <MyInfoCp />
        <PaymentCp />
        <GPointInfoCp />
        <PaymentMethodCp />
        <AmountCp />
        <ApplicantInfoCp />
        <PaymentBtnCp />
        <AggrePrivacyCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(GPointPage);
