import React from 'react';
import styled from '@/style';

import LoginCp from '@/components/login/LoginCp';

const LoginPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginCp />
    </LoginPageWrapper>
  );
};

export default React.memo(LoginPage);
