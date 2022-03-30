import React, { useEffect } from 'react';
import styled from '@/style';
import store from '@/store/store';

import ItemTypeCp from '@/components/item/ItemTypeCp';
import SearchAllCp from '@/components/item/SearchAllCp';
import SearchNormalCp from '@/components/item/SearchNormalCp';
import AllTabCp from '@/components/item/AllTabCp';
import ListFilterCp from '@/components/item/ListFilterCp';
import ListCp from '@/components/item/ListCp';
import PagerCp from '@/components/item/PagerCp';
import MyItemCp from '@/components/item/MyItemCp';

const ItemPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ItemPageWrap = styled.div`
  width: 1000px;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 30px;
  }
`;

const ItemPage = () => {
  const { setPathName } = store();
  let pathname = window.location.href.split('?')[1].split('=')[1];
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <ItemPageWrapper>
      <ItemPageWrap>
        <div className="title">공실매물</div>
        <ItemTypeCp />
        {pathname === 'all' && <SearchAllCp />}
        {pathname === 'normal' && <SearchNormalCp />}
        <AllTabCp />
        <ListFilterCp />
        <ListCp />
        <PagerCp />
      </ItemPageWrap>
      <MyItemCp />
    </ItemPageWrapper>
  );
};

export default React.memo(ItemPage);
