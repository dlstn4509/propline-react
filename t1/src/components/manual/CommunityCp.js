import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

import { MainWrapper, TitleWrap, ContentsWrap, IconWrap } from './bassStyle.js';

const listType = {
  freeBoard: ['img_1701.jpg', '자유게시판 이용하기'],
  knowHow: ['img_1702.jpg', '팁&노하우 이용하기'],
  recruit: ['img_1703.jpg', '구인구직 이용하기'],
  consult: ['img_1704.jpg', '부동산 전문상담 이용하기'],
  direct: ['img_1705.jpg', '부동산자리직거래 이용하기'],
};

const CommunityCp = ({ choiceList, setChoiceList }) => {
  return (
    <MainWrapper>
      <TitleWrap>커뮤니티 이용안내</TitleWrap>
      <ContentsWrap>
        <IconWrap>
          <FaHome
            onClick={() => {
              setChoiceList('main');
            }}
            style={{ cursor: 'pointer' }}
          />
          <FaAngleDoubleRight style={{ margin: '0 10px' }} />
          <div style={{ cursor: 'pointer' }}>커뮤니티 이용안내</div>
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

export default React.memo(CommunityCp);
