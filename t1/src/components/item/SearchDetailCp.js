import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SearchDetailForm = styled.form`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dae1e7;
  border-top: 1px solid #dae1e7;
  padding: 10px 8px;
`;
const SearchDetail = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #464d50;
`;
const Input = styled.input`
  width: 52px;
  height: 25px;
  border: 1px solid #dae1e7;
  text-indent: 10px;
  margin: 0 8px;
`;

const SearchDetailCp = () => {
  return (
    <SearchDetailForm>
      <SearchDetail>
        <Title>임대면적(P)</Title>
        <Input /> ~ <Input />
      </SearchDetail>
      <SearchDetail>
        <Title>전용면적(P)</Title>
        <Input /> ~ <Input />
      </SearchDetail>
      <SearchDetail>
        <Title>기준가</Title>
        <Input /> ~ <Input />
      </SearchDetail>
      <SearchDetail>
        <Title>보증금</Title>
        <Input /> ~ <Input />
      </SearchDetail>
      <SearchDetail>
        <Title>월세</Title>
        <Input /> ~ <Input />
      </SearchDetail>
    </SearchDetailForm>
  );
};

export default React.memo(SearchDetailCp);
