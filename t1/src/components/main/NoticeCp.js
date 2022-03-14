import React from 'react';
import styled, { Table } from '../../style';

const TableWrap = styled(Table)`
  margin-right: 40px;
`;

const NoticeCp = () => {
  return (
    <TableWrap>
      <thead>
        <tr>
          <th>
            <div className="title" style={{ display: 'flex' }}>
              공지사항 <span style={{ marginLeft: 'auto' }}>더보기</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2022년 3월 14일(월) 시스템 점검... N</td>
        </tr>
        <tr>
          <td>공동중개 등록 정책 변경 안내</td>
        </tr>
        <tr>
          <td>공실클럽 3월 휴무관련 안내</td>
        </tr>
        <tr>
          <td>[이벤트] 공실클럽 공실제보 이벤트</td>
        </tr>
        <tr>
          <td>공실클럽 설 연휴 일정관련 공지(01월 ...</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(NoticeCp);
