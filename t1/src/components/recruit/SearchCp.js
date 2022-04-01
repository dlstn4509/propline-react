import React, { useState } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaRegCheckSquare, FaSearch } from 'react-icons/fa';

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const InputWrap = styled.div`
  display: flex;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
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
const OptionWrap = styled.div`
  display: flex;
`;
const Select = styled.select`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: 33px;
  padding: 0 10px;
  border: 1px solid #dae1e7;
  font-size: 13px;
  color: #464d50;
  margin-right: 10px;
`;

const SearchCp = () => {
  const [checkWriter, setCheckWriter] = useState(true);
  const [checkTitle, setCheckTitle] = useState(false);
  const [checkContent, setCheckContent] = useState(false);
  return (
    <InputWrapper>
      <OptionWrap>
        <Select name="" id="">
          <option value="시도">시도</option>
        </Select>
        <Select name="" id="">
          <option value="시도">구 선택</option>
        </Select>
        <Select name="" id="">
          <option value="시도">동 선택</option>
        </Select>
      </OptionWrap>
      <InputWrap>
        <CheckBoxWrap
          onClick={() => {
            setCheckWriter(!checkWriter);
          }}
        >
          {checkWriter ? <FaRegCheckSquare /> : <FaRegSquare />}
          부동산명
        </CheckBoxWrap>
        <CheckBoxWrap
          onClick={() => {
            setCheckTitle(!checkTitle);
          }}
        >
          {checkTitle ? <FaRegCheckSquare /> : <FaRegSquare />}
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
        <div style={{ position: 'relative' }}>
          <Input />
          <FaSearch style={{ position: 'absolute', right: '10', top: '10', color: `${color.blue}` }} />
        </div>
      </InputWrap>
    </InputWrapper>
  );
};

export default React.memo(SearchCp);
