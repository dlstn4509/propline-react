import React from 'react';
import styled from '@/style';

import ItemCp from '@/components/item/ItemCp';

const ItemPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ItemPage = () => {
  return (
    <ItemPageWrapper>
      <ItemCp />
    </ItemPageWrapper>
  );
};

export default React.memo(ItemPage);
