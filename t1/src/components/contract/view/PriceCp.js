import React, { useState, useEffect } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const PriceCpWrapper = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const TextWrap = styled.div`
  font-size: 10pt;
  div {
    color: red;
    margin-top: 20px;
  }
`;
const TableWrap = styled.table`
  color: #000000;
  font-size: 10pt;
  line-height: 11pt;
  border-top: solid 2px #000000;
  border-bottom: solid 2px #000000;
  tbody {
    tr {
      height: 50px;
      border-bottom: 1px solid #c6cfdc;
      :last-child {
        border-bottom: none;
      }
    }
  }
`;
const TdTitle = styled.td`
  background-color: #f0f3f7;
  color: #000000;
  font-size: 10pt;
  text-align: center;
`;
const Td = styled.td`
  padding-left: 10px;
  vertical-align: middle;
`;
const Input = styled.input`
  border: 1px solid #c6cfdc;
  height: 20px;
  font-size: 9pt;
  width: ${(props) => (props.width ? props.width : '145px')};
  margin-left: 10px;
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;

const PriceCp = ({ contract, onBlurMakeZero, makeCommaNum }) => {
  const [securityNum, setSecurityNum] = useState();
  const [interim1_dateArr, setInterim1_dateArr] = useState([]);
  const [interim2_dateArr, setInterim2_dateArr] = useState([]);
  const [balanceArr, setBalanceArr] = useState([]);

  useEffect(() => {
    setSecurityNum(contract.trade_type === 1 ? contract.selling_amount : contract.security);
    if (contract.interim1_date) {
      setInterim1_dateArr(contract.interim1_date.split('-'));
    }
    if (contract.interim2_date) {
      setInterim2_dateArr(contract.interim2_date.split('-'));
    }
    if (contract.balance) {
      setBalanceArr(contract.balance_date.split('-'));
    }
  }, [contract]);

  const changeSecurity = (e) => {
    if (e.target.name === 'selling_amount' || e.target.name === 'security') {
      setSecurityNum(Number(e.target.value.split(',').join('')).toLocaleString('ko-KR'));
    }

    let text = e.target.value.split(',').join('');
    let numKor = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십'];
    let danKor = ['', '십', '백', '천', '', '십', '백', '천', '', '십', '백', '천', '', '십', '백', '천'];
    let result = '';

    if (text && !isNaN(text)) {
      for (let i = 0; i < text.length; i++) {
        let str = '';
        let num = numKor[text.charAt(text.length - (i + 1))];
        if (num !== '') str += num + danKor[i];
        switch (i) {
          case 4:
            str += '만';
            break;
          case 8:
            str += '억';
            break;
          case 12:
            str += '조';
            break;
          default:
        }
        result = str + result;
      }
      result = result + '원';
    }
    if (result.indexOf('만') - result.indexOf('억') === 1) result = result.replace('만', '');
    if (result.indexOf('억') - result.indexOf('조') === 1) result = result.replace('억', '');

    e.target.nextSibling.innerHTML = result;
  };

  return (
    <PriceCpWrapper>
      {contract.trade_type !== 4 && <Title>2.계약내용</Title>}
      {contract.trade_type === 4 && <Title>3. 예치금 및 차임등의 지불 약정</Title>}
      <TextWrap>
        {contract.trade_type === 1
          ? '제 1조 위 부동산의 매매에 있어 매매대금 및 매수인의 대금 지불시기는 다음과 같다.'
          : contract.trade_type === 4
          ? '위 부동산의 임대차에 대하여 임차인은 예치금 및 차임등을 아래와 같이 지불 한다.'
          : '제1조 위 부동산의 임대차에 있어 임차인은 임대차보증금을 아래와 같이 지불하기로 한다.'}
        <div>※ 금액은 숫자로 입력하십시오.</div>
      </TextWrap>
      <TableWrap>
        <colgroup>
          <col style={{ width: '150px' }} />
          <col style={{ width: '370px' }} />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <TdTitle>
              {contract.trade_type === 1 ? '매매대금' : contract.trade_type === 4 ? '예치금' : '보증금'}
            </TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金
                <Input
                  type="text"
                  name={contract.trade_type === 1 ? 'selling_amount' : 'security'}
                  id="security"
                  onKeyUp={makeCommaNum}
                  onChange={changeSecurity}
                  defaultValue={contract.trade_type === 1 ? contract.selling_amount : contract.security}
                />
                <div style={{ marginLeft: '10px' }}>
                  {contract.trade_type === 1 ? contract.selling_amount_txt : contract.security_txt}
                </div>
              </FlexDiv>
            </Td>
            <Td>정(￦ {securityNum})</Td>
          </tr>
          <tr>
            <TdTitle>계약금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金
                <Input
                  type="text"
                  name="earnest"
                  onKeyUp={makeCommaNum}
                  onChange={changeSecurity}
                  defaultValue={contract.earnest}
                />
                <div style={{ marginLeft: '10px' }}>{contract.earnest_txt}</div>
              </FlexDiv>
            </Td>
            <Td>정은 계약시에 지불하고 영수함.</Td>
          </tr>
          <tr>
            <TdTitle>{contract.trade_type === 1 && '1차'}중도금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金
                <Input
                  type="text"
                  name="interim1_amount"
                  onKeyUp={makeCommaNum}
                  onChange={changeSecurity}
                  defaultValue={contract.interim1_amount}
                />
                <div style={{ marginLeft: '10px' }}>{contract.interim1_amount_txt}</div>
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은{' '}
                <Input
                  width={'50px'}
                  type="text"
                  name="interim1_date_year"
                  maxLength="4"
                  defaultValue={interim1_dateArr[0]}
                />
                년
                <Input
                  width={'30px'}
                  type="text"
                  name="interim1_date_month"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                  defaultValue={interim1_dateArr[1]}
                />
                월
                <Input
                  width={'30px'}
                  type="text"
                  name="interim1_date_day"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                  defaultValue={interim1_dateArr[2]}
                />
                일에
              </FlexDiv>
            </Td>
          </tr>
          {contract.trade_type === 1 && (
            <tr>
              <TdTitle>2차중도금</TdTitle>
              <Td style={{ borderRight: '1px solid #c6cfdc' }}>
                <FlexDiv>
                  一金
                  <Input
                    type="text"
                    name="interim2_amount"
                    onKeyUp={makeCommaNum}
                    onChange={changeSecurity}
                    defaultValue={contract.interim2_amount}
                  />
                  <div style={{ marginLeft: '10px' }}>{contract.interim2_amount_txt}</div>
                </FlexDiv>
              </Td>
              <Td>
                <FlexDiv>
                  정은{' '}
                  <Input
                    width={'50px'}
                    type="text"
                    name="interim2_date_yaer"
                    maxLength="4"
                    defaultValue={interim2_dateArr[0]}
                  />
                  년
                  <Input
                    width={'30px'}
                    type="text"
                    name="interim2_date_month"
                    onBlur={onBlurMakeZero}
                    maxLength="2"
                    defaultValue={interim2_dateArr[1]}
                  />
                  월
                  <Input
                    width={'30px'}
                    type="text"
                    name="interim2_date_day"
                    onBlur={onBlurMakeZero}
                    maxLength="2"
                    defaultValue={interim2_dateArr[2]}
                  />
                  일에
                </FlexDiv>
              </Td>
            </tr>
          )}
          <tr>
            <TdTitle>잔 금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金{' '}
                <Input
                  type="text"
                  name="balance"
                  onKeyUp={makeCommaNum}
                  onChange={changeSecurity}
                  defaultValue={contract.balance}
                />
                <div style={{ marginLeft: '10px' }}>{contract.balance_txt}</div>
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은{' '}
                <Input
                  width={'50px'}
                  type="text"
                  name="balance_date_year"
                  maxLength="4"
                  defaultValue={balanceArr[0]}
                />
                년
                <Input
                  width={'30px'}
                  type="text"
                  name="balance_date_month"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                  defaultValue={balanceArr[1]}
                />
                월
                <Input
                  width={'30px'}
                  type="text"
                  name="balance_date_day"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                  defaultValue={balanceArr[2]}
                />
                일에 지불한다.
              </FlexDiv>
            </Td>
          </tr>
          {contract.trade_type === 1 && (
            <tr>
              <TdTitle>융 자 금</TdTitle>
              <Td style={{ borderRight: '1px solid #c6cfdc' }}>
                <FlexDiv>
                  一金
                  <Input
                    type="text"
                    name="loan_amount"
                    onKeyUp={makeCommaNum}
                    onChange={changeSecurity}
                    defaultValue={contract.loan_amount}
                  />
                  <div style={{ marginLeft: '10px' }}>{contract.loan_amount_txt}</div>
                </FlexDiv>
              </Td>
              <Td>
                <FlexDiv>
                  정은 <Input type="text" name="loan_promise" defaultValue={contract.loan_promise} /> 한다
                </FlexDiv>
              </Td>
            </tr>
          )}
          {(contract.trade_type === 3 || contract.trade_type === 4) && (
            <tr>
              <TdTitle>차 임</TdTitle>
              <Td style={{ borderRight: '1px solid #c6cfdc' }}>
                <FlexDiv>
                  一金 <Input type="text" name="monthly_rent" defaultValue={contract.monthly_rent} />
                  <div style={{ marginLeft: '10px' }}>{contract.monthly_rent_txt}</div>
                </FlexDiv>
              </Td>
              <Td>
                <FlexDiv>
                  정은 매월
                  <Input
                    type="text"
                    width={'20px'}
                    name="monthly_rent_payment_day"
                    maxLength="2"
                    defaultValue={contract.monthly_rent_payment_day}
                  />
                  일에 (
                  <input
                    type="radio"
                    id="선불"
                    name="monthly_rent_payment_type"
                    value={1}
                    defaultChecked={contract.monthly_rent_payment_type === 1}
                  />
                  <label htmlFor="선불">선불</label>
                  ,
                  <input
                    type="radio"
                    id="후불"
                    name="monthly_rent_payment_type"
                    value={2}
                    defaultChecked={contract.monthly_rent_payment_type === 2}
                  />
                  <label htmlFor="후불">후불</label>) 지불한다
                </FlexDiv>
              </Td>
            </tr>
          )}
        </tbody>
      </TableWrap>
    </PriceCpWrapper>
  );
};

export default React.memo(PriceCp);
