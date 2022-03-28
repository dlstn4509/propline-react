import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SearchDetailForm = styled.form`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dae1e7;
  border-top: 1px solid #dae1e7;
  padding: 10px 10px;
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
  margin: 0 10px;
`;

const SearchDetailCp = () => {
  return (
    <SearchDetailForm>
      <SearchDetail>
        <Title>임대면적(P)</Title>
        <Input /> ~ <Input />
      </SearchDetail>
      <SearchDetail>
        <Title>임대면적(P)</Title>
        <Input /> ~ <Input />
      </SearchDetail>
      <SearchDetail>
        <Title>임대면적(P)</Title>
        <Input /> ~ <Input />
      </SearchDetail>
      <SearchDetail>
        <Title>임대면적(P)</Title>
        <Input /> ~ <Input />
      </SearchDetail>
    </SearchDetailForm>
  );
};

export default React.memo(SearchDetailCp);
