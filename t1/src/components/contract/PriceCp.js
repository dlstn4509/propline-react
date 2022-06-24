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

const PriceCp = () => {
  return (
    <PriceCpWrapper>
      <Title>2.계약내용</Title>
      <TextWrpa>
        제 1조 위 부동산의 매매에 있어 매매대금 및 매수인의 대금 지불시기는 다음과 같다.
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
            <TdTitle>매매대금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" />
              </FlexDiv>
            </Td>
            <Td>정(￦ )</Td>
          </tr>
          <tr>
            <TdTitle>계약금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" />
              </FlexDiv>
            </Td>
            <Td>정은 계약시에 지불하고 영수함.</Td>
          </tr>
          <tr>
            <TdTitle>1차중도금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" />
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은 <Input width={'50px'} type="text" />년 <Input width={'30px'} type="text" />월
                <Input width={'30px'} type="text" />
                일에
              </FlexDiv>
            </Td>
          </tr>
          <tr>
            <TdTitle>2차중도금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" />
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은 <Input width={'50px'} type="text" />년 <Input width={'30px'} type="text" />월
                <Input width={'30px'} type="text" />
                일에
              </FlexDiv>
            </Td>
          </tr>
          <tr>
            <TdTitle>잔 금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" />
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은 <Input width={'50px'} type="text" />년 <Input width={'30px'} type="text" />월
                <Input width={'30px'} type="text" />
                일에 지불한다.
              </FlexDiv>
            </Td>
          </tr>
          <tr>
            <TdTitle>융 자 금</TdTitle>
            <Td style={{ borderRight: '1px solid #c6cfdc' }}>
              <FlexDiv>
                一金 <Input type="text" />
              </FlexDiv>
            </Td>
            <Td>
              <FlexDiv>
                정은 <Input type="text" /> 한다
              </FlexDiv>
            </Td>
          </tr>
        </tbody>
      </TableWrap>
    </PriceCpWrapper>
  );
};

export default React.memo(PriceCp);
