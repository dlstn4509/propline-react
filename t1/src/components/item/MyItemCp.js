import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const MyItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid #3168ff;
  background-color: #fff;
  width: 100%;
  height: 67px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
  color: #464d50;
  z-index: 999;
`;
const MyItemWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div,
  img {
    margin-right: 10px;
  }
`;
const MyItem = styled.div`
  display: flex;
  align-items: center;
`;
const Btn = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : '#888f91')};
  text-align: center;
  padding: 2px 15px;
  border: 1px solid ${(props) => (props.solidColor ? props.solidColor : '#888f91')};
  border-radius: 30px;
`;
const BtnWrap = styled.div`
  display: flex;
`;

const MyItemCp = () => {
  return (
    <MyItemWrapper>
      <MyItemWrap>
        <MyItem>
          <img src={process.env.REACT_APP_URL + 'img/checkbox_04_off.png'} alt="" />
          <div>현재페이지 전체 선택</div>
          <Btn>
            <img src={process.env.REACT_APP_URL + 'img/5.maemul_print.svg'} alt="" />
            선택매물인쇄
          </Btn>
          <img src={process.env.REACT_APP_URL + 'img/checkbox_04_off.png'} alt="" />
          특이사항 포함
        </MyItem>
        <BtnWrap>
          <Btn color={'#3168ff'} solidColor={'#3168ff'}>
            관심매물에 담기+
          </Btn>
          <Btn>관심매물 보기</Btn>
        </BtnWrap>
      </MyItemWrap>
    </MyItemWrapper>
  );
};

export default React.memo(MyItemCp);
