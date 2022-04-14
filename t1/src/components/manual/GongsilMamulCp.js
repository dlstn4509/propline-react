import React from 'react';

import { MainWrapper, TitleWrap, ContentsWrap, IconWrap } from './bassStyle.js';
import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

const GongsilMamulCp = ({ setChoiceList }) => {
  return (
    <MainWrapper>
      <TitleWrap>공실매물 이용안내</TitleWrap>
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
          <span>공실매물 조회하기</span>
        </IconWrap>
        <img src={process.env.REACT_APP_URL + 'img/img_1201.jpg'} alt="" />
      </ContentsWrap>
    </MainWrapper>
  );
};

export default React.memo(GongsilMamulCp);
