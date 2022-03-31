import React from 'react';
import styled, { Button, color } from '@/style';
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
const ButtonWrap = styled(Button)`
  margin-right: 10px;
`;

const TotalCountCp = () => {
  let pathname = window.location.pathname;
  return (
    <TotalWrapper>
      <TotalCount>
        총 <span>18865</span>건 검색완료
      </TotalCount>
      <TotalBtnWrap>
        {pathname === '/item' && (
          <>
            <ButtonWrap>현재필터 첫화면으로 설정</ButtonWrap>
            <ButtonWrap>첫화면 초기화</ButtonWrap>
            <ButtonWrap>전체 초기화</ButtonWrap>
          </>
        )}
        <ButtonWrap>검색필터 초기화</ButtonWrap>
        <ButtonWrap color={color.blue} bdc={color.blue}>
          <FaSearch />
          검색하기
        </ButtonWrap>
      </TotalBtnWrap>
    </TotalWrapper>
  );
};

export default React.memo(TotalCountCp);
