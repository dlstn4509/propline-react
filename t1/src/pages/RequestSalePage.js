import React, { useEffect } from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SaleInfoCp from '../components/requestsale/SaleInfoCp';

const ImgDiv = styled.div`
  margin-bottom: 50px;
`;

const RequestSalePage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <ImgDiv>
          <img src={process.env.REACT_APP_URL + 'img/wep_banner_bg.png'} alt="" />
        </ImgDiv>
        <SaleInfoCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(RequestSalePage);
