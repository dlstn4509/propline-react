import React, { useState, useCallback } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SignUpCpWrapper = styled.div`
  margin: 40px 0 200px 0;
  width: 1000px;
  color: #464d50;
  text-align: center;
  background-image: url(${process.env.REACT_APP_URL + 'img/select_type_bg.png'});
  background-repeat: no-repeat;
`;
const TitleWrap = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const SignUpInfo = styled.div`
  color: #3168ff;
  font-size: 14px;
  margin-bottom: 15px;
`;
const NumWrap = styled.div`
  font-size: 23px;
`;
const SubNumWrap = styled.div`
  font-size: 14px;
  margin-bottom: 70px;
`;
const SignUpTypeWrpa = styled.div`
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
    :first-child {
      margin-right: 40px;
    }
  }
`;

const SignUpCp = () => {
  const [hoverType1, setHoverType1] = useState(process.env.REACT_APP_URL + 'img/member_type1_off.png');
  const [hoverType2, setHoverType2] = useState(process.env.REACT_APP_URL + 'img/member_type2_off.png');
  const onMouseEnter1 = useCallback(() => {
    setHoverType1(process.env.REACT_APP_URL + 'img/member_type1_on.png');
  }, []);
  const onMouseLeave1 = useCallback(() => {
    setHoverType1(process.env.REACT_APP_URL + 'img/member_type1_off.png');
  }, []);
  const onMouseEnter2 = useCallback(() => {
    setHoverType2(process.env.REACT_APP_URL + 'img/member_type2_on.png');
  }, []);
  const onMouseLeave2 = useCallback(() => {
    setHoverType2(process.env.REACT_APP_URL + 'img/member_type2_off.png');
  }, []);

  return (
    <SignUpCpWrapper>
      <TitleWrap>공식클럽 회원가입을 환영합니다.</TitleWrap>
      <SignUpInfo>
        중개업소는 중개업소 회원가입을 이용해주세요.
        <br />
        건물주, 관리인(업체), 세입자는 일반 회원가입을 이용해주세요.
      </SignUpInfo>
      <NumWrap>대표 번호 1644 - 5510</NumWrap>
      <SubNumWrap>
        매물 관련 문의 1번 | 중개업소 문의 2번 | 네이버 부동산 문의 3번 | 집프로 주택임대관리 문의 4번
      </SubNumWrap>
      <SignUpTypeWrpa>
        <Link to="/businesssignup">
          <img src={hoverType1} alt="" onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1} />
        </Link>
        <Link to="/normalsignup">
          <img src={hoverType2} alt="" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} />
        </Link>
      </SignUpTypeWrpa>
    </SignUpCpWrapper>
  );
};

export default React.memo(SignUpCp);
