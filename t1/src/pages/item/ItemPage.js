import React, { useEffect, useState } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import store from '@/store/store';
import axios from 'axios';

import ItemTypeCp from '@/components/item/ItemTypeCp';

import BlockMapCp from '@/components/item/BlockMapCp';
import MapCp from '@/components/item/MapCp';
import SearchCp from '@/components/item/SearchCp';

import SearchAllCp from '@/components/item/SearchAllCp';
import SearchNormalCp from '@/components/item/SearchNormalCp';
import SearchFullOptCP from '@/components/item/SearchFullOptCP';

import SearchDetailCp from '@/components/item/SearchDetailCp';
import TotalCountCp from '@/components/item/TotalCountCp';

import AllTabCp from '@/components/item/AllTabCp';
import ListFilterCp from '@/components/item/ListFilterCp';
import ListCp from '@/components/item/ListCp';
import PagerCp from '@/components/item/PagerCp';
import MyItemCp from '@/components/item/MyItemCp';

const ItemPageWrapper = styled(PageWrapper)`
  flex-wrap: wrap;
`;

const ItemPage = () => {
  const { isTypename, setTypename, isMapType } = store();
  const [mapBlock, setMapBlock] = useState([]);
  const [dongList, setDongList] = useState([]);
  const [subwayList, setSubwayList] = useState([]);
  const [guList, setGuList] = useState([]);
  const [seoulLine, setSeoulLine] = useState([]);

  let typename = window.location.href.split('?')[1].split('=')[1];
  useEffect(() => {
    setTypename(typename);
  }, [typename]);

  // setTimeout -> label 먼저 만들고 block 만들어야 hover 가능
  useEffect(() => {
    if (isMapType === 'block') {
      setTimeout(() => {
        (async () => {
          const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/makemapblock`);
          setMapBlock(data);
        })();
      }, 0);
    }
  }, [isMapType]);

  useEffect(() => {
    if (isMapType === 'block') {
      (async () => {
        const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/dongList`);
        setDongList(data);
      })();
    }
  }, [isMapType]);

  useEffect(() => {
    if (isMapType === 'block') {
      (async () => {
        const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/subway`);
        setSubwayList(data);
      })();
    }
  }, [isMapType]);

  useEffect(() => {
    if (isMapType === 'block') {
      (async () => {
        const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/gu`);
        setGuList(data);
      })();
    }
  }, [isMapType]);

  useEffect(() => {
    if (isMapType === 'block') {
      (async () => {
        const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/seoul`);
        setSeoulLine(data);
      })();
    }
  }, [isMapType]);

  return (
    <ItemPageWrapper>
      <PageWrap>
        <Title>공실매물 {isTypename}</Title>
        <ItemTypeCp />
        {isMapType === 'block' && (
          <BlockMapCp
            mapBlock={mapBlock}
            dongList={dongList}
            subwayList={subwayList}
            guList={guList}
            seoulLine={seoulLine}
          />
        )}
        {isMapType === 'cluster' && <MapCp />}
        {isMapType === 'search' && <SearchCp />}
        {isTypename === 'all' && <SearchAllCp />}
        {isTypename === 'normal' && <SearchNormalCp />}
        {isTypename === 'fullopt' && <SearchFullOptCP />}
        <SearchDetailCp />
        <TotalCountCp />
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
