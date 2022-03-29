import React from 'react';
import styled from '@/style';

import ItemCp from '@/components/item/ItemCp';
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
const ItemCpWrapper = styled.div`
  width: 1000px;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 30px;
  }
`;

const ItemPage = () => {
  return (
    <ItemPageWrapper>
      <ItemCpWrapper>
        <div className="title">공실매물</div>
        <ItemCp />
        <AllTabCp />
        <ListFilterCp />
        <ListCp />
        <PagerCp />
      </ItemCpWrapper>
      <MyItemCp />
    </ItemPageWrapper>
  );
};

export default React.memo(ItemPage);
