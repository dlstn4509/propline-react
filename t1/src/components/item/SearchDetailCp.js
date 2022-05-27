import React, { useState } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const SearchDetailForm = styled.form`
  border-bottom: 1px solid #dae1e7;
  border-top: 1px solid #dae1e7;
  padding: 14px 40px 0 40px;
  font-size: 13px;
  color: #464d50;
  border-left: 1px solid #2a55cc;
  border-right: 1px solid #2a55cc;
`;
const SearchDetailWrap = styled(FlexDiv)`
  margin-bottom: 14px;
`;
const SearchDetail = styled.div`
  display: flex;
  height: auto;
`;
const Title = styled(FlexDiv)`
  font-size: 13px;
  font-weight: 600;
  color: #464d50;
`;
const Input = styled.input`
  width: 65px;
  height: 25px;
  border: 1px solid #dae1e7;
  text-indent: 10px;
  margin: 0 8px;
`;
const Price = styled(FlexDiv)`
  margin-right: 50px;
  width: 30px;
`;
const AreaType = styled(FlexDiv)`
  width: 30px;
  height: 25px;
  background-color: ${(props) => props.bgc};
  border: 1px solid ${(props) => (props.bc ? props.bc : '#dee4ea')};
  color: ${(props) => props.color};
  font-size: 13px;
  cursor: pointer;
  justify-content: center;
  margin-left: 4px;
`;

const SearchDetailCp = () => {
  const [rentalArea, setRentalArea] = useState(true);
  const [privateArea, setPrivateArea] = useState(true);

  return (
    <SearchDetailForm>
      <SearchDetailWrap>
        <SearchDetail>
          <Title>기준가</Title>
          <Input /> ~ <Input />
          <Price>만원</Price>
        </SearchDetail>
        <SearchDetail>
          <Title>보증금</Title>
          <Input /> ~ <Input />
          <Price>만원</Price>
        </SearchDetail>
        <SearchDetail>
          <Title>월세가</Title>
          <Input /> ~ <Input />
          <Price>만원</Price>
        </SearchDetail>
      </SearchDetailWrap>
      <SearchDetailWrap>
        <SearchDetail>
          <Title>임대면적(P)</Title>
          <AreaType
            color={rentalArea ? '#fff' : '#303440'}
            bgc={rentalArea ? '#2455cc' : '#fff'}
            onClick={() => {
              setRentalArea(!rentalArea);
            }}
          >
            m²
          </AreaType>
          <AreaType
            color={rentalArea ? '#303440' : '#fff'}
            bgc={rentalArea ? '#fff' : '#2455cc'}
            onClick={() => {
              setRentalArea(!rentalArea);
            }}
          >
            평
          </AreaType>
          <Input /> ~ <Input />
          <Price>{rentalArea ? 'm²' : '평'}</Price>
        </SearchDetail>
        <SearchDetail>
          <Title>전용면적(P)</Title>
          <AreaType
            color={privateArea ? '#fff' : '#303440'}
            bgc={privateArea ? '#2455cc' : '#fff'}
            onClick={() => {
              setPrivateArea(!privateArea);
            }}
          >
            m²
          </AreaType>
          <AreaType
            color={privateArea ? '#303440' : '#fff'}
            bgc={privateArea ? '#fff' : '#2455cc'}
            onClick={() => {
              setPrivateArea(!privateArea);
            }}
          >
            평
          </AreaType>
          <Input /> ~ <Input />
          <Price>{privateArea ? 'm²' : '평'}</Price>
        </SearchDetail>
      </SearchDetailWrap>
    </SearchDetailForm>
  );
};

export default React.memo(SearchDetailCp);
