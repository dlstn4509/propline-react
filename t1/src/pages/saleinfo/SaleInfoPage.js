import React, { useEffect } from 'react';
import styled, { PageWrapper, PageWrap, Title } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchCp from '@/components/saleInfo/SearchCp';
import ListCp from '@/components/saleInfo/ListCp';
import TabCp from '@/components/saleInfo/TabCp';
import ListFilterCp from '@/components/item/ListFilterCp';
import PagerCp from '@/components/item/PagerCp';

const SaleInfoPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>매매정보</Title>
        <SearchCp />
        <TabCp />
        <ListFilterCp />
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(SaleInfoPage);
