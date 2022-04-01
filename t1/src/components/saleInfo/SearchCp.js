import React, { useState } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';

import { sigunguArr } from './sigunguArr';
import SiCp from './SiCp';
import GunguCp from './GunguCp';
import DongCp from './DongCp';
import ChoicAreaCp from './ChoicAreaCp';
import PropertyTypeCp from './PropertyTypeCp';
import SearchDetailCp from './SearchDetailCp';
import TotalCountCp from '../item/TotalCountCp';

const SearchWrapper = styled.div`
  border: 1px solid ${color.darkblue};
  font-size: 15px;
  margin-bottom: 70px;
`;
const GunguWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 0 50px;
  border-bottom: 1px dotted #ced6e3;
`;
const DongWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  color: #494949;
  padding: 10px 0 0 50px;
  border-bottom: 1px dotted #ced6e3;
`;

const SearchCp = () => {
  const [si, setSi] = useState('서울');
  const [siArr, setSiArr] = useState(sigunguArr[0].서울);
  const [gungu, setGungu] = useState('');
  const [dongArr, setDongArr] = useState([]);
  const clickSi = (val) => {
    setSiArr(sigunguArr[0][val]);
    setGungu('');
    setSi(val);
  };
  const clickGungu = (val) => {
    setGungu(sigunguArr[0][si][val]);
  };
  const clickDong = (val) => {
    dongArr.includes(si + ' ' + val)
      ? setDongArr(dongArr.filter((v) => v !== si + ' ' + val))
      : setDongArr([...dongArr, si + ' ' + val]);
  };
  return (
    <SearchWrapper>
      <SiCp clickSi={clickSi} />
      <GunguWrapper>
        {Object.keys(siArr).map((v, i) => (
          <GunguCp key={i} v={v} clickGungu={clickGungu} gungu={gungu} />
        ))}
      </GunguWrapper>
      {gungu && (
        <DongWrapper>
          {gungu.map((v, i) => (
            <DongCp key={i} v={v} clickDong={clickDong} />
          ))}
        </DongWrapper>
      )}
      <ChoicAreaCp dongArr={dongArr} clickDong={clickDong} />
      <PropertyTypeCp />
      <SearchDetailCp />
      <TotalCountCp />
    </SearchWrapper>
  );
};

export default React.memo(SearchCp);
