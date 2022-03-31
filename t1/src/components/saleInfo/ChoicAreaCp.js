import React, { useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import { FaRegWindowClose } from 'react-icons/fa';

const ChoiceAreaWrap = styled.div`
  padding: 10px 0 10px 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px dotted #ced6e3;
`;
const ChoiceArea = styled.div`
  display: flex;
  background-color: #fbfbfd;
  width: 810px;
  height: 24px;
  border: 1px dotted #ced6e3;
  color: #2a55cc;
  font-size: 13px;
  padding: 1px 5px;
  margin-left: 10px;
`;
const DongArrWrap = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const ChoiceAreaCp = ({ dongArr, clickDong }) => {
  const iconClick = (e) => {
    let dong = e.target.previousSibling
      ? e.target.previousSibling.innerText.split(' ')[1]
      : e.target.parentNode.previousSibling.innerText.split(' ')[1];
    clickDong(dong);
  };
  return (
    <ChoiceAreaWrap>
      <span>선택한 지역 :</span>
      <ChoiceArea>
        {!dongArr.length && <span>지역을 선택하세요. (최대 5개 지역 선택가능)</span>}
        {dongArr.length > 0 &&
          dongArr.map((v, i) => (
            <DongArrWrap key={i}>
              <div style={{ marginRight: '4px' }}>{v}</div>
              <FaRegWindowClose className="closeIcon" onClick={iconClick} style={{ cursor: 'pointer' }} />
            </DongArrWrap>
          ))}
      </ChoiceArea>
    </ChoiceAreaWrap>
  );
};

export default React.memo(ChoiceAreaCp);
