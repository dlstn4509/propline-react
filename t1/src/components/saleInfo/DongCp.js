import React, { useEffect } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';

const DongWrap = styled.div`
  display: flex;
  width: 135px;
  align-items: center;
  margin-bottom: 10px;
  .hide {
    display: none;
  }
`;
const Dong = styled.div`
  cursor: pointer;
`;

const DongCp = ({ v, clickDong }) => {
  const onClick = (e) => {
    clickDong(e.target.innerText);
    if (e.target.parentNode.firstChild.classList.value.includes('hide')) {
      e.target.parentNode.firstChild.classList.remove('hide');
      e.target.parentNode.firstChild.nextSibling.classList.add('hide');
    } else {
      e.target.parentNode.firstChild.classList.add('hide');
      e.target.parentNode.firstChild.nextSibling.classList.remove('hide');
    }
  };
  return (
    <DongWrap className="dongWrap">
      <FaCheckSquare className="checkBoxIcon, hide" style={{ color: `${color.blue}` }} />
      <FaRegSquare />
      <Dong onClick={onClick}>{v}</Dong>
    </DongWrap>
  );
};

export default React.memo(DongCp);
