import React from 'react';
import styled, { PageWrapper, PageWrap, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

import SlideCp from '@/components/main/SlideCp';
import RealTimeMamulCp from '@/components/main/RealTimeMamulCp';
import FreeMamulCp from '@/components/main/FreeMamulCp';
import NoticeCp from '@/components/main/NoticeCp';
import QuestionsCp from '@/components/main/QuestionsCp';
import LoginCp from '@/components/main/LoginCp';
import LogoutCp from '@/components/main/LogoutCp';
import NaverMamulMgmBtnCp from '@/components/main/NaverMamulMgmBtnCp';
import GongsliPrdPriceBtnCp from '@/components/main/GongsliPrdPriceBtnCp';
import GongsliPrdListTableCp from '@/components/main/GongsliPrdListTableCp';
import NonePassBookTableCp from '@/components/main/NonePassBookTableCp';
import YouTubeBtnCp from '@/components/main/YouTubeBtnCp';
import RegistryBuildingBtnCp from '@/components/main/RegistryBuildingBtnCp';

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
  return (
    <PageWrapper>
      <MainPageWrap>
        <MainLeftWrap>
          <SlideCp />
          <ListWrap>
            <RealTimeMamulCp />
            <FreeMamulCp />
          </ListWrap>
          <ListWrap>
            <NoticeCp />
            <QuestionsCp />
          </ListWrap>
        </MainLeftWrap>
        <MainRightWrap>
          <LoginCp />
          <LogoutCp />
          <NaverMamulMgmBtnCp />
          <GongsliPrdPriceBtnCp />
          <GongsliPrdListTableCp />
          <NonePassBookTableCp />
          <YouTubeBtnCp />
          <RegistryBuildingBtnCp />
        </MainRightWrap>
      </MainPageWrap>
    </PageWrapper>
  );
};

export default React.memo(MainPage);
