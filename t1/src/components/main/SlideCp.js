import React from 'react';
import styled from '../../style';

const SlideCpWrapper = styled.div`
  width: 780px;
  height: 440px;
  padding: 0 24px 60px 0;
  border: 1px solid red;
  margin-bottom: 50px;
`;

const SlideCp = () => {
  return <SlideCpWrapper></SlideCpWrapper>;
};

export default React.memo(SlideCp);
