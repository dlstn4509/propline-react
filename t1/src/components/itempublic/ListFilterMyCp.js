import React from 'react';
import styled, { Button, color } from '@/style';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { advertisementStatus, roomType, tradeType, sido } from './SearchArr';

const ListFilterMyWrap = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const Select = styled.select`
  width: 100px;
  height: 25px;
  border: 1px solid #dae1e7;
  font-size: 13px;
  color: #464d50;
`;
const Input = styled.input`
  height: 25px;
  border: 1px solid #dae1e7;
  font-size: 13px;
  color: #464d50;
  font-family: 'Noto Sans', sans-serif;
  padding-left: 10px;
  margin-right: 20px;
`;
const BtnWrap = styled(Button)`
  display: flex;
  align-items: center;
  color: ${color.blue};
  border-radius: 30px;
`;

const ListFilterMyCp = () => {
  return (
    <ListFilterMyWrap>
      <Select>
        {advertisementStatus.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </Select>
      <Select>
        {roomType.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </Select>
      <Select>
        {tradeType.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </Select>
      <Select>
        {sido.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </Select>
      <Select>
        <option value="">시군구</option>
      </Select>
      <Select>
        <option value="">읍면동</option>
      </Select>
      <Select>
        <option value="">등록자 전체</option>
      </Select>
      <Input type="text" placeholder="매물번호 검색" />
      <BtnWrap bdc={'#3168ff'}>
        <FaSearch />
        검색하기
      </BtnWrap>
    </ListFilterMyWrap>
  );
};

export default React.memo(ListFilterMyCp);
