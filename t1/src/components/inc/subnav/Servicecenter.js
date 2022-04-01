import React from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '@/style/main';

const Servicecenter = ({ mouseLeave }) => {
  let pathname = '/' + window.location.href.split('/')[3];
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} style={{ paddingLeft: '378px' }}>
        <SubNav to="/notice" className={pathname === '/notice' ? 'active' : ''}>
          공지사항
        </SubNav>
        <SubNav to="/question" className={pathname === '/question' ? 'active' : ''}>
          자주하는질문
        </SubNav>
        <SubNav to="/requestboard" className={pathname === '/requestboard' ? 'active' : ''}>
          요청게시판
        </SubNav>
        <SubNav to="/inquiry" className={pathname === '/inquiry' ? 'active' : ''}>
          제휴&광고문의
        </SubNav>
        <SubNav to="/event" className={pathname === '/event' ? 'active' : ''}>
          이벤트
        </SubNav>
      </SubNavWrap>
    </SubNavWrapper>
  );
};

export default React.memo(Servicecenter);
