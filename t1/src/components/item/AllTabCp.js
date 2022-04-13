import React, { useState, useEffect, useCallback } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const AllTabCpWrapper = styled.div`
  display: flex;
  border-top: 2px solid #26489b;
  margin-bottom: 40px;
`;
const AllTabWrap = styled.div`
  width: 25%;
  padding: 10px 0;
  text-align: center;
  background-color: #f0f3f7;
  img {
    vertical-align: middle;
    margin-left: 6px;
  }
  &.active {
    background-color: #fff;
    div {
      color: #26489b;
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
  const [tab01, setTab01] = useState(true);
  const [tab02, setTab02] = useState(false);
  const [tab03, setTab03] = useState(false);
  const [tab04, setTab04] = useState(false);
  const [isTtBox, setIsTtbox] = useState(true);
  const showTtbox = useCallback(() => {
    setIsTtbox(!isTtBox);
  }, []);
  const hideTtbox = useCallback(() => {
    setIsTtbox(!isTtBox);
  }, []);
  useEffect(() => {
    showTtbox();
    hideTtbox();
  }, []);
  return (
    <AllTabCpWrapper>
      <AllTabWrap
        className={tab01 ? 'active' : ''}
        onClick={() => {
          setTab01(!tab01);
        }}
      >
        <Title>전체</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap
        className={tab02 ? 'active' : ''}
        onClick={() => {
          setTab02(!tab02);
        }}
      >
        <Title>공실매물관</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap
        className={tab03 ? 'active' : ''}
        onClick={() => {
          setTab03(!tab03);
        }}
      >
        <Title>공동중개관</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap
        className={tab04 ? 'active' : ''}
        onClick={() => {
          setTab04(!tab04);
        }}
      >
        <Title>
          무료 공실매물관
          <img
            src={process.env.REACT_APP_URL + 'img/tt_box_icon.png'}
            alt=""
            onMouseEnter={showTtbox}
            onMouseLeave={hideTtbox}
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
