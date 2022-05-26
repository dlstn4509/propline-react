import React, { useState } from 'react';
import styled from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import store from '@/store/store';

import { FaThLarge, FaMapMarkedAlt, FaSearch } from 'react-icons/fa';

const ItemTypeCpWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Type = styled.div`
  width: 135px;
  font-size: 20px;
  font-weight: 600;
  color: #888f91;
  cursor: pointer;
  padding: 0 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid #ffffff;
  :hover {
    color: #3168ff;
    border-bottom: 5px solid #3168ff;
  }
  &.active {
    color: #3168ff;
    border-bottom: 5px solid #3168ff;
  }
`;
const TypeTxt = styled.span`
  margin-right: 2px;
`;
const SearchTypeBar = styled.div`
  width: 42px;
  font-size: 20px;
  font-family: Noto Sans KR;
  font-weight: 400;
  color: #888f91;
  text-align: center;
`;

const ItemTypeCp = () => {
  const { isMapType, setMapType } = store();

  return (
    <ItemTypeCpWrap className="searchType">
      <Type
        className={isMapType === 'block' ? 'active' : ''}
        onClick={() => {
          setMapType('block');
        }}
      >
        <TypeTxt>서울 블록지도</TypeTxt>
        <FaThLarge />
      </Type>
      <SearchTypeBar>|</SearchTypeBar>
      <Type
        className={isMapType === 'cluster' ? 'active' : ''}
        onClick={() => {
          setMapType('cluster');
        }}
      >
        <TypeTxt>일반지도</TypeTxt>
        <FaMapMarkedAlt />
      </Type>
      <SearchTypeBar>|</SearchTypeBar>
      <Type
        className={isMapType === 'search' ? 'active' : ''}
        onClick={() => {
          setMapType('search');
        }}
      >
        <TypeTxt>주소검색</TypeTxt>
        <FaSearch />
      </Type>
    </ItemTypeCpWrap>
  );
};

export default React.memo(ItemTypeCp);
