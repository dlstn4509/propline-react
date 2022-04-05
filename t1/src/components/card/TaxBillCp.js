import React from 'react';
import styled, { Title, color } from '@/style';
import { Link } from 'react-router-dom';

const TaxBillWrapper = styled.div`
  margin-bottom: 70px;
`;
const TaxBillWrap = styled.div`
  border-top: 2px solid #999;
  font-size: 14px;
  color: #464d50;
  padding-top: 23px;
  font-size: 13px;
  color: #464d50;
  span {
    color: ${color.blue};
  }
`;
const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  input {
    margin-right: 5px;
  }
  div {
    margin-right: 50px;
  }
`;
const Tr = styled.tr`
  height: 50px;
`;
const Td = styled.td`
  width: 100px;
  font-size: 14px;
  font-weight: 500;
  color: #464d50;
  text-align: left;
`;
const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '354px')};
`;
const BarSpan = styled.span`
  margin: 0 3px;
`;
const TextWrap = styled.div``;

const TaxBillCp = () => {
  return (
    <TaxBillWrapper>
      <Title>세금계산서</Title>
      <TaxBillWrap>
        <RadioWrap>
          <input type="radio" name="taxbill" defaultChecked />
          <div>발급 신청안함</div>
          <input type="radio" name="taxbill" />
          <div>발급신청</div>
        </RadioWrap>
        <table style={{ marginBottom: '30px' }}>
          <tbody>
            <Tr>
              <Td>사업자등록번호</Td>
              <td style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                <Input type="text" width={'111px'} />
                <BarSpan>-</BarSpan>
                <Input type="text" width={'111px'} />
                <BarSpan>-</BarSpan>
                <Input type="text" width={'111px'} />
              </td>
              <Td>회사상호</Td>
              <td>
                <Input type="text" />
              </td>
            </Tr>
            <Tr>
              <Td>대표자</Td>
              <td>
                <Input type="text" />
              </td>
              <Td>업태</Td>
              <td>
                <Input type="text" />
              </td>
            </Tr>
            <Tr>
              <Td>종목</Td>
              <td>
                <Input type="text" />
              </td>
              <Td>사업자주소</Td>
              <td>
                <Input type="text" />
              </td>
            </Tr>
            <Tr>
              <Td>이메일주소</Td>
              <td>
                <Input type="text" style={{ width: '354px' }} />
              </td>
              <td colSpan="2" style={{ color: '#888f91' }}>
                *전자세금계산서는 반드시 이메일주소를 필요로 합니다.
              </td>
            </Tr>
          </tbody>
        </table>
        <div>
          ※ <span>무통장 입금은 평일 업무시간에 결제 확인 가능하며 확인 후 서비스 이용이 가능합니다.</span>
          (토요일/일요일/공휴일 휴무)
        </div>
        <div>※ 실시간 계좌이체/가상계좌는 자동으로 결제 완료 처리되어 바로 서비스 이용이 가능합니다.</div>
        <div>
          ※ 세금계산서 발급 신청을 하지 않으신 경우
          <span>결제 달 익월 10일까지 요청해 주셔야 발급이 가능</span>한 점 꼭 확인 부탁드립니다.
        </div>
        <div>※ 결제 관련 문의 1644-5510(내선번호 2번)</div>
      </TaxBillWrap>
    </TaxBillWrapper>
  );
};

export default React.memo(TaxBillCp);
