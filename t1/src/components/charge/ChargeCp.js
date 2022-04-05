import React from 'react';
import styled, { Title, color, Button } from '@/style';
import { Link } from 'react-router-dom';

const ChargeWrapper = styled.div`
  margin-bottom: 50px;
`;
const ChargeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  color: #888f91;
  margin-right: 10px;
  font-weight: 600;
`;
const Btn = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  width: 85px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${(props) => props.mr};
`;
const Tr = styled.tr`
  border-bottom: 1px solid #999;
`;
const FirstTd = styled.td`
  padding: 15px 0;
  text-align: center;
  color: #464d50;
`;
const Td = styled(FirstTd)`
  height: 65px;
  span {
    color: ${color.blue};
    font-size: 13px;
  }
`;
const TdPrice = styled(Td)`
  font-weight: 700;
  color: #464d50;
  span {
    font-size: 10px;
    color: #888f91;
    text-decoration: line-through;
    font-weight: 400;
    margin-left: 10px;
  }
`;
const NoticeWrapper = styled.div``;
const NoticeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ChargeCp = () => {
  return (
    <ChargeWrapper>
      <ChargeWrap>
        <Title>공실클럽 유료서비스 이용 요금</Title>
        <BtnWrap>
          <Text>가입문의 : 1644-5510(내선번호 2번)</Text>
          <Btn bg={'#888f91'} mr={'10px'}>
            결제내역
          </Btn>
          <Btn bg={'#3168FF'}>결제하기</Btn>
        </BtnWrap>
      </ChargeWrap>
      <table style={{ marginBottom: '30px' }}>
        <tbody>
          <tr style={{ borderTop: '1px solid #000', borderBottom: '1px solid #000' }}>
            <FirstTd>기간</FirstTd>
            <FirstTd>아이디2개</FirstTd>
            <FirstTd>아이디4개</FirstTd>
            <FirstTd>아이디8개</FirstTd>
            <FirstTd>아이디15개</FirstTd>
          </tr>
          <Tr>
            <Td>3개월</Td>
            <Td>462,000</Td>
            <Td>660,000</Td>
            <Td>1,056,000</Td>
            <Td>1,485,000</Td>
          </Tr>
          <Tr>
            <Td>
              6개월<span>(5% DC)</span>
            </Td>
            <TdPrice>
              752,400<span>792,000</span>
            </TdPrice>
            <TdPrice>
              1,254,000<span>1,320,000</span>
            </TdPrice>
            <TdPrice>
              2,006,400<span>2,112,000</span>
            </TdPrice>
            <TdPrice>
              2,821,500<span>2,970,000</span>
            </TdPrice>
          </Tr>
          <Tr>
            <Td>
              12개월<span>(10% DC)</span>
            </Td>
            <TdPrice>
              1,425,600<span>1,584,000</span>
            </TdPrice>
            <TdPrice>
              2,376,000<span>2,640,000</span>
            </TdPrice>
            <TdPrice>
              3,801,600<span>4,224,000</span>
            </TdPrice>
            <TdPrice>
              5,346,000<span>5,940,000</span>
            </TdPrice>
          </Tr>
        </tbody>
      </table>
      <NoticeWrapper>
        <NoticeWrap>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={process.env.REACT_APP_URL + 'img/title01.gif'} alt="" style={{ marginRight: '10px' }} />
            <Button>환불안내</Button>
          </div>
          <div style={{ fontWeight: '600' }}>단워:원, VAT 포함</div>
        </NoticeWrap>
        <div>
          <Text>※하나의 아이디로 두 곳에서 동시 접속하는 것은 불가능합니다.</Text>
          <Text>※사무실 밖에서는 로그인되지 않습니다. 이 점 유의하여 이용 바랍니다.</Text>
          <Text>
            ※아이디 개수는 총 사용 아이디 개수로써 만약 사용 아이디 개수가 4개면 대표 아이디 1개와 직원 아이디
            3개로 총 4개의 아이디를 사용하실 수 있습니다.
          </Text>
        </div>
      </NoticeWrapper>
    </ChargeWrapper>
  );
};

export default React.memo(ChargeCp);
