import React, { useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import ItemPublicTypeCp from '@/components/itempublic/ItemPublicTypeCp';
import SearchPublicAllCp from '@/components/itempublic/SearchPublicAllCp';
import SearchPublicMyCp from '@/components/itempublic/SearchPublicMyCp';
import MyItemCp from '@/components/item/MyItemCp';
import ListFilterCp from '@/components/item/ListFilterCp';
import ListFilterMyCp from '../components/itempublic/ListFilterMyCp';
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
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 30px;
  }
  .btn {
    font-size: 13px;
    color: #3168ff;
    text-align: center;
    background-color: #ffffff;
    padding: 2px 15px;
    border: 1px solid #3168ff;
    border-radius: 30px;
    height: 25px;
  }
`;
const ImgWrap = styled.div`
  margin-bottom: 50px;
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
        <TitleWrap>
          <div className="title">{pathname === 'all' ? '공동중개' : '나의 공동중개'}</div>
          <div className="btn">공동중개 매물등록</div>
        </TitleWrap>
        {pathname === 'all' && (
          <>
            <ItemPublicTypeCp />
            <SearchPublicAllCp />
          </>
        )}
        {pathname === 'my' && <SearchPublicMyCp />}
        <ImgWrap>
          <img src={process.env.REACT_APP_URL + 'img/coopitem_gpoint.png'} alt="" />
        </ImgWrap>
        {pathname === 'all' && <ListFilterCp />}
        {pathname === 'my' && <ListFilterMyCp />}
        <ListCp />
        <PagerCp />
      </ItemPublicPageWrap>
      <MyItemCp />
    </ItemPublicPageWrapper>
  );
};

export default React.memo(ItemPublicPage);
