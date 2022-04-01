import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '@/style/main';

const MamulSelf = ({ mouseLeave }) => {
  let pathname = '/' + window.location.href.split('/')[3];
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '235px' }}>
        <SubNav to="/finditem" className={pathname === '/finditem' ? 'active' : ''}>
          매물찾습니다
        </SubNav>
        <SubNav to="/saleitem" className={pathname === '/saleitem' ? 'active' : ''}>
          매물내놓습니다
        </SubNav>
        <SubNav to="/request" className={pathname === '/request' ? 'active' : ''}>
          중개의뢰현황 <span>N</span>
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(MamulSelf);
