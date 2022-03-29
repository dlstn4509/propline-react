import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SubCp = ({ v, i }) => {
  const [isClick, setIsClick] = useState(0);
  const onClick = (e) => {
    setIsClick(e.target.classList.value);
  };
  return (
    <div className={i} onClick={onClick} style={{ color: isClick == i ? '#3168ff' : '' }}>
      {v}
    </div>
  );
};

export default React.memo(SubCp);
