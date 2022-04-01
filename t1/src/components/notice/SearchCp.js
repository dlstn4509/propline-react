import React, { useState } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaRegCheckSquare, FaSearch } from 'react-icons/fa';

const InputWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 20px;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;
const InputWrap = styled.div`
  position: relative;
`;
const Input = styled.input`
  width: 180px;
  height: 35px;
  border: 1px solid #dae1e7;
  border-radius: 5px;
  padding-left: 4px;
  font-size: 13px;
  color: #464d50;
`;

const SearchCp = () => {
  const [checkWriter, setCheckWriter] = useState(true);
  const [checkTitle, setCheckTitle] = useState(false);
  const [checkContent, setCheckContent] = useState(false);
  return (
    <InputWrapper>
      <CheckBoxWrap
        onClick={() => {
          setCheckWriter(!checkWriter);
        }}
      >
        {checkWriter ? <FaRegCheckSquare /> : <FaRegSquare />}
        제목
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setCheckContent(!checkContent);
        }}
      >
        {checkContent ? <FaRegCheckSquare /> : <FaRegSquare />}
        내용
      </CheckBoxWrap>
      <InputWrap>
        <Input />
        <FaSearch style={{ position: 'absolute', right: '10', top: '10', color: `${color.blue}` }} />
      </InputWrap>
    </InputWrapper>
  );
};

export default React.memo(SearchCp);
