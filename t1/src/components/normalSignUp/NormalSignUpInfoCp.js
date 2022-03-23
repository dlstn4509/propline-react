import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  .title {
    font-weight: 600;
    font-size: 20px;
  }
  .btn {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    width: 120px;
    text-align: center;
    text-decoration: none;
    background-color: #3168ff;
    padding: 5px 0 6px 0;
    border-radius: 5px;
  }
`;
const SignUpInfo = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 40px;
  color: #464d50;
  .subTitle {
    font-size: 18px;
    font-weight: 400;
  }
`;

const NormalSignUpInfoCp = () => {
  return (
    <>
      <TitleWrapper>
        <div className="title">일반 회원가입</div>
        <div className="btn">
          <Link to="/businesssignup">부동산 회원가입</Link>
        </div>
      </TitleWrapper>
      <SignUpInfo>
        <div className="subTitle">대표번호 1644 - 5510</div>
        <div>매물관련문의 1번 | 중개업소문의 2번 | 네이버부동산문의 3번 | 집프로주택임대관리문의 4번</div>
        <div style={{ color: '#3168ff' }}>
          일반회원은 <b>매물 등록 의뢰 및 매물 광고 상품 구매만 가능</b>합니다
        </div>
        <div style={{ color: '#3168ff' }}>중개업소는 부동산 회원가입을 이용해주세요.</div>
      </SignUpInfo>
    </>
  );
};

export default React.memo(NormalSignUpInfoCp);
