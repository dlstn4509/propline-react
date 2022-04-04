import React, { useEffect } from 'react';
import styled, { PageWrapper, PageWrap, Title, Text } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchCp from '@/components/finditem/SearchCp';
import ListCp from '@/components/finditem/ListCp';
import PagerCp from '@/components/item/PagerCp';

const FindItemPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>매물찾습니다</Title>
        <Text>
          「매물을 찾습니다」는 찾는 글 외의 글을 등록하실 경우 관리자에 의해 삭제 및 권한에 제한이 될 수
          있음을 알려드리며,
          <br />
          등록된 글은 6개월 이상이 경과된 경우 관리자에 의해 삭제될 수 있으니 양해해 주시기 바랍니다.
        </Text>
        <SearchCp />
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(FindItemPage);
