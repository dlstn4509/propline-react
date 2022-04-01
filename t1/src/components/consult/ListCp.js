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
    &.sale {
      background-color: #c281c6;
    }
    &.rental {
      background-color: #8abcff;
    }
    &.charter {
      background-color: #7ed48f;
    }
  }
  th {
    padding: 15px 0;
    border-bottom: 1px solid #dae1e7;
  }
  td {
    padding: 15px 0;
    border-bottom: 1px solid #dae1e7;
    :nth-child(1) {
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
          <th style={{ width: '790px' }}>제목</th>
          <th style={{ width: '60px' }}>작성자</th>
          <th style={{ width: '80px' }}>작성일</th>
          <th>조회</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>다세대주택 및 근린생활시설 쪼개기 방에대한 최우선변제발...</td>
          <td>김강현</td>
          <td>2022-03-30 </td>
          <td>5</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
