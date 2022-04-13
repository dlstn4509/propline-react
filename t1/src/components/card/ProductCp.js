import React, { useState, useEffect, useCallback } from 'react';
import styled, { Title, color } from '@/style';
import { Link } from 'react-router-dom';

const PaymentMethodWrapper = styled.div`
  border-top: 2px solid #999;
  margin-bottom: 70px;
`;
const PaymentMethodWrap = styled.div`
  padding-top: 23px;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #464d50;
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  /* letter-spacing: 1px; */
  input {
    margin-right: 5px;
  }
  div {
    margin-right: 20px;
  }
  img {
    margin-right: 40px;
  }
  span {
    margin-right: 10px;
    &.blue {
      color: ${color.blue};
      margin-left: 4px;
    }
    &.bold {
      margin-left: 10px;
      font-weight: 700;
    }
    &.red {
      color: red;
    }
  }
`;

const ProductCp = ({ paymentMethod, changeId, changeMoney, changeMonth }) => {
  const [idNum, setIdNum] = useState('2');
  const onChange = useCallback((e) => {
    setIdNum(e.target.value);
    changeId(e.target.value);
    changeMonth('3개월');
  }, []);
  useEffect(() => {
    if (idNum === '2') {
      changeMoney('462,000원');
    } else if (idNum === '4') {
      changeMoney('660,000원');
    } else if (idNum === '8') {
      changeMoney('1,056,000원');
    } else if (idNum === '15') {
      changeMoney('1,485,000원');
    }
  }, [idNum]);
  return (
    <>
      <Title>결제상품 선택</Title>
      <PaymentMethodWrapper>
        <PaymentMethodWrap mb={'20px'}>
          <img src={process.env.REACT_APP_URL + 'img/title06.gif'} alt="" />
          <input type="radio" name="paymentNum" value="2" onChange={onChange} defaultChecked />
          <div>2개</div>
          <input type="radio" name="paymentNum" value="4" onChange={onChange} />
          <div>4개</div>
          <input type="radio" name="paymentNum" value="8" onChange={onChange} />
          <div>8개</div>
          <input type="radio" name="paymentNum" value="15" onChange={onChange} />
          <div>15개</div>
        </PaymentMethodWrap>
        <PaymentMethodWrap>
          <img src={process.env.REACT_APP_URL + 'img/title07.gif'} alt="" />
          <span className="blue">2059년 3월 5일 ~ 2059년 6월 4일</span>(기존 상품 만기일 : 2059년 3월 4일)
        </PaymentMethodWrap>
        {idNum === '2' && <IdNum02 changeMoney={changeMoney} changeMonth={changeMonth} />}
        {idNum === '4' && <IdNum04 changeMoney={changeMoney} changeMonth={changeMonth} />}
        {idNum === '8' && <IdNum08 changeMoney={changeMoney} changeMonth={changeMonth} />}
        {idNum === '15' && <IdNum15 changeMoney={changeMoney} changeMonth={changeMonth} />}
        {paymentMethod === 'transfer' && (
          <PaymentMethodWrap ml={'120px'}>
            * <span className="red">법인계좌는 실시간계좌이체 이용이 불가</span> 하니 다른 결제 수단을
            이용하여 주십시오.
          </PaymentMethodWrap>
        )}
      </PaymentMethodWrapper>
    </>
  );
};

const IdNum02 = ({ changeMoney, changeMonth }) => {
  const onChange = (e) => {
    changeMoney(e.target.value.split('/')[0]);
    changeMonth(e.target.value.split('/')[1]);
  };
  return (
    <>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" onChange={onChange} value="462,000원/3개월" defaultChecked />
        3개월 : <span className="bold">462,000원</span>
      </PaymentMethodWrap>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" onChange={onChange} value="752,400원/6개월" />
        6개월 : <span className="bold">752,400원</span>(정상가 792,000원) <span className="blue">5% DC</span>
      </PaymentMethodWrap>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" onChange={onChange} value="1,425,600원/12개월" />
        12개월 : <span className="bold"> 1,425,600원</span> (정상가 1,584,000원)
        <span className="blue">10% DC</span>
      </PaymentMethodWrap>
    </>
  );
};
const IdNum04 = ({ changeMoney, changeMonth }) => {
  const onChange = (e) => {
    changeMoney(e.target.value.split('/')[0]);
    changeMonth(e.target.value.split('/')[1]);
  };
  return (
    <>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="660,000원/3개월" onChange={onChange} defaultChecked />
        3개월 : <span className="bold">660,000원</span>
      </PaymentMethodWrap>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="1,254,000원/6개월" onChange={onChange} />
        6개월 : <span className="bold">1,254,000원 </span>(정상가 1,320,000원)
        <span className="blue">5% DC</span>
      </PaymentMethodWrap>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="2,376,000원/12개월" onChange={onChange} />
        12개월 : <span className="bold"> 2,376,000원</span> (정상가 2,640,000원)
        <span className="blue">10% DC</span>
      </PaymentMethodWrap>
    </>
  );
};
const IdNum08 = ({ changeMoney, changeMonth }) => {
  const onChange = (e) => {
    changeMoney(e.target.value.split('/')[0]);
    changeMonth(e.target.value.split('/')[1]);
  };
  return (
    <>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="1,056,000원/3개월" onChange={onChange} defaultChecked />
        3개월 : <span className="bold">1,056,000원</span>
      </PaymentMethodWrap>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="2,006,400원/6개월" onChange={onChange} />
        6개월 : <span className="bold">2,006,400원 </span>(정상가 2,112,000원)
        <span className="blue">5% DC</span>
      </PaymentMethodWrap>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="3,801,600원/12개월" onChange={onChange} />
        12개월 : <span className="bold"> 3,801,600원 </span> (정상가 4,224,000원)
        <span className="blue">10% DC</span>
      </PaymentMethodWrap>
    </>
  );
};
const IdNum15 = ({ changeMoney, changeMonth }) => {
  const onChange = (e) => {
    changeMoney(e.target.value.split('/')[0]);
    changeMonth(e.target.value.split('/')[1]);
  };
  return (
    <>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="1,485,000원/3개월" onChange={onChange} defaultChecked />
        3개월 : <span className="bold">1,485,000원</span>
      </PaymentMethodWrap>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="2,821,500원/6개월" onChange={onChange} />
        6개월 : <span className="bold">2,821,500원 </span>(정상가 2,970,000원)
        <span className="blue">5% DC</span>
      </PaymentMethodWrap>
      <PaymentMethodWrap ml={'120px'}>
        <input type="radio" name="type02" value="5,346,000원/12개월" onChange={onChange} />
        12개월 : <span className="bold"> 5,346,000원 </span> (정상가 5,940,000원)
        <span className="blue">10% DC</span>
      </PaymentMethodWrap>
    </>
  );
};

export default React.memo(ProductCp);
