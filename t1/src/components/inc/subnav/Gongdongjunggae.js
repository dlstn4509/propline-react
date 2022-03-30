import React, { useEffect } from 'react';
import { SubNavWrapper, SubNavWrap, SubNav } from '@/style/main';
import store from '@/store/store';

const Gongdongjunggae = ({ mouseLeave }) => {
  const subNavArr = [
    { txt: '공동중개매물', path: '/itempublic?type=all' },
    { txt: '나의공동중개', path: '/itempublic?type=my' },
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
      <SubNavWrap onMouseLeave={mouseLeave} onClick={onClick} style={{ paddingLeft: '60px' }}>
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

export default React.memo(Gongdongjunggae);
