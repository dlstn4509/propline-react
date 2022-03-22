import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import SignUpCp from '../components/signUp/SignUpCp';

const SignUpPageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SignUpPage = () => {
  return (
    <SignUpPageWrap>
      <SignUpCp />
    </SignUpPageWrap>
  );
};

export default React.memo(SignUpPage);
