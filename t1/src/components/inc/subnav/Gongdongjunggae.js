import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '../../../style/main';

const Gongdongjunggae = ({ mouseLeave }) => {
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '50px' }}>
        <SubNav to="/main">공동중개매물</SubNav>
        <SubNav to="/main">나의공동중개</SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(Gongdongjunggae);
