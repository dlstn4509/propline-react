import React, { useState } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

import SubTitleCp from '@/components/contract/form/SubTitleCp';
import InfoCp from '@/components/contract/form/InfoCp';
import ShortPeriodCp from '@/components/contract/form/ShortPeriodCp';
import MainTenanceFeeCp from '@/components/contract/form/MainTenanceFeeCp';
import PriceCp from '@/components/contract/form/PriceCp';
import TextCp from '@/components/contract/form/TextCp';
import ShortCheckPowerCp from '@/components/contract/form/ShortCheckPowerCp';
import ShortOtherTextCp from '@/components/contract/form/ShortOtherTextCp';
import SpecialCp from '@/components/contract/form/SpecialCp';
import ContractorCp from '@/components/contract/form/ContractorCp';

const FormCpWrap = styled.div`
  margin-bottom: 50px;
`;
const ButtonWrap = styled(FlexDiv)`
  justify-content: right;
  margin-bottom: 30px;
`;
const Button = styled.button`
  display: ${(props) => props.display};
  margin-left: ${(props) => props.ml};
  width: 150px;
  height: 35px;
  line-height: 35px;
  background-color: #3168ff;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  cursor: pointer;
`;
const ContractWrapper = styled.div`
  border: 1px solid #c6cfdc;
  padding: 20px;
`;
const BtnListsWrap = styled.div`
  text-align: center;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const FormCp = ({ formType, setPageType }) => {
  return (
    <FormCpWrap>
      <ButtonWrap>
        <Button
          style={{ backgroundColor: '#79b465' }}
          onClick={() => {
            setPageType('');
            window.scrollTo(0, 0);
          }}
        >
          목록으로 돌아가기
        </Button>
        <Button>계약서 작성하기</Button>
      </ButtonWrap>
      <ContractWrapper>
        <SubTitleCp formType={formType} />
        <InfoCp formType={formType} />
        {formType === 'short' && <ShortPeriodCp />}
        <PriceCp formType={formType} />
        {formType === 'short' && <MainTenanceFeeCp />}
        <TextCp formType={formType} />
        {formType === 'short' && (
          <>
            <ShortCheckPowerCp />
            <ShortOtherTextCp />
          </>
        )}
        <SpecialCp />
        <ContractorCp />
      </ContractWrapper>
      <div style={{ textAlign: 'center' }}>
        <Button mt={'20px'} display={'inline-block'}>
          계약서 작성하기
        </Button>
      </div>
      <BtnListsWrap
        onClick={() => {
          setPageType('');
          window.scrollTo(0, 0);
        }}
      >
        목록으로 돌아가기
      </BtnListsWrap>
    </FormCpWrap>
  );
};

export default React.memo(FormCp);
