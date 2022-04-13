import React, { useCallback } from 'react';
import store from '@/store/store';
import styled, { color, FlexDiv } from '@/style';
import { FaUserAlt, FaFolderOpen } from 'react-icons/fa';
import { RiOrganizationChart } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LogoutWrapper = styled.div`
  border: 1px solid #dae1e7;
  border-radius: 5px;
  padding: 10px;
  font-size: 13px;
  color: #464d50;
`;
const IdWrap = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 10px;
`;
const InfoWrapper = styled.div`
  background-color: #f0f3f7;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;
const InfoWrap = styled(FlexDiv)`
  margin-bottom: ${(props) => props.mb};
`;
const Title = styled.div`
  color: #464d50;
  margin-right: 4px;
`;
const Content = styled.div`
  color: #000;
`;
const BtnWrap = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Btn = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  width: 82px;
  text-align: center;
  background-color: ${(props) => props.bgc};
  padding: 8px 0;
  border-radius: 5px;
`;
const IconsWrapper = styled(FlexDiv)`
  justify-content: space-between;
  padding: 0 4px;
`;
const IconsWrap = styled(Link)`
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  color: #464d50;
  line-height: 14px;
  :hover {
    color: ${color.blue};
  }
`;

const LogoutCp = () => {
  const { loginUser, setLoginUser } = store();
  const clickLogOut = useCallback(() => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      setLoginUser(null);
    }
  }, []);
  return (
    <LogoutWrapper>
      <IdWrap>
        <div style={{ color: `${color.blue}` }}>{loginUser.member_id}</div>
        <div onClick={clickLogOut} style={{ color: '#888f91', cursor: 'pointer' }}>
          로그아웃
        </div>
      </IdWrap>
      <InfoWrapper>
        <InfoWrap mb={'6px'}>
          <Title>업체명</Title>
          <Content>{loginUser.company_name}</Content>
        </InfoWrap>
        <InfoWrap mb={'6px'}>
          <Title>만기</Title>
          <Content>2059-03-04 (D-13481)</Content>
        </InfoWrap>
        <InfoWrap>
          <Title>잔여G포인트</Title>
          <Content>17,000P</Content>
        </InfoWrap>
      </InfoWrapper>
      <BtnWrap>
        <Btn bgc={`${color.blue}`}>결제하기</Btn>
        <Btn bgc={'#888f91'}>G포인트 충전</Btn>
      </BtnWrap>
      <IconsWrapper>
        <IconsWrap to="/main">
          <RiOrganizationChart />
          <div>나의</div>
          <div>공동중개</div>
        </IconsWrap>
        <IconsWrap to="/main">
          <FaUserAlt />
          <div>회원정보</div>
          <div>수정</div>
        </IconsWrap>
        <IconsWrap to="/main">
          <FaFolderOpen />
          <div>계약서</div>
          <div>관리</div>
        </IconsWrap>
      </IconsWrapper>
    </LogoutWrapper>
    // <MainLoginBox>
    //   <AfterLoginTit>
    //     <User>{loginUser.member_id}</User>
    //     <LogoutBtn to="/main" style={{ color: '#888f91' }} onClick={clickLogOut}>
    //       로그아웃
    //     </LogoutBtn>
    //   </AfterLoginTit>
    //   <UserInfoBox>
    //     <List>
    //       <span className="tit">업체명</span>
    //       <span className="txt">{loginUser.company_name}</span>
    //     </List>
    //     <List>
    //       <span className="tit">만기</span>
    //       <span className="txt">2022-12-31 (D-290)</span>
    //     </List>
    //     <List>
    //       <span className="tit">잔여 G포인트</span>
    //       <span className="txt">748,400P</span>
    //     </List>
    //   </UserInfoBox>
    //   <AfterLoginBtnArea>
    //     <PayMentBtn to="/main">결제하기</PayMentBtn>
    //     <ChargeBtn to="/main">G포인트 충전</ChargeBtn>
    //   </AfterLoginBtnArea>
    //   <AfterLoginOptionArea>
    //     <MyCoBrokenBtn to="/main">
    //       나의
    //       <br />
    //       공동중개
    //     </MyCoBrokenBtn>
    //     <MyInfoModifyBtn to="/main">
    //       회원정보
    //       <br />
    //       수정
    //     </MyInfoModifyBtn>
    //     <ContractMgmBtn to="/main">
    //       계약서
    //       <br />
    //       관리
    //     </ContractMgmBtn>
    //   </AfterLoginOptionArea>
    // </MainLoginBox>
  );
};

export default React.memo(LogoutCp);
