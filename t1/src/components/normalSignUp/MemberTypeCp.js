import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const MemberTypeWrap = styled.div`
  width: 100%;
  margin-bottom: 50px;
  cursor: pointer;
`;

const MemberTypeCp = () => {
  const [img, setImg] = useState(process.env.REACT_APP_URL + 'img/member_type_13.png');
  const clickWrap = (e) => {
    let rect = e.target.getBoundingClientRect();
    let clickCoordsX = e.clientX - rect.left;
    if (clickCoordsX < 330) {
      setImg(process.env.REACT_APP_URL + 'img/member_type_13.png');
    } else if (clickCoordsX >= 330 && clickCoordsX < 660) {
      setImg(process.env.REACT_APP_URL + 'img/member_type_12.png');
    } else {
      setImg(process.env.REACT_APP_URL + 'img/member_type_11.png');
    }
  };
  return (
    <MemberTypeWrap onClick={clickWrap}>
      <img src={img} alt="" />
    </MemberTypeWrap>
  );
};

export default React.memo(MemberTypeCp);
