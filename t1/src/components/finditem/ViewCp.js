import React, { useState, useEffect } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';

const ViewWrap = styled.div`
  margin-bottom: 100px;
`;
const TitleWrap = styled(FlexDiv)`
  font-size: 16px;
  font-weight: 600;
  color: #464d50;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  .hit {
    font-size: 13px;
    color: #888f91;
    font-weight: 500;
  }
`;
const Table = styled.table`
  font-size: 13px;
  color: #464d50;
  background-color: #f9fbfc;
  border-top: 1px solid #dae1e7;
`;
const Tr = styled.tr`
  border-bottom: 1px solid #dae1e7;
`;
const TdTitle = styled.td`
  width: 75px;
  height: 30px;
  padding-left: 15px;
  color: #888f91;
  background-color: #f9fbfc;
`;
const Contents = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dae1e7;
  font-size: 13px;
  font-weight: 500;
  color: #888f91;
  margin-bottom: 20px;
`;
const DateWrap = styled(FlexDiv)`
  justify-content: space-between;
  font-size: 13px;
  color: #888f91;
  span {
    font-weight: 600;
    color: #464d50;
    margin-left: 10px;
  }
`;
const ButtonWrap = styled(FlexDiv)``;
const Button = styled(Link)`
  width: 65px;
  height: 35px;
  line-height: 35px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-right: ${(props) => (props.mr ? props.mr : '10px')};
`;

const ViewCp = ({ itemList }) => {
  const { loginUser } = store();
  return (
    <ViewWrap>
      <TitleWrap>
        <div>{itemList.title}</div>
        <div className="hit">조회수 {itemList.hit}</div>
      </TitleWrap>
      <Table>
        <tbody>
          <Tr>
            <TdTitle>매물종류</TdTitle>
            <td>{itemList.item_type}</td>
            <TdTitle>거래유형</TdTitle>
            <td>{itemList.trade_type}</td>
          </Tr>
          <Tr>
            <TdTitle>부동산명</TdTitle>
            <td>{itemList.company_name}</td>
            <TdTitle>담당자</TdTitle>
            <td>{itemList.user_name}</td>
          </Tr>
          <Tr>
            <TdTitle>전화번호</TdTitle>
            <td>{itemList.phone}</td>
            <TdTitle>휴대폰</TdTitle>
            <td>{itemList.mobile}</td>
          </Tr>
        </tbody>
      </Table>
      <Contents>{itemList.contents}</Contents>
      <DateWrap>
        <div>
          {itemList.reg_date} <span>{itemList.user_name}</span>
        </div>
        <ButtonWrap>
          <Button color={'#888f91'} to="/finditem" style={{ color: '#fff' }}>
            목록
          </Button>
          {loginUser.midx === itemList.reg_midx && (
            <>
              <Button color={'green'} to={`/finditem?type=update`} style={{ color: '#fff' }}>
                수정
              </Button>
              <Button color={'red'} mr={'0'} to="/finditem" style={{ color: '#fff' }}>
                삭제
              </Button>
            </>
          )}
        </ButtonWrap>
      </DateWrap>
    </ViewWrap>
  );
};

export default React.memo(ViewCp);
