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
    :nth-child(4) {
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
          <th style={{ width: '80px' }}>시</th>
          <th style={{ width: '80px' }}>구</th>
          <th style={{ width: '80px' }}>동</th>
          <th style={{ width: '450px' }}>제목</th>
          <th style={{ width: '150px' }}>부동산명</th>
          <th style={{ width: '80px' }}>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>서울</td>
          <td>관악구</td>
          <td>봉천동</td>
          <td style={{ display: 'flex', alignItems: 'center' }}>
            ▶비율제 실장님 모십니다◀경력⁄신입 모두 환영입니다▶광고지원빵빵합니다◀
            <FaCamera style={{ marginLeft: '5px', color: `${color.blue}` }} />
          </td>
          <td>하나엠케이공인중개사사무소</td>
          <td>2022-04-01</td>
          <td>142</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
