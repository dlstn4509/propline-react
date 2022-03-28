import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import SearchDetailCp from './SearchDetailCp';
import MapCp from './MapCp';

const SearchCpWrapper = styled.div`
  border: 1px solid #2a55cc;
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
`;
const CheckBox = styled.div`
  width: 49%;
  height: 20px;
`;

const SearchCp = () => {
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
  const plusFilter = ['건물사진 있음', '내부사진 있음', '동영상 있음', '관리비포함', '현재공실', '금액네고'];
  const clickImg = (e) => {
    e.target.src === 'https://t1.propline.co.kr/img/checkbox_03_off.png'
      ? (e.target.src = 'https://t1.propline.co.kr/img/checkbox_03_on.png')
      : (e.target.src = 'https://t1.propline.co.kr/img/checkbox_03_off.png');
  };
  return (
    <SearchCpWrapper>
      <MapCp />
      <FilterWrapper>
        <FilterWrap>
          <Title>임대구분</Title>
          <Filter>
            <div>전체</div>
            <div>월세</div>
            <div>전세</div>
            <div>전월세</div>
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>준공년도</Title>
          <Filter>
            {yearArr.map((v, i) => (
              <div key={i}>{v}</div>
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>주차대수</Title>
          <Filter>
            {parkingNumArr.map((v, i) => (
              <div key={i}>{v}</div>
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>추가필터</Title>
          <Filter style={{ display: 'flex', flexWrap: 'wrap' }}>
            {plusFilter.map((v, i) => (
              <CheckBox key={i}>
                <img src={process.env.REACT_APP_URL + 'img/checkbox_03_off.png'} alt="" onClick={clickImg} />
                <span>{v}</span>
              </CheckBox>
            ))}
          </Filter>
        </FilterWrap>
      </FilterWrapper>
      <SearchDetailCp />
    </SearchCpWrapper>
  );
};

export default React.memo(SearchCp);
