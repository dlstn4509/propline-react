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
  .new {
    width: 18px;
    height: 18px;
    text-align: center;
    background-color: #ffba31;
    border-radius: 3px;
    padding: 0 4px;
    color: #ffffff;
    margin-left: 10px;
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

const ListCp = ({ lists, setViewIdx, page, totalCount }) => {
  const navigate = useNavigate();
  const listClick = useCallback((e) => {
    let idx = e.target.dataset['idx'];
    setViewIdx(idx);
    navigate(`/freeboard?idx=${idx}`);
    window.scrollTo(0, 0);
  }, []);
  return (
    <TableWrap>
      <thead>
        <tr>
          <th style={{ width: '50px' }}>번호</th>
          <th style={{ width: '640px' }}>제목</th>
          <th style={{ width: '100px' }}>작성자</th>
          <th style={{ width: '80px' }}>작성일</th>
          <th style={{ width: '80px' }}>추천수</th>
          <th>조회</th>
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
                paddingLeft: `${v.record_hdepth * 15}px`,
                color: `${v.title_font_color}`,
                fontWeight: `${v.title_font_weight === 'bold' ? 600 : 400}`,
              }}
            >
              {v.record_hdepth > 1 && <img src={process.env.REACT_APP_URL + 'img/re.gif'} alt="" />}
              <span data-idx={v.idx} onClick={listClick} style={{ cursor: 'pointer' }}>
                {v.title}
              </span>
              {v.isNew && <span className="new">N</span>}
            </td>
            <td>{v.member_id}</td>
            <td>{v.reg_date}</td>
            <td>{v.recommend}</td>
            <td>{v.hit}</td>
          </tr>
        ))}
      </tbody>
    </TableWrap>
  );
};

export default React.memo(ListCp);
