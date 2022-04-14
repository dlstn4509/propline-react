import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  padding: 7px 0;
  width: 1300px;
  text-align: center;
  font-size: 13px;
  font-weight: 200;
  background-color: #e6ebed;
`;

const FooterCp = () => {
  return <FooterWrapper>Copyright 2022 Propline Co., Ltd. All rights reserved.</FooterWrapper>;
};

export default React.memo(FooterCp);
