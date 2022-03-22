import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  .title {
    font-weight: 600;
    font-size: 20px;
  }
  .btn {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    width: 250px;
    text-align: center;
    text-decoration: none;
    background-color: #3168ff;
    padding: 5px 0 6px 0;
    border-radius: 5px;
  }
`;
const SignUpInfo = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #464d50;
  margin-bottom: 40px;
`;

const BusinessSignUpInfoCp = () => {
  return (
    <>
      <TitleWrapper>
        <div className="title">부동산 회원가입</div>
        <div className="btn">
          <Link to="/normalsignup">일반 회원가입(건물주/관리업체/세입자)</Link>
        </div>
      </TitleWrapper>
      <SignUpInfo>
        <div>건물주, 관리인(업체), 세입자는 일반 회원가입을 이용해주세요.</div>
        <div>중개업소의 경우 개설등록증 및 사업자등록증 확인 후 가입이 승인됩니다.</div>
        <div>
          증빙서류는 하단에 파일을 첨부해 주시거나 카카오톡 1:1문의로 보내주시면 승인 처리 도와드리겠습니다.
        </div>
        <div>문자메시지(010-4028-4980)나 팩스(02-549-0561)도 가능합니다.</div>
        <div>공실클럽의 매물정보 이용시 별도의 추가요금이 발생할 수 있습니다.</div>
      </SignUpInfo>
    </>
  );
};

export default React.memo(BusinessSignUpInfoCp);
