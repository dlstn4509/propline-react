import React, { useState, useEffect } from 'react';
import styled, { Button, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BsPrinter } from 'react-icons/bs';

import BtnCp from '@/components/contractPrint/BtnCp';
import InfoCp from '@/components/contractPrint/InfoCp';
import PriceCp from '@/components/contractPrint/PriceCp';
import TextCp from '@/components/contractPrint/TextCp';
import SpecialCp from '@/components/contractPrint/SpecialCp';
import ContractorCp from '@/components/contractPrint/ContractorCp';

const ContractPrintPageWrap = styled.div`
  padding-top: 40px;
  font-size: 12px;
  margin-bottom: 6px;
`;
const Title = styled.div`
  font-family: 굴림, 돋움, Arial, verdana, sans-serif;
  font-size: 24pt;
  font-weight: 600;
  letter-spacing: 10px;
  text-align: center;
  margin-bottom: 4px;
`;
const Text = styled.div`
  font-family: 굴림, 돋움, Arial, verdana, sans-serif;
  margin-bottom: 6px;
`;
const ContractDateWrap = styled.div`
  font-family: 굴림, 돋움, Arial, verdana, sans-serif;
  text-align: center;
`;
const BtnWrap = styled(FlexDiv)`
  justify-content: center;
`;

const ContractPrintPage = () => {
  const [contract, setContract] = useState([]);
  const [contractDateArr, setContractDateArr] = useState([]);
  let idx = new URL(window.location.href).search.split('=')[1];
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `contract?idx=${idx}`);
      setContract(data);
    })();
  }, [idx]);
  useEffect(() => {
    if (contract.contract_date) {
      setContractDateArr(contract.contract_date.split('-'));
    }
    console.log(contract.contract_date);
  }, [contract]);

  return (
    <ContractPrintPageWrap>
      <BtnCp />
      <Title>부동산매매계약서</Title>
      <Text>아래 표시 부동산에 대하여 매도인과 매수인은 합의에 의하여 다음과 같이 매매계약을 체결한다.</Text>
      <InfoCp contract={contract} />
      <PriceCp contract={contract} Text={Text} />
      <TextCp contract={contract} />
      <SpecialCp special={contract.special_contract} />
      <Text>
        본 계약을 증명하기 위하여 계약당사자가 이의 없음을 확인하고 각각 서명·날인 후 매도인,매수인 및
        개업공인중개사는 매장마다 간인하여야 하며, 각각1통씩 보관한다.
      </Text>
      <ContractDateWrap>
        {contractDateArr[0]}년 {contractDateArr[1]}월 {contractDateArr[2]}일
      </ContractDateWrap>
      <ContractorCp contract={contract} />
      <BtnWrap>
        <Button mr={'6px'}>
          <FlexDiv
            onClick={() => {
              window.print();
            }}
          >
            <BsPrinter style={{ marginRight: '6px' }} />
            인쇄
          </FlexDiv>
        </Button>
        <Button>닫기</Button>
      </BtnWrap>
    </ContractPrintPageWrap>
  );
};

export default React.memo(ContractPrintPage);
