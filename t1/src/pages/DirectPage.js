import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap, Text } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchCp from '@/components/finditem/SearchCp';
import ListCp from '../components/direact/ListCp';
import PagerCp from '@/components/item/PagerCp';

const DirectPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>부동산자리직거래</Title>
        <Text>
          부동산사무실 직거래를 위한 게시판입니다.
          <br />
          상업적 광고, 불법적인 내용(사회정서를 해칠 수 있는 비방, 비속어, 선거관련내용, 인신공격, 허위사실
          등)이 포함된 게시글은 게시 중단과 즉시 삭제 처리됨을 알려드립니다. 등록된 게시물에 의해 발생되는
          모든 문제에 대한 민ㆍ형사상의 법적 책임은 게시물 등록자에게 있습니다.
        </Text>
        <SearchCp />
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(DirectPage);
