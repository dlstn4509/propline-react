import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SlideCp from '@/components/main/SlideCp';
import RealTimeMamulCp from '@/components/main/RealTimeMamulCp';
import FreeMamulCp from '@/components/main/FreeMamulCp';
import NoticeCp from '@/components/main/NoticeCp';
import QuestionsCp from '@/components/main/QuestionsCp';
import LoginCp from '@/components/main/LoginCp';
import LogoutCp from '@/components/main/LogoutCp';
import NaverBtnCp from '@/components/main/NaverBtnCp';
import PriceBtnCp from '@/components/main/PriceBtnCp';
import PrdListCp from '@/components/main/PrdListCp';
import AccountCp from '@/components/main/AccountCp';
import YouTubeBtnCp from '@/components/main/YouTubeBtnCp';
import RegistryBuildingBtnCp from '@/components/main/RegistryBuildingBtnCp';
import axios from 'axios';

const MainPageWrap = styled(PageWrap)`
  display: flex;
  justify-content: space-between;
`;
const MainLeftWrap = styled.div`
  width: 780px;
`;
const MainRightWrap = styled.div`
  width: 196px;
`;
const ListWrap = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 40px;
`;

const MainPage = () => {
  const { loginUser } = store();
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + 'main/notice');
      setNotice(data);
    })();
  }, []);
  return (
    <PageWrapper style={{ paddingTop: '30px' }}>
      <MainPageWrap>
        <MainLeftWrap>
          <SlideCp />
          <ListWrap>
            <RealTimeMamulCp />
            <FreeMamulCp />
          </ListWrap>
          <ListWrap>
            <NoticeCp notice={notice} />
            <QuestionsCp />
          </ListWrap>
        </MainLeftWrap>
        <MainRightWrap>
          {!loginUser.midx && <LoginCp />}
          {loginUser.midx && <LogoutCp />}
          <NaverBtnCp />
          <PriceBtnCp />
          <PrdListCp />
          <AccountCp />
          <YouTubeBtnCp />
          <RegistryBuildingBtnCp />
        </MainRightWrap>
      </MainPageWrap>
    </PageWrapper>
  );
};

export default React.memo(MainPage);
