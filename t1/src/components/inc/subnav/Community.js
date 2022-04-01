import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '@/style/main';

const Community = ({ mouseLeave }) => {
  let pathname = '/' + window.location.href.split('/')[3];
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '270px' }}>
        <SubNav to="/freeboard" className={pathname === '/freeboard' ? 'active' : ''}>
          자유게시판
        </SubNav>
        <SubNav to="/knowhow" className={pathname === '/knowhow' ? 'active' : ''}>
          팁&노하우
        </SubNav>
        <SubNav to="/recruit" className={pathname === '/recruit' ? 'active' : ''}>
          구인구직
        </SubNav>
        <SubNav to="/consult" className={pathname === '/consult' ? 'active' : ''}>
          부동산전문상담
        </SubNav>
        <SubNav to="/direct" className={pathname === '/direct' ? 'active' : ''}>
          부동산자리직거래
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(Community);
