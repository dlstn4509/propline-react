import React from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';

const CardGuideWrap = styled.div`
  font-size: 13px;
  color: #464d50;
  margin-bottom: 70px;
  span {
    color: ${color.blue};
  }
`;

const CardGuideCp = () => {
  return (
    <CardGuideWrap>
      <div>※ 신용카드 결제는 자동으로 결제 완료 처리되어 바로 서비스 이용이 가능합니다.</div>
      <div>
        ※ 부가가치세법 시행령 제57조의 제2항 "신용카드 매출전표 등을 교부한 경우에는 세금 계산서를 교부하지
        아니한다."의 기준에 따라 <span>신용카드 결제의 경우 별도의 세금계산서를 발급하지 않습니다.</span>
      </div>
      <div>
        ※ 단 종업원, 가족 명의의 카드로 결제한 경우 요청하시면 발급 도와드리겠습니다.
        <span>요청은 결제 달 익월 10일까지 해주셔야 하며, 이후에는 발급이 불가한 점 양해 부탁드립니다.</span>
      </div>
      <div>※ 결제 관련 문의 1644-5510(내선번호 2번)</div>
    </CardGuideWrap>
  );
};

export default React.memo(CardGuideCp);
