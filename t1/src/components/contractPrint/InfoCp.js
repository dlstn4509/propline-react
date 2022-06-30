import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const InfoCpWrap = styled.div`
  font-family: 굴림, 돋움, Arial, verdana, sans-serif;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
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
`;

const InfoCp = ({ contract }) => {
  return (
    <InfoCpWrap>
      <Title>1. 부동산의 표시</Title>
      <Table className="table table-bordered">
        <colgroup>
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
        </colgroup>
        <tbody>
          <tr>
            <TdTitle>소재지</TdTitle>
            <Td colSpan={6}>
              {contract.sido} {contract.sigungu} {contract.eupmyeondong} {contract.bunji}, &nbsp;
              {contract.detail_address}
            </Td>
          </tr>
          <tr>
            <TdTitle>토지</TdTitle>
            <TdTitle>지목</TdTitle>
            <Td colSpan={3}>{contract.land_purpose}</Td>
            <TdTitle>면적</TdTitle>
            <Td>{contract.land_area} m²</Td>
          </tr>
          <tr>
            <TdTitle>건물</TdTitle>
            <TdTitle>구조</TdTitle>
            <Td>{contract.building_structure}</Td>
            <TdTitle>용도</TdTitle>
            <Td>{contract.building_use}</Td>
            <TdTitle>면적</TdTitle>
            <Td>{contract.building_area}</Td>
          </tr>
        </tbody>
      </Table>
    </InfoCpWrap>
  );
};

export default React.memo(InfoCp);
