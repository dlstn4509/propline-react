import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchCp from '@/components/notice/SearchCp';
import ListCp from '@/components/question/ListCp';
import PagerCp from '@/components/item/PagerCp';

const QuestioneWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <QuestioneWrap>
          <Title>자주하는질문</Title>
          <SearchCp />
        </QuestioneWrap>
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(QuestionPage);
