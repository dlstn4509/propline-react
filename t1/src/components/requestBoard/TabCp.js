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
  const { setPathName } = store();
  let pathname = window.location.href.split('?')[1].split('=')[1];
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <TabWrapper>
      <Tab className="active" to="/requestboard?type=all">
        정보수정요청
      </Tab>
      <Tab to="/requestboard?type=sale">(매매)정보수정요청</Tab>
      {/* {path && (
        <>
          <Tab className="active">
            <Link to="/requestboard">정보수정요청</Link>
          </Tab>
          <Tab>
            <Link to="/requestboard?type=sale">(매매)정보수정요청</Link>
          </Tab>
        </>
      )}
      {!path && (
        <>
          <Tab>
            <Link to="/requestboard?type=all">정보수정요청</Link>
          </Tab>
          <Tab className="active">
            <Link to="/requestboard?type=sale">(매매)정보수정요청</Link>
          </Tab>
        </>
      )} */}
      <EmptyTab></EmptyTab>
    </TabWrapper>
  );
};

export default React.memo(TabCp);
