import React from 'react';
import styled, { PageWrapper } from '@/style';
import { Link } from 'react-router-dom';

import NormalSignUpInfoCp from '@/components/normalSignUp/NormalSignUpInfoCp';
import MemberTypeCp from '@/components/normalSignUp/MemberTypeCp';
import MembershipInfoCp from '@/components/normalSignUp/MembershipInfoCp';
import BillInfoCp from '@/components/normalSignUp/BillInfoCp';
import AggrePrivacyCp from '../components/businessSignUp/AggrePrivacyCp';

const BusinessSignUpCpForm = styled.form`
  width: 1000px;
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 100px;
`;
const BtnSubmit = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  width: 100px;
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.bgc};
  padding: 5px 0 6px 0;
  border-radius: 5px;
  display: inline-block;
  :first-child {
    margin-right: 20px;
  }
`;

const NormalSignUpPage = () => {
  return (
    <PageWrapper>
      <BusinessSignUpCpForm action="">
        <NormalSignUpInfoCp />
        <MemberTypeCp />
        <MembershipInfoCp />
        <BillInfoCp />
        <AggrePrivacyCp />
        <BtnWrap>
          <BtnSubmit bgc={'#888f91'} type="button">
            <Link to="/signup">이전페이지</Link>
          </BtnSubmit>
          <BtnSubmit bgc={'#3168ff'}>회원가입</BtnSubmit>
        </BtnWrap>
      </BusinessSignUpCpForm>
    </PageWrapper>
  );
};

export default React.memo(NormalSignUpPage);
