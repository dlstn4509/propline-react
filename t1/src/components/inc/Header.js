import React, { useEffect, useState } from 'react';
import axios from 'axios';
import store from '@/store/store';
import { HeaderWrap, InnerWrap, FllWrap, FlrWrap, HeaderLink, Bookmark } from '@/style/main';
import { bookmark } from '@/modules/bookmark';
import { Link } from 'react-router-dom';

const Header = () => {
  const [clientIp, setClientIp] = useState('');
  const { isUser, setIsUser } = store();
  useEffect(() => {
    (async () => {
      const rs = await axios.get('https://api.ipify.org?format=json');
      setClientIp(rs.data.ip);
    })();
  }, []);
  const clickLogOut = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      setIsUser();
    }
  };
  return (
    <>
      <HeaderWrap>
        <InnerWrap>
          <FllWrap>
            <Bookmark onClick={bookmark}>즐겨찾기</Bookmark>
            <HeaderLink>이용안내</HeaderLink>
          </FllWrap>
          <FlrWrap>
            {clientIp && <span>IP: {clientIp}</span>}
            {!isUser && (
              <HeaderLink>
                <Link to="/login">로그인</Link>
              </HeaderLink>
            )}
            {isUser && <HeaderLink onClick={clickLogOut}>로그아웃</HeaderLink>}
          </FlrWrap>
        </InnerWrap>
      </HeaderWrap>
    </>
  );
};

export default React.memo(Header);
