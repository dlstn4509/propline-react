import React, { useState } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link, useNavigate } from 'react-router-dom';

import SubTitleCp from '@/components/contract/form/SubTitleCp';
import InfoCp from '@/components/contract/form/InfoCp';
import ShortPeriodCp from '@/components/contract/form/ShortPeriodCp';
import ShortMainTenanceFeeCp from '@/components/contract/form/ShortMainTenanceFeeCp';
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
  const navigate = useNavigate();
  const onBlurMakeZero = (e) => {
    if (Number(e.target.value) < 10) {
      e.target.value = '0' + e.target.value;
    }
  };
  const makeCommaNum = (e) => {
    if (e.target.value) {
      e.target.value = Number(e.target.value.split(',').join('')).toLocaleString('ko-KR');
    }
  };
  return (
    <FormCpWrap>
      <ButtonWrap>
        <Button
          style={{ backgroundColor: '#79b465' }}
          onClick={() => {
            setPageType('');
            window.scrollTo(0, 0);
            navigate('/contract');
          }}
        >
          목록으로 돌아가기
        </Button>
        <Button>계약서 작성하기</Button>
      </ButtonWrap>

      <ContractWrapper>
        <SubTitleCp formType={formType} />
        <InfoCp formType={formType} />
        {formType === 'short' && <ShortPeriodCp onBlurMakeZero={onBlurMakeZero} />}
        <PriceCp formType={formType} onBlurMakeZero={onBlurMakeZero} makeCommaNum={makeCommaNum} />
        {formType === 'short' && <ShortMainTenanceFeeCp />}
        <TextCp formType={formType} onBlurMakeZero={onBlurMakeZero} />
        {formType === 'short' && (
          <>
            <ShortCheckPowerCp />
            <ShortOtherTextCp />
          </>
        )}
        <SpecialCp onBlurMakeZero={onBlurMakeZero} />
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
          navigate('/contract');
        }}
      >
        목록으로 돌아가기
      </BtnListsWrap>
    </FormCpWrap>
  );
};

export default React.memo(FormCp);
