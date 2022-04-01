import React from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';

const SiWrap = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.darkblue};
  .active {
    background-color: ${color.darkblue};
    color: #fff;
  }
`;
const Si = styled.div`
  padding: 6px 10px;
  width: 60px;
  border-right: 1px solid ${color.darkblue};
  text-align: center;
  cursor: pointer;

  :last-child {
    border: none;
  }
`;

const SiCp = ({ clickSi }) => {
  const onClick = (e) => {
    e.target.parentNode.childNodes.forEach((v) => {
      v.classList.remove('active');
    });
    e.target.classList.value.includes('active')
      ? e.target.classList.remove('active')
      : e.target.classList.add('active');
    clickSi(e.target.innerText);
    document.querySelectorAll('.gunguWrap').forEach((v) => {
      v.classList.remove('active');
      v.firstChild.lastChild.classList.add('hide');
    });
  };
  return (
    <SiWrap onClick={onClick}>
      <Si className="active">서울</Si>
      <Si>경기</Si>
      <Si>인천</Si>
      <Si>강원</Si>
      <Si>대전</Si>
      <Si>세종</Si>
      <Si>충남</Si>
      <Si>충북</Si>
      <Si>부산</Si>
      <Si>울산</Si>
      <Si>경남</Si>
      <Si>경북</Si>
      <Si>대구</Si>
      <Si>광주</Si>
      <Si>전남</Si>
      <Si>전북</Si>
      <Si>제주</Si>
      <Si>전국</Si>
    </SiWrap>
  );
};

export default React.memo(SiCp);
