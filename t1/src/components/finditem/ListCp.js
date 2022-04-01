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
  border-bottom: 1px solid #dae1e7;
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
  }
  td {
    padding: 15px 0;
    :nth-child(3) {
      text-align: left;
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
          <th style={{ width: '100px' }}>종류</th>
          <th style={{ width: '100px' }}>유형</th>
          <th style={{ width: '520px' }}>제목</th>
          <th style={{ width: '150px' }}>부동산명</th>
          <th style={{ width: '80px' }}>작성일</th>
          <th>조회</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>빌딩</td>
          <td>
            <span className="sale">매매</span>
          </td>
          <td>청담동 상가주택 매수합니다</td>
          <td>골드공인중개사사무소</td>
          <td>2022-03-30 </td>
          <td>5</td>
        </tr>
        <tr>
          <td>빌딩</td>
          <td>
            <span className="rental">월세</span>
          </td>
          <td>청담동 상가주택 매수합니다</td>
          <td>골드공인중개사사무소</td>
          <td>2022-03-30 </td>
          <td>5</td>
        </tr>
        <tr>
          <td>빌딩</td>
          <td>
            <span className="charter">전세</span>
          </td>
          <td>청담동 상가주택 매수합니다</td>
          <td>골드공인중개사사무소</td>
          <td>2022-03-30 </td>
          <td>5</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
