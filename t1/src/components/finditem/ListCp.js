import React, { useCallback } from 'react';
import styled, { Button02 } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import store from '@/store/store';

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
    :nth-child(3) {
      text-align: left;
    }
  }
  thead {
    background-color: #f9fbfc;
  }
`;

const ListCp = ({ findItemLists, setItemIdx }) => {
  const navigate = useNavigate();
  const onClick = useCallback((e) => {
    let idx = e.target.dataset['idx'];
    setItemIdx(idx);
    navigate(`/finditem?idx=${idx}`);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ position: 'relative' }}>
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
          {findItemLists.length > 0 &&
            findItemLists.map((v, i) => (
              <tr key={i}>
                <td>
                  {v.idx} / {v.item_type}
                </td>
                <td>
                  <span className={v.className}>{v.trade_type}</span>
                </td>
                <td>
                  <span
                    onClick={onClick}
                    data-idx={v.idx}
                    style={{ cursor: 'pointer', width: 'auto', color: '#464d50' }}
                  >
                    {v.title}
                  </span>
                </td>
                <td>
                  <span
                    onClick={onClick}
                    data-idx={v.idx}
                    style={{ cursor: 'pointer', width: 'auto', color: '#464d50' }}
                  >
                    {v.company_name}
                  </span>
                </td>
                <td>{v.reg_date}</td>
                <td>{v.hit}</td>
              </tr>
            ))}
        </tbody>
      </TableWrap>
      <Button02
        to="/finditem?type=form"
        style={{ color: '#fff' }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        등록
      </Button02>
    </div>
  );
};

export default React.memo(ListCp);
