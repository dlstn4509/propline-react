import React from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';

const GPointInfoWrap = styled.div`
  height: 205px;
  padding: 20px;
  background-color: #f9fbfc;
  font-size: 13px;
  font-weight: 400;
  color: #464d50;
  margin-bottom: 50px;
  span {
    display: inline-block;
    color: ${color.blue};
    margin-right: 40px;
    width: 130px;
  }
`;
const GPointInfo = styled.div`
  margin-bottom: 20px;
`;

const GPointInfoCp = () => {
  return (
    <GPointInfoWrap>
      <GPointInfo>
        <span>G포인트란?</span>공실클럽 광고비 결제, 네이버 부동산 쿠폰 결제시 현금처럼 사용 가능한
        포인트입니다.
      </GPointInfo>
      <GPointInfo>
        <span>G포인트 적립 이벤트</span> 1. 부동산 팁&노하우 글 작성 시 1건당 500P 적립
        <div style={{ marginLeft: '172px' }}>2. 공동중개 매물 등록 시 1건당 500P 적립</div>
        <div style={{ marginLeft: '172px' }}>3. 계약 완료, 정보 수정 신고 시 1건당 500P 적립</div>
      </GPointInfo>
      <GPointInfo>
        <span>적립이벤트 기간</span>이벤트 종료 시까지
      </GPointInfo>
      <GPointInfo>
        <span>G포인트 사용방법</span>최소 10,000P(1만 원)부터 사용 가능(최대 50,000P까지 사용, 포인트만 사용
        결제 불가) 결제 시 고객센터로 문의 바랍니다.
      </GPointInfo>
    </GPointInfoWrap>
  );
};

export default React.memo(GPointInfoCp);
