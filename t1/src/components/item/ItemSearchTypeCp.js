import React, { useCallback } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import { FaThLarge, FaMapMarkedAlt, FaSearch } from 'react-icons/fa';

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

const ItemSearchTypeCp = () => {
  const onClick = useCallback((e) => {
    document.querySelector('.searchType').childNodes.forEach((v) => {
      v.classList.remove('active');
    });
    let classList = e.target.parentNode.classList;
    if (classList.value.includes('active')) {
      classList.remove('active');
    } else {
      classList.add('active');
    }
  }, []);
  return (
    <>
      <Type className="active" onClick={onClick}>
        <TypeTxt>서울 블록지도</TypeTxt>
        <FaThLarge />
      </Type>
      <SearchTypeBar>|</SearchTypeBar>
      <Type onClick={onClick}>
        <TypeTxt>일반지도</TypeTxt>
        <FaMapMarkedAlt />
      </Type>
      <SearchTypeBar>|</SearchTypeBar>
      <Type onClick={onClick}>
        <TypeTxt>주소검색</TypeTxt>
        <FaSearch />
      </Type>
    </>
  );
};

export default React.memo(ItemSearchTypeCp);
