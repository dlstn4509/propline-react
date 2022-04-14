import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

import { MainWrapper, TitleWrap, ContentsWrap, IconWrap } from './bassStyle.js';

const listType = {
  junggaeSearch: ['img_1301.jpg', '공동중개 조회하기'],
  junggaeReg: ['img_1302.jpg', '공동중개 매물등록하기'],
};

const GongdongJunggaeCp = ({ choiceList, setChoiceList }) => {
  return (
    <MainWrapper>
      <TitleWrap>공동중개 이용안내</TitleWrap>
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
          {choiceList !== 'main' && <span>{listType[choiceList][1]}</span>}
        </IconWrap>
        {choiceList !== 'main' && (
          <img src={process.env.REACT_APP_URL + 'img/' + listType[choiceList][0]} alt="" />
        )}
      </ContentsWrap>
    </MainWrapper>
  );
};

export default React.memo(GongdongJunggaeCp);
