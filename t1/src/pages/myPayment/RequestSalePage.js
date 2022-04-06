import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SaleInfoCp from '@/components/requestsale/SaleInfoCp';
import ClientInfoCp from '@/components/requestsale/ClientInfoCp';
import NaverAdCp from '@/components/requestsale/NaverAdCp';
import AggrePrivacyCp from '@/components/businessSignUp/AggrePrivacyCp';

const ImgDiv = styled.div`
  margin-bottom: 50px;
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.div`
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background-color: #3168ff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
`;

const RequestSalePage = () => {
  const [requestKind, setRequestKind] = useState(false);
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap style={{ marginBottom: '100px' }}>
        <ImgDiv>
          <img src={process.env.REACT_APP_URL + 'img/wep_banner_bg.png'} alt="" />
        </ImgDiv>
        <SaleInfoCp requestKind={requestKind} setRequestKind={setRequestKind} />
        <ClientInfoCp requestKind={requestKind} />
        {!requestKind && <NaverAdCp />}
        <AggrePrivacyCp />
        <BtnWrap>
          <Btn>매물 의뢰하기</Btn>
        </BtnWrap>
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(RequestSalePage);
