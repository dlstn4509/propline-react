import React from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';

const TableWrap = styled.table`
  height: 45px;
  text-align: center;
  padding: 15px 0;
  font-size: 13px;
  color: #464d50;
  border-top: 1px solid #dae1e7;
  margin-bottom: 50px;
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
          <th style={{ width: '50px' }}>번호</th>
          <th style={{ width: '620px' }}>제목</th>
          <th style={{ width: '150px' }}>부동산명</th>
          <th style={{ width: '80px' }}>작성일</th>
          <th style={{ width: '50px' }}>조회</th>
          <th>사진</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>51411</td>
          <td>청담동 상가주택 매수합니다</td>
          <td>골드공인중개사사무소</td>
          <td>2022-03-30 </td>
          <td>5</td>
          <td style={{ color: `${color.blue}` }}>
            <FaCamera />
          </td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
