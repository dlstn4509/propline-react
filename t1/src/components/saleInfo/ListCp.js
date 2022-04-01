import React from 'react';
import styled, { Button, color } from '@/style';
import { Link } from 'react-router-dom';

const ListWrapper = styled.ul`
  border: 1px solid #888f91;
  margin-bottom: 100px;
`;
const ListWrap = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  padding: 0 15px;
  border-bottom: 1px solid #888f91;
  :last-child {
    border: none;
  }
`;
const MamulInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 6px;
    :last-child {
      margin-bottom: 0;
    }
  }
  img {
    width: auto;
    margin-right: 10px;
  }
`;
const CheckBox = styled.img`
  width: 15px;
  height: 15px;
`;
const Address = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;
const Size = styled.div`
  font-size: 12px;
  color: #464d50;
  span {
    color: #3168ff;
    margin: 0 6px;
  }
`;
const Detail = styled.div`
  color: #000;
  font-size: 12px;
  letter-spacing: -0.06em;
`;
const PriceWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${color.blue};
  text-align: right;
  margin-right: 40px;
  div {
    margin-bottom: 4px;
  }
  span {
    font-weight: 400;
    font-size: 13px;
    color: #464d50;
  }
`;
const ContactBtnWrap = styled.div`
  width: 150px;
  text-align: center;
  border-radius: 6px;
  letter-spacing: -0.06em;
  font-size: 13px;
`;
const ContactBtn = styled.div`
  border: 1px solid #26489b;
  line-height: 28px;
  border-radius: 10px;
  width: 100%;
  background-color: #26489b;
  color: #fff;
  margin-bottom: 6px;
`;
const DetailBtn = styled.div`
  width: 48%;
  color: #26489b;
  border: 1px solid #26489b;
  border-radius: 10px;
  line-height: 28px;
`;

const LispCp = () => {
  return (
    <ListWrapper>
      <ListWrap>
        <MamulInfo>
          <CheckBox src={process.env.REACT_APP_URL + 'img/checkbox_04_off.png'} alt="" />
          <img src={process.env.REACT_APP_URL + 'img/더큐브논현%20203호%2022.jpg'} alt="" />
          <div>
            <Address>강남구 논현동 222-4 더 큐브 논현 3층 301호</Address>
            <Size>
              28.1m²(8.5P) / 28.1m²(8.5P) <span>풀옵션</span> 협의
            </Size>
            <Detail>동영상, 풀옵션, 3/4층, R1, 세미분리형, 욕실1, 주차1, 2003년, 부재중</Detail>
          </div>
        </MamulInfo>
        <PriceWrap>
          <Price>매매 50억원</Price>
          <ContactBtnWrap>
            <ContactBtn>연락처보기</ContactBtn>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <DetailBtn>상세보기</DetailBtn>
              <DetailBtn style={{ border: '1px solid #5D6785' }}>계약완료요청</DetailBtn>
            </div>
          </ContactBtnWrap>
        </PriceWrap>
      </ListWrap>
    </ListWrapper>
  );
};

export default React.memo(LispCp);
