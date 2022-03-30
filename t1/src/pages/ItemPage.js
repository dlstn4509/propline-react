import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import store from '@/store/store';

import ItemTypeCp from '@/components/item/ItemTypeCp';
import SearchAllCp from '@/components/item/SearchAllCp';
import SearchNormalCp from '@/components/item/SearchNormalCp';
import AllTabCp from '@/components/item/AllTabCp';
import ListFilterCp from '@/components/item/ListFilterCp';
import ListCp from '@/components/item/ListCp';
import PagerCp from '@/components/item/PagerCp';
import MyItemCp from '@/components/item/MyItemCp';

const ItemPageWrapper = styled(PageWrapper)`
  flex-wrap: wrap;
`;

const ItemPage = () => {
  const { setPathName } = store();
  let pathname = window.location.href.split('?')[1].split('=')[1];
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <ItemPageWrapper>
      <PageWrap>
        <Title>공실매물</Title>
        <ItemTypeCp />
        {pathname === 'all' && <SearchAllCp />}
        {pathname === 'normal' && <SearchNormalCp />}
        <AllTabCp />
        <ListFilterCp />
        <ListCp />
        <PagerCp />
      </PageWrap>
      <MyItemCp />
    </ItemPageWrapper>
  );
};

export default React.memo(ItemPage);
