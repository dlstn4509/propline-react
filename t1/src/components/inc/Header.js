import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import store from '@/store/store';
import styled from '@/style';
import { bookmark } from '@/modules/bookmark';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  background-color: #f0f3f7;
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  height: 39px;
`;
const HeaderWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderDiv = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin-right: ${(props) => props.mr};
  color: ${(props) => (props.color ? props.color : '#464d50')};
  cursor: pointer;
`;

const Header = () => {
  const [clientIp, setClientIp] = useState('');
  const { isPathname, setLoginUser, loginUser } = store();
  useEffect(() => {
    if (window.location.pathname !== '/manual') {
      (async () => {
        const rs = await axios.get('https://api.ipify.org?format=json');
        setClientIp(rs.data.ip);
      })();
    }
  }, [isPathname]);
  const clickLogOut = useCallback(() => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      setLoginUser('');
      axios.get(process.env.REACT_APP_URL_API + 'logout');
    }
  }, []);
  return (
    <>
      <HeaderWrapper>
        <HeaderWrap>
          <HeaderDiv>
            <Title mr={'20px'} onClick={bookmark}>
              즐겨찾기
            </Title>
            <Title
              mr={'20px'}
              onClick={() => {
                window.open('/manual', '_black', 'width=1300, height=720, top=100px');
              }}
            >
              이용안내
            </Title>
            {!loginUser.midx && (
              <Title
                onClick={() => {
                  window.open('https://www.gongsilclub.com/manage');
                }}
              >
                매물관리 바로가기
              </Title>
            )}
          </HeaderDiv>
          <HeaderDiv>
            {clientIp && (
              <Title mr={'10px'} color={'#888f91'} style={{ cursor: 'auto' }}>
                IP: {clientIp}
              </Title>
            )}
            {!loginUser.midx && (
              <Title>
                <Link to="/login">로그인</Link>
              </Title>
            )}
            {loginUser.midx && <Title onClick={clickLogOut}>로그아웃</Title>}
          </HeaderDiv>
        </HeaderWrap>
      </HeaderWrapper>
    </>
  );
};

export default React.memo(Header);
