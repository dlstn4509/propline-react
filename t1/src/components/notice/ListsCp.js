import React, { useCallback } from 'react';
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
  .span {
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

const ListsCp = ({ lists, page, totalCount, setViewIdx }) => {
  const navigate = useNavigate();
  const listClick = useCallback((e) => {
    let idx = e.target.dataset['idx'];
    setViewIdx(idx);
    navigate(`/notice?idx=${idx}`);
    window.scrollTo(0, 0);
  }, []);
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
        {lists.map((v, i) => (
          <tr key={i}>
            <td>
              {v.is_top_rank === 1 ? <span className="span">중요</span> : totalCount - i - (page - 1) * 20}
            </td>
            <td
              style={{
                color: `${v.title_font_color}`,
                fontWeight: `${v.title_font_weight === 'bold' ? 600 : 400}`,
              }}
            >
              <span data-idx={v.idx} onClick={listClick} style={{ cursor: 'pointer' }}>
                {v.title}
              </span>
            </td>
            <td>{v.reg_date}</td>
            <td>{v.hit}</td>
          </tr>
        ))}
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListsCp);
