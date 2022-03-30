import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';

import MapCp from '../item/MapCp';
import SearchDetailCp from './SearchDetailCp';
import TotalCountCp from '../item/TotalCountCp';

const SearchPublicAllWrapper = styled.div`
  border: 1px solid #2a55cc;
  margin-bottom: 60px;
`;
const TypeWrap = styled.div`
  background-color: #f2f3f6;
  padding: 5px 17px;
`;
const Type = styled.div`
  display: flex;
`;
const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
  width: 10%;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  font-size: 13px;
  color: #464d50;
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Text = styled.div`
  margin-right: 5px;
`;

const mamulTypeArr = [
  '전체',
  '원룸',
  '주택',
  '오피스텔',
  '사무실',
  '상가/점포',
  '아파트/주상복합',
  '아파트분양권',
  '오피스텔분양권',
  '빌딩/건물',
  '토지/임야',
  '공장/창고',
];
const tradeTypeArr = ['전체', '매매', '전세', '월세', '단기'];

const SearchPublicAllCp = () => {
  return (
    <SearchPublicAllWrapper>
      <MapCp />
      <TypeWrap style={{ borderBottom: '1px solid #f2f3f6' }}>
        <Type>
          <SubTitle>매물유형</SubTitle>
          <CheckBoxWrap>
            {mamulTypeArr.map((v, i) => (
              <SubCp key={i} v={v} />
            ))}
          </CheckBoxWrap>
        </Type>
      </TypeWrap>
      <TypeWrap>
        <Type>
          <SubTitle>거래유형</SubTitle>
          <CheckBoxWrap>
            <div style={{ marginLeft: '-6px' }}></div>
            {tradeTypeArr.map((v, i) => (
              <CheckBox key={i}>
                <SubCp v={v} />
              </CheckBox>
            ))}
          </CheckBoxWrap>
        </Type>
      </TypeWrap>
      <SearchDetailCp />
      <TotalCountCp />
    </SearchPublicAllWrapper>
  );
};

const SubCp = ({ v }) => {
  const [clickCheckBox, setClickCheckBox] = useState(false);
  const onClick = () => {
    setClickCheckBox(!clickCheckBox);
  };
  return (
    <CheckBox onClick={onClick}>
      {!clickCheckBox && <FaRegSquare />}
      {clickCheckBox && <FaRegCheckSquare style={{ color: '#3168ff' }} />}
      <Text>{v}</Text>
    </CheckBox>
  );
};

export default React.memo(SearchPublicAllCp);
