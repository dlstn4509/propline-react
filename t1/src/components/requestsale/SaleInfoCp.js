import React, { useState } from 'react';
import styled, { Title, color } from '@/style';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const SaleInfoWrapper = styled.div``;
const SaleInfoTable = styled.table`
  border-top: 1px solid #f0f0f0;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #464d50;
`;
const Tr = styled.tr`
  border-bottom: 1px solid #f0f0f0;
`;
const TdTitle = styled.td`
  font-size: 13px;
  color: #464d50;
  width: 160px;
  padding: 20px;
  background-color: #f5f5f5;
  span {
    color: red;
  }
`;
const Td = styled.td`
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;
const RequestKind = styled.div`
  width: 158px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #e6e6e6;
  background-color: #f5f5f5;
  font-size: 13px;
  padding: 0 10px;
  color: #464d50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &.active {
    color: ${color.blue};
    border: 1px solid ${color.blue};
    font-weight: 600;
  }
`;

const SaleInfoCp = () => {
  const [requestKind, setRequestKind] = useState(false);
  const [commission, setCommissionType] = useState('commission');
  const changeCommissionType = (e) => {
    setCommissionType(e.target.value);
    document.querySelectorAll('.inputText').forEach((v) => (v.value = ''));
  };
  return (
    <SaleInfoWrapper>
      <Title>매물정보</Title>
      <SaleInfoTable>
        <tbody>
          <Tr>
            <TdTitle>
              의뢰종류<span>*</span>
            </TdTitle>
            <Td>
              <RequestKind
                onClick={() => {
                  setRequestKind(!requestKind);
                }}
                className={requestKind ? '' : 'active'}
              >
                부동산내놓기
                {!requestKind && <FaCheck />}
              </RequestKind>
              <RequestKind
                onClick={() => {
                  setRequestKind(!requestKind);
                }}
                className={!requestKind ? '' : 'active'}
              >
                부동산구하기
                {requestKind && <FaCheck />}
              </RequestKind>
            </Td>
          </Tr>
          <Tr>
            <TdTitle>
              중개수수료<span>*</span>
            </TdTitle>
            <td>
              <FlexDiv>
                <input
                  type="radio"
                  id="commission"
                  name="commission"
                  value="commission"
                  onChange={changeCommissionType}
                  defaultChecked
                />
                <label htmlFor="commission">법정수수료 지급</label>
                <input
                  type="radio"
                  id="input"
                  name="commission"
                  value="input"
                  onChange={changeCommissionType}
                />
                <label htmlFor="input">
                  <input type="text" className="inputText" readOnly={commission !== 'input'} />
                </label>
                <input
                  type="radio"
                  id="other"
                  name="commission"
                  value="other"
                  onChange={changeCommissionType}
                />
                <label htmlFor="other">
                  <input type="text" className="inputText" readOnly={commission !== 'other'} />
                </label>
              </FlexDiv>
              <FlexDiv>asd</FlexDiv>
            </td>
          </Tr>
        </tbody>
      </SaleInfoTable>
    </SaleInfoWrapper>
  );
};

export default React.memo(SaleInfoCp);
