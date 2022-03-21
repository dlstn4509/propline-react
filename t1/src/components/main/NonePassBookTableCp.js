import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const NonePassBookTable = styled.div`
  border: 1px solid #dae1e7;
  margin-top: 6px;
  border-radius: 5px;
`;
const Tit = styled.div`
  font-size: 14px;
  color: #464d50;
  padding: 8px 0 8px 15px;
`;
const Con = styled.div`
  border-top: 1px solid #dae1e7;
  padding: 9px 13px;
`;
const KbImg = styled.img`
  width: 90px;
`;
const AccountNum = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #464d50;
`;
const AccountName = styled.div`
  font-size: 13px;
  color: #464d50;
`;
const ExtraServiceLink = styled(Link)`
  display: inline-block;
  font-size: 13px;
  margin-top: 10px;
  :hover {
    text-decoration: underline;
  }
`;

const NonePassBookTableCp = () => {
  return (
    <NonePassBookTable>
      <Tit>무통장 입금안내</Tit>
      <Con>
        <KbImg src={process.env.REACT_APP_URL + 'img/kb.svg'} />
        <AccountNum>331301-04-177117</AccountNum>
        <AccountName>주식회사프롭라인(공실클럽)</AccountName>
        <ExtraServiceLink to="/main" style={{ color: '#888f91' }}>
          부가서비스 결제 바로가기 &#62;
        </ExtraServiceLink>
      </Con>
    </NonePassBookTable>
  );
};

export default React.memo(NonePassBookTableCp);
