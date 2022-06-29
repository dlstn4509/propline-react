import React, { useState, useEffect } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const TextCpWrapper = styled.div`
  font-size: 10pt;
  line-height: 11pt;
  margin-bottom: 30px;
`;
const TextCpWrap = styled(FlexDiv)`
  margin-bottom: 20px;
`;
const Title = styled.div`
  width: 40px;
  margin-bottom: auto;
`;
const Text = styled.div`
  width: 920px;
  margin-bottom: ${(props) => props.mb};
`;
const Input = styled.input`
  border: 1px solid #c6cfdc;
  height: 18px;
  font-size: 9pt;
  width: ${(props) => (props.width ? props.width : '50px')};
  margin-left: 10px;
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;
const ShortTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const TextCp = ({ contract, onBlurMakeZero }) => {
  let [startDateArr, setStartDateArr] = useState([]);
  let [finishDateArr, setFinishDateArr] = useState([]);
  useEffect(() => {
    if (contract.contract_start_date) {
      setStartDateArr(contract.contract_start_date.split('-'));
    }
    if (contract.contract_finish_date) {
      setFinishDateArr(contract.contract_finish_date.split('-'));
    }
  }, [contract]);
  return (
    <TextCpWrapper>
      {contract.trade_type === 1 && (
        <>
          <TextCpWrap>
            <Title>제2조</Title>
            <Text>
              매도인은 매매대금의 잔금을 수령함과 동시에 소유권 이전등기에 필요한 모든 서류를 교부하고
              등기절차에 협력하며,
              <br />
              <FlexDiv>
                위 부동산에 대하여
                <Input
                  type="text"
                  name="contract_start_date_year"
                  maxLength="4"
                  defaultValue={startDateArr[0]}
                />
                년
                <Input
                  type="text"
                  width={'30px'}
                  name="contract_start_date_month"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                  defaultValue={startDateArr[1]}
                />
                월
                <Input
                  type="text"
                  width={'30px'}
                  name="contract_start_date_day"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                  defaultValue={startDateArr[2]}
                />
                일 인도하기로 한다.
              </FlexDiv>
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제3조</Title>
            <Text>
              매도인은 소유권의 행사를 제한하는 권리나 조세공과금 기타 부담금의 미납이 있을 때에는 잔금수수일
              이전까지 그 권 리의 하자 및 부담 등을 제거하여 완전한 소유권을 이전하여야
              <br />
              한다. 다만 달리 약정한 경우에는 그러하지 아니한다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제4조</Title>
            <Text>
              위 부동산에 관하여 발생한 수익의 귀속과 조세공과금 등의 부담은 위 부동산의 인도일을 기준으로
              하여 그 이전까지는 매도인에게 그 이후의 것은 매수인에게 각각 귀속한다.
              <br />단 지방세의 납부 의무 및 납부책임은 지방세법의 규정에 따른다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제5조</Title>
            <Text>
              매수인이 매도인에게 중도금(중도금약정이 없을 때는 잔금)을 지불하기 전까지 매도인은 계약금의
              배액을 배상하고, 매수인은 계약금을 포기하고 본 계약을 해제할 수 있다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제6조</Title>
            <Text>
              매도인 또는 매수인은 본 계약상의 채무불이행이 있을 경우 계약당사자 일방은 채무를 불이행한
              상대방에 대하여 서면으로 이행을 최고하고, 이를 행하지 않았을 경우 계약을
              <br /> 해제 할 수 있다. 이 경우 매도인과 매수인은 각각 상대방에 대하여 손해배상을 청구할 수
              있으며, 손해배상에 대하여 별도 약정이 없는 한, 제5조의 기준에 따른다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제7조</Title>
            <Text>
              개업공인중개사는 매도인과 매수인이 본 계약을 불이행 함으로 인한 책임을 지지 않는다.
              또한,중개보수는 본 계약 체결과 동시에 계약 당사자 쌍방이 각각 지불하며,
              <br />
              개업공인중개사의 고의나 과실없이 본 계약이 무효·취소 또는 해제되어도 중개보수는 지급한다. 공동
              중개인 경우에 매도인과 매수인은 자신이 중개 의뢰한 개업공인중개사에게 각각 중개보수를 지급한다.
              <br />
              <FlexDiv>
                (중개보수는 거래가액의
                <Input type="text" name="commission_rate" defaultValue={contract.commission_rate} />
                %로 한다)
              </FlexDiv>
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제8조</Title>
            <Text>
              매도인 또는 매수인이 본 계약 이외의 업무를 의뢰한 경우 이에 관한 보수는 중개보수와는 별도로
              지급하며 그 금액은 합의에 의한다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제9조</Title>
            <Text>
              개업공인중개사는 중개대상물 확인·설명서를 작성하고 업무보증관계증서(공제증서 등) 사본을 첨부하여
              계약체결과 동시에 거래당사자 쌍방에게 교부한다.
            </Text>
          </TextCpWrap>
        </>
      )}
      {(contract.trade_type === 2 || contract.trade_type === 3) && (
        <>
          <TextCpWrap>
            <Title>제2조</Title>
            <Text>
              임대인은 위 부동산을 임대차 목적대로 사용 수익할 수 있는 상태로
              <br />
              <FlexDiv>
                위 부동산에 대하여{' '}
                <Input
                  type="text"
                  name="contract_start_date_year"
                  maxLength="4"
                  defaultValue={startDateArr[0]}
                />
                년
                <Input
                  type="text"
                  name="contract_start_date_month"
                  width={'30px'}
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                  defaultValue={startDateArr[1]}
                />
                월
                <Input
                  type="text"
                  name="contract_start_date_day"
                  width={'30px'}
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                  defaultValue={startDateArr[2]}
                />
                일 까지 임차인에게 인도하며, 임대차 기간은 인도일로부터
                <Input
                  type="text"
                  name="contract_finish_date_year"
                  maxLength="4"
                  defaultValue={finishDateArr[0]}
                />
                년
                <Input
                  type="text"
                  name="contract_finish_date_month"
                  onBlur={onBlurMakeZero}
                  width={'30px'}
                  maxLength="2"
                  defaultValue={finishDateArr[1]}
                />
                월
                <Input
                  type="text"
                  name="contract_finish_date_day"
                  onBlur={onBlurMakeZero}
                  width={'30px'}
                  maxLength="2"
                  defaultValue={finishDateArr[2]}
                />
                일 까지로 한다.
              </FlexDiv>
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제3조</Title>
            <Text>
              임차인은 임대인의 동의 없이 위 부동산의 용도나 구조를 변경하거나 전대·임차권양도 또는 담보제공을
              하지 못하며 임대차 목적 이외의 용도로 사용할 수 없다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제4조</Title>
            <Text>
              임차인이 계속해서 2회 이상 차임의 지급을 연체하거나 제3조를 위반하였을 경우 임대인은 즉시 본
              계약을 해지 할 수 있다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제5조</Title>
            <Text>
              임대차계약이 종료된 경우에 임차인은 위 부동산을 원상으로 회복하여 임대인에게 반환한다.이러한
              경우 임대인은 보증금을 임차인에게 반환하고, 연체 임대료 또는 손해배상금액이 있을 때는 이를
              제하고 그 잔액을 반환한다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제6조</Title>
            <Text>
              임차인이 임대인에게 중도금(중도금이 없을때는 잔금)을 지불하기 전까지,임대인은 계약금의 배액을
              상환하고, 임차인은 계약금을 포기하고 이 계약을 해제할 수 있다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제7조</Title>
            <Text>
              임대인 또는 임차인이 본 계약상의 내용에 대하여 불이행이 있을 경우 그 상대방은 불이행한 자에
              대하여 서면으로 최고하고 계약을 해제 할 수 있다. 그리고 계약 당사자는 계약해제에 따른 손해배상을
              각각 상대방에 대하여 청구 할 수 있으며, 손해배상에 대하여 별도의 약정이 없는 한 계약금을
              손해배상의 기준으로 본다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제8조</Title>
            <Text>
              개업공인중개사는 임대인과 임차인이 본 계약을 불이행 함으로 인한 책임을 지지 않는다.
              또한,중개보수는 본 계약체결과 동시에 계약 당사자 쌍방이 각각 지불하며, 개업공인중개사의 고의나
              과실없이 본 계약이 무효·취소 또는 해제되어도 중개보수는 지급한다.공동중개인 경우에 임대인과
              임차인은 자신이 중개 의뢰한 개업공인중개사에게 각각 중개보수를 지급한다.
              <br />
              <FlexDiv>
                (중개보수는 거래가액의
                <Input type="text" name="commission_rate" defaultValue={contract.commission_rate} />
                %로 한다)
              </FlexDiv>
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>제9조</Title>
            <Text>
              개업공인중개사는 중개대상물 확인·설명서를 작성하고 업무보증관계증서 사본을 첨부하여 계약체결과
              동시에 거래당사자 쌍방에게 교부한다.
            </Text>
          </TextCpWrap>
        </>
      )}
      {contract.trade_type === 4 && (
        <>
          <ShortTitle>5. 임차인의 의무 및 위약금</ShortTitle>
          <Text mb={'20px'}>
            임차인은 아래의 의무 사항을 준수하고 미준수시 발생하는 위약금의 지불에 합의한다.
          </Text>
          <TextCpWrap>
            <Title>1. </Title>
            <Text>
              [퇴실통보의무] 임차인은 계약기간 만료 7일이전까지 퇴실 또는 임대차기간연장 여부를 임대인에게
              통보하여야 하며사전통보 없이 퇴실할 경우에는 7일간의 임대료를 임대인에게 지불하여야 한다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>2. </Title>
            <Text>
              [원상회복의무] 임차인은 퇴실시에 모든 비품과 시설물을 원상으로 회복하여 반환하여야 하며,비품 및
              시설물의훼손이나 분실에 대하여는 손해를 배상하여야 한다.
            </Text>
          </TextCpWrap>
          <TextCpWrap>
            <Title>3. </Title>
            <Text>
              <FlexDiv>
                [기간만료전퇴실] ㄱ.장기계약등의 사유로 월세를 할인받은 임차인이 기간만료전에 퇴실할 경우에는
                할인받은 월세액
                <Input
                  type="text"
                  name="discount_monthly_rent"
                  width={'150px'}
                  defaultValue={contract.discount_monthly_rent}
                />{' '}
                (원정)에
              </FlexDiv>
              실입주개월수를 곱한 금액을 위약금으로 지불하여야 한다.
              <div style={{ color: '#464d50' }}>
                ㄴ.기간 만료전 퇴실시 임차인은 임대인이 본 계약의 중개보수로 지급한 금액을 변상하여야 한다.
              </div>
            </Text>
          </TextCpWrap>
        </>
      )}
    </TextCpWrapper>
  );
};

export default React.memo(TextCp);
