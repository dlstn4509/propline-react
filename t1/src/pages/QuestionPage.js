import React from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';

import SearchCp from '@/components/notice/SearchCp';
import ListCp from '@/components/question/ListCp';
import PagerCp from '@/components/item/PagerCp';

const QuestioneWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionPage = () => {
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
