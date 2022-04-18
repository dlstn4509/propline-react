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
  const [otherVal, setOtherVal] = useState('');
  const changeContentTime = (e) => {
    setOtherVal('');
    setContentTime(e.target.value);
  };
  const changeInput = (e) => {
    setOtherVal(e.target.value);
  };
  return (
    <ClientInfoWrapper>
      <Title>의뢰인정보</Title>
      <ClientInfoWrap>
        {requestKind === 1 && (
          <ClientInfo>
            <SubTitle>
              의뢰인명<span>*</span>
            </SubTitle>
            <FlexDiv>
              <Input type="text" name="user_name" width={'117px'} />
            </FlexDiv>
            <SubTitle>
              소유주와의 관계<span>*</span>
            </SubTitle>
            <FlexDiv>
              <Select name="user_kind" width={'85px'}>
                <option value="">-선택-</option>
                <option value="본인">본인</option>
                <option value="관리인">관리인</option>
                <option value="중개인">중개인</option>
                <option value="세입자">세입자</option>
                <option value="기타">기타</option>
              </Select>
            </FlexDiv>
            <SubTitle>
              의뢰인 연락처<span>*</span>
            </SubTitle>
            <FlexDiv>
              <Select name="user_phone01" width={'65px'} mr={'4px'}>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
                <option value="070">070</option>
                <option value="02">02</option>
                <option value="031">031</option>
                <option value="032">032</option>
                <option value="033">033</option>
                <option value="041">041</option>
                <option value="042">042</option>
                <option value="043">043</option>
                <option value="044">044</option>
                <option value="051">051</option>
                <option value="052">052</option>
                <option value="053">053</option>
                <option value="054">054</option>
                <option value="055">055</option>
                <option value="061">061</option>
                <option value="062">062</option>
                <option value="063">063</option>
                <option value="064">064</option>
              </Select>
              -
              <Input type="text" name="user_phone02" width={'65px'} ml={'4px'} mr={'4px'} />-
              <Input type="text" name="user_phone03" width={'65px'} ml={'4px'} />
            </FlexDiv>
          </ClientInfo>
        )}
        {requestKind === 2 && (
          <>
            <ClientInfo bd={true}>
              <SubTitle>
                의뢰인명<span>*</span>
              </SubTitle>
              <FlexDiv>
                <Input type="text" name="user_name" width={'117px'} />
              </FlexDiv>
            </ClientInfo>
            <ClientInfo bd={true}>
              <SubTitle>
                의뢰인 연락처<span>*</span>
              </SubTitle>
              <div>
                <FlexDiv style={{ padding: '0' }}>
                  <Input type="text" name="user_phone" width={'160px'} placeholder="-없이 숫자만 입력" />
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
                  name="call_time"
                  value="1"
                  onChange={changeContentTime}
                  defaultChecked
                />
                <Label htmlFor="1">상관없음</Label>

                <RadioInput type="radio" name="call_time" value="2" onChange={changeContentTime} />
                <Label htmlFor="2">오전(9시~12시)</Label>

                <RadioInput type="radio" name="call_time" value="3" onChange={changeContentTime} />
                <Label htmlFor="3">오후(12시~7시)</Label>

                <RadioInput type="radio" name="call_time" value="other" onChange={changeContentTime} />
                <Label htmlFor="other">
                  <Input
                    type="text"
                    readOnly={contentTime !== 'other'}
                    onChange={changeInput}
                    name="otherVal"
                    value={otherVal}
                  ></Input>
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
