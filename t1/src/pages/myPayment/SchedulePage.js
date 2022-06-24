import React from 'react';
import styled, { PageWrapper, PageWrap, Title } from '@/style';
import { Link } from 'react-router-dom';
import ScheduleCp from '@/components/schedule/ScheduleCp';

const SchedulePage = () => {
  return (
    <PageWrapper>
      <PageWrap>
        <Title>일정관리</Title>
        <ScheduleCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(SchedulePage);
