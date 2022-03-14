import React from 'react';
import styled from '../../style';

const SlideCpWrapper = styled.div`
  width: 780px;
  height: 440px;
  padding: 0 24px 60px 0;
  border: 1px solid red;
  margin-bottom: 50px;
`;

const SlideCp = () => {
  return (
    <SlideCpWrapper>
      <img src={process.env.REACT_APP_URL + 'img/top_logo.svg'} alt="slide_img" className="mw-100" />
    </SlideCpWrapper>
  );
};

export default React.memo(SlideCp);
