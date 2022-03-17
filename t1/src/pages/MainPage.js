import React, { useState } from 'react';
import styled from '../style';

import SlideCp from '../components/main/SlideCp';
import LoginCp from '../components/main/LoginCp';
import LogoutCp from '../components/main/LogoutCp';
import NaverMamulMgmBtnCp from '../components/main/NaverMamulMgmBtnCp';
import GongsliPrdPriceBtnCp from '../components/main/GongsliPrdPriceBtnCp';
import GongsliPrdListTableCp from '../components/main/GongsliPrdListTableCp';
import NonePassBookTableCp from '../components/main/NonePassBookTableCp';
import YouTubeBtnCp from '../components/main/YouTubeBtnCp';
import RegistryBuildingBtnCp from '../components/main/RegistryBuildingBtnCp';
// import RealTimeCp from '../components/main/RealTimeCp';
// import FreeCp from '../components/main/FreeCp';
// import NoticeCp from '../components/main/NoticeCp';
// import Questions from '../components/main/Questions';

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
const RightCon = styled.div`
  width: 196px;
  display: table-cell;
`;

const MainPage = () => {
  const [isUser, setIsUser] = useState(true);
  return (
    <MainWrapper>
      <MainWrap>
        <LeftCon>
          <SlideCp />
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
