import React from 'react';
import styled, { Table } from '../../style';

const TableWrap = styled(Table)``;

const Questions = () => {
  return (
    <TableWrap>
      <thead>
        <tr>
          <th>
            <div className="title" style={{ display: 'flex' }}>
              자주하는질문 <span style={{ marginLeft: 'auto' }}>더보기</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>일반지도에 숫자가 표시되지 않아요</td>
        </tr>
        <tr>
          <td>Q.안심번호(050)로도 문자 발송이 가...</td>
        </tr>
        <tr>
          <td>Q.공실클럽 결제하면 네이버 광고도 올릴...</td>
        </tr>
        <tr>
          <td>Q.매물 확인은 결제를 해야만 이용이 가...</td>
        </tr>
        <tr>
          <td>공실클럽 로그인이 안돼요</td>
        </tr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(Questions);
