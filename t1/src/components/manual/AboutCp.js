import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import { MainWrapper, TitleWrap, ContentsWrap } from './bassStyle.js';

const AboutCp = () => {
  return (
    <MainWrapper>
      <TitleWrap>공실클럽이란 무엇입니까?</TitleWrap>
      <ContentsWrap>
        <img src={process.env.REACT_APP_URL + 'img/img_1001.jpg'} alt="" />
      </ContentsWrap>
    </MainWrapper>
  );
};

export default React.memo(AboutCp);
