import React from 'react';
import store from '@/store/store';
import { FaSearch } from 'react-icons/fa';
import styled, { PageWrapper, color } from '@/style';
import { Link } from 'react-router-dom';

const SearchAreaWrapper = styled(PageWrapper)`
  height: 130px;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #464d50;
`;
const SearchAreaWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;
const LogoSearchArea = styled.div`
  display: flex;
  align-items: center;
`;
const IdWrap = styled.div`
  display: flex;
  align-items: center;
`;
const ImgWrap = styled(Link)`
  width: 130px;
  height: 45px;
  margin-right: 20px;
`;
const InputWrap = styled.div`
  position: relative;
  input {
    width: 312px;
    height: 40px;
    text-indent: 18px;
    border: 1px solid #dae1e7;
    border-radius: 50px;
  }
`;
const Id = styled.div`
  color: ${color.blue};
  margin-right: 10px;
  text-decoration: underline;
`;
const PayBtn = styled.div`
  margin-left: 8px;
  width: 50px;
  border-radius: 50px;
  background-color: #3168ff;
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const SearchArea = () => {
  const { loginUser } = store();
  return (
    <SearchAreaWrapper>
      <SearchAreaWrap>
        <LogoSearchArea>
          <ImgWrap to="/main">
            <img src={process.env.REACT_APP_URL + 'img/top_logo.svg'} alt="메인로고" />
          </ImgWrap>
          <InputWrap>
            <input type="text" placeholder="예) 역삼동 636-6 or 매물번호 검색" />
            <FaSearch
              style={{
                color: `${color.blue}`,
                fontSize: '17px',
                position: 'relative',
                right: '30px',
                top: '10px',
              }}
            />
          </InputWrap>
        </LogoSearchArea>
        {loginUser.midx && (
          <IdWrap>
            <Id>
              <Link to="/main">{loginUser.member_id}님</Link>
            </Id>
            <div>2059-03-04 만기</div>
            <PayBtn to="#">결제</PayBtn>
          </IdWrap>
        )}
      </SearchAreaWrap>
    </SearchAreaWrapper>
  );
};

export default React.memo(SearchArea);
