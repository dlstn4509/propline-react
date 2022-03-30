import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import ItemSearchTypeCp from './ItemSearchTypeCp';

const ItemTypeCpWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const ItemSearchTypeWrap = styled.div`
  display: flex;
`;

const ItemTypeCp = () => {
  return (
    <ItemTypeCpWrap>
      <ItemSearchTypeWrap className="searchType">
        <ItemSearchTypeCp />
      </ItemSearchTypeWrap>
    </ItemTypeCpWrap>
  );
};

export default React.memo(ItemTypeCp);
