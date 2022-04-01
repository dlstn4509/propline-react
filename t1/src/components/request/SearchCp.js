import React, { useState } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaRegCheckSquare, FaSearch } from 'react-icons/fa';

const SearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  font-size: 13px;
  color: #464d50;
  margin-bottom: 30px;
`;
const SelectWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  width: 150px;
  height: 35px;
  padding-left: 10px;
  margin-right: 20px;
`;
const InputWrap = styled.div`
  position: relative;
`;
const Input = styled.input`
  width: 180px;
  height: 35px;
  border: 1px solid #dae1e7;
  padding-left: 10px;
  font-family: Noto Sans;
  font-size: 13px;
  color: #464d50;
`;

const SearchCp = () => {
  const [checkBox, setCheckBox] = useState(false);
  const optionArr = [
    '매물종류',
    '원룸',
    '다가구',
    '다세대',
    '사무실',
    '상가',
    '아파트',
    '오피스텔',
    '건물',
    '토지',
    '기타',
  ];
  return (
    <SearchWrap>
      <SelectWrap>
        <Select name="" id="">
          {optionArr.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </Select>
        <div
          style={{ display: 'flex', cursor: 'pointer' }}
          onClick={() => {
            setCheckBox(!checkBox);
          }}
        >
          {checkBox ? (
            <FaRegCheckSquare style={{ fontSize: '20px', marginRight: '5px' }} />
          ) : (
            <FaRegSquare style={{ fontSize: '20px', marginRight: '5px' }} />
          )}

          <div>'의뢰중' 만 보기</div>
        </div>
      </SelectWrap>
      <InputWrap>
        <Input placeholder="전달사항(내용)" />
        <FaSearch
          style={{ position: 'absolute', right: '10', top: '11', fontSize: '15px', color: `${color.blue}` }}
        />
      </InputWrap>
    </SearchWrap>
  );
};

export default React.memo(SearchCp);
