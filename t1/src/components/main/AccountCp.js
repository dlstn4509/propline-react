import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const AccountWrap = styled.div`
  color: #464d50;
  border: 1px solid #dae1e7;
  border-radius: 5px;
  margin-bottom: 5px;
`;
const Title = styled.div`
  font-size: 14px;
  border-bottom: 1px solid #dae1e7;
  padding: 8px;
`;
const Account = styled.div`
  padding: 8px;
  font-size: 13px;
  color: #464d50;
`;
const ImgWrap = styled.div`
  width: 90px;
  height: 19px;
`;
const LinkWrap = styled(Link)`
  display: flex;
  align-items: center;
`;

const AccountCp = () => {
  return (
    <AccountWrap>
      <Title>무통장 입금 안내</Title>
      <Account>
        <ImgWrap>
          <img src={process.env.REACT_APP_URL + 'img/kb.svg'} alt="" />
        </ImgWrap>
        <div style={{ fontWeight: '600' }}>331301-04-177117</div>
        <div style={{ marginBottom: '10px' }}>주식회사프롭라인(공실클럽)</div>
        <LinkWrap to="/extrapayment" style={{ color: '#888f91' }}>
          부가서비스 결제 바로가기
          <FaAngleRight />
        </LinkWrap>
      </Account>
    </AccountWrap>
  );
};

export default React.memo(AccountCp);

// extrapayment
