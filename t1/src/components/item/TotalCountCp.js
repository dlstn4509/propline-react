import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background-color: #f0f3f7;
`;
const TotalCount = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #888f91;
  margin-left: 10px;
  span {
    font-weight: 600;
    color: #464d50;
  }
`;
const TotalBtnWrap = styled.div`
  display: flex;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 300;
  color: #888f91;
  text-align: center;
  background-color: #ffffff;
  padding: 2px 15px 2px 15px;
  border: 1px solid #888f91;
  border-radius: 30px;
  height: 26px;
  margin-right: 10px;
`;

const TotalCountCp = () => {
  return (
    <TotalWrapper>
      <TotalCount>
        총 <span>18865</span>건 검색완료
      </TotalCount>
      <TotalBtnWrap>
        <Button>현재필터 첫화면으로 설정</Button>
        <Button>첫화면 초기화</Button>
        <Button>전체 초기화</Button>
        <Button>검색필터 초기화</Button>
        <Button style={{ color: '#3168ff', borderColor: '#3168ff' }}>
          <FaSearch />
          검색하기
        </Button>
      </TotalBtnWrap>
    </TotalWrapper>
  );
};

export default React.memo(TotalCountCp);
