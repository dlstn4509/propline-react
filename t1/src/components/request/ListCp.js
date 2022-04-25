import React from 'react';
import styled from '@/style';
import { Link, useNavigate } from 'react-router-dom';

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
  margin-left: ${(props) => props.ml};
`;

const ListCp = ({ lists, setViewIdx }) => {
  const navigate = useNavigate();
  const listClick = (e) => {
    let idx = e.target.dataset['idx'];
    setViewIdx(idx);
    navigate(`/request?idx=${idx}`);
    window.scrollTo(0, 0);
  };
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
        {lists.map((v, i) => (
          <tr key={i}>
            <td>
              {v.item_kind} / {v.idx}
            </td>
            <td>
              {v.sido} {v.sigungu} {v.eupmyeondong}
            </td>
            <td>
              <span data-idx={v.idx} onClick={listClick} style={{ cursor: 'pointer' }}>
                {v.memo}
              </span>
              {v.isNew && (
                <Span bg={'#ffba31'} ml={'10px'}>
                  N
                </Span>
              )}
            </td>
            <td>{v.call_time}</td>
            <td>
              {v.requestLimitDate && <Span>의뢰중</Span>}
              {!v.requestLimitDate && <Span bg={'#888f91'}>기간만료</Span>}
            </td>
            <td>{v.readingCompanyCount}</td>
          </tr>
        ))}
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
