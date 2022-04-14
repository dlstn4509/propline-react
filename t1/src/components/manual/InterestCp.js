import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

import { MainWrapper, TitleWrap, ContentsWrap, IconWrap } from './bassStyle.js';

const InterestCp = ({ setChoiceList }) => {
  return (
    <MainWrapper>
      <TitleWrap>관심매물 이용안내</TitleWrap>
      <ContentsWrap>
        <IconWrap>
          <FaHome
            onClick={() => {
              setChoiceList('main');
            }}
            style={{ cursor: 'pointer' }}
          />
          <FaAngleDoubleRight style={{ margin: '0 10px' }} />
          <div style={{ cursor: 'pointer' }}>관심매물 이용안내</div>
          <FaAngleDoubleRight style={{ margin: '0 10px' }} />
          <span>관심매물 담기 및 조회하기</span>
        </IconWrap>
        <img src={process.env.REACT_APP_URL + 'img/img_1501.jpg'} alt="" />
      </ContentsWrap>
    </MainWrapper>
  );
};

export default React.memo(InterestCp);
