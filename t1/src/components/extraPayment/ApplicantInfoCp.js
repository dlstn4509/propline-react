import React from 'react';
import styled, { Title, color } from '@/style';
import { Link } from 'react-router-dom';

const ApplicantInfoWrapper = styled.div`
  margin-bottom: 70px;
`;
const ApplicantInfoWrap = styled.div`
  border-top: 2px solid #999;
  font-size: 14px;
  color: #464d50;
  padding-top: 23px;
  span {
    color: red;
  }
`;
const ApplicantInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #464d50;
  width: 75px;
`;
const Input = styled.input`
  border: 1px solid #dae1e7;
  height: 35px;
  padding-left: 10px;
  width: 390px;
  margin-right: 10px;
  :focus {
    border: 2px solid #000;
  }
`;
const Textarea = styled.textarea`
  width: 925px;
  height: 120px;
`;

const ApplicantInfoCp = () => {
  return (
    <ApplicantInfoWrapper>
      <Title>신청자 정보</Title>
      <ApplicantInfoWrap>
        <ApplicantInfo>
          <SubTitle>
            부동산명<span>*</span>
          </SubTitle>
          <Input type="text" />
        </ApplicantInfo>
        <ApplicantInfo>
          <SubTitle>
            이름<span>*</span>
          </SubTitle>
          <Input type="text" />
        </ApplicantInfo>
        <ApplicantInfo>
          <SubTitle>
            연락처<span>*</span>
          </SubTitle>
          <Input type="text" />
        </ApplicantInfo>
        <ApplicantInfo>
          <SubTitle>
            이메일<span>*</span>
          </SubTitle>
          <Input type="text" />
        </ApplicantInfo>
        <ApplicantInfo>
          <SubTitle>특이사항</SubTitle>
          <Textarea name="" id="" cols="30" rows="10"></Textarea>
        </ApplicantInfo>
      </ApplicantInfoWrap>
    </ApplicantInfoWrapper>
  );
};

export default React.memo(ApplicantInfoCp);
