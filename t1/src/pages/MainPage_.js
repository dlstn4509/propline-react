import React from 'react';
import styled from '@/style';
import store from '@/store/store';

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

const MainWrapper = styled.div`
  width: 100%;
`;

const MainWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: table;
`;
const LeftCon = styled.div`
  padding: 0;
  width: 804px;
  height: 440px;
  display: table-cell;
  vertical-align: top;
`;
const ListWrapper = styled.div`
  display: flex;
  padding-right: 24px;
  justify-content: space-between;
`;
const NoticeWrapper = styled.div`
  display: flex;
  padding-right: 24px;
  justify-content: space-between;
  margin: 60px 0;
`;
const RightCon = styled.div`
  width: 196px;
  display: table-cell;
`;

const MainPage = () => {
  const { isUser, quickMenuTop, setQuickMenuTop } = store();
  const onWheel = (e) => {
    let y = e.deltaY;
    if (y > 0 && quickMenuTop < 800) {
      setQuickMenuTop(y);
    } else if (y < 0 && quickMenuTop > 0) {
      setQuickMenuTop(y);
    }
  };
  return (
    <MainWrapper onWheel={onWheel}>
      <MainWrap>
        <LeftCon>
          <SlideCp />
          <ListWrapper>
            <RealTimeMamulCp />
            <FreeMamulCp />
          </ListWrapper>
          <NoticeWrapper>
            <NoticeCp />
            <QuestionsCp />
          </NoticeWrapper>
        </LeftCon>
        <RightCon>
          {!isUser && <LoginCp />}
          {isUser && <LogoutCp />}
          <NaverMamulMgmBtnCp />
          <GongsliPrdPriceBtnCp />
          <GongsliPrdListTableCp />
          <NonePassBookTableCp />
          <YouTubeBtnCp />
          <RegistryBuildingBtnCp />
        </RightCon>
      </MainWrap>
    </MainWrapper>
  );
};

export default React.memo(MainPage);
