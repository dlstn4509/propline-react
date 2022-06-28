/* global daum */
import React from 'react';
import styled, { FlexDiv } from '@/style';
import store from '@/store/store';

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
  const { loginUser } = store();
  const findAddress = () => {
    new daum.Postcode({
      oncomplete: async function (data) {
        let addressArr = data.jibunAddress.split(' ');
        document.querySelector('#address').value = data.jibunAddress;
        document.querySelector('input[name=sido]').value = data.sido;
        document.querySelector('input[name=sigungu]').value = data.sigungu;
        document.querySelector('input[name=eupmyeondong]').value = data.bname;
        document.querySelector('input[name=bungi]').value = addressArr[addressArr.length - 1];
      },
    }).open();
  };
  return (
    <InfoCpWrapper>
      <Title>1. 부동산의 표시</Title>
      <input type="hidden" name="reg_midx" value={loginUser.midx || 1011} />
      <input type="hidden" name="mod_midx" value={loginUser.midx || 1011} />
      <input type="hidden" name="sido" />
      <input type="hidden" name="sigungu" />
      <input type="hidden" name="eupmyeondong" />
      <input type="hidden" name="bungi" />
      <input
        type="hidden"
        name="trade_type"
        value={formType === 'sale' ? 1 : formType === 'lease' ? 2 : formType === 'rental' ? 3 : 4}
      />
      <div>{formType}</div>
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
          <tr style={{ height: '80px' }}>
            <TdTitle colSpan={2}>소재지</TdTitle>
            <td colSpan={5}>
              <div>
                <Input
                  width={'560px'}
                  type="text"
                  id="address"
                  onClick={findAddress}
                  placeholder="주소입력"
                  readOnly
                  style={{ marginBottom: '8px' }}
                />
              </div>
              <div>
                <Input width={'300px'} type="text" name="detail_address" placeholder="상세주소" />
              </div>
            </td>
          </tr>
          {formType !== 'short' && (
            <>
              <tr>
                <TdTitle style={{ borderRight: '1px solid  #c6cfdc' }}>토지</TdTitle>
                <TdTitle>지목</TdTitle>
                <td colSpan={3}>
                  <Input type="text" name="land_purpose" />
                </td>
                <TdTitle>면적 (m²)</TdTitle>
                <td>
                  <Input type="text" name="land_area" />
                </td>
              </tr>
              <tr>
                <TdTitle style={{ borderRight: '1px solid  #c6cfdc' }}>건물</TdTitle>
                <TdTitle>구조</TdTitle>
                <td>
                  <Input type="text" name="building_structure" />
                </td>
                <TdTitle>용도</TdTitle>
                <td>
                  <Input type="text" name="building_use" />
                </td>
                <TdTitle>면적 (m²)</TdTitle>
                <td>
                  <Input type="text" name="building_area" />
                </td>
              </tr>
            </>
          )}
          {(formType === 'lease' || formType === 'rental') && (
            <tr>
              <TdTitle colSpan={2}>임대할 부분</TdTitle>
              <td colSpan={5}>
                <Input width={'560px'} type="text" name="lease_part" />
              </td>
            </tr>
          )}
        </tbody>
      </TableWrap>
    </InfoCpWrapper>
  );
};

export default React.memo(InfoCp);
