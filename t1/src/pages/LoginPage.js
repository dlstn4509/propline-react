import React from 'react';
import styled, { PageWrapper } from '@/style';

import LoginCp from '@/components/login/LoginCp';

const LoginPage = () => {
  return (
    <PageWrapper>
      <LoginCp />
    </PageWrapper>
  );
};

export default React.memo(LoginPage);
