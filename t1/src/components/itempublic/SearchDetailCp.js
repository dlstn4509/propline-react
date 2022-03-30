import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';

const SearchDetailWrapper = styled.div`
  padding: 20px 30px;
`;
const SearchDetailWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const SearchDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 30px;
  span {
    font-size: 13px;
    color: #464d50;
    display: flex;
    align-items: flex-end;
  }
`;
const Title = styled.div`
  font-size: 13px;
  color: #303440;
  font-weight: 600;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '65px')};
  height: 25px;
  border: 1px solid #dae1e7;
  text-indent: 2px;
  margin: 0 2px;
`;
const AreaType = styled.div`
  width: 30px;
  height: 25px;
  background-color: ${(props) => props.bgc};
  border: 1px solid ${(props) => (props.bc ? props.bc : '#dee4ea')};
  color: ${(props) => props.color};
  font-size: 13px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubTitleWrap = styled.div`
  display: flex;
  margin-top: -16px;
  margin-bottom: 14px;
`;
const SubTitle = styled.div`
  font-size: 12px;
  color: #232323;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchDetailCp = () => {
  const [rentalArea, setRentalArea] = useState(false);
  const [privateArea, setPrivateArea] = useState(false);
  const [clickCheckBox, setClickCheckBox] = useState(false);
  return (
    <SearchDetailWrapper>
      <SearchDetailWrap>
        <SearchDetail>
          <Title>매매가</Title>
          <Input />~<Input /> <span>만원</span>
        </SearchDetail>
        <SearchDetail>
          <Title>보증금</Title>
          <Input />~<Input /> <span>만원</span>
        </SearchDetail>
        <SearchDetail>
          <Title>월세</Title>
          <Input />~<Input /> <span>만원</span>
        </SearchDetail>
      </SearchDetailWrap>
      <SearchDetailWrap>
        <SearchDetail>
          <Title>기준가</Title>
          <Input />~<Input /> <span>만원</span>
        </SearchDetail>
        <SearchDetail>
          <Title>임대면적</Title>
          <AreaType
            bgc={rentalArea ? '#fff' : '#2455cc'}
            color={rentalArea ? '#303440' : '#fff'}
            onClick={() => {
              setRentalArea(!rentalArea);
            }}
          >
            m²
          </AreaType>
          <AreaType
            bgc={!rentalArea ? '#fff' : '#2455cc'}
            color={!rentalArea ? '#303440' : '#fff'}
            onClick={() => {
              setRentalArea(!rentalArea);
            }}
          >
            평
          </AreaType>
          <Input />~<Input /> <span>{rentalArea ? '평' : 'm²'}</span>
        </SearchDetail>
        <SearchDetail>
          <Title>전용면적</Title>
          <AreaType
            bgc={privateArea ? '#fff' : '#2455cc'}
            color={privateArea ? '#303440' : '#fff'}
            onClick={() => {
              setPrivateArea(!privateArea);
            }}
          >
            m²
          </AreaType>
          <AreaType
            bgc={!privateArea ? '#fff' : '#2455cc'}
            color={!privateArea ? '#303440' : '#fff'}
            onClick={() => {
              setPrivateArea(!privateArea);
            }}
          >
            평
          </AreaType>
          <Input />~<Input /> <span>{privateArea ? '평' : 'm²'}</span>
        </SearchDetail>
      </SearchDetailWrap>
      <SubTitleWrap>
        <SubTitle style={{ marginLeft: '240px' }}> *건물일 경우 대지면적으로 검색됩니다.</SubTitle>
        <SubTitle style={{ marginLeft: '124px' }}> *건물, 토지일 경우 연면적으로 검색됩니다.</SubTitle>
      </SubTitleWrap>
      <SearchDetailWrap>
        <SearchDetail>
          <Title>매물번호/업체명</Title>
          <Input width={'141px'} style={{ marginRight: '60px' }} />
          <SearchDetail>
            <CheckBoxWrap onClick={() => setClickCheckBox(!clickCheckBox)}>
              {!clickCheckBox && <FaRegSquare />}
              {clickCheckBox && <FaRegCheckSquare style={{ color: '#3168ff' }} />}
              <span>수수료지급매물</span>
            </CheckBoxWrap>
          </SearchDetail>
        </SearchDetail>
      </SearchDetailWrap>
    </SearchDetailWrapper>
  );
};

export default React.memo(SearchDetailCp);
