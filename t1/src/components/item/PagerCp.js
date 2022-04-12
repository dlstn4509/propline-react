import React, { useEffect, useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

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
const Num = styled(Link)`
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
  // useEffect(() => {
  //   document.querySelectorAll('.num').forEach((v) => {
  //     v.addEventListener('click', (e) => {
  //       // console.log(window.location.href.split('?')[0] + '?page=' + e.target.innerText);
  //       console.log(window.location.href.split('=')[1]);
  //       console.log(e.target.innerText);
  //     });
  //   });
  // });
  const { isPathname, isFindItemLists } = store();

  return (
    <PagerWrapper>
      <PagerWrap></PagerWrap>
    </PagerWrapper>
  );
};

export default React.memo(PagerCp);
