import React from 'react';
import styled, { Table } from '../../style';

const RealTimeCpWrap = styled.div`
  width: 370px;
  margin-right: 40px;
  .plus {
    margin-left: auto;
  }
`;

const TableWrap = styled(Table)``;

const RealTimeCp = () => {
  return (
    <RealTimeCpWrap>
      <TableWrap>
        <thead>
          <tr>
            <th colSpan="3">
              <div className="title" style={{ display: 'flex' }}>
                실시간 공실매물
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
    </RealTimeCpWrap>
  );
};

export default React.memo(RealTimeCp);
