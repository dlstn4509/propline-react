import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const YouTubeBtnWrap = styled.a`
  font-size: 14px;
  border: 1px solid #dae1e7;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImgWrap = styled(FlexDiv)`
  width: 81px;
  height: 18px;
  margin-left: 10px;
`;

const YouTubeBtnCp = () => {
  return (
    <YouTubeBtnWrap href="https://www.youtube.com/channel/UCHd5J7I2x1vgVdxiIoBQqgQ" target="_blank">
      <FlexDiv>
        <div style={{ color: '#888f91' }}>공실클럽</div>
        <ImgWrap>
          <img src={process.env.REACT_APP_URL + 'img/utv.svg'} alt="" />
        </ImgWrap>
      </FlexDiv>
      <FaAngleRight style={{ color: '#000' }} />
    </YouTubeBtnWrap>
  );
};

export default React.memo(YouTubeBtnCp);

// src={process.env.REACT_APP_URL + 'img/utv.svg'}
