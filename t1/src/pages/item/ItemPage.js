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
import SearchOfficeCp from '@/components/item/SearchOfficeCp';
import SearchStoreCp from '@/components/item/SearchStoreCp';
import SearchOfficetelCp from '@/components/item/SearchOfficetelCp';
import SearchAptCp from '@/components/item/SearchAptCp';

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

  const makeFilterList = (arr, state, setState) => {
    return arr.map((v, i) => (
      <div key={i} className={state === v ? 'active' : ''}>
        <span
          onClick={(e) => {
            setState(e.target.innerHTML);
          }}
        >
          {v}
        </span>
      </div>
    ));
  };

  // filter
  const [type, setType] = useState('전체');
  const [year, setYear] = useState('전체');
  const [parkingNum, setParkingNum] = useState('전체');
  const [roomCount, setRoomCount] = useState('전체');
  const [roomType, setRoomType] = useState('전체');
  const [floorType, setFloorType] = useState('전체');
  const [livingRoomSize, setLivingRoomSize] = useState('전체');
  const [useType, setUseType] = useState('전체');
  const [plusFilter, setPlusFilter] = useState([]);

  useEffect(() => {
    setPlusFilter([]);
  }, [typename]);

  const checkBoxClick = (e, plusFilter, setPlusFilter) => {
    let filterName = e.target.innerText
      ? e.target.innerText
      : e.target.tagName === 'svg'
      ? e.target.nextSibling.innerHTML
      : e.target.parentNode.nextSibling.innerHTML;
    if (plusFilter.includes(filterName)) {
      setPlusFilter(plusFilter.filter((v) => v !== filterName));
    } else {
      setPlusFilter([...plusFilter, filterName]);
    }
  };

  const resetFilter = () => {
    if (window.confirm('필터를 초기화 하시겠습니까?')) {
      setType('전체');
      setYear('전체');
      setParkingNum('전체');
      setRoomCount('전체');
      setRoomType('전체');
      setFloorType('전체');
      setLivingRoomSize('전체');
      setUseType('전체');
      setPlusFilter([]);
    }
  };

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

        {isTypename === 'all' && (
          <SearchAllCp
            makeFilterList={makeFilterList}
            checkBoxClick={checkBoxClick}
            type={type}
            setType={setType}
            year={year}
            setYear={setYear}
            parkingNum={parkingNum}
            setParkingNum={setParkingNum}
            plusFilter={plusFilter}
            setPlusFilter={setPlusFilter}
          />
        )}
        {isTypename === 'normal' && (
          <SearchNormalCp
            makeFilterList={makeFilterList}
            checkBoxClick={checkBoxClick}
            type={type}
            setType={setType}
            year={year}
            setYear={setYear}
            parkingNum={parkingNum}
            setParkingNum={setParkingNum}
            plusFilter={plusFilter}
            setPlusFilter={setPlusFilter}
            roomCount={roomCount}
            setRoomCount={setRoomCount}
            roomType={roomType}
            setRoomType={setRoomType}
            floorType={floorType}
            setFloorType={setFloorType}
            livingRoomSize={livingRoomSize}
            setLivingRoomSize={setLivingRoomSize}
          />
        )}
        {isTypename === 'fullopt' && (
          <SearchNormalCp
            makeFilterList={makeFilterList}
            checkBoxClick={checkBoxClick}
            type={type}
            setType={setType}
            year={year}
            setYear={setYear}
            parkingNum={parkingNum}
            setParkingNum={setParkingNum}
            plusFilter={plusFilter}
            setPlusFilter={setPlusFilter}
            roomCount={roomCount}
            setRoomCount={setRoomCount}
            roomType={roomType}
            setRoomType={setRoomType}
            floorType={floorType}
            setFloorType={setFloorType}
            livingRoomSize={livingRoomSize}
            setLivingRoomSize={setLivingRoomSize}
          />
        )}
        {isTypename === 'office' && (
          <SearchOfficeCp
            makeFilterList={makeFilterList}
            checkBoxClick={checkBoxClick}
            type={type}
            setType={setType}
            year={year}
            setYear={setYear}
            parkingNum={parkingNum}
            setParkingNum={setParkingNum}
            plusFilter={plusFilter}
            setPlusFilter={setPlusFilter}
            roomCount={roomCount}
            setRoomCount={setRoomCount}
            floorType={floorType}
            setFloorType={setFloorType}
          />
        )}
        {isTypename === 'store' && (
          <SearchStoreCp
            makeFilterList={makeFilterList}
            checkBoxClick={checkBoxClick}
            type={type}
            setType={setType}
            floorType={floorType}
            setFloorType={setFloorType}
            year={year}
            setYear={setYear}
            parkingNum={parkingNum}
            setParkingNum={setParkingNum}
            plusFilter={plusFilter}
            setPlusFilter={setPlusFilter}
          />
        )}
        {isTypename === 'officetel' && (
          <SearchOfficetelCp
            makeFilterList={makeFilterList}
            checkBoxClick={checkBoxClick}
            type={type}
            setType={setType}
            roomCount={roomCount}
            setRoomCount={setRoomCount}
            useType={useType}
            setUseType={setUseType}
            year={year}
            setYear={setYear}
            parkingNum={parkingNum}
            setParkingNum={setParkingNum}
            plusFilter={plusFilter}
            setPlusFilter={setPlusFilter}
          />
        )}
        {isTypename === 'apt' && (
          <SearchAptCp
            makeFilterList={makeFilterList}
            checkBoxClick={checkBoxClick}
            type={type}
            setType={setType}
            roomCount={roomCount}
            setRoomCount={setRoomCount}
            year={year}
            setYear={setYear}
            parkingNum={parkingNum}
            setParkingNum={setParkingNum}
            plusFilter={plusFilter}
            setPlusFilter={setPlusFilter}
          />
        )}
        <SearchDetailCp />
        <TotalCountCp resetFilter={resetFilter} />
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
