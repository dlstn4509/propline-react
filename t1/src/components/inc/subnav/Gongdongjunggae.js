import React from 'react';
import styled from '../../../style';

const GongdongjunggaeWrap = styled.ul`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  .menu {
    padding-right: 25px;
    line-height: 50px;
  }
`;

const Gongdongjunggae = () => {
  return (
    <GongdongjunggaeWrap>
      <li className="menu">공동중개매물</li>
      <li className="menu">나의공동중개</li>
    </GongdongjunggaeWrap>
  );
};

export default React.memo(Gongdongjunggae);
