import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap, Title } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import store from '@/store/store';

import TabCp from '@/components/contract/TabCp';
import FormCp from '@/components/contract/FormCp';
import ListCp from '@/components/contract/ListCp';
import ViewCp from '@/components/contract/ViewCp';

const ContractPage = () => {
  const navigate = useNavigate();
  const { loginUser } = store();
  const [pageType, setPageType] = useState('');
  const [formType, setFormType] = useState('sale');
  const [viewIdx, setViewIdx] = useState('');

  let type = new URL(window.location.href).search.includes('type')
    ? new URL(window.location.href).search.split('=')[1]
    : '';
  useEffect(() => {
    setPageType(type);
  }, [type]);

  let idx = new URL(window.location.href).search.includes('idx')
    ? new URL(window.location.href).search.split('=')[1]
    : '';
  useEffect(() => {
    setViewIdx(idx);
  }, [idx]);

  return (
    <PageWrapper>
      <PageWrap>
        <Title>계약서 관리</Title>
        <TabCp formType={formType} setFormType={setFormType} />

        {!pageType && !viewIdx && (
          <ListCp formType={formType} setPageType={setPageType} setViewIdx={setViewIdx} />
        )}
        {pageType === 'form' && !viewIdx && (
          <form action={process.env.REACT_APP_URL_API + 'contract'} method="POST">
            <FormCp formType={formType} setPageType={setPageType} />
          </form>
        )}
        {viewIdx && (
          <form action={process.env.REACT_APP_URL_API + 'contract'} method="POST">
            <input type="hidden" name="idx" value={viewIdx} />
            <input type="hidden" name="_method" value="PUT" />
            <ViewCp viewIdx={viewIdx} setPageType={setPageType} />
          </form>
        )}
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(ContractPage);
