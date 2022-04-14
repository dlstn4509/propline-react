import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

import { MainWrapper, TitleWrap, ContentsWrap, IconWrap } from './bassStyle.js';

const listType = {
  howToSearch: ['img_1601.jpg', '매물 찾습니다&매물내놓습니다 이용방법'],
  commission: ['img_1602.jpg', '중개의뢰현황 이용방법'],
};

const SelfCp = ({ choiceList, setChoiceList }) => {
  return (
    <MainWrapper>
      <TitleWrap>매물셀프코너 이용안내</TitleWrap>
      <ContentsWrap>
        <IconWrap>
          <FaHome
            onClick={() => {
              setChoiceList('main');
            }}
            style={{ cursor: 'pointer' }}
          />
          <FaAngleDoubleRight style={{ margin: '0 10px' }} />
          <div style={{ cursor: 'pointer' }}>매물셀프코너 이용안내</div>
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

export default React.memo(SelfCp);
