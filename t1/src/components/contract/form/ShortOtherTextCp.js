import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const ShortOtherTextCpWrap = styled.div`
  margin-bottom: 30px;
`;
const MainTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const TextWrap = styled(FlexDiv)`
  font-size: 13px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  width: 40px;
  margin-bottom: auto;
`;
const Text = styled.div`
  width: 920px;
  margin-bottom: ${(props) => props.mb};
`;
const ContractorInfoWrap = styled(FlexDiv)`
  justify-content: center;
`;
const Input = styled.input`
  border: 1px solid #c6cfdc;
  height: 18px;
  font-size: 9pt;
  width: ${(props) => props.width};
  margin-left: 10px;
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;

const ShortOtherTextCp = () => {
  return (
    <ShortOtherTextCpWrap>
      <MainTitle>7. 기타 내역</MainTitle>
      <TextWrap>
        <Title>1. </Title>
        <Text>
          본 계약은 단기 사용을 목적으로 하는 임대차계약이므로 임차인은 주택임대차보호법을 주장하여 임대인에게
          대항 할 수 없다.
        </Text>
      </TextWrap>
      <TextWrap>
        <Title>2. </Title>
        <Text>
          임대인은 임차인이 위 부동산을 임대차 목적대로 사용·수익할 수 있도록 성실히 노력하여야 한다.
        </Text>
      </TextWrap>
      <TextWrap>
        <Title>3. </Title>
        <Text>
          임대차기간중에 발생하는 임차인물품 및 차량의 도난,분실,파손에 대하여는 임차인이 책임을 진다.
        </Text>
      </TextWrap>
      <TextWrap>
        <Title>4. </Title>
        <Text>
          고성방가,동물사육,불법행위 기타 공동생활에 심대한 장애를 초래하는 사유가 발생할 경우 임대인은 본
          계약을 해지하고 즉시 퇴실할 것을 명할 수 있다.
        </Text>
      </TextWrap>
      <TextWrap>
        <Title>5. </Title>
        <Text>임차인은 예치금납입을 이유로 임대인의 월차임청구에 거절할 수 없다.</Text>
      </TextWrap>
      <TextWrap>
        <Title>6. </Title>
        <Text>
          임차인이 차임일10일 이상 월세를 체납하는 경우 임대인은 즉시 계약을 해지하고 퇴실을 명할 수
          있으며,전기,가스,수도 공급차단 및 열쇠교체등의 행위를 할 수 있으며,이때 발생하는 모든 비용은
          임차인이 부담하여야 한다.
        </Text>
      </TextWrap>
      <TextWrap>
        <Title>7. </Title>
        <Text>
          임대료 체납으로 인한 강제퇴실의 경우 임대인은 임차인의 물품보관의무가 없으며, 임차인이 임대료 완납
          및 물품회수에 성실하게 임하지 아니하는 경우 임대인은 이를 물품소유권에 대한 포기로 간주하고 물품을
          임의로 처분하여 체납된 임대료에 충당할 수 있고,임차인은 이에 대한 일체의 민,형사상 책임을 묻지
          않기로 약정하고 상기의 물품처분권한을 임대인에게 다음과 같이 위임한다.
        </Text>
      </TextWrap>
      <ContractorInfoWrap>
        {'<< 위임자(임차인) 주민등록번호 :'}
        <Input type="text" width={'150px'} />
        &nbsp;
        {', 성 명 :'}
        <Input type="text" width={'150px'} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {'(인) >>'}
      </ContractorInfoWrap>
    </ShortOtherTextCpWrap>
  );
};

export default React.memo(ShortOtherTextCp);
