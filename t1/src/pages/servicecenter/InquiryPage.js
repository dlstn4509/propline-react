import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import TableCp from '@/components/inquiry/TableCp';
import EditorCp from '@/components/inquiry/EditorCp';
import BtnCp from '@/components/inquiry/BtnCp';
import AgreePrivacyCp from '@/components/businessSignUp/AgreePrivacyCp';

const InquiryForm = styled.form`
  font-size: 13px;
  color: #464d50;
`;

const InquiryPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>제휴&광고문의</Title>
        <InquiryForm action="">
          <TableCp />
          <EditorCp />
          <BtnCp />
          <AgreePrivacyCp />
        </InquiryForm>
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(InquiryPage);
