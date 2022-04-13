import React, { useEffect, useCallback } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const Title = styled.div`
  font-size: 13px;
  color: #3168ff;
  margin-bottom: 10px;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  width: 800px;
  flex-wrap: wrap;
`;
const CheckImg = styled.img`
  margin-right: 7px;
  cursor: pointer;
`;
const CheckText = styled.div`
  margin-right: 20px;
`;

const MainIndustryCp = () => {
  const industryArr = ['주택', '아파트', '오피스텔', '분양권', '사무실', '상가', '빌딩', '토지'];
  const checkImgClick = useCallback((e) => {
    if (e.target.src.includes('off')) {
      e.target.src = process.env.REACT_APP_URL + 'img/checkbox_01_on.png';
    } else {
      e.target.src = process.env.REACT_APP_URL + 'img/checkbox_01_off.png';
    }
  }, []);
  useEffect(() => {
    document.querySelectorAll('.checkImg').forEach((v) => {
      v.addEventListener('click', checkImgClick);
    });
  }, []);
  return (
    <>
      <Title>* 최소 1개 필수</Title>
      <CheckBoxWrap>
        {industryArr.map((v, i) => (
          <FlexDiv key={i} style={{ width: '90px', marginBottom: '5 px' }}>
            <CheckImg
              src={process.env.REACT_APP_URL + 'img/checkbox_01_off.png'}
              alt=""
              className="checkImg"
            />
            <CheckText>{v}</CheckText>
          </FlexDiv>
        ))}
      </CheckBoxWrap>
    </>
  );
};

export default React.memo(MainIndustryCp);
