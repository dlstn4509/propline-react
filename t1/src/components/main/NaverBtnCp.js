import React from 'react';
import styled, { FlexDiv } from '@/style';
import { SiNaver } from 'react-icons/si';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NaverBtnWrap = styled(FlexDiv)`
  font-size: 14px;
  color: #50aa34;
  letter-spacing: -0.04em;
  border: 1px solid #50aa34;
  border-radius: 5px;
  padding: 8px;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const NaverBtnCp = () => {
  return (
    <NaverBtnWrap>
      <div>
        <SiNaver style={{ marginRight: '6px' }} />
        <Link to="/main">네이버 매물관리센터</Link>
      </div>
      <FaAngleRight />
    </NaverBtnWrap>
  );
};

export default React.memo(NaverBtnCp);
