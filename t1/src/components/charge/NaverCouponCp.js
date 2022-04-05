import React from 'react';
import styled, { Title } from '@/style';
import { Link } from 'react-router-dom';

const NaverCouponWrapper = styled.div`
  margin-bottom: 100px;
`;
const PriceWrap = styled.div`
  font-size: 22px;
  display: flex;
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
`;
const SubTitleWrap = styled.div`
  width: 284px;
  height: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 70%;
    border-left: 1px solid #888f91;
    border-left-style: dashed;
  }
`;
const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 414px;
  font-size: 15px;
  color: #464d50;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 70%;
    border-left: 1px solid #888f91;
    border-left-style: dashed;
  }
  img {
    margin-right: 30px;
  }
`;
const Price = styled.div`
  width: 284px;
  padding-top: ${(props) => (props.pt ? props.pt : '40px')};
  flex-wrap: wrap;
  text-align: right;
  color: #464d50;
  .priceWrap {
    font-size: 25px;
    span.price {
      color: #1e3575;
      font-weight: bold;
    }
    span.text {
      font-size: 15px;
      margin-right: 5px;
    }
    span.type {
      font-size: 15px;
      color: #708dae;
    }
  }
  .sub {
    font-size: 12px;
  }
`;
const InfoWrap = styled.div`
  color: #888f91;
  font-size: 13px;
  .bold {
    font-weight: 600;
  }
`;

const NaverCouponCp = () => {
  return (
    <NaverCouponWrapper>
      <Title>네이버 쿠폰 종류</Title>
      <PriceWrap>
        <SubTitleWrap>포커스 쿠폰</SubTitleWrap>
        <TextWrap>
          <img src={process.env.REACT_APP_URL + 'img/list_wr2.png'} alt="" />
          일반,전화,모바일로
          <br />
          소유주를 검증하는 간편한 방식
        </TextWrap>
        <Price>
          <div className="priceWrap">
            <span className="text">건 당</span>
            <span className="price">1,700</span>원
          </div>
          <div className="sub">(10건 단위 구매)</div>
        </Price>
      </PriceWrap>
      <PriceWrap style={{ borderTop: 'none', marginBottom: '40px' }}>
        <SubTitleWrap>현장 확인 쿠폰</SubTitleWrap>
        <TextWrap>
          <img src={process.env.REACT_APP_URL + 'img/list_wr3.png'} alt="" />
          현장에 검증 직원이 직접 방문하여
          <br />
          검증 및 촬영까지 원스톱으로 처리하는 방식
        </TextWrap>
        <Price pt={'30px'}>
          <div className="priceWrap">
            <span className="type" style={{ marginRight: '20px' }}>
              (일반)
            </span>
            <span className="text">건 당</span>
            <span className="price">17,500</span>원
          </div>
          <div className="priceWrap">
            <span className="type" style={{ marginRight: '34px' }}>
              (원룸)
            </span>
            <span className="text">건 당</span>
            <span className="price">3,300</span>원
          </div>
        </Price>
      </PriceWrap>
      <InfoWrap>
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          ※ 모든 상품 금액은 부가세가 포함된 실제금액입니다
        </div>
        <div style={{ marginBottom: '20px' }}>
          <img src={process.env.REACT_APP_URL + 'img/title01.gif'} alt="" />
        </div>
        <div className="bold">※포커스 쿠폰은 멤버십 이용 고객만 이용 가능합니다.</div>
        <div className="bold">
          ※현장 확인 원룸은 사업자별 100개까지만 광고 가능하며 추가로 광고할 경우 정상 요금이 과금 됩니다.
        </div>
        <div className="bold">※쿠폰 가격은 네이버 정책에 따라 변경될 수 있습니다.</div>
      </InfoWrap>
    </NaverCouponWrapper>
  );
};

export default React.memo(NaverCouponCp);
