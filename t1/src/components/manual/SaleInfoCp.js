import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

import { MainWrapper, TitleWrap, ContentsWrap, IconWrap } from './bassStyle.js';

const SaleInfoCp = ({ setChoiceList }) => {
  return (
    <MainWrapper>
      <TitleWrap>매매정보 이용안내</TitleWrap>
      <ContentsWrap>
        <IconWrap>
          <FaHome
            onClick={() => {
              setChoiceList('main');
            }}
            style={{ cursor: 'pointer' }}
          />
          <FaAngleDoubleRight style={{ margin: '0 10px' }} />
          <div style={{ cursor: 'pointer' }}>포탈 이용안내</div>
          <FaAngleDoubleRight style={{ margin: '0 10px' }} />
          <span>매매정보 조회하기</span>
        </IconWrap>
        <img src={process.env.REACT_APP_URL + 'img/img_1201.jpg'} alt="" />
      </ContentsWrap>
    </MainWrapper>
  );
};

export default React.memo(SaleInfoCp);
