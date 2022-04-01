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
          <th style={{ width: '155px' }}>지역</th>
          <th style={{ width: '390px' }}>제목</th>
          <th style={{ width: '300px' }}>거래금액</th>
          <th style={{ width: '100px' }}>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>서울 서초구 서초동</td>
          <td>함께 사무소를 키워나갈 중개사님 모십니다</td>
          <td>1500/125/0/1500</td>
          <td>2022-03-30</td>
          <td>5</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
