import React, { useState, useEffect, useCallback } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';

import { FaCheck } from 'react-icons/fa';

const GunguWrap = styled.div`
  display: flex;
  width: 135px;
  margin-bottom: 10px;
  color: ${(props) => (props.color ? props.color : '')};
  &.active {
    color: ${color.blue};
  }
`;
const Gungu = styled.div`
  position: relative;
  .hide {
    display: none;
  }
`;

const GunguCp = ({ v, clickGungu, gungu }) => {
  const onClick = useCallback(
    (e) => {
      clickGungu(e.target.innerText);
      let parentClassList = e.target.parentNode.parentNode.classList;
      let nextSiblingClassList = e.target.nextSibling.classList;
      document.querySelectorAll('.gunguWrap').forEach((v) => {
        v.classList.remove('active');
        v.firstChild.lastChild.classList.add('hide');
      });
      if (parentClassList.value.includes('active')) {
        parentClassList.remove('active');
        nextSiblingClassList.add('hide');
      } else {
        parentClassList.add('active');
        nextSiblingClassList.remove('hide');
      }
    },
    [gungu]
  );
  useEffect(() => {
    document.querySelectorAll('.dongWrap').forEach((v) => {
      v.firstChild.classList.add('hide');
      v.firstChild.nextSibling.classList.remove('hide');
    });
  }, [gungu]);

  return (
    <GunguWrap className="gunguWrap">
      <Gungu>
        <div style={{ cursor: 'pointer' }} onClick={onClick}>
          {v}
        </div>
        <FaCheck className="hide" style={{ position: 'absolute', right: '-20px', top: '3px' }} />
      </Gungu>
    </GunguWrap>
  );
};

export default React.memo(GunguCp);
