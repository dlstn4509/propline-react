import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HeaderWrap, InnerWrap, FllWrap, FlrWrap, HeaderLink, Bookmark } from '../../style/main';
import { bookmark } from '../../modules/bookmark';

const Header = () => {
  const [clientIp, setClientIp] = useState('');
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
            <HeaderLink to="#">로그아웃</HeaderLink>
          </FlrWrap>
        </InnerWrap>
      </HeaderWrap>
    </>
  );
};

export default React.memo(Header);
