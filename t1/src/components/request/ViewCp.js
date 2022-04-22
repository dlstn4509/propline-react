import React, { useState, useEffect } from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';

const ViewWrap = styled.div`
  margin-bottom: 120px;
  font-size: 13px;
  color: #464d50;
`;
const Table = styled.table`
  background-color: #f9fbfc;
  border-top: 1px solid #dae1e7;
`;
const Tr = styled.tr`
  border-bottom: 1px solid #dae1e7;
`;
const TdTitle = styled.td`
  width: 100px;
  height: 30px;
  padding-left: 15px;
  color: #888f91;
  background-color: #f9fbfc;
`;
const Span = styled.span`
  padding: 1px 6px;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${(props) => (props.bg ? props.bg : '#7ed48f')};
  margin-left: ${(props) => props.ml};
`;
const MemoWrap = styled.div`
  padding: 20px;
  border-bottom: 1px solid #dae1e7;
  margin-bottom: 50px;
`;
const DateWrap = styled(FlexDiv)`
  justify-content: space-between;
  font-size: 13px;
  color: #888f91;
  margin-bottom: 50px;
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
const DeleteButton = styled.button`
  width: 65px;
  height: 35px;
  line-height: 35px;
  background-color: red;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;
const ReadingCompanyWrap = styled.div`
  .sub-title {
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }
  .ul {
    border-top: 1px solid #dae1e7;
    .li {
      display: flex;
      border-bottom: 1px solid #dae1e7;
      padding: 10px;
      .num {
        width: 50px;
      }
      .date {
        margin-left: auto;
      }
    }
  }
`;

const ViewCp = ({ list }) => {
  const { loginUser } = store();
  const [phoneNum, setPhoneNum] = useState('');
  const [readingCompany, setReadingCompany] = useState('');
  const clickDelete = (e) => {
    if (window.confirm('정말 삭제하시겠습니까')) {
      e.target.form.submit();
      console.log(e.target.form);
    }
  };
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_URL_API + `request/islog?iar_idx=${list.idx}&cidx=${loginUser.cidx}`
      );
      data ? setPhoneNum(data) : setPhoneNum('');
    })();
  }, [list]);
  const checkPhoneNum = async () => {
    let idx = list.idx;
    let midx = loginUser.midx;
    let cidx = loginUser.cidx;
    const { data } = await axios.get(
      process.env.REACT_APP_URL_API + `request/checkphonenum?idx=${idx}&midx=${midx}&cidx=${cidx}`
    );
    setPhoneNum(data);
  };
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_URL_API + `request/readingcompany?iar_idx=${list.idx}`
      );
      setReadingCompany(data);
    })();
  }, [list]);
  return (
    <ViewWrap>
      <Table>
        <tbody>
          <Tr>
            <TdTitle>매물종류</TdTitle>
            <td>{list.item_kind}</td>
            <TdTitle>의뢰현황</TdTitle>
            <td>
              {list.requestLimitDate && <Span>의뢰중</Span>}
              {!list.requestLimitDate && <Span bg={'#888f91'}>기간만료</Span>}
            </td>
          </Tr>
          <Tr>
            <TdTitle>원하는지역</TdTitle>
            <td>
              {list.sido} {list.sigungu} {list.eupmyeondong}
            </td>
          </Tr>
          <Tr>
            <TdTitle>연락가능한시간</TdTitle>
            <td>{list.call_time}</td>
            <TdTitle>의뢰인 연락처</TdTitle>
            <td>
              {!phoneNum && (
                <Span bg={'#435070'} style={{ padding: '1px 20px' }} onClick={checkPhoneNum}>
                  연락처 보기
                </Span>
              )}
              {phoneNum && <div>{list.user_phone}</div>}
            </td>
          </Tr>
        </tbody>
      </Table>
      <MemoWrap>{list.memo}</MemoWrap>
      <DateWrap>
        <div>{list.reg_date}</div>
        <ButtonWrap>
          <Button color={'#888f91'} to="/request" style={{ color: '#fff' }}>
            목록
          </Button>
          {/* {loginUser.midx === list.reg_midx && (
            <>
              <Button color={'green'} to={`/finditem?type=update`} style={{ color: '#fff' }}>
                수정
              </Button>
              <form action={process.env.REACT_APP_URL_API + 'request'} method="POST">
                <input type="hidden" name="_method" value="DELETE" />
                <input type="hidden" name="idx" value={list.idx} />
                <DeleteButton type="button" onClick={clickDelete}>
                  삭제
                </DeleteButton>
              </form>
            </>
          )} */}
        </ButtonWrap>
      </DateWrap>
      {readingCompany.length > 0 && (
        <ReadingCompanyWrap>
          <div className="sub-title">연락처 열람</div>
          <ul className="ul">
            <li className="li">
              <div className="num">3</div>
              <div>(주)마이다스부동산중개법인</div>
              <div className="date"> 2022-02-11 오후 2:21:01</div>
            </li>
          </ul>
        </ReadingCompanyWrap>
      )}
    </ViewWrap>
  );
};

export default React.memo(ViewCp);
