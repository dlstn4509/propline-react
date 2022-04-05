import React from 'react';
import styled, { Button } from '@/style';
import { Link } from 'react-router-dom';

const BtnWrap = styled.div`
  display: flex;
  margin-bottom: 100px;
`;

const BtnCp = () => {
  return (
    <BtnWrap>
      <Button style={{ marginRight: '10px' }}>환불안내</Button>
      <Button>세금계산서 처리방법 변경안내</Button>
    </BtnWrap>
  );
};

export default React.memo(BtnCp);
