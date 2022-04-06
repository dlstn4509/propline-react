import React, { useEffect } from 'react';
import styled, { PageWrapper, PageWrap, Title, Text } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchCp from '@/components/finditem/SearchCp';
import ListCp from '@/components/saleitem/ListCp';
import PagerCp from '@/components/item/PagerCp';

const SaleItemPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>매물내놓습니다</Title>
        <Text>
          매물정보를 제외한 상업적 광고, 불법적인 내용(사회정서를 해칠 수 있는 비방, 비속어, 선거 관련 내용,
          인신공격, 허위사실 등)이 포함된 게시물 또는 반복적으로 등록된 게시물 등은 관리자에 의해 통보 없이
          삭제될 수 있으며 본 게시판에 등록된 게시물에 의해 발생되는 모든 문제에 대한 민ㆍ형사상의 법적 책임은
          게시물 등록자에게 있습니다.
        </Text>
        <SearchCp />
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(SaleItemPage);
