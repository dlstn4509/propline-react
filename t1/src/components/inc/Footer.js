import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const FooterTxtBoxWrap = styled.div`
  background-color: #f0f3f7;
`;
const FooterTxtBox = styled.div`
  width: 1000px;
  margin: 0 auto;
`;
const FootList = styled.div`
  padding: 35px 0;
  > div {
    float: left;
    margin-right: 58px;
    :last-child {
      margin-right: 0;
    }
  }
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;
const ImgBox = styled.div`
  text-align: center;
  margin-right: 50px;
  padding-top: 5px;
`;
const MgList = styled.div`
  margin-top: 10px;
`;
const Tst = styled.span`
  display: inline-block;
  width: 115px;
  font-size: 14px;
  color: #222;
  background-color: #dfe2e6;
  margin-left: 10px;
  border-radius: 15px;
  padding: 15px 0;
  .b {
    color: #000000;
  }
  .t {
    color: #7d7d7d;
  }
  :first-child {
    margin-left: 0;
  }
`;
const TxtArea = styled.div`
  padding-top: 0px;
`;
const BTxt = styled.div`
  font-size: 20px;
  color: #00090c;
`;
const Txt = styled.div`
  font-size: 14px;
  color: #7d7d7d;
  margin-top: 8px;
`;
const FooterLineTxt = styled.div`
  border-top: 1px solid #707070;
  height: 70px;
  line-height: 70px;
  text-align: left;
  span {
    :first-child {
      margin-left: 0;
    }
  }
`;
const Tit = styled.span`
  font-size: 13px;
  color: #888f91;
  margin-left: 10px;
`;
const Txt02 = styled.span`
  font-size: 13px;
  color: #464d50;
  margin-left: 5px;
`;
const Are = styled.span`
  font-size: 13px;
  color: #464d50;
  margin-left: 15px;
`;

const Footer = () => {
  return (
    <FooterTxtBoxWrap>
      <FooterTxtBox>
        <FootList>
          <ImgBox>
            <img src={process.env.REACT_APP_URL + 'img/kakao_image.png'} alt="" />
            <MgList>
              <Tst>
                <span className="t">중개업소</span>
                <br />
                <span className="b">@공실클럽</span>
              </Tst>
              <Tst>
                <span className="t">임대인</span>
                <span className="b">@gongsilclub</span>
              </Tst>
            </MgList>
          </ImgBox>
          <TxtArea styled={{ paddingTop: '0px' }}>
            <BTxt>
              대표번호 <b>1644 - 5510</b>
            </BTxt>
            <Txt>
              매물 관련 문의 1번
              <br />
              중개업소 문의 2번
              <br />
              네이버 부동산 문의 3번
              <br />
              홈택트 주택임대관리 문의 4번
            </Txt>
          </TxtArea>
          <TxtArea>
            <BTxt>팩스번호</BTxt>
            <Txt>
              공실(임대,매매) 관련 : <br /> <b>02 - 548 - 0544 </b>
              <br />
              중개업소 관련 : <br />
              <b>02 - 549 - 0561</b>
            </Txt>
          </TxtArea>
          <TxtArea>
            <BTxt>분양/배너/제휴/지사가입</BTxt>
            <Txt>070-4848-0954</Txt>
          </TxtArea>
        </FootList>
        <FooterLineTxt>
          <Tit>업무시간</Tit>
          <Txt02>평일 09:30 ~ 18:30</Txt02>
          <Tit>점심시간</Tit>
          <Txt02>12:30 ~ 13:40</Txt02>
          <Are>(토/일/공휴일 휴무)</Are>
        </FooterLineTxt>
      </FooterTxtBox>
    </FooterTxtBoxWrap>
  );
};

export default React.memo(Footer);
