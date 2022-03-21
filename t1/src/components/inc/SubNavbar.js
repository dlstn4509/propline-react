import React from 'react';
import styled from '@/style';

import Gongsilmaemul from './subnav/Gongsilmaemul';
import Gongdongjunggae from './subnav/Gongdongjunggae';

const SubNavbarWrapper = styled.div`
  background-color: #f0f3f7;
  height: 50px;
  width: 100%;
  position: absolute;
`;

const SubNavbar = ({ navNum, mouseLeave }) => {
  return (
    <SubNavbarWrapper onMouseLeave={mouseLeave}>
      {navNum === 0 && <Gongsilmaemul />}
      {navNum === 1 && <Gongdongjunggae />}
    </SubNavbarWrapper>
  );
};

export default React.memo(SubNavbar);
