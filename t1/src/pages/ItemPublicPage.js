import React, { useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import ItemPublicTypeCp from '@/components/itempublic/ItemPublicTypeCp';
import SearchPublicAllCp from '@/components/itempublic/SearchPublicAllCp';
import SearchPublicMyCp from '@/components/itempublic/SearchPublicMyCp';
import MyItemCp from '@/components/item/MyItemCp';
import ListFilterCp from '@/components/item/ListFilterCp';
import ListCp from '@/components/itempublic/ListCp';
import PagerCp from '@/components/item/PagerCp';

const ItemPublicPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ItemPublicPageWrap = styled.div`
  width: 1000px;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 30px;
  }
`;
const ImgWrap = styled.div`
  margin-bottom: 60px;
`;

const ItemPublicPage = () => {
  const { setPathName } = store();
  let pathname = window.location.href.split('?')[1].split('=')[1];
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <ItemPublicPageWrapper>
      <ItemPublicPageWrap>
        <div className="title">공동중개</div>
        <ItemPublicTypeCp />
        {pathname === 'all' && <SearchPublicAllCp />}
        {pathname === 'my' && <SearchPublicMyCp />}
        <ImgWrap>
          <img src={process.env.REACT_APP_URL + 'img/coopitem_gpoint.png'} alt="" />
        </ImgWrap>
        <ListFilterCp />
        <ListCp />
        <PagerCp />
      </ItemPublicPageWrap>
      <MyItemCp />
    </ItemPublicPageWrapper>
  );
};

export default React.memo(ItemPublicPage);
