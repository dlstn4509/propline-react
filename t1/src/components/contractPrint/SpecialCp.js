import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SpecialCpWrap = styled.div`
  font-family: 굴림, 돋움, Arial, verdana, sans-serif;
  border: 1px solid #000;
  padding: 2px 6px;
  margin-bottom: 6px;
`;
const Title = styled.div`
  font-weight: 600;
`;

const SpecialCp = ({ special }) => {
  return (
    <SpecialCpWrap>
      <Title>[특약사항]</Title>
      <div>{special}</div>
    </SpecialCpWrap>
  );
};

export default React.memo(SpecialCp);
