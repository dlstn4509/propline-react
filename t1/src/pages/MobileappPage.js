import React, { useEffect } from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

const Btn = styled.a`
  position: absolute;
  width: ${(props) => (props.width ? props.width : '180px')};
  height: 50px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const MobileappPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <div style={{ position: 'relative' }}>
          <img src={process.env.REACT_APP_URL + 'img/ugsn_20201112.jpg'} alt="" />
          <Btn
            href="https://play.google.com/store/apps/details?id=com.gclub"
            target="_blank"
            top={'402px'}
            left={'62px'}
          ></Btn>
          <Btn
            href="https://apps.apple.com/kr/app/%EA%B3%B5%EC%8B%A4%ED%81%B4%EB%9F%BD-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EA%B3%B5%EC%8B%A4%EC%A0%95%EB%B3%B4-no-1/id1069267388?l=en&mt=8"
            target="_blank"
            top={'402px'}
            left={'267px'}
          ></Btn>
          <Btn
            href="https://www.gongsilclub.com/doc/220117_MobileManual.pdf"
            target="_blank"
            top={'896px'}
            left={'368px'}
            width={'260px'}
          ></Btn>
        </div>
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(MobileappPage);
