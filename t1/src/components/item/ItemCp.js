import React, { useState, useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchAllCp from './SearchAllCp';
import SearchNormalCp from './SearchNormalCp';

const SearchTypeWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const SearchType = styled.div`
  display: flex;
`;
const SearchTypeBar = styled.div`
  width: 42px;
  font-size: 20px;
  font-family: Noto Sans KR;
  font-weight: 400;
  color: #888f91;
  text-align: center;
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
const TypeImg = styled.img`
  vertical-align: middle;
`;

const ItemCp = () => {
  const { isPathname } = store();
  const typeArr = [
    {
      txt: '서울 블록지도',
      img01: process.env.REACT_APP_URL + 'img/1.searchtype_11.svg',
      img02: process.env.REACT_APP_URL + 'img/1.searchtype_11_hover.svg',
    },
    {
      txt: '일반지도',
      img01: process.env.REACT_APP_URL + 'img/2.searchtype_22.svg',
      img02: process.env.REACT_APP_URL + 'img/2.searchtype_22_hover.svg',
    },
    {
      txt: '주소검색',
      img01: process.env.REACT_APP_URL + 'img/3.searchtype_33.svg',
      img02: process.env.REACT_APP_URL + 'img/3.searchtype_33_hover.svg',
    },
  ];
  let pathname = window.location.href.split('?')[1].split('=')[1];

  return (
    <>
      <SearchTypeWrap>
        <SearchType>
          {typeArr.map((v, i) => (
            <SubCp key={i} v={v} i={i} />
          ))}
        </SearchType>
      </SearchTypeWrap>
      {pathname === 'all' && <SearchAllCp />}
      {pathname === 'normal' && <SearchNormalCp />}
    </>
  );
};

const SubCp = ({ v, i }) => {
  const [isActive, setIsActive] = useState(true);
  const onClick = () => {
    setIsActive(!isActive);
  };
  const onMouseEnter = () => {
    setIsActive(!isActive);
  };
  const onMouseLeave = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    onClick();
    onMouseEnter();
    onMouseLeave();
  }, []);
  return (
    <>
      {!isActive && (
        <Type onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <TypeTxt>{v.txt}</TypeTxt>
          <TypeImg src={v.img01}></TypeImg>
        </Type>
      )}
      {isActive && (
        <Type onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="active">
          <TypeTxt>{v.txt}</TypeTxt>
          <TypeImg src={v.img02}></TypeImg>
        </Type>
      )}
      {i < 2 && <SearchTypeBar>|</SearchTypeBar>}
    </>
  );
};

export default React.memo(ItemCp);
