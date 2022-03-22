import React from 'react';
import styled from '@/style';

import LoginCp from '@/components/login/LoginCp';

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginCp />
    </LoginWrapper>
  );
};

export default React.memo(LoginPage);
