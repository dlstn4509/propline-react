import React from 'react';
import styled, { PageWrapper, PageWrap, Title } from '@/style';
import { Link } from 'react-router-dom';

import TabCp from '@/components/contract/TabCp';
import SubTitleCp from '@/components/contract/SubTitleCp';
import InfoCp from '@/components/contract/InfoCp';
import PriceCp from '@/components/contract/PriceCp';
import TextCp from '@/components/contract/TextCp';
import SpecialCp from '@/components/contract/SpecialCp';
import ContractorCp from '@/components/contract/ContractorCp';

const Button = styled.div`
  margin-left: auto;
  width: 150px;
  height: 35px;
  line-height: 35px;
  background-color: #3168ff;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 30px;
`;
const ContractWrapper = styled.div`
  border: 1px solid #c6cfdc;
  padding: 20px;
`;

const ContractPage = () => {
  return (
    <PageWrapper>
      <PageWrap>
        <Title>계약서 관리</Title>
        <TabCp />
        <Button>계약서 작성하기</Button>
        <ContractWrapper>
          <SubTitleCp />
          <InfoCp />
          <PriceCp />
          <TextCp />
          <SpecialCp />
          <ContractorCp />
        </ContractWrapper>
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(ContractPage);
