import React, { useState, useCallback } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

import TermsOfUseCp from './TermsOfUseCp';
import PrivacyStatementCp from './PrivacyStatementCp';

const AggrePrivacyWrap = styled.div`
  margin-top: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid #464d50;
  margin-bottom: 40px;
  img {
    cursor: pointer;
  }
`;
const CheckText = styled.div`
  font-size: 13px;
  color: #000000;
  margin-left: 10px;
`;
const TextWrap = styled.div`
  width: 485px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #464d50;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  color: #888f91;
  margin-left: 10px;
`;

const AggrePrivacyCp = () => {
  const checkBigOn = process.env.REACT_APP_URL + 'img/checkbox_02_on.png';
  const checkBigOff = process.env.REACT_APP_URL + 'img/checkbox_02_off.png';
  const checkSmallOn = process.env.REACT_APP_URL + 'img/checkbox_01_on.png';
  const checkSmallOff = process.env.REACT_APP_URL + 'img/checkbox_01_off.png';
  const [checkAll, setCheckAll] = useState(checkBigOff);
  const [checkLeft, setCheckLeft] = useState(checkSmallOff);
  const [checkRight, setCheckRight] = useState(checkSmallOff);
  const clickCheckAll = useCallback(() => {
    if (checkAll === checkBigOff) {
      setCheckAll(checkBigOn);
      setCheckLeft(checkSmallOn);
      setCheckRight(checkSmallOn);
    } else {
      setCheckAll(checkBigOff);
      setCheckLeft(checkSmallOff);
      setCheckRight(checkSmallOff);
    }
  }, []);
  const clickCheckLeft = useCallback(() => {
    if (checkLeft === checkSmallOff) {
      setCheckLeft(checkSmallOn);
      if (checkRight === checkSmallOn) {
        setCheckAll(checkBigOn);
      }
    } else {
      setCheckLeft(checkSmallOff);
      if (checkAll === checkBigOn) {
        setCheckAll(checkBigOff);
      }
    }
  }, []);
  const clickCheckRight = useCallback(() => {
    if (checkRight === checkSmallOff) {
      setCheckRight(checkSmallOn);
      if (checkLeft === checkSmallOn) {
        setCheckAll(checkBigOn);
      }
    } else {
      setCheckRight(checkSmallOff);
      if (checkAll === checkBigOn) {
        setCheckAll(checkBigOff);
      }
    }
  }, []);
  return (
    <AggrePrivacyWrap>
      <FlexDiv style={{ marginBottom: '30px' }}>
        <img src={checkAll} alt="" onClick={clickCheckAll} />
        <CheckText>이용약관 및 개인정보 취급방침 전체 동의</CheckText>
      </FlexDiv>
      <FlexDiv>
        <TextWrap style={{ marginRight: '30px' }}>
          <TitleWrap>
            <Title>이용약관</Title>
            <FlexDiv>
              <img src={checkLeft} alt="" onClick={clickCheckLeft} />
              <SubTitle>약관에 동의</SubTitle>
            </FlexDiv>
          </TitleWrap>
          <TermsOfUseCp />
        </TextWrap>

        <TextWrap>
          <TitleWrap>
            <Title>개인정보취급방침</Title>
            <FlexDiv>
              <img src={checkRight} alt="" onClick={clickCheckRight} />
              <SubTitle>개인정보 취급방침에 동의합니다.</SubTitle>
            </FlexDiv>
          </TitleWrap>
          <PrivacyStatementCp />
        </TextWrap>
      </FlexDiv>
    </AggrePrivacyWrap>
  );
};

export default React.memo(AggrePrivacyCp);
