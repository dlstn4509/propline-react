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
          <th style={{ width: '720px' }}>제목</th>
          <th style={{ width: '100px' }}>작성자</th>
          <th style={{ width: '80px' }}>작성일</th>
          <th>조회</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>982</td>
          <td>홍남기 "1주택 보유세 완화 검토…외국인 불법 임대업 차단"(종합)</td>
          <td>ach5553</td>
          <td>2022-03-30 </td>
          <td>5</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
