import React, { useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import store from '@/store/store';

const SubNavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f0f3f7;
`;
const SubNavWrap = styled.div`
  width: 1000px;
  display: flex;
`;
const SubNav = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-right: 25px;
  font-size: 13px;
  color: #464d50;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

const Gongsilmaemul = ({ mouseLeave }) => {
  const subNavArr = [
    { txt: '전체', path: '/item?type=all' },
    { txt: '일반룸', path: '/item?type=normal' },
    { txt: '풀옵션', path: '/item?type=fullopt' },
    { txt: '사무실', path: '/item?type=office' },
    { txt: '상가', path: '/item?type=store' },
    { txt: '오피스텔', path: '/item?type=officetel' },
    { txt: '아파트', path: '/item?type=apt' },
  ];
  const { setTypename } = store();
  const onClick = () => {
    setTypename(window.location.href.includes('?') ? window.location.href.split('?')[1].split('=')[1] : '');
  };
  useEffect(() => {
    onClick();
  }, []);
  return (
    <SubNavWrapper>
      <SubNavWrap onMouseLeave={mouseLeave} onClick={onClick}>
        {subNavArr.map((v, i) => (
          <SubCp key={i} v={v} />
        ))}
      </SubNavWrap>
    </SubNavWrapper>
  );
};

const SubCp = ({ v }) => {
  let pathname = '/' + window.location.href.split('/')[3];
  return (
    <SubNav className={pathname === v.path ? 'active' : ''}>
      <Link to={v.path}>{v.txt}</Link>
    </SubNav>
  );
};

export default React.memo(Gongsilmaemul);
