import React, { useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import ItemSearchTypeCp from '../item/ItemSearchTypeCp';

const ItemPublicTypeCpWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const ItemSearchTypeWrap = styled.div`
  display: flex;
`;

const ItemPublicTypeCp = () => {
  return (
    <ItemPublicTypeCpWrap>
      <ItemSearchTypeWrap className="searchType">
        <ItemSearchTypeCp />
      </ItemSearchTypeWrap>
    </ItemPublicTypeCpWrap>
  );
};

export default React.memo(ItemPublicTypeCp);
