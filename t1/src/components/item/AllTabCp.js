import React, { useState, useEffect, useCallback } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';

const AllTabCpWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
const AllTabWrap = styled.div`
  border-bottom: 2px solid ${color.blue};
  width: 25%;
  padding: 10px 0;
  text-align: center;
  background-color: #f0f3f7;
  cursor: pointer;
  img {
    vertical-align: middle;
    margin-left: 6px;
  }
  &.active {
    background-color: #fff;
    border-bottom: none;
    border-top: 2px solid ${color.blue};
    border-left: 2px solid ${color.blue};
    border-right: 2px solid ${color.blue};
    div {
      color: ${color.blue};
    }
  }
`;
const Title = styled.div`
  font-size: 16px;
  height: 26px;
  font-weight: bold;
  color: #747474;
  letter-spacing: -0.06em;
  position: relative;
`;
const Count = styled.div`
  font-size: 12px;
  color: #747474;
  letter-spacing: -0.06em;
`;
const TtBox = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #dae1e7;
  padding: 12px;
  font-size: 13px;
  font-weight: 300;
  color: #464d50;
  text-align: left;
  right: -55px;
  top: 14px;
`;

const AllTabCp = () => {
  const [choiceTab, setChoiceTab] = useState('전체');
  const [isTtBox, setIsTtbox] = useState(true);
  const onMouseEvent = useCallback(() => {
    setIsTtbox(!isTtBox);
  }, [isTtBox]);
  useEffect(() => {
    onMouseEvent();
  }, []);
  return (
    <AllTabCpWrapper>
      <AllTabWrap
        className={choiceTab === '전체' ? 'active' : ''}
        onClick={() => {
          setChoiceTab('전체');
        }}
      >
        <Title>전체</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap
        className={choiceTab === '공실매물관' ? 'active' : ''}
        onClick={() => {
          setChoiceTab('공실매물관');
        }}
      >
        <Title>공실매물관</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap
        className={choiceTab === '공동중개관' ? 'active' : ''}
        onClick={() => {
          setChoiceTab('공동중개관');
        }}
      >
        <Title>공동중개관</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap
        className={choiceTab === '무료공실매물관' ? 'active' : ''}
        onClick={() => {
          setChoiceTab('무료공실매물관');
        }}
      >
        <Title>
          무료 공실매물관
          <img
            src={process.env.REACT_APP_URL + 'img/tt_box_icon.png'}
            alt=""
            onMouseEnter={onMouseEvent}
            onMouseLeave={onMouseEvent}
          />
          {isTtBox && (
            <TtBox>
              VIP와 PLUS 매물은 <br />
              무료공개매물관을 <br />
              통해서도 제공됩니다.
            </TtBox>
          )}
        </Title>
        <Count>15593</Count>
      </AllTabWrap>
    </AllTabCpWrapper>
  );
};

export default React.memo(AllTabCp);
