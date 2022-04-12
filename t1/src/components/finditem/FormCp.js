import React from 'react';
import styled, { color } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';
import qs from 'qs';

const FormWrapper = styled.div`
  margin-bottom: 70px;
`;
const Table = styled.table`
  font-size: 13px;
  color: #464d50;
  border-top: 1px solid #dae1e7;
  border-bottom: 1px solid #dae1e7;
`;
const Tr = styled.tr`
  border-bottom: 1px solid #dae1e7;
`;
const TdTitle = styled.td`
  padding: 20px 15px;
  width: 180px;
  background-color: #f9fbfc;
`;
const Td = styled.td`
  padding-left: 15px;
  height: 60px;
  display: flex;
  align-items: center;
`;
const RadioInput = styled.input`
  margin-right: 4px;
`;
const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '177px')};
  :focus {
    border: 2px solid #000;
    border-radius: 5px;
  }
`;
const Label = styled.label`
  margin-right: 30px;
`;
const TextareaWrap = styled.div`
  padding: 10px;
  border-bottom: 1px solid #dae1e7;
  margin-bottom: 30px;
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;
const Btn = styled.button`
  width: 65px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.mr};
  background-color: ${(props) => props.bgc};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;

const FormCp = () => {
  const { loginUser } = store();
  return (
    <FormWrapper>
      <form action={process.env.REACT_APP_URL_API + 'finditem'} method="POST">
        <input type="hidden" name="midx" value={loginUser.midx ? loginUser.midx : 1011} />
        <Table>
          <tbody>
            <Tr>
              <TdTitle>매물종류</TdTitle>
              <Td>
                <select name="item_type" style={{ width: '145px', height: '35px' }}>
                  <option value="아파트">아파트</option>
                  <option value="주택">주택</option>
                  <option value="오피스텔">오피스텔</option>
                  <option value="사무실">사무실</option>
                  <option value="상가">상가</option>
                  <option value="빌딩">빌딩</option>
                  <option value="토지">토지</option>
                </select>
              </Td>
              <TdTitle>거래유형</TdTitle>
              <Td>
                <RadioInput type="radio" value="매매" id="sale" name="trade_type" defaultChecked />
                <Label htmlFor="sale">매매</Label>
                <RadioInput type="radio" value="전세" id="charter" name="trade_type" />
                <Label htmlFor="charter">전세</Label>
                <RadioInput type="radio" value="월세" id="monthly" name="trade_type" />
                <Label htmlFor="monthly">월세</Label>
              </Td>
            </Tr>
            <Tr>
              <TdTitle>부동산명</TdTitle>
              <Td>
                <Input type="text" name="company_name" />
              </Td>
              <TdTitle>담당자</TdTitle>
              <Td>
                <Input type="text" name="user_name" />
              </Td>
            </Tr>
            <Tr>
              <TdTitle>전화번호</TdTitle>
              <Td>
                <Input type="text" name="phone" />
              </Td>
              <TdTitle>휴대전화</TdTitle>
              <Td>
                <Input type="text" name="mobile" />
              </Td>
            </Tr>
            <Tr>
              <TdTitle>제목</TdTitle>
              <Td style={{ display: 'block', paddingTop: '15.5px' }} colSpan="3">
                <Input type="text" name="title" width={'780px'} />
              </Td>
            </Tr>
          </tbody>
        </Table>
        <TextareaWrap>
          <textarea name="contents" cols="30" rows="10"></textarea>
        </TextareaWrap>
        <BtnWrap>
          <Btn bgc={color.blue} mr={'10px'}>
            등록
          </Btn>
          <Link to="/finditem">
            <Btn type="button" bgc={color.gray}>
              취소
            </Btn>
          </Link>
        </BtnWrap>
      </form>
    </FormWrapper>
  );
};

export default React.memo(FormCp);
// #3168ff
