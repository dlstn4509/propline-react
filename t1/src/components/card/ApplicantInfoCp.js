import React from 'react';
import styled, { Title } from '@/style';
import { Link } from 'react-router-dom';

const ApplicantWrapper = styled.div`
  margin-bottom: 70px;
`;
const ApplicantWrap = styled.div`
  border-top: 2px solid #999;
  font-size: 14px;
  color: #464d50;
  padding-top: 23px;
`;
const InputWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const SubTitle = styled.div`
  font-weight: 500;
  width: 75px;
  height: 35px;
  display: flex;
  align-items: center;
  span {
    color: red;
  }
`;
const Input = styled.input`
  border: 1px solid #dae1e7;
  padding-left: 10px;
  width: ${(props) => props.width};
  :focus {
    border: 2px solid #000;
  }
`;

const ApplicantInfoCp = () => {
  return (
    <ApplicantWrapper>
      <Title>신청자 정보</Title>
      <ApplicantWrap>
        <InputWrap>
          <SubTitle>
            이름 <span>*</span>
          </SubTitle>
          <Input type="text" />
        </InputWrap>
        <InputWrap>
          <SubTitle>
            연락처 <span>*</span>
          </SubTitle>
          <Input type="text" width={'390px'} />
        </InputWrap>
        <InputWrap>
          <SubTitle>
            이메일 <span>*</span>
          </SubTitle>
          <Input type="text" width={'390px'} />
        </InputWrap>
      </ApplicantWrap>
    </ApplicantWrapper>
  );
};

export default React.memo(ApplicantInfoCp);
