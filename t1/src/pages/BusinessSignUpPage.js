import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import BusinessSignUpInfoCp from '@/components/businessSignUp/BusinessSignUpInfoCp';
import MembershipInfoCp from '@/components/businessSignUp/MembershipInfoCp';
import CompanyInfoCp from '@/components/businessSignUp/CompanyInfoCp';
import AggrePrivacyCp from '../components/businessSignUp/AggrePrivacyCp';

const BusinessSignUpPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
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

const BusinessSignUpPage = () => {
  const [isCheck, setIsCheckId] = useState(false);
  const checkAll = (bul) => {
    setIsCheckId(bul);
  };
  const btSubmit = (e) => {
    let redStar = document.querySelectorAll('.redStar');
    for (let i = 0; i < redStar.length; i++) {
      if (!isCheck) {
        redStar[1].focus();
        return false;
      } else if (!redStar[i].value) {
        redStar[i].focus();
        return false;
      }
    }
    e.target.form.submit();
  };
  return (
    <>
      <BusinessSignUpPageWrapper>
        <BusinessSignUpCpForm
          action={process.env.REACT_APP_URL_API + 'signup'}
          method="post"
          encType="multipart/form-data"
        >
          <BusinessSignUpInfoCp />
          <MembershipInfoCp checkAll={checkAll} />
          <CompanyInfoCp />
          <AggrePrivacyCp />
          <BtnWrap>
            <BtnSubmit bgc={'#888f91'} type="button">
              <Link to="/signup">이전페이지</Link>
            </BtnSubmit>
            <BtnSubmit type="button" onClick={btSubmit} bgc={'#3168ff'}>
              회원가입
            </BtnSubmit>
          </BtnWrap>
        </BusinessSignUpCpForm>
      </BusinessSignUpPageWrapper>
    </>
  );
};

export default React.memo(BusinessSignUpPage);
