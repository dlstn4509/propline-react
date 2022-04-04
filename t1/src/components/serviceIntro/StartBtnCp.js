import React, { useState, useEffect } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';
import store from '@/store/store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StartBtnWrapper = styled.div`
  background-image: url(${process.env.REACT_APP_URL + 'img/fv_con_bg.png'});
  width: 1000px;
  height: 564px;
  padding: 80px 0 45px 0;
  text-align: center;
  margin-bottom: 100px;
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Btn = styled.div`
  margin-top: 50px;
  width: 316px;
  height: 62px;
  line-height: 62px;
  color: #fff;
  background-color: #3168ff;
  font-size: 24px;
`;
const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.blue};
  text-decoration: underline;
  font-size: 17px;
  letter-spacing: -0.04em;
`;

const StartBtnCp = () => {
  const { isPageY } = store();
  const [btnY, setBtnY] = useState('');
  useEffect(() => {
    setBtnY(document.querySelector('.startBtnWrapper').offsetTop);
    if (isPageY > btnY) {
      AOS.init({ duration: 1000 });
    }
  }, [isPageY]);
  return (
    <StartBtnWrapper className="startBtnWrapper">
      <img src={process.env.REACT_APP_URL + 'img/service_pc_img02.png'} alt="" />
      <BtnWrap data-aos="fade-down">
        <Btn>공실클럽 시작하기</Btn>
      </BtnWrap>
      <LinkWrap>
        <Link to="/main">
          상품가격안내 <FaCaretRight />
        </Link>
      </LinkWrap>
    </StartBtnWrapper>
  );
};

export default React.memo(StartBtnCp);
