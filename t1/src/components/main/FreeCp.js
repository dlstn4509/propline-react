import React from 'react';
import styled, { Table } from '../../style';

const FreeCpWrap = styled.div`
  width: 370px;
  .plus {
    margin-left: auto;
  }
`;

const TableWrap = styled(Table)``;

const FreeCp = () => {
  return (
    <FreeCpWrap>
      <TableWrap>
        <thead>
          <tr>
            <th colSpan="3">
              <div className="title" style={{ display: 'flex' }}>
                무료공개매물관
                <span className="plus">더보기</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>일반룸</td>
            <td>강남구 논현동</td>
            <td>월 15,000 / 90</td>
          </tr>
          <tr>
            <td>일반룸</td>
            <td>강남구 논현동</td>
            <td>월 15,000 / 90</td>
          </tr>
          <tr>
            <td>일반룸</td>
            <td>강남구 논현동</td>
            <td>월 15,000 / 90</td>
          </tr>
          <tr>
            <td>일반룸</td>
            <td>강남구 논현동</td>
            <td>월 15,000 / 90</td>
          </tr>
        </tbody>
      </TableWrap>
    </FreeCpWrap>
  );
};

export default React.memo(FreeCp);
