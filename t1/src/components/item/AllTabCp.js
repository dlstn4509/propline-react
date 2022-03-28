import React, { useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const AllTabCpWrapper = styled.div`
  display: flex;
  border-top: 2px solid #26489b;
`;
const AllTabWrap = styled.div`
  width: 25%;
  padding: 10px 0;
  text-align: center;
  background-color: #f0f3f7;
  color: ${(props) => props.color};
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
`;
const Count = styled.div`
  font-size: 12px;
  color: #747474;
  letter-spacing: -0.06em;
`;

const AllTabCp = () => {
  useEffect(() => {
    document.querySelectorAll('.allTabWrap').forEach((v) => {
      v.addEventListener('click', () => {
        console.log(v.addClass('active'));
      });
    });
  }, []);
  return (
    <AllTabCpWrapper>
      <AllTabWrap className="allTabWrap active" color={'red'}>
        <Title>전체</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap className="allTabWrap">
        <Title>공실매물관</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap className="allTabWrap">
        <Title>공동중개관</Title>
        <Count>15593</Count>
      </AllTabWrap>
      <AllTabWrap className="allTabWrap">
        <Title>무료 공실매물관</Title>
        <Count>15593</Count>
      </AllTabWrap>
    </AllTabCpWrapper>
  );
};

export default React.memo(AllTabCp);
