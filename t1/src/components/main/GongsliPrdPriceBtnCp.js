import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const GongsliPrdPriceBtn = styled(Link)`
  display: inline-block;
  width: 100%;
  margin-top: 6px;
  padding: 8px 0 8px 10px;
  border: 1px solid #dae1e7;
  border-radius: 5px;
  font-size: 14px;
  background-image: url(${process.env.REACT_APP_URL + 'img/gonsil_arrow_icon.png'});
  background-position: 95% center;
  background-repeat: no-repeat;
  :hover {
    text-decoration: underline;
    color: #888f91;
  }
`;

const GongsliPrdPriceBtnCp = () => {
  return (
    <GongsliPrdPriceBtn to="/main" style={{ color: '#464d50' }}>
      공실클럽 상품 가격
    </GongsliPrdPriceBtn>
  );
};

export default React.memo(GongsliPrdPriceBtnCp);
