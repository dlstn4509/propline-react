import React from 'react';
import styled from '@/style';

const NaverMamulMgmBtn = styled.a`
  display: inline-block;
  width: 100%;
  margin-top: 6px;
  padding: 8px 0 8px 30px;
  border: 1px solid #50aa34;
  border-radius: 5px;
  font-size: 14px;
  position: relative;
  background-image: url(${process.env.REACT_APP_URL + 'img/naver_arrow_icon.png'});
  background-position: 95% center;
  background-repeat: no-repeat;
  border-radius: 5px;
  :after {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url(${process.env.REACT_APP_URL + 'img/naver-icon.png'});
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    margin: auto 0;
  }
  :hover {
    text-decoration: underline;
  }
`;

const NaverMamulMgmBtnCp = () => {
  return (
    <NaverMamulMgmBtn href="http://n.gongsilclub.com/" target="_blank" style={{ color: '#50aa34' }}>
      네이버 매물관리센터
    </NaverMamulMgmBtn>
  );
};

export default React.memo(NaverMamulMgmBtnCp);
