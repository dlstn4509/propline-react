import React from 'react';
import styled, { Title } from '@/style';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const NaverChargeWrapper = styled.div`
  margin-bottom: 80px;
`;
const NaverChargeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NaverBtnWrap = styled.div`
  color: #50aa34;
  font-size: 14px;
  border: 1px solid #50aa34;
  border-radius: 5px;
  width: 194px;
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  img {
    width: 15px;
    margin-right: 5px;
  }
  span {
    cursor: pointer;
    margin-right: 30px;
    :hover {
      text-decoration: underline;
    }
  }
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
  padding-top: 36px;
  flex-wrap: wrap;
  text-align: right;
  color: #464d50;
  .month {
    font-size: 15px;
  }
  .price {
    font-size: 25px;
    span {
      color: #1e3575;
      font-weight: bold;
    }
  }
`;

const NaverChargeCp = () => {
  return (
    <NaverChargeWrapper>
      <NaverChargeWrap>
        <Title>네이버 요금제</Title>
        <NaverBtnWrap>
          <img src={process.env.REACT_APP_URL + 'img/naver-icon.png'} alt="" />
          <span>네이버 매물관리센터</span>
          <FaAngleRight />
        </NaverBtnWrap>
      </NaverChargeWrap>
      <PriceWrap>
        <SubTitleWrap>멤버십</SubTitleWrap>
        <TextWrap>
          <img src={process.env.REACT_APP_URL + 'img/list_wr1.png'} alt="" />
          네이버 부동산 매물 전송 상품
          <br />
          6개월 기간 제공 (쿠폰 별도 구매)
        </TextWrap>
        <Price>
          <div>
            <div className="month">6개월</div>
            <div className="price">
              <span>99,000</span>원
            </div>
          </div>
        </Price>
      </PriceWrap>
    </NaverChargeWrapper>
  );
};

export default React.memo(NaverChargeCp);
