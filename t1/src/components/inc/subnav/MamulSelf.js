import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '@/style/main';

const MamulSelf = ({ mouseLeave }) => {
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '235px' }}>
        <SubNav to="/main">매물찾습니다</SubNav>
        <SubNav to="/main">매물내놓습니다</SubNav>
        <SubNav to="/main">
          중개의뢰현황 <span>N</span>
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(MamulSelf);
