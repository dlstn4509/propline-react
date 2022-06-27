import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const PriceCpWrapper = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const TextWrpa = styled.div`
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

const PriceCp = ({ formType }) => {
  return (
    <PriceCpWrapper>
      {formType !== 'short' && <Title>2.계약내용</Title>}
      {formType === 'short' && <Title>3. 예치금 및 차임등의 지불 약정</Title>}
      <TextWrpa>
        {formType === 'sale'
          ? '제 1조 위 부동산의 매매에 있어 매매대금 및 매수인의 대금 지불시기는 다음과 같다.'
          : formType === 'short'
          ? '위 부동산의 임대차에 대하여 임차인은 예치금 및 차임등을 아래와 같이 지불 한다.'
          : '제1조 위 부동산의 임대차에 있어 임차인은 임대차보증금을 아래와 같이 지불하기로 한다.'}
        <div>※ 금액은 숫자로 입력하십시오.</div>
      </TextWrpa>
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
                <Input type="text" name={formType === 'sale' ? 'selling_amount' : 'security'} />
              </FlexDiv>
            </Td>
            <Td>정(￦ )</Td>
          </tr>
          <tr>
            <TdTitle>계약금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" name="earnest" />
              </FlexDiv>
            </Td>
            <Td>정은 계약시에 지불하고 영수함.</Td>
          </tr>
          <tr>
            <TdTitle>{formType === 'sale' && '1차'}중도금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" name="interim1_amount" />
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은 <Input width={'50px'} type="text" name="interim1_date_year" />년
                <Input width={'30px'} type="text" name="interim1_date_month" />월
                <Input width={'30px'} type="text" name="interim1_date_day" />
                일에
              </FlexDiv>
            </Td>
          </tr>
          {formType === 'sale' && (
            <tr>
              <TdTitle>2차중도금</TdTitle>
              <Td style={{ borderRight: '1px solid #c6cfdc' }}>
                <FlexDiv>
                  一金 <Input type="text" name="interim2_amount" />
                </FlexDiv>
              </Td>
              <Td>
                <FlexDiv>
                  정은 <Input width={'50px'} type="text" name="interim2_date_yaer" />년
                  <Input width={'30px'} type="text" name="interim2_date_month" />월
                  <Input width={'30px'} type="text" name="interim2_date_day" />
                  일에
                </FlexDiv>
              </Td>
            </tr>
          )}
          <tr>
            <TdTitle>잔 금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" name="balance" />
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은 <Input width={'50px'} type="text" name="balance_date_year" />년
                <Input width={'30px'} type="text" name="balance_date_month" />월
                <Input width={'30px'} type="text" name="balance_date_day" />
                일에 지불한다.
              </FlexDiv>
            </Td>
          </tr>
          {formType === 'sale' && (
            <tr>
              <TdTitle>융 자 금</TdTitle>
              <Td style={{ borderRight: '1px solid #c6cfdc' }}>
                <FlexDiv>
                  一金 <Input type="text" name="loan_amount" />
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
                  一金 <Input type="text" />
                </FlexDiv>
              </Td>
              <Td>
                <FlexDiv>
                  정은 매월 <Input type="text" width={'20px'} />
                  일에 (<input type="radio" id="선불" name="monthly_rent_payment_type" />
                  <label htmlFor="선불">선불</label>
                  ,
                  <input type="radio" id="후불" name="monthly_rent_payment_type" />
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
