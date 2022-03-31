import React from 'react';
import styled, { PageWrapper, PageWrap, Title } from '@/style';
import { Link } from 'react-router-dom';

import { sigunguArr } from '@/components/saleInfo/sigunguArr';
import SearchCp from '../components/saleInfo/SearchCp';

const SaleInfoPage = () => {
  return (
    <PageWrapper>
      <PageWrap>
        <Title>매매정보</Title>
        <SearchCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(SaleInfoPage);
