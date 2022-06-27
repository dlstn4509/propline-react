import React, { useEffect, useState } from 'react';
import styled, { FlexDiv, color } from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaRegCheckSquare, FaSearch } from 'react-icons/fa';

const SearchWrapper = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 20px;
`;
const SearchWrap = styled(FlexDiv)`
  svg {
    font-size: 20px;
  }
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
  const [checkPlace, setCheckPlace] = useState('');
  const [checkName, setCheckName] = useState('');
  return (
    <SearchWrapper>
      <div>등록된 계약서 총 0건</div>
      <SearchWrap>
        <CheckBoxWrap
          onClick={() => {
            setCheckPlace(!checkPlace);
          }}
        >
          {checkPlace ? <FaRegCheckSquare /> : <FaRegSquare />}
          소재지
        </CheckBoxWrap>
        <CheckBoxWrap
          onClick={() => {
            setCheckName(!checkName);
          }}
        >
          {checkName ? <FaRegCheckSquare /> : <FaRegSquare />}
          이름
        </CheckBoxWrap>
        <InputWrap>
          {/* onKeyPress={}  */}
          <Input type="text" className="search" />
          {/* onClick={clickSearch} */}
          <FaSearch
            style={{
              position: 'absolute',
              right: '10',
              top: '10',
              color: `${color.blue}`,
              cursor: 'pointer',
            }}
          />
        </InputWrap>
      </SearchWrap>
    </SearchWrapper>
  );
};

export default React.memo(SearchCp);
