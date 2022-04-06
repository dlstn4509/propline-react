import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchCp from '@/components/notice/SearchCp';
import ListCp from '@/components/notice/ListCp';
import PagerCp from '@/components/item/PagerCp';

const NoticeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

const NoticePage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <NoticeWrap>
          <Title pt={'0'}>공지사항</Title>
          <SearchCp />
        </NoticeWrap>
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(NoticePage);
