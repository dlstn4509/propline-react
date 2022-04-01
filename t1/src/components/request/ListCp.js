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
    :nth-child(3) {
      text-align: left;
      padding-left: 10px;
    }
    span {
    }
  }
  thead {
    background-color: #f9fbfc;
  }
`;
const Span = styled.span`
  padding: 1px 6px;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${(props) => (props.bg ? props.bg : '#7ed48f')};
`;

const ListCp = () => {
  return (
    <TableWrap>
      <thead>
        <tr>
          <th style={{ width: '100px' }}>매물종류</th>
          <th style={{ width: '150px' }}>원하는 지역</th>
          <th style={{ width: '440px' }}>전달사항</th>
          <th style={{ width: '110px' }}>연락가능한시간</th>
          <th style={{ width: '100px' }}>의뢰현황</th>
          <th>연락처 열람</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>다가구</td>
          <td>서울 강남구 역삼동</td>
          <td>
            강남구 주변 신축/리모델링 빌라 보증금 1억~1억 5천에 월세 <Span bg={'#ffba31'}>N</Span>
          </td>
          <td>오전 10시~오후 16시</td>
          <td>
            <Span>의뢰중</Span>
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>다가구</td>
          <td>서울 강남구 역삼동</td>
          <td>
            강남구 주변 신축/리모델링 빌라 보증금 1억~1억 5천에 월세 <Span bg={'#ffba31'}>N</Span>
          </td>
          <td>오전 10시~오후 16시</td>
          <td>
            <Span bg={'#888f91'}>기간만료</Span>
          </td>
          <td>2</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
