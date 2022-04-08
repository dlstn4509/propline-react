import React from 'react';
import styled, { FlexDiv } from '@/style';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PriceBtnWrap = styled(FlexDiv)`
  font-size: 14px;
  color: #464d50;
  letter-spacing: -0.04em;
  border: 1px solid #dae1e7;
  border-radius: 5px;
  padding: 8px;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const PriceBtnCp = () => {
  return (
    <PriceBtnWrap>
      <Link to="/main">공실클럽 상품 가격</Link>
      <FaAngleRight />
    </PriceBtnWrap>
  );
};

export default React.memo(PriceBtnCp);
