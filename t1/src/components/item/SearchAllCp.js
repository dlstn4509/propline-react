import React, { useState } from 'react';
import styled, { color, FlexDiv } from '@/style';
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
`;
const Filter = styled.div`
  font-size: 13px;
  color: #888f91;
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
const CheckBox = styled(FlexDiv)`
  width: 49%;
  height: 20px;
`;

const SearchAllCp = () => {
  const [type, setType] = useState('전체');
  const [year, setYear] = useState('전체');
  const [parkingNum, setParkingNum] = useState('전체');
  const [plusFilter, setPlusFilter] = useState([]);
  const typeArr = ['전체', '월세', '전세', '전월세'];
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
  const plusFilterArr = [
    '건물사진 있음',
    '내부사진 있음',
    '동영상 있음',
    '관리비포함',
    '현재공실',
    '금액네고',
  ];

  const checkBoxClick = (e) => {
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

  return (
    <SearchCpWrapper>
      <FilterWrapper>
        <FilterWrap>
          <Title>임대구분</Title>
          <Filter>
            {typeArr.map((v, i) => (
              <div key={i} className={type === v ? 'active' : ''}>
                <span
                  onClick={(e) => {
                    setType(e.target.innerHTML);
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>준공년도</Title>
          <Filter>
            {yearArr.map((v, i) => (
              <div key={i} className={year === v ? 'active' : ''}>
                <span
                  onClick={(e) => {
                    setYear(e.target.innerHTML);
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>주차대수</Title>
          <Filter>
            {parkingNumArr.map((v, i) => (
              <div key={i} className={parkingNum === v ? 'active' : ''}>
                <span
                  onClick={(e) => {
                    setParkingNum(e.target.innerHTML);
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </Filter>
        </FilterWrap>
        <FilterWrap>
          <Title>추가필터</Title>
          <Filter style={{ display: 'flex', flexWrap: 'wrap' }}>
            {plusFilterArr.map((v, i) => (
              <CheckBox key={i}>
                <span onClick={checkBoxClick}>
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

export default React.memo(SearchAllCp);
