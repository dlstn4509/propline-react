import React from 'react';
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
`;
const Btn = styled.div`
  padding: 1px 10px 3px 10px;
  border: 1px solid #dae1e7;
  border-radius: 3px;
  font-size: 13px;
  color: #464d50;
`;

const PagerCp = () => {
  return (
    <PagerWrapper>
      <PagerWrap>
        <Btn>{'< 이전'}</Btn>
        <Num>1</Num>
        <Num>2</Num>
        <Num>3</Num>
        <Num>4</Num>
        <Num>5</Num>
        <Num>6</Num>
        <Num>7</Num>
        <Num>8</Num>
        <Num>9</Num>
        <Num>10</Num>
        <Btn>{'다음 >'}</Btn>
      </PagerWrap>
    </PagerWrapper>
  );
};

export default React.memo(PagerCp);
