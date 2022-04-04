import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const BtnWrap = styled.div`
  display: flex;
  width: 1000px;
  justify-content: right;
  margin-bottom: 40px;
`;
const Btn = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  width: 55px;
  height: 35px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-right: ${(props) => props.mr};
`;

const BtnCp = () => {
  return (
    <BtnWrap>
      <Btn bg={'#3168ff'} mr={'10px'}>
        등록
      </Btn>
      <Btn bg={'#888f91;'}>취소</Btn>
    </BtnWrap>
  );
};

export default React.memo(BtnCp);
