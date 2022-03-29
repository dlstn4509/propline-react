import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import SearchCp from './SearchCp';
import AllTabCp from './AllTabCp';
import ListFilterCp from './ListFilterCp';
import ListCp from './ListCp';
import PagerCp from './PagerCp';

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
`;
const TypeTxt = styled.span`
  margin-right: 2px;
`;
const TypeImg = styled.img`
  vertical-align: middle;
`;
const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background-color: #f0f3f7;
  margin-bottom: 70px;
`;
const TotalCount = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #888f91;
  margin-left: 10px;
  span {
    font-weight: 600;
    color: #464d50;
  }
`;
const TotalBtnWrap = styled.div`
  display: flex;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 300;
  color: #888f91;
  text-align: center;
  background-color: #ffffff;
  padding: 2px 15px 2px 15px;
  border: 1px solid #888f91;
  border-radius: 30px;
  height: 26px;
  margin-right: 10px;
`;

const ItemCp = () => {
  const onMouseEnter1 = (e) => {
    setImg1(process.env.REACT_APP_URL + 'img/1.searchtype_11_hover.svg');
  };
  const onMouseEnter2 = (e) => {
    setImg2(process.env.REACT_APP_URL + 'img/2.searchtype_22_hover.svg');
  };
  const onMouseEnter3 = (e) => {
    setImg3(process.env.REACT_APP_URL + 'img/3.searchtype_33_hover.svg');
  };
  const onMouseLeave1 = () => {
    setImg1(process.env.REACT_APP_URL + 'img/1.searchtype_11.svg');
  };
  const onMouseLeave2 = () => {
    setImg2(process.env.REACT_APP_URL + 'img/2.searchtype_22.svg');
  };
  const onMouseLeave3 = () => {
    setImg3(process.env.REACT_APP_URL + 'img/3.searchtype_33.svg');
  };
  const [img1, setImg1] = useState(process.env.REACT_APP_URL + 'img/1.searchtype_11.svg');
  const [img2, setImg2] = useState(process.env.REACT_APP_URL + 'img/2.searchtype_22.svg');
  const [img3, setImg3] = useState(process.env.REACT_APP_URL + 'img/3.searchtype_33.svg');
  return (
    <>
      <SearchTypeWrap>
        <SearchType>
          <Type onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
            <TypeTxt>서울 블록지도</TypeTxt>
            <TypeImg src={img1}></TypeImg>
          </Type>
          <SearchTypeBar>|</SearchTypeBar>
          <Type onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
            <TypeTxt>일반지도</TypeTxt>
            <TypeImg src={img2}></TypeImg>
          </Type>
          <SearchTypeBar>|</SearchTypeBar>
          <Type onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
            <TypeTxt>주소검색</TypeTxt>
            <TypeImg src={img3}></TypeImg>
          </Type>
        </SearchType>
      </SearchTypeWrap>
      <SearchCp />
      <TotalWrapper>
        <TotalCount>
          총 <span>18865</span>건 검색완료
        </TotalCount>
        <TotalBtnWrap>
          <Button>현재필터 첫화면으로 설정</Button>
          <Button>첫화면 초기화</Button>
          <Button>전체 초기화</Button>
          <Button>검색필터 초기화</Button>
          <Button style={{ color: '#3168ff', borderColor: '#3168ff' }}>
            <FaSearch />
            검색하기
          </Button>
        </TotalBtnWrap>
      </TotalWrapper>
    </>
  );
};

export default React.memo(ItemCp);
