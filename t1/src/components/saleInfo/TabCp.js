import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const TabWrap = styled.div`
  height: 46px;
  margin-bottom: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #3168ff;
  text-align: center;
  display: flex;
`;
const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  border: 1px solid #000;
  border-bottom: none;
`;

const TabCp = () => {
  return (
    <TabWrap>
      <Tab>전체 매매정보 2,663건</Tab>
      <div style={{ width: '740px', borderBottom: '1px solid #000' }}></div>
    </TabWrap>
  );
};

export default React.memo(TabCp);
