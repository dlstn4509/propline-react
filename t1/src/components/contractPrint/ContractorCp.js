import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const ContractorCpWrap = styled.div`
  font-family: 굴림, 돋움, Arial, verdana, sans-serif;
  margin-bottom: 10px;
`;
const Table = styled.table`
  border: 1px solid #000;
  tbody {
    tr {
      height: 21px;
      border-bottom: 1px solid #000;
      :last-child {
        border-bottom: none;
      }
      td {
        border-right: 1px solid #000;
        :last-child {
          border-right: none;
        }
      }
    }
  }
`;
const TdTitle = styled.td`
  background-color: #dddddd;
  text-align: center;
`;
const Td = styled.td`
  padding: 0 10px;
  span {
    color: #464d50;
    font-weight: 600;
  }
`;

const ContractorCp = ({ contract }) => {
  return (
    <ContractorCpWrap>
      <Table>
        <colgroup>
          <col width={'6%'} />
          <col width={'14%'} />
          <col width={'20%'} />
          <col width={'5%'} />
          <col width={'20%'} />
          <col width={'5%'} />
          <col width={'20%'} />
          <col width={'10%'} />
        </colgroup>
        <tbody>
          <tr>
            <TdTitle rowSpan={3}>
              매<br />도<br />인
            </TdTitle>
            <TdTitle>주소</TdTitle>
            <Td colSpan={5}>{contract.grantor_address}</Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </tr>
          <tr>
            <TdTitle>
              {contract.grantor_identity_no_type === 1
                ? '주민등록번호'
                : contract.grantor_identity_no_type === 2
                ? '생년월일'
                : contract.grantor_identity_no_type === 3
                ? '사업자번호'
                : '법인등록번호'}
            </TdTitle>
            <Td>{contract.grantor_identity_no}</Td>
            <TdTitle>전화</TdTitle>
            <Td>{contract.grantor_phone}</Td>
            <TdTitle>
              성명
              <br />
              또는
              <br />
              상호
            </TdTitle>
            <Td style={{ borderRight: '1px solid #000' }}>{contract.grantor_name}</Td>
          </tr>
          <tr>
            <TdTitle>{contract.grantor_proxy_type === 1 ? '대리인' : '공동명의자'}</TdTitle>
            <Td colSpan={5} style={{ borderRight: '1px solid #000' }}>
              {contract.grantor_proxy_name}
            </Td>
          </tr>
          <tr>
            <TdTitle rowSpan={3}>
              매<br />수<br />인
            </TdTitle>
            <TdTitle>주소</TdTitle>
            <Td colSpan={5}>{contract.grantee_address}</Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </tr>
          <tr>
            <TdTitle>
              {contract.grantee_identity_no_type === 1
                ? '주민등록번호'
                : contract.grantee_identity_no_type === 2
                ? '생년월일'
                : contract.grantee_identity_no_type === 3
                ? '사업자번호'
                : '법인등록번호'}
            </TdTitle>
            <Td>{contract.grantee_identity_no}</Td>
            <TdTitle>전화</TdTitle>
            <Td>{contract.grantee_phone}</Td>
            <TdTitle>
              성명
              <br />
              또는
              <br />
              상호
            </TdTitle>
            <Td style={{ borderRight: '1px solid #000' }}>{contract.grantee_name}</Td>
          </tr>
          <tr>
            <TdTitle>{contract.grantee_proxy_type === 1 ? '대리인' : '공동명의자'}</TdTitle>
            <Td colSpan={5} style={{ borderRight: '1px solid #000' }}>
              {contract.grantee_proxy_name}
            </Td>
          </tr>
          <tr>
            <TdTitle rowSpan={3}>
              개업
              <br />
              공인
              <br />
              중개사
            </TdTitle>
            <TdTitle>사무소재지</TdTitle>
            <Td colSpan={5}>{contract.agent1_office_address}</Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </tr>
          <tr>
            <TdTitle>사무소명</TdTitle>
            <Td colSpan={3}>{contract.agent1_office_name}</Td>
            <TdTitle>전화</TdTitle>
            <Td style={{ borderRight: '1px solid #000' }}>{contract.agent1_office_phone}</Td>
          </tr>
          <tr>
            <TdTitle>등록번호</TdTitle>
            <Td colSpan={3}>{contract.agent1_office_registration_no}</Td>
            <TdTitle>대표</TdTitle>
            <Td style={{ borderRight: '1px solid #000' }}>{contract.agent1_office_ceo_name}</Td>
          </tr>
          <tr>
            <TdTitle rowSpan={3}>
              개업
              <br />
              공인
              <br />
              중개사
            </TdTitle>
            <TdTitle>사무소재지</TdTitle>
            <Td colSpan={5}>{contract.agent2_office_address}</Td>
            <Td rowSpan={3} style={{ textAlign: 'center' }}>
              (인)
            </Td>
          </tr>
          <tr>
            <TdTitle>사무소명</TdTitle>
            <Td colSpan={3}>{contract.agent2_office_name}</Td>
            <TdTitle>전화</TdTitle>
            <Td style={{ borderRight: '1px solid #000' }}>{contract.agent2_office_phone}</Td>
          </tr>
          <tr>
            <TdTitle>등록번호</TdTitle>
            <Td colSpan={3}>{contract.agent2_office_registration_no}</Td>
            <TdTitle>대표</TdTitle>
            <Td style={{ borderRight: '1px solid #000' }}>{contract.agent2_office_ceo_name}</Td>
          </tr>
        </tbody>
      </Table>
    </ContractorCpWrap>
  );
};

export default React.memo(ContractorCp);
