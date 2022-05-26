import React, { useState, useCallback } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import SearchDetailCp from './SearchDetailCp';
import TotalCountCp from './TotalCountCp';

import {
  typeArr,
  yearArr,
  parkingNumArr,
  roomCount,
  roomType,
  floorType,
  livingRoomSize,
  plusFilterNormal,
} from './SearchArr';

const SearchCpWrapper = styled.div`
  border: 1px solid #2a55cc;
  margin-bottom: 70px;
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
`;
const Filter = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #888f91;
  cursor: pointer;
  padding: 10px 0 10px 10px;
  height: 133px;
  overflow-y: scroll;
  div:focus {
    color: blue;
  }
`;
const CheckBox = styled.div`
  width: 49%;
  height: 20px;
`;

const SearchNormalCp = () => {
  const clickImg = useCallback((e) => {
    e.target.src === 'https://t1.propline.co.kr/img/checkbox_03_off.png'
      ? (e.target.src = 'https://t1.propline.co.kr/img/checkbox_03_on.png')
      : (e.target.src = 'https://t1.propline.co.kr/img/checkbox_03_off.png');
  }, []);
  return (
    <SearchCpWrapper>
      <FilterWrapper>
        <FilterWrap>
          <Title>임대구분</Title>
          <Filter>
            {typeArr.map((v, i) => (
              <SubCp key={i} v={v} i={i} />
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>룸갯수</Title>
          <Filter>
            {roomCount.map((v, i) => (
              <SubCp key={i} v={v} />
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>룸형태</Title>
          <Filter>
            {floorType.map((v, i) => (
              <SubCp key={i} v={v} />
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>층구분</Title>
          <Filter>
            {roomType.map((v, i) => (
              <SubCp key={i} v={v} />
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>준공년도</Title>
          <Filter>
            {yearArr.map((v, i) => (
              <SubCp key={i} v={v} />
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>거실크기</Title>
          <Filter>
            {livingRoomSize.map((v, i) => (
              <SubCp key={i} v={v} />
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>주차대수</Title>
          <Filter>
            {parkingNumArr.map((v, i) => (
              <SubCp key={i} v={v} />
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title style={{ width: '228px' }}>추가필터</Title>
          <Filter style={{ display: 'flex', flexWrap: 'wrap' }}>
            {plusFilterNormal.map((v, i) => (
              <CheckBox key={i}>
                <img src={process.env.REACT_APP_URL + 'img/checkbox_03_off.png'} alt="" onClick={clickImg} />
                <span>{v}</span>
              </CheckBox>
            ))}
          </Filter>
        </FilterWrap>
      </FilterWrapper>
      <SearchDetailCp />
      <TotalCountCp />
    </SearchCpWrapper>
  );
};

const SubCp = ({ v, i }) => {
  const [isClick, setIsClick] = useState(false);
  const onClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div onClick={onClick} style={{ color: isClick ? '#3168ff' : '' }}>
      {v}
    </div>
  );
};

export default React.memo(SearchNormalCp);
