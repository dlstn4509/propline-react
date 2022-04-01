import React, { useState } from 'react';
import styled, { Title } from '@/style';
import { Link } from 'react-router-dom';

const SearchDetailWrapper = styled.div`
  padding: 10px 50px 0 50px;
  border-bottom: 1px dotted #ced6e3;
`;
const SearchDetailWrap = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 13px;
  span {
    margin: 0 5px;
  }
`;
const SubTitle = styled(Title)`
  font-size: 13px;
  margin: 0 30px 0 0;
`;
const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '93px')};
  height: 25px;
  border: 1px solid #dae1e7;
  text-indent: 2px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  font-size: 13px;
  color: #464d50;
  :focus {
    border: 2px solid #000;
  }
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
  margin-right: 2px;
`;
const Size = styled.div`
  margin-left: 5px;
  margin-right: 50px;
  width: 20px;
`;
const Select = styled.select`
  width: auto;
  height: 25px;
  padding: 0 0 0 2px;
  border: 1px solid #dae1e7;
  color: #464d50;
  font-size: 13px;
  margin-right: 50px;
`;

const SearchDetailCp = () => {
  const [rentalArea, setRentalArea] = useState(false);
  const [privateArea, setPrivateArea] = useState(false);
  return (
    <SearchDetailWrapper>
      <SearchDetailWrap>
        <SubTitle>지번</SubTitle>
        <Input placeholder="지번본번" />
        <span>-</span>
        <Input mr={'50px'} placeholder="지번부번" />
        <SubTitle>건물명/매물번호</SubTitle>
        <Input mr={'50px'} />
        <SubTitle>매매가</SubTitle>
        <Input placeholder="0" />
        <span>~</span>
        <Input mr={'50px'} placeholder="0" />
      </SearchDetailWrap>
      <SearchDetailWrap>
        <SubTitle>공급/대지면적</SubTitle>
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

        <Input width={'60px'} />
        <span>~</span>
        <Input width={'60px'} />
        <Size>{rentalArea ? '평' : 'm²'}</Size>
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
        <SubTitle>공급/대지면적</SubTitle>
        <Input width={'60px'} />
        <span>~</span>
        <Input width={'60px'} />
        <Size>{privateArea ? '평' : 'm²'}</Size>
      </SearchDetailWrap>
      <SearchDetailWrap>
        <SubTitle>준공년도</SubTitle>
        <Select>
          <option value="">전체</option>
          <option value="">2년 미만</option>
          <option value="">2년 ~ 5년 미만</option>
          <option value="">5년 ~ 10년 미만</option>
          <option value="">10년 ~ 15년 미만</option>
          <option value="">15년 ~ 20년 미만</option>
          <option value="">20년 이상</option>
        </Select>
        <SubTitle>방</SubTitle>
        <Select>
          <option value="">전체</option>
          <option value="">1개</option>
          <option value="">2개</option>
          <option value="">3개</option>
          <option value="">4개 이상</option>
        </Select>
        <SubTitle>욕실</SubTitle>
        <Select>
          <option value="">전체</option>
          <option value="">1개</option>
          <option value="">2개</option>
          <option value="">3개</option>
          <option value="">4개 이상</option>
        </Select>
        <SubTitle>층수</SubTitle>
        <Select>
          <option value="">전체</option>
          <option value="">3층 미만</option>
          <option value="">3층 ~ 6층</option>
          <option value="">6층 이상</option>
        </Select>
      </SearchDetailWrap>
    </SearchDetailWrapper>
  );
};

export default React.memo(SearchDetailCp);
