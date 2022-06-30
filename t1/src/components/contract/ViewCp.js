import React, { useEffect, useState } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import BtnCp from '@/components/contract/view/BtnCp';
import SubTitleCp from '@/components/contract/view/SubTitleCp';
import InfoCp from '@/components/contract/view/InfoCp';
import ShortPeriodCp from '@/components/contract/view/ShortPeriodCp';
import PriceCp from '@/components/contract/view/PriceCp';
import ShortMainTenanceFeeCp from '@/components/contract/view/ShortMainTenanceFeeCp';
import TextCp from '@/components/contract/view/TextCp';
import ShortCheckPowerCp from '@/components/contract/view/ShortCheckPowerCp';
import ShortOtherTextCp from '@/components/contract/view/ShortOtherTextCp';
import SpecialCp from '@/components/contract/view/SpecialCp';
import ContractorCp from '@/components/contract/view/ContractorCp';

const ViewCpWrap = styled.div`
  margin-bottom: 50px;
`;
const ContractViewWrapper = styled.div`
  border: 1px solid #c6cfdc;
  padding: 20px;
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
const BtnListsWrap = styled.div`
  text-align: center;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const ViewCp = ({ viewIdx, setPageType }) => {
  const navigate = useNavigate();
  const [contract, setContract] = useState([]);

  useEffect(() => {
    (async () => {
      let { data } = await axios.get(process.env.REACT_APP_URL_API + `contract?idx=${viewIdx}`);
      setContract(data);
    })();
  }, [viewIdx]);

  const onBlurMakeZero = (e) => {
    if (Number(e.target.value) < 10) {
      e.target.value = '0' + e.target.value;
    }
  };
  const makeCommaNum = (e) => {
    e.target.value = Number(e.target.value.split(',').join('')).toLocaleString('ko-KR');
  };

  return (
    <ViewCpWrap>
      <BtnCp setPageType={setPageType} idx={contract.idx} />
      <ContractViewWrapper>
        <SubTitleCp tradeType={contract.trade_type} />
        <InfoCp contract={contract} />
        {contract.trade_type === 4 && (
          <ShortPeriodCp
            startDate={contract.contract_start_date}
            finishDate={contract.contract_finish_date}
            onBlurMakeZero={onBlurMakeZero}
          />
        )}
        <PriceCp
          contract={contract}
          tradeType={contract.trade_type}
          onBlurMakeZero={onBlurMakeZero}
          makeCommaNum={makeCommaNum}
        />
        {contract.trade_type === 4 && (
          <ShortMainTenanceFeeCp
            maintenanceFee={contract.maintenance_fee}
            publicChargesFee={contract.public_charges_fee}
            cleaningFee={contract.cleaning_fee}
          />
        )}
        <TextCp contract={contract} onBlurMakeZero={onBlurMakeZero} />
        {contract.trade_type === 4 && (
          <>
            <ShortCheckPowerCp contract={contract} />
            <ShortOtherTextCp signJumin={contract.sign_jumin} signName={contract.sign_name} />
          </>
        )}
        <SpecialCp
          specialContract={contract.special_contract}
          contractDate={contract.contract_date}
          onBlurMakeZero={onBlurMakeZero}
        />
        <ContractorCp contract={contract} />
      </ContractViewWrapper>

      <div style={{ textAlign: 'center' }}>
        <Button mt={'20px'} display={'inline-block'}>
          계약서 수정하기
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
    </ViewCpWrap>
  );
};

export default React.memo(ViewCp);
