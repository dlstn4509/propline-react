import React, { useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const PagerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;
const PagerWrap = styled.div`
  justify-content: space-between;
  display: flex;
  width: 420px;
`;
const Num = styled.div`
  font-size: 13px;
  color: #464d50;
  cursor: pointer;
`;
const Btn = styled.div`
  padding: 1px 10px 3px 10px;
  border: 1px solid #dae1e7;
  border-radius: 3px;
  font-size: 13px;
  color: #464d50;
  cursor: pointer;
`;

const PagerCp = () => {
  useEffect(() => {
    document.querySelectorAll('.num').forEach((v) => {
      v.addEventListener('click', (e) => {
        // console.log(window.location.href.split('?')[0] + '?page=' + e.target.innerText);
        console.log(window.location.href.split('=')[1]);
        console.log(e.target.innerText);
      });
    });
  });

  return (
    <PagerWrapper>
      <PagerWrap>
        <Btn>{'< 이전'}</Btn>
        <Num className="num">1</Num>
        <Num className="num">2</Num>
        <Num className="num">3</Num>
        <Num className="num">4</Num>
        <Num className="num">5</Num>
        <Num className="num">6</Num>
        <Num className="num">7</Num>
        <Num className="num">8</Num>
        <Num className="num">9</Num>
        <Num className="num">10</Num>
        <Btn>{'다음 >'}</Btn>
      </PagerWrap>
    </PagerWrapper>
  );
};

export default React.memo(PagerCp);
