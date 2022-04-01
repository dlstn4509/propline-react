import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const TableWrap = styled.table`
  height: 45px;
  text-align: center;
  padding: 15px 0;
  font-size: 13px;
  color: #464d50;
  border-top: 1px solid #dae1e7;
  margin-bottom: 50px;
  span {
    width: 36px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    background-color: #7ed48f;
  }
  th {
    padding: 15px 0;
    border-bottom: 1px solid #dae1e7;
  }
  td {
    padding: 15px 0;
    border-bottom: 1px solid #dae1e7;
    :nth-child(2) {
      text-align: left;
      padding-left: 10px;
    }
  }
  thead {
    background-color: #f9fbfc;
  }
`;

const ListCp = () => {
  return (
    <TableWrap>
      <thead>
        <tr>
          <th style={{ width: '45px' }}>번호</th>
          <th style={{ width: '830px' }}>제목</th>
          <th style={{ width: '80px' }}>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>중요</span>
          </td>
          <td style={{ color: 'red', fontWeight: 'bold' }}>[주식회사 프롭라인] 사명 변경 안내</td>
          <td>2022-03-30</td>
          <td>5</td>
        </tr>
        <tr>
          <td>72</td>
          <td>2022년 3월 14일(월) 시스템 점검 안내</td>
          <td>2022-03-30</td>
          <td>5</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
