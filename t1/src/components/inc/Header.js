import React, { useEffect, useState } from 'react';
import axios from 'axios';
import store from '@/store/store';
import { HeaderWrap, InnerWrap, FllWrap, FlrWrap, HeaderLink, Bookmark } from '@/style/main';
import { bookmark } from '@/modules/bookmark';

const Header = () => {
  const [clientIp, setClientIp] = useState('');
  const { isUser, isAuth } = store();
  useEffect(() => {
    (async () => {
      const rs = await axios.get('https://api.ipify.org?format=json');
      setClientIp(rs.data.ip);
    })();
  }, []);
  return (
    <>
      <HeaderWrap>
        <InnerWrap>
          <FllWrap>
            <Bookmark onClick={bookmark}>즐겨찾기</Bookmark>
            <HeaderLink to="/about">이용안내</HeaderLink>
          </FllWrap>
          <FlrWrap>
            {clientIp && <span>IP: {clientIp}</span>}
            <HeaderLink to="/login">{!isUser ? '로그인' : '로그아웃'}</HeaderLink>
          </FlrWrap>
        </InnerWrap>
      </HeaderWrap>
    </>
  );
};

export default React.memo(Header);
