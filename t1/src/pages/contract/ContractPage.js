import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap, Title } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import TabCp from '@/components/contract/TabCp';
import FormCp from '@/components/contract/FormCp';
import ListCp from '@/components/contract/ListCp';

const ContractPage = () => {
  const { loginUser } = store();
  const [pageType, setPageType] = useState('');
  const [formType, setFormType] = useState('sale');

  let type = new URL(window.location.href).search.includes('type')
    ? new URL(window.location.href).search.split('=')[1]
    : '';
  useEffect(() => {
    setPageType(type);
  }, [type]);

  return (
    <PageWrapper>
      <PageWrap>
        <Title>계약서 관리</Title>
        <TabCp formType={formType} setFormType={setFormType} />
        <form action={process.env.REACT_APP_URL_API + 'contract'} method="POST">
          {!pageType && <ListCp formType={formType} setPageType={setPageType} />}
          {pageType === 'form' && <FormCp formType={formType} setPageType={setPageType} />}
        </form>
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(ContractPage);
