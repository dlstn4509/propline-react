import React, { useState } from 'react';
import styled, { Title, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const ClientInfoWrapper = styled.div`
  margin-bottom: 70px;
`;
const ClientInfoWrap = styled.div`
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  display: ${(props) => props.display};
  font-size: 13px;
  font-weight: 400;
  color: #464d50;
`;
const ClientInfo = styled.div`
  display: flex;
  border-bottom: ${(props) => (props.bd ? '1px solid #e6e6e6' : '')};
  div {
    padding: 10px 15px;
  }
`;
const SubTitle = styled.div`
  background-color: #f5f5f5;
  width: 160px;
  display: flex;
  align-items: center;
  span {
    color: red;
  }
`;
const Input = styled.input`
  height: 35px;
  width: ${(props) => props.width};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  :focus {
    border: 2px solid #000;
  }
`;
const Select = styled.select`
  width: ${(props) => props.width};
  height: 35px;
  margin-right: ${(props) => props.mr};
`;
const Btn = styled.div`
  width: 110px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #888f91;
  border-radius: 5px;
  font-size: 13px;
  margin-left: 10px;
  margin-right: 20px;
  cursor: pointer;
`;
const BlueText = styled.div`
  margin-left: -14px;
  margin-top: 4px;
  font-size: 12px;
  color: #3168ff;
  height: 21px;
  display: flex;
  align-items: center;
`;
const RadioInput = styled.input`
  margin-right: 6px;
`;
const Label = styled.label`
  margin-right: 30px;
`;

const ClientInfoCp = ({ requestKind }) => {
  const [contentTime, setContentTime] = useState('no');
  const changeContentTime = (e) => {
    setContentTime(e.target.value);
  };
  return (
    <ClientInfoWrapper>
      <Title>의뢰인정보</Title>
      <ClientInfoWrap>
        {!requestKind && (
          <ClientInfo>
            <SubTitle>
              의뢰인명<span>*</span>
            </SubTitle>
            <FlexDiv>
              <Input type="text" width={'117px'} />
            </FlexDiv>
            <SubTitle>
              소유주와의 관계<span>*</span>
            </SubTitle>
            <FlexDiv>
              <Select name="" id="" width={'85px'}>
                <option value="">-선택-</option>
              </Select>
            </FlexDiv>
            <SubTitle>
              의뢰인 연락처<span>*</span>
            </SubTitle>
            <FlexDiv>
              <Select name="" id="" width={'65px'} mr={'4px'}>
                <option value="">010</option>
              </Select>
              -
              <Input type="text" width={'65px'} ml={'4px'} mr={'4px'} />-
              <Input type="text" width={'65px'} ml={'4px'} />
            </FlexDiv>
          </ClientInfo>
        )}
        {requestKind && (
          <>
            <ClientInfo bd={true}>
              <SubTitle>
                의뢰인명<span>*</span>
              </SubTitle>
              <FlexDiv>
                <Input type="text" width={'117px'} />
              </FlexDiv>
            </ClientInfo>
            <ClientInfo bd={true}>
              <SubTitle>
                의뢰인 연락처<span>*</span>
              </SubTitle>
              <div>
                <FlexDiv style={{ padding: '0' }}>
                  <Input type="text" width={'160px'} placeholder="-없이 숫자만 입력" />
                  <Btn>인증번호 전송</Btn>
                  <Input type="text" width={'120px'} placeholder="인증번호 입력" />
                  <Btn>인증번호 확인</Btn>
                </FlexDiv>
                <BlueText>
                  ※ 050 가상번호로 변환하여 중개업소에 안내됩니다. ( 게시글은 30일 이후 자동삭제 됨 )
                </BlueText>
              </div>
            </ClientInfo>
            <ClientInfo>
              <SubTitle>
                연락가능시간<span>*</span>
              </SubTitle>
              <FlexDiv>
                <RadioInput
                  type="radio"
                  id="no"
                  name="time"
                  value="no"
                  onChange={changeContentTime}
                  defaultChecked
                />
                <Label htmlFor="no">상관없음</Label>
                <RadioInput
                  type="radio"
                  id="morning"
                  name="time"
                  value="morning"
                  onChange={changeContentTime}
                />
                <Label htmlFor="morning">오전(9시~12시)</Label>
                <RadioInput
                  type="radio"
                  id="afternoon"
                  name="time"
                  value="afternoon"
                  onChange={changeContentTime}
                />
                <Label htmlFor="afternoon">오후(12시~7시)</Label>
                <RadioInput type="radio" id="other" name="time" value="other" onChange={changeContentTime} />
                <Label htmlFor="other">
                  <Input type="text" readOnly={contentTime !== 'other'}></Input>
                </Label>
              </FlexDiv>
            </ClientInfo>
          </>
        )}
      </ClientInfoWrap>
    </ClientInfoWrapper>
  );
};

export default React.memo(ClientInfoCp);
