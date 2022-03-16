import React from 'react';
import styled from '../style';

import SlideCp from '../components/main/SlideCp';
import RealTimeCp from '../components/main/RealTimeCp';
import FreeCp from '../components/main/FreeCp';
import NoticeCp from '../components/main/NoticeCp';
import Questions from '../components/main/Questions';

const MainWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 500px;
  border: 1px solid red;
`;

const MainWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const MainPage = () => {
  return (
    <MainWrapper>
      <MainWrap>
        <SlideCp />
        <div
          style={{
            width: '220px',
            height: '800px',
            position: 'absolute',
            right: '-10px',
            border: '1px solid red',
          }}
        ></div>
        <RealTimeCp />
        <FreeCp />
        <NoticeCp />
        <Questions />
      </MainWrap>
    </MainWrapper>
  );
};

export default React.memo(MainPage);
