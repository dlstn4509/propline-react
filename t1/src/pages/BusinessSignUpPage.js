import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import BusinessSignUpInfoCp from '@/components/businessSignUp/BusinessSignUpInfoCp';
import MembershipInfoCp from '@/components/businessSignUp/MembershipInfoCp';
import CompanyInfoCp from '@/components/businessSignUp/CompanyInfoCp';

const BusinessSignUpPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const BusinessSignUpCpWrapper = styled.form`
  border: 1px solid red;
  width: 1000px;
`;

const BusinessSignUpPage = () => {
  return (
    <BusinessSignUpPageWrapper>
      <BusinessSignUpCpWrapper>
        <BusinessSignUpInfoCp />
        <MembershipInfoCp />
        <CompanyInfoCp />
      </BusinessSignUpCpWrapper>
    </BusinessSignUpPageWrapper>
  );
};

export default React.memo(BusinessSignUpPage);
