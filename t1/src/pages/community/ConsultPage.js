import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap, Text } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import SearchCp from '@/components/finditem/SearchCp';
import ListCp from '@/components/consult/ListCp';
import PagerCp from '@/components/item/PagerCp';
import BottomTextCp from '@/components/consult/BottomTextCp';

const ConsultPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>부동산 전문상담</Title>
        <Text>
          부동산 전반에 관한 법률상담 서비스를 제공해드립니다.
          <br />
          답변 내용은 답변자의 개인 의견으로 참고 자료로 만 활용하시기 바라며, 어떠한 법적인 책임을 지지
          않습니다.
        </Text>
        <div style={{ marginBottom: '40px' }}>
          <img src={process.env.REACT_APP_URL + 'img/consult_img2.jpg'} alt="" />
        </div>
        <SearchCp />
        <ListCp />
        <PagerCp />
        <BottomTextCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(ConsultPage);
