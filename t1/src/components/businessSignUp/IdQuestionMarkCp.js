import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const IdQuestionMarkWrap = styled.div`
  width: 250px;
  position: absolute;
  top: 20px;
  left: 330px;
  background-color: #f5f5f5;
  padding: 5px 8px;
  color: #888f91;
`;

const IdQuestionMarkCp = () => {
  return (
    <IdQuestionMarkWrap>
      <div>{`ex )`}</div>
      <div>대표ID : gongsil</div>
      <div>직원ID : gongsil01, gongsil02, gongsil03, ......</div>
    </IdQuestionMarkWrap>
  );
};

export default React.memo(IdQuestionMarkCp);
