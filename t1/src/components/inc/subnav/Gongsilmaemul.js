import React, { useEffect } from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '@/style/main';
import { Link } from 'react-router-dom';

import store from '@/store/store';

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
  const { setPathName } = store();
  const onClick = () => {
    setPathName(window.location.href.includes('?') ? window.location.href.split('?')[1].split('=')[1] : '');
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
    <SubNav to={v.path} className={pathname === v.path ? 'active' : ''}>
      {v.txt}
    </SubNav>
  );
};

export default React.memo(Gongsilmaemul);
