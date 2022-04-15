import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

import { MainWrapper, TitleWrap, ContentsWrap, IconWrap } from './bassStyle.js';

const listType = {
  singUp: ['img_1101.jpg', '공실클럽 회원 가입 방법'],
  payment: ['img_1102.jpg', '공실클럽 유료서비스 결제하기'],
  gpoint: ['img_1103.jpg', 'G포인트 충전하기'],
  notice: ['img_1104.jpg', '공지사항 & 기능개선 업데이트 내역'],
  request: ['img_1105.jpg', '매물의뢰하기'],
  service: ['img_1106.jpg', '원격지원 서비스 요청 방법'],
};

const PortalCp = ({ choiceList, setChoiceList }) => {
  return (
    <MainWrapper>
      <TitleWrap>포탈 이용안내</TitleWrap>
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

export default React.memo(PortalCp);
