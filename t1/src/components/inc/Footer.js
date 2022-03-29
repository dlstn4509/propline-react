import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const FooterWrap = styled.div`
  padding-top: 25px;
  padding-bottom: 80px;
`;
const FooterCon = styled.div`
  width: 1000px;
  margin: 0 auto;
  position: relative;
`;
const LinkArea = styled.div`
  font-size: 0;
  a {
    color: #464d50;
    :after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 80%;
      background-color: #464d50;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    :first-child {
      padding-left: 0;
      :after {
        display: none;
      }
    }
    :nth-child(2) {
      color: #3168ff;
    }
  }
`;
const Txt = styled(Link)`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  padding: 0 8px;
  position: relative;
`;
const CompanyInfo = styled.div`
  padding-top: 15px;
  font-size: 14px;
  color: #888f91;
`;
const FamilySiteWrap = styled.div`
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 180px;
    padding: 8px 0 8px 11px;
    border: 1px solid #dae1e7;
    border-radius: 5px;
    font-size: 13px;
    color: #464d50;
    background-image: url(${process.env.REACT_APP_URL + 'img/select_arrow.png'});
    background-repeat: no-repeat;
    background-position: 93% center;
  }
`;
const FamilySiteTit = styled.div`
  padding-bottom: 20px;
  font-size: 13px;
  color: #464d50;
  padding-right: 30px;
`;

const Footer = () => {
  const selectChange = (e) => {
    window.open(e.target.value);
  };
  return (
    <FooterWrap>
      <FooterCon>
        <LinkArea>
          <Txt to="/main">회사소개</Txt>
          <Txt to="/main">개인정보취급방침</Txt>
          <Txt to="/main">이용약관</Txt>
          <Txt to="/main">제휴문의</Txt>
          <Txt to="/main">광고문의</Txt>
          <Txt to="/main">이벤트 규약</Txt>
        </LinkArea>
        <CompanyInfo>
          공실클럽은 정보제공을 목적으로 하며, 이용자간의 오류 및 거래에 관련한 어떠한 책임도 지지 않습니다.{' '}
          <br />
          상호 : ㈜프롭라인 | 주소 : (06106) 서울시 강남구 학동로30길 34 하림빌딩 3F | 대표 : 하성현
          <br />
          사업자번호 : 114-86-71093 | 통신판매업신고번호 : 제 2020-서울강남-03213 호
        </CompanyInfo>
        <FamilySiteWrap>
          <FamilySiteTit>FAMILY SITE</FamilySiteTit>
          <select id="" onChange={selectChange}>
            <option value="">선택하시면 이동합니다</option>
            <option value="http://www.propline.co.kr/intro.html">프롭라인</option>
            <option value="http://www.djgongsilclub.com/main.asp">대전공실클럽</option>
            <option value="http://www.usgongsilclub.com/v3/main.asp">울산공실클럽</option>
            <option value="http://www.bsgongsilclub.com/main.asp">부산공실클럽</option>
          </select>
        </FamilySiteWrap>
      </FooterCon>
    </FooterWrap>
  );
};

export default React.memo(Footer);
