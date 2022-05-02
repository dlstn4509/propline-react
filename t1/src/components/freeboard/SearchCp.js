import React, { useState, useCallback } from 'react';
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

const SearchCp = ({ setMember_id, setTitle, setContents, setPage }) => {
  const [checkCompany_name, setCheckCompany_name] = useState(true);
  const [checkTitle, setCheckTitle] = useState(false);
  const [checkContent, setCheckContent] = useState(false);
  const clickSearch = useCallback(async () => {
    console.log('asd');
    setPage(1);
    let searchValue = document.querySelector('.search').value;
    checkCompany_name ? setMember_id(searchValue) : setMember_id('%');
    checkTitle ? setTitle(searchValue) : setTitle('%');
    checkContent ? setContents(searchValue) : setContents('%');
  }, [checkCompany_name, checkTitle, checkContent]);
  const onKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        clickSearch();
      }
    },
    [checkCompany_name, checkTitle, checkContent]
  );
  return (
    <InputWrapper>
      <CheckBoxWrap
        onClick={() => {
          setCheckCompany_name(!checkCompany_name);
        }}
      >
        {checkCompany_name ? <FaRegCheckSquare /> : <FaRegSquare />}
        작성자
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
      <InputWrap>
        <Input type="text" className="search" onKeyPress={onKeyPress} />
        <FaSearch
          style={{ position: 'absolute', right: '10', top: '10', color: `${color.blue}`, cursor: 'pointer' }}
          onClick={clickSearch}
        />
      </InputWrap>
    </InputWrapper>
  );
};

export default React.memo(SearchCp);
