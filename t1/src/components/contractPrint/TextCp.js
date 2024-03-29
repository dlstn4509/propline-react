import React, { useState, useEffect } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const TextCpWrap = styled.div`
  font-family: 굴림, 돋움, Arial, verdana, sans-serif;
  margin-bottom: 10px;
`;
const TextWrap = styled(FlexDiv)`
  margin-bottom: 4px;
`;
const Left = styled(FlexDiv)`
  margin-bottom: auto;
  width: 5%;
`;
const Right = styled.div`
  width: 95%;
`;

const TextCp = ({ contract }) => {
  const [startDayArr, setStartDayArr] = useState([]);
  useEffect(() => {
    if (contract.contract_start_date) {
      setStartDayArr(contract.contract_start_date.split('-'));
    }
  }, [contract]);
  return (
    <TextCpWrap>
      <TextWrap>
        <Left>제2조</Left>
        <Right>
          매도인은 매매대금의 잔금을 수령함과 동시에 소유권 이전등기에 필요한 모든 서류를 교부하고 등기절차에
          협력하며,위 부동산에 대하여 {startDayArr[0]}년 {startDayArr[1]}월 {startDayArr[2]}일 인도하기로
          한다.
        </Right>
      </TextWrap>
      <TextWrap>
        <Left>제3조</Left>
        <Right>
          매도인은 소유권의 행사를 제한하는 권리나 조세공과금 기타 부담금의 미납이 있을 때에는 잔금수수일
          이전까지 그 권 리의 하자 및 부담 등을 제거하여 완전한 소유권을 이전하여야 한다. 다만 달리 약정한
          경우에는 그러하지 아니한다.
        </Right>
      </TextWrap>
      <TextWrap>
        <Left>제4조</Left>
        <Right>
          위 부동산에 관하여 발생한 수익의 귀속과 조세공과금 등의 부담은 위 부동산의 인도일을 기준으로 하여 그
          이전까지는 매도인에게 그 이후의 것은 매수인에게 각각 귀속한다. 단 지방세의 납부 의무 및 납부책임은
          지방세법의 규정에 따른다.
        </Right>
      </TextWrap>
      <TextWrap>
        <Left>제5조</Left>
        <Right>
          매수인이 매도인에게 중도금(중도금약정이 없을 때는 잔금)을 지불하기 전까지 매도인은 계약금의 배액을
          배상하고, 매수인은 계약금을 포기하고 본 계약을 해제할 수 있다.
        </Right>
      </TextWrap>
      <TextWrap>
        <Left>제6조</Left>
        <Right>
          매도인 또는 매수인은 본 계약상의 채무불이행이 있을 경우 계약당사자 일방은 채무를 불이행한 상대방에
          대하여 서면으로 이행을 최고하고, 이를 행하지 않았을 경우 계약을 해제 할 수 있다. 이 경우 매도인과
          매수인은 각각 상대방에 대하여 손해배상을 청구할 수 있으며, 손해배상에 대하여 별도 약정이 없는 한,
          제5조의 기준에 따른다.
        </Right>
      </TextWrap>
      <TextWrap>
        <Left>제7조</Left>
        <Right>
          개업공인중개사는 매도인과 매수인이 본 계약을 불이행 함으로 인한 책임을 지지 않는다. 또한,중개보수는
          본 계약 체결과 동시에 계약 당사자 쌍방이 각각 지불하며, 개업공인중개사의 고의나 과실없이 본 계약이
          무효·취소 또는 해제되어도 중개보수는 지급한다. 공동 중개인 경우에 매도인과 매수인은 자신이 중개
          의뢰한 개업공인중개사에게 각각 중개보수를 지급한다.(중개보수는 거래가액의 {contract.commission_rate}{' '}
          %로 한다)
        </Right>
      </TextWrap>
      <TextWrap>
        <Left>제8조</Left>
        <Right>
          매도인 또는 매수인이 본 계약 이외의 업무를 의뢰한 경우 이에 관한 보수는 중개보수와는 별도로 지급하며
          그 금액은 합의에 의한다.
        </Right>
      </TextWrap>
      <TextWrap>
        <Left>제9조</Left>
        <Right>
          개업공인중개사는 중개대상물 확인·설명서를 작성하고 업무보증관계증서(공제증서 등) 사본을 첨부하여
          계약체결과 동시에 거래당사자 쌍방에게 교부한다.
        </Right>
      </TextWrap>
    </TextCpWrap>
  );
};

export default React.memo(TextCp);
