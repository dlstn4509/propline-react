import React, { useState } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const SpecialCpWrapper = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const Text = styled.div`
  font-size: 10pt;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const ContractDateWrap = styled(FlexDiv)`
  justify-content: center;
`;
const Input = styled.input`
  border: 1px solid #c6cfdc;
  height: 18px;
  font-size: 9pt;
  width: 50px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  :first-child {
    margin-left: none;
  }
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;

const SpecialCp = () => {
  const [now] = useState(new Date());
  const [yaer] = useState(now.getFullYear());
  const [month] = useState(now.getMonth() + 1);
  const [day] = useState(now.getDate());
  return (
    <SpecialCpWrapper>
      <Title>[특약사항]</Title>
      <textarea name="special_contract" id="" cols="30" rows="10"></textarea>
      <Text>
        본 계약을 증명하기 위하여 계약당사자가 이의 없음을 확인하고 각각 서명·날인 후 매도인,매수인 및
        개업공인중개사는 매장마다 간인하여야 하며, 각각1통씩 보관한다.
      </Text>
      <ContractDateWrap>
        <Input type="text" defaultValue={yaer} name="contract_date_year" /> 년
        <Input type="text" defaultValue={month} name="contract_date_month" /> 월
        <Input type="text" defaultValue={day} name="contract_date_day" /> 일
      </ContractDateWrap>
    </SpecialCpWrapper>
  );
};

export default React.memo(SpecialCp);
