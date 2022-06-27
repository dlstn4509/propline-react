import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const ListsCpWrap = styled.div`
  margin-bottom: 30px;
`;
const TableWrap = styled.table`
  border-top: 1px solid #dde2e6;
  thead {
    height: 45px;
    text-align: center;
    background-color: #f9fbfc;
    padding: 15px 0 15px 0;
    font-size: 13px;
    color: #464d50;
    border-bottom: 1px solid #dde2e6;
  }
  tbody {
    text-align: center;
    height: 45px;
    tr {
      border-bottom: 1px solid #dde2e6;
    }
  }
`;

const ListsCp = () => {
  return (
    <ListsCpWrap>
      <TableWrap>
        <colgroup>
          <col style={{ width: '105px' }} />
          <col style={{ width: '160px' }} />
          <col style={{ width: '160px' }} />
          <col style={{ width: '160px' }} />
          <col style={{ width: '160px' }} />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>소재지</th>
            <th>매도인</th>
            <th>매수인</th>
            <th>작성일</th>
            <th>확인설명서</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>서울</td>
            <td>매도인</td>
            <td>매수인</td>
            <td>2022-06-27</td>
            <td>확인설명서</td>
          </tr>
        </tbody>
      </TableWrap>
    </ListsCpWrap>
  );
};

export default React.memo(ListsCp);
