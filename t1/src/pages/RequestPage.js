import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap, Text } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchCp from '@/components/request/SearchCp';
import ListCp from '@/components/request/ListCp';
import PagerCp from '@/components/item/PagerCp';

const RequestPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>중개의뢰현황</Title>
        <Text>
          부동산 구하기를 통해 중개 의뢰를 신청한 내역입니다. (중개 의뢰 시작일로부터 30일 이후 자동 기간
          만료됩니다.)
          <br />
          중개 의뢰 목적 외 상업적 광고, 불법적인 내용 공유 및 개인정보 무단 수집을 금지합니다.
        </Text>
        <SearchCp />
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(RequestPage);
