import React, { useState } from 'react';
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

const PriceCp = ({ formType, onBlurMakeZero, makeCommaNum }) => {
  const [securityNum, setSecurityNum] = useState('');
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
      {formType !== 'short' && <Title>2.계약내용</Title>}
      {formType === 'short' && <Title>3. 예치금 및 차임등의 지불 약정</Title>}
      <TextWrap>
        {formType === 'sale'
          ? '제 1조 위 부동산의 매매에 있어 매매대금 및 매수인의 대금 지불시기는 다음과 같다.'
          : formType === 'short'
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
            <TdTitle>{formType === 'sale' ? '매매대금' : formType === 'short' ? '예치금' : '보증금'}</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金
                <Input
                  type="text"
                  name={formType === 'sale' ? 'selling_amount' : 'security'}
                  id="security"
                  onKeyUp={makeCommaNum}
                  onChange={changeSecurity}
                />
                <div style={{ marginLeft: '10px' }}></div>
              </FlexDiv>
            </Td>
            <Td>정(￦ {securityNum})</Td>
          </tr>
          <tr>
            <TdTitle>계약금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" name="earnest" onKeyUp={makeCommaNum} onChange={changeSecurity} />
                <div style={{ marginLeft: '10px' }}></div>
              </FlexDiv>
            </Td>
            <Td>정은 계약시에 지불하고 영수함.</Td>
          </tr>
          <tr>
            <TdTitle>{formType === 'sale' && '1차'}중도금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金
                <Input type="text" name="interim1_amount" onKeyUp={makeCommaNum} onChange={changeSecurity} />
                <div style={{ marginLeft: '10px' }}></div>
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은 <Input width={'50px'} type="text" name="interim1_date_year" maxLength="4" />년
                <Input
                  width={'30px'}
                  type="text"
                  name="interim1_date_month"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                />
                월
                <Input
                  width={'30px'}
                  type="text"
                  name="interim1_date_day"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                />
                일에
              </FlexDiv>
            </Td>
          </tr>
          {formType === 'sale' && (
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
                  />
                  <div style={{ marginLeft: '10px' }}></div>
                </FlexDiv>
              </Td>
              <Td>
                <FlexDiv>
                  정은 <Input width={'50px'} type="text" name="interim2_date_yaer" maxLength="4" />년
                  <Input
                    width={'30px'}
                    type="text"
                    name="interim2_date_month"
                    onBlur={onBlurMakeZero}
                    maxLength="2"
                  />
                  월
                  <Input
                    width={'30px'}
                    type="text"
                    name="interim2_date_day"
                    onBlur={onBlurMakeZero}
                    maxLength="2"
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
                一金 <Input type="text" name="balance" onKeyUp={makeCommaNum} onChange={changeSecurity} />
                <div style={{ marginLeft: '10px' }}></div>
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은 <Input width={'50px'} type="text" name="balance_date_year" maxLength="4" />년
                <Input
                  width={'30px'}
                  type="text"
                  name="balance_date_month"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                />
                월
                <Input
                  width={'30px'}
                  type="text"
                  name="balance_date_day"
                  onBlur={onBlurMakeZero}
                  maxLength="2"
                />
                일에 지불한다.
              </FlexDiv>
            </Td>
          </tr>
          {formType === 'sale' && (
            <tr>
              <TdTitle>융 자 금</TdTitle>
              <Td style={{ borderRight: '1px solid #c6cfdc' }}>
                <FlexDiv>
                  一金
                  <Input type="text" name="loan_amount" onKeyUp={makeCommaNum} onChange={changeSecurity} />
                  <div style={{ marginLeft: '10px' }}></div>
                </FlexDiv>
              </Td>
              <Td>
                <FlexDiv>
                  정은 <Input type="text" name="loan_promise" /> 한다
                </FlexDiv>
              </Td>
            </tr>
          )}
          {(formType === 'rental' || formType === 'short') && (
            <tr>
              <TdTitle>차 임</TdTitle>
              <Td style={{ borderRight: '1px solid #c6cfdc' }}>
                <FlexDiv>
                  一金
                  <Input type="text" name="monthly_rent" onKeyUp={makeCommaNum} onChange={changeSecurity} />
                  <div style={{ marginLeft: '10px' }}></div>
                </FlexDiv>
              </Td>
              <Td>
                <FlexDiv>
                  정은 매월 <Input type="text" width={'20px'} name="monthly_rent_payment_day" maxLength="2" />
                  일에 (
                  <input type="radio" id="선불" name="monthly_rent_payment_type" value={1} defaultChecked />
                  <label htmlFor="선불">선불</label>
                  ,
                  <input type="radio" id="후불" name="monthly_rent_payment_type" value={2} />
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
