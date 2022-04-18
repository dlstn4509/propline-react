import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import store from '@/store/store';

import SaleInfoCp from '@/components/requestsale/SaleInfoCp';
import ClientInfoCp from '@/components/requestsale/ClientInfoCp';
import NaverAdCp from '@/components/requestsale/NaverAdCp';
import AgreePrivacyCp from '@/components/businessSignUp/AgreePrivacyCp';

const ImgDiv = styled.div`
  margin-bottom: 50px;
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.button`
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
  const [requestKind, setRequestKind] = useState(1); // 구하기, 내놓기
  const { setPathName, isAgreePrivacy, loginUser } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  const clickSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.form);
    isAgreePrivacy ? e.target.form.submit() : alert('이용약관 및 개인정보취급방침에 동의 바랍니다.');
  };
  return (
    <PageWrapper>
      <PageWrap style={{ marginBottom: '100px' }}>
        <ImgDiv>
          <img src={process.env.REACT_APP_URL + 'img/wep_banner_bg.png'} alt="" />
        </ImgDiv>
        <form
          action={process.env.REACT_APP_URL_API + 'requestsale'}
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="request_kind" value={requestKind} />
          <input type="hidden" name="midx" value={loginUser.midx ? loginUser.midx : 1011} />
          <SaleInfoCp requestKind={requestKind} setRequestKind={setRequestKind} />
          <ClientInfoCp requestKind={requestKind} />
          {requestKind === 1 && <NaverAdCp />}
          <AgreePrivacyCp />
          <BtnWrap>
            <Btn onClick={clickSubmit}>매물 의뢰하기</Btn>
          </BtnWrap>
        </form>
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(RequestSalePage);
