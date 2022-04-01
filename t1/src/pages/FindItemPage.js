import React from 'react';
import styled, { PageWrapper, PageWrap, Title } from '@/style';
import { Link } from 'react-router-dom';

import InputCp from '@/components/finditem/InputCp';
import ListCp from '@/components/finditem/ListCp';
import PagerCp from '@/components/item/PagerCp';

const Text = styled.div`
  font-size: 14px;
  color: #464d50;
  margin-bottom: 30px;
`;

const FindItemPage = () => {
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
        <InputCp />
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(FindItemPage);
