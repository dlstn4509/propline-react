import React from 'react';
import styled, { Title, PageWrapper, PageWrap, Text, color } from '@/style';
import { Link } from 'react-router-dom';

import SearchCp from '@/components/finditem/SearchCp';
import ListCp from '@/components/knowhow/ListCp';
import PagerCp from '@/components/item/PagerCp';

const KnowHowPage = () => {
  return (
    <PageWrapper>
      <PageWrap>
        <Title>팁&노하우</Title>
        <Text style={{ marginBottom: '0' }}>
          중개업에 도움이 되는 노하우를 공유하는 게시판입니다.
          <br />
          상업적 광고, 불법적인 내용(사회정서를 해칠 수 있는 비방, 비속어, 선거 관련 내용, 인신공격, 허위사실
          등)이 포함된 게시글은 게시 중단과 즉시 삭제 처리됨을 알려드립니다.
        </Text>
        <Text style={{ color: `${color.blue}` }}>
          등록된 게시물에 의해 발생되는 모든 문제에 대한 민ㆍ형사상의 법적 책임은 게시물 등록자에게 있습니다.
        </Text>
        <div style={{ marginBottom: '50px' }}>
          <img src={process.env.REACT_APP_URL + 'img/board_gpoint_banner_20210226.png'} alt="" />
        </div>
        <SearchCp />
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(KnowHowPage);
