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
    width: 20px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    background-color: #ffba31;
    margin-left: 6px;
  }
  th {
    padding: 15px 0;
    border-bottom: 1px solid #dae1e7;
  }
  td {
    padding: 15px 0;
    border-bottom: 1px solid #dae1e7;
    :nth-child(3) {
      text-align: left;
      padding-left: 10px;
    }
    &.admin {
      padding-left: 20px;
      color: #888f91;
    }
  }
  thead {
    background-color: #f9fbfc;
  }
`;

const ListSaleCp = () => {
  return (
    <TableWrap>
      <thead>
        <tr>
          <th style={{ width: '50px' }}>번호</th>
          <th style={{ width: '90px' }}>분류</th>
          <th style={{ width: '630px' }}>주소</th>
          <th style={{ width: '100px' }}>작성자</th>
          <th style={{ width: '80px' }}>작성일</th>
          <th>조회</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>85199</td>
          <td>계약완료</td>
          <td>
            서울 관악구 봉천동 1562-4 3층 302호<span>N</span>
          </td>
          <td>dlfemdqnehdt</td>
          <td>2022-04-01</td>
          <td>0</td>
        </tr>
        <tr>
          <td>85199</td>
          <td>계약완료</td>
          <td className="admin">
            <img src={process.env.REACT_APP_URL + 'img/re.gif'} alt="" />
            [완료]회원님께서 신고해주신 정보를 수정하였습니다.
          </td>
          <td>공실클럽</td>
          <td>2022-04-01</td>
          <td>0</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListSaleCp);
