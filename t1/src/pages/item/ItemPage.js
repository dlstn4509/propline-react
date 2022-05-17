import React, { useEffect, useState } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import store from '@/store/store';
import axios from 'axios';

import ItemTypeCp from '@/components/item/ItemTypeCp';
import MapCp from '@/components/item/MapCp';
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
  const { setTypename } = store();
  const [mapBlock, setMapBlock] = useState([]);
  const [labelName, setLabelName] = useState([]);
  const [eupmyeondong, setEupmyeondong] = useState('');

  let typename = window.location.href.split('?')[1].split('=')[1];
  useEffect(() => {
    setTypename(typename);
  }, [typename]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/makemapblock`);
      setMapBlock(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/labelname`);
      setLabelName(data);
    })();
  }, []);

  return (
    <ItemPageWrapper>
      <PageWrap>
        <Title>공실매물</Title>
        <ItemTypeCp />
        <MapCp
          eupmyeondong={eupmyeondong}
          setEupmyeondong={setEupmyeondong}
          setMapBlock={setMapBlock}
          mapBlock={mapBlock}
          labelName={labelName}
        />
        {typename === 'all' && <SearchAllCp />}
        {typename === 'normal' && <SearchNormalCp />}
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
