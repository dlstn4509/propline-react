import React, { useEffect } from 'react';
import styled, { Title, Button, PageWrapper, PageWrap, color } from '@/style';
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

const ItemPublicPageWrapper = styled(PageWrapper)`
  flex-wrap: wrap;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;
const ImgWrap = styled.div`
  margin-bottom: 50px;
`;

const ItemPublicPage = () => {
  const { setTypename } = store();
  let typename = window.location.href.split('?')[1].split('=')[1];
  useEffect(() => {
    setTypename(typename);
  }, [typename]);
  return (
    <ItemPublicPageWrapper>
      <PageWrap>
        <TitleWrap>
          <Title pt={'0'}>{typename === 'all' ? '공동중개' : '나의 공동중개'}</Title>
          <Button color={color.blue} bdc={color.blue}>
            공동중개 매물등록
          </Button>
        </TitleWrap>
        {typename === 'all' && (
          <>
            <ItemPublicTypeCp />
            <SearchPublicAllCp />
          </>
        )}
        {typename === 'my' && <SearchPublicMyCp />}
        <ImgWrap>
          <img src={process.env.REACT_APP_URL + 'img/coopitem_gpoint.png'} alt="" />
        </ImgWrap>
        {typename === 'all' && <ListFilterCp />}
        {typename === 'my' && <ListFilterMyCp />}
        <ListCp />
        <PagerCp />
      </PageWrap>
      <MyItemCp />
    </ItemPublicPageWrapper>
  );
};

export default React.memo(ItemPublicPage);
