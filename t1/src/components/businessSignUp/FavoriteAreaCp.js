import React, { useCallback } from 'react';
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

const FavoriteAreaCp = () => {
  const cityArr = [
    '강남구',
    '서초구',
    '송파구',
    '관악구',
    '동작구',
    '강동구',
    '강북구',
    '강서구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '마포구',
    '서대문구',
    '성동구',
    '성북구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ];
  const checkImgClick = useCallback((e) => {
    if (e.target.src == process.env.REACT_APP_URL + 'img/checkbox_01_off.png') {
      e.target.src = process.env.REACT_APP_URL + 'img/checkbox_01_on.png';
    } else {
      e.target.src = process.env.REACT_APP_URL + 'img/checkbox_01_off.png';
    }
  }, []);
  document.querySelectorAll('.checkImg').forEach((v) => {
    v.addEventListener('click', checkImgClick);
  });
  return (
    <>
      <Title>* 여러 지역 선택 가능(최소 1개 필수)</Title>
      <CheckBoxWrap>
        {cityArr.map((v, i) => (
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

export default React.memo(FavoriteAreaCp);
