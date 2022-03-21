import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MainSearchArea, InnerWrap, LogoBox, InputWrap, IdWrap, Id, PayBtn } from '@/style/main';

const SearchArea = () => {
  return (
    <MainSearchArea>
      <InnerWrap>
        <LogoBox to="/main">
          <img src={process.env.REACT_APP_URL + 'img/top_logo.svg'} alt="메인로고" />
        </LogoBox>
        <InputWrap>
          <input type="text" placeholder="예) 역삼동 636-6 or 매물번호 검색" />
          <FaSearch />
        </InputWrap>
        <IdWrap>
          <Id to="#" style={{ textDecoration: 'underline' }}>
            dlstn7609님
          </Id>
          <span>2059-03-04 만기</span>
          <PayBtn to="#">결제</PayBtn>
        </IdWrap>
      </InnerWrap>
    </MainSearchArea>
  );
};

export default React.memo(SearchArea);
