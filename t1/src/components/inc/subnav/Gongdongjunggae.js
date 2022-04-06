import React, { useEffect } from 'react';
import styled, { color } from '@/style';
import store from '@/store/store';
import { Link } from 'react-router-dom';

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
  &.active {
    font-weight: bold;
  }
`;

const Gongdongjunggae = ({ mouseLeave }) => {
  const subNavArr = [
    { txt: '공동중개매물', path: '/itempublic?type=all' },
    { txt: '나의공동중개', path: '/itempublic?type=my' },
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
    <SubNav className={pathname === v.path ? 'active' : ''}>
      <Link to={v.path}>{v.txt}</Link>
    </SubNav>
  );
};

export default React.memo(Gongdongjunggae);
