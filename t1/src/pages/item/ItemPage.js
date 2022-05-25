import React, { useEffect, useState } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import store from '@/store/store';
import axios from 'axios';

import ItemTypeCp from '@/components/item/ItemTypeCp';
import MapCp from '@/components/item/MapCp';
// import MapCp from '@/components/item/MapCp copy';
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
  const [dongList, setDongList] = useState([]);
  const [subwayList, setSubwayList] = useState([]);
  const [guList, setGuList] = useState([]);
  const [seoulLine, setSeoulLine] = useState([]);

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
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/dongList`);
      setDongList(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/subway`);
      setSubwayList(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/gu`);
      setGuList(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/seoul`);
      setSeoulLine(data);
    })();
  }, []);

  return (
    <ItemPageWrapper>
      <PageWrap>
        <Title>공실매물</Title>
        <ItemTypeCp />
        <MapCp
          mapBlock={mapBlock}
          dongList={dongList}
          subwayList={subwayList}
          guList={guList}
          seoulLine={seoulLine}
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
