import React from 'react';
import styled, { PageWrapper } from '@/style';
import { Link } from 'react-router-dom';

import SignUpCp from '../components/signUp/SignUpCp';

const SignUpPage = () => {
  return (
    <PageWrapper>
      <SignUpCp />
    </PageWrapper>
  );
};

export default React.memo(SignUpPage);
