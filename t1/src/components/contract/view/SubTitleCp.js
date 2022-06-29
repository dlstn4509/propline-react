import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SubTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;
const Text = styled.div`
  font-size: 14px;
  color: #464d50;
`;

const SubTitleCp = ({ tradeType }) => {
  return (
    <SubTitleWrapper>
      {tradeType === 1 && (
        <>
          <SubTitle>부동산 매매 계약서</SubTitle>
          <Text>
            아래 표시 부동산에 대하여 매도인과 매수인은 합의에 의하여 다음과 같이 매매계약을 체결한다.
          </Text>
        </>
      )}
      {tradeType !== 1 && (
        <>
          {tradeType === 2 && <SubTitle>부동산 임대차(전세) 계약서</SubTitle>}
          {tradeType === 3 && <SubTitle>부동산 임대차(월세) 계약서</SubTitle>}
          {tradeType === 4 && <SubTitle>부동산 단기임대 계약서</SubTitle>}
          <Text>
            아래 표시 부동산에 대하여 임대인과 임차인 쌍방은 합의에 의하여 다음과 같이 임대차계약을 체결한다.
          </Text>
        </>
      )}
    </SubTitleWrapper>
  );
};

export default React.memo(SubTitleCp);
