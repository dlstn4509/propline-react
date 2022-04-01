import React from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';

import SearchCp from '@/components/notice/SearchCp';
import ListCp from '@/components/notice/ListCp';
import PagerCp from '@/components/item/PagerCp';

const NoticeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoticePage = () => {
  return (
    <PageWrapper>
      <PageWrap>
        <NoticeWrap>
          <Title>공지사항</Title>
          <SearchCp />
        </NoticeWrap>
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(NoticePage);
