import React from 'react';
import styled, { Title, color } from '@/style';
import { Link } from 'react-router-dom';

const DepositInfoWrapper = styled.div`
  margin-bottom: 70px;
`;
const DepositInfoWrap = styled.div`
  border-top: 2px solid #999;
  font-size: 14px;
  color: #464d50;
  padding-top: 23px;
`;
const InputWrap = styled.div`
  margin-top: 20px;
  display: flex;
  height: 35px;
`;
const SubTitle = styled.div`
  width: 75px;
  font-size: 14px;
  font-weight: 500;
  color: #464d50;
  display: flex;
  align-items: center;
  span {
    color: red;
  }
`;
const Input = styled.input`
  width: ${(props) => props.width};
  :focus {
    border: 2px solid #000;
  }
`;

const DepositInfoCp = () => {
  return (
    <DepositInfoWrapper>
      <Title>무통장 입금계좌</Title>
      <DepositInfoWrap>
        <div>
          <img src={process.env.REACT_APP_URL + 'img/icon.gif'} alt="" />
        </div>
        <div style={{ color: `${color.blue}`, fontWeight: '600', marginLeft: '10px' }}>331301-04-177117</div>
        <div>예금주: 주식회사프롭라인(공실클럽)</div>
        <InputWrap>
          <SubTitle>
            입금자명 <span>*</span>
          </SubTitle>
          <input type="text" />
        </InputWrap>
        <InputWrap>
          <SubTitle>
            연락처 <span>*</span>
          </SubTitle>
          <input type="text" style={{ width: '390px' }} />
        </InputWrap>
      </DepositInfoWrap>
    </DepositInfoWrapper>
  );
};

export default React.memo(DepositInfoCp);
