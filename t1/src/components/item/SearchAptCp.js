import React, { useState, useCallback } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';

const SearchCpWrapper = styled.div`
  border-left: 1px solid #2a55cc;
  border-right: 1px solid #2a55cc;
`;
const FilterWrapper = styled.div`
  display: flex;
`;
const FilterWrap = styled.div`
  width: 25%;
  border-right: 1px solid #dae1e7;
  :last-child {
    border-right: none;
  }
`;
const Title = styled.div`
  padding: 10px 0 10px 10px;
  font-size: 14px;
  font-family: Noto Sans KR;
  font-weight: 600;
  color: #464d50;
  background-color: #f9fafc;
  border-bottom: 1px solid #dae1e7;
  &.active {
    color: #f9fafc;
    background-color: #464d50;
  }
`;
const Filter = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #888f91;
  cursor: pointer;
  padding: 10px 0 10px 10px;
  height: 133px;
  overflow-y: scroll;
  .active {
    color: ${color.blue};
  }
  span {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
const CheckBox = styled.div`
  width: 49%;
  height: 20px;
`;

const SearchAptCp = ({
  makeFilterList,
  checkBoxClick,
  type,
  setType,
  roomCount,
  setRoomCount,
  year,
  setYear,
  parkingNum,
  setParkingNum,
  plusFilter,
  setPlusFilter,
}) => {
  return (
    <SearchCpWrapper>
      <FilterWrapper>
        <FilterWrap>
          <Title className={type !== '전체' ? 'active' : ''}>임대구분</Title>
          <Filter>{makeFilterList(typeArr, type, setType)}</Filter>
        </FilterWrap>
        <FilterWrap>
          <Title className={roomCount !== '전체' ? 'active' : ''}>룸갯수</Title>
          <Filter>{makeFilterList(roomCountArr, roomCount, setRoomCount)}</Filter>
        </FilterWrap>
        <FilterWrap>
          <Title className={year !== '전체' ? 'active' : ''}>준공년도</Title>
          <Filter>{makeFilterList(yearArr, year, setYear)}</Filter>
        </FilterWrap>
        <FilterWrap>
          <Title className={parkingNum !== '전체' ? 'active' : ''}>주차대수</Title>
          <Filter>{makeFilterList(parkingNumArr, parkingNum, setParkingNum)}</Filter>
        </FilterWrap>
        <FilterWrap>
          <Title style={{ width: '250px' }} className={plusFilter.length > 0 ? 'active' : ''}>
            추가필터
          </Title>
          <Filter style={{ display: 'flex', flexWrap: 'wrap' }}>
            {plusFilterNormalArr.map((v, i) => (
              <CheckBox key={i}>
                <span
                  onClick={(e) => {
                    checkBoxClick(e, plusFilter, setPlusFilter);
                  }}
                >
                  {!plusFilter.includes(v) && <FaRegSquare />}
                  {plusFilter.includes(v) && <FaCheckSquare style={{ color: `${color.blue}` }} />}
                  <div>{v}</div>
                </span>
              </CheckBox>
            ))}
          </Filter>
        </FilterWrap>
      </FilterWrapper>
    </SearchCpWrapper>
  );
};

export default React.memo(SearchAptCp);

const typeArr = ['전체', '월세', '전세', '전월세'];
const roomCountArr = [
  '전체',
  '1개',
  '1.5개',
  '1~2개',
  '2개',
  '2~3개',
  '3개',
  '3~4개',
  '4개',
  '4~5개',
  '5개 이상',
];
const useTypeArr = ['전체', '주거/사무 겸용', '주거용', '사무용'];
const yearArr = [
  '전체',
  '2022년 이후',
  '2021년 이후',
  '2020년 이후',
  '2019년 이후',
  '2018년 이후',
  '2017년 이후',
  '2016년 이후',
  '2015년 이후',
  '2014년 이후',
  '2013년 이후',
  '2012년 이후',
  '2011년 이후',
  '2010년 이후',
  '2009년 이후',
  '2008년 이후',
  '2008년 이전',
];
const parkingNumArr = [
  '전체',
  '1대',
  '1대 ~ 2대',
  '2대',
  '2대 ~ 3대',
  '3대',
  '3대 ~ 4대',
  '4대',
  '4대 ~ 5대',
  '5대 이상',
];
const plusFilterNormalArr = [
  '건물사진 있음',
  '내부사진 있음',
  '동영상 있음',
  '관리비포함',
  '현재공실',
  '금액네고',
  '전세대출가능',
  '애완동물가능',
];
