import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const InfoCpWrapper = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const TableWrap = styled.table`
  color: #000000;
  font-size: 9pt;
  line-height: 11pt;
  border-top: solid 2px #000000;
  border-bottom: solid 2px #000000;
  tbody {
    tr {
      height: 50px;
      border-bottom: 1px solid #c6cfdc;
      :last-child {
        border-bottom: none;
      }
    }
  }
`;
const TdTitle = styled.td`
  background-color: #f0f3f7;
  border-right: ${(props) => props.br};
  color: #000000;
  font-size: 10pt;
  text-align: center;
`;
const Input = styled.input`
  border: 1px solid #c6cfdc;
  height: 20px;
  font-size: 9pt;
  width: ${(props) => props.width};
  margin-left: 10px;
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;

const InfoCp = ({ formType }) => {
  return (
    <InfoCpWrapper>
      <Title>1. 부동산의 표시</Title>
      <TableWrap>
        <colgroup>
          <col style={{ width: '62px' }} />
          <col style={{ width: '62px' }} />
          <col style={{ width: '150px' }} />
          <col style={{ width: '120px' }} />
          <col style={{ width: '150px' }} />
          <col style={{ width: '120px' }} />
          <col style={{ width: '120px' }} />
        </colgroup>
        <tbody>
          <tr>
            <TdTitle colSpan={2}>소재지</TdTitle>
            <td colSpan={5}>
              <Input width={'560px'} type="text" />
            </td>
          </tr>
          {formType !== 'short' && (
            <>
              <tr>
                <TdTitle style={{ borderRight: '1px solid  #c6cfdc' }}>토지</TdTitle>
                <TdTitle>지목</TdTitle>
                <td colSpan={3}>
                  <Input type="text" />
                </td>
                <TdTitle>면적 (m²)</TdTitle>
                <td>
                  <Input type="text" />
                </td>
              </tr>
              <tr>
                <TdTitle style={{ borderRight: '1px solid  #c6cfdc' }}>건물</TdTitle>
                <TdTitle>구조</TdTitle>
                <td>
                  <Input type="text" />
                </td>
                <TdTitle>용도</TdTitle>
                <td>
                  <Input type="text" />
                </td>
                <TdTitle>면적 (m²)</TdTitle>
                <td>
                  <Input type="text" />
                </td>
              </tr>
            </>
          )}
          {(formType === 'lease' || formType === 'rental') && (
            <tr>
              <TdTitle colSpan={2}>임대할 부분</TdTitle>
              <td colSpan={5}>
                <Input width={'560px'} type="text" />
              </td>
            </tr>
          )}
        </tbody>
      </TableWrap>
    </InfoCpWrapper>
  );
};

export default React.memo(InfoCp);
