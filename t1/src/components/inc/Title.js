import React from 'react';
import styled from '../../style';

const TitleWrapper = styled.div`
  padding: 42px 0;
  display: flex;
  justify-content: center;
`;

const TitleWrap = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  .img-wrap {
    width: 130px;
    margin-right: 25px;
  }
  .input-wrap {
    width: 312px;
    input {
      height: 40px;
      width: 100%;
      border-radius: 50px;
      border: 1px solid #dae1e7;
      padding: 0 10px;
    }
  }
  .id-wrap {
    width: 300px;
    display: flex;
    font-size: 13px;
    margin-left: auto;
    div {
      margin-left: auto;
    }
  }
`;

const Title = () => {
  return (
    <TitleWrapper>
      <TitleWrap>
        <div className="img-wrap"></div>
        <div className="input-wrap">
          <input type="text" placeholder="예) 역삼동 636-6 or 매물번호 검색" />
        </div>
        <div className="id-wrap">
          <div>dlstn7609님 2059-03-04 만기</div>
          <div>결제</div>
        </div>
      </TitleWrap>
    </TitleWrapper>
  );
};

export default React.memo(Title);
