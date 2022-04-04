import React, { useState, useEffect } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

const TabWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Tab = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 44px;
  border-bottom: 1px solid #000;
  cursor: pointer;
  &.active {
    border: 1px solid #000;
    border-bottom: none;
    color: ${color.blue};
  }
`;
const EmptyTab = styled.div`
  width: 640px;
  height: 44px;
  border-bottom: 1px solid #000;
`;

const TabCp = () => {
  const { setTypename } = store();
  let typename = window.location.href.split('?')[1];
  useEffect(() => {
    setTypename(typename);
  }, [typename]);
  const onClick = (e) => {
    setTypename(typename);
    e.target.parentNode.childNodes.forEach((v) => v.classList.remove('active'));
    e.target.classList.add('active');
  };
  return (
    <TabWrapper>
      <Tab className="active" to="/requestboard" onClick={onClick}>
        정보수정요청
      </Tab>
      <Tab to="/requestboard?type=sale" onClick={onClick}>
        (매매)정보수정요청
      </Tab>
      <EmptyTab></EmptyTab>
    </TabWrapper>
  );
};

export default React.memo(TabCp);
