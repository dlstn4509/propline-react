import React from 'react';
import styled, { PageWrapper, PageWrap, FlexDiv, color } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';
import { FaAngleUp, FaStar } from 'react-icons/fa';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { RiComputerFill } from 'react-icons/ri';

const ContainerWrap = styled.div`
  width: 150px;
  position: absolute;
  right: -170px;
`;
const QuickMenuWrapper = styled.div`
  width: 100%;
  font-size: 13px;
  color: #464d50;
`;
const TitleWrap = styled(FlexDiv)`
  justify-content: space-between;
  padding: 4px 16px;
  color: #fff;
  background-color: rgba(22, 51, 127, 0.64);
  cursor: pointer;
  margin-bottom: 4px;
`;
const IconsWrap = styled.div`
  padding: 25px 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #ddd;
  background-color: #fff;
`;
const Icons = styled(FlexDiv)`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? props.mb : '10px')};
  :hover {
    color: ${color.blue};
  }
`;
const IconsText = styled.div`
  margin-left: 6px;
  letter-spacing: -0.06em;
`;

const QuickMenu = () => {
  const { isQuickMenuY } = store();
  return (
    <PageWrapper>
      <PageWrap style={{ position: 'relative' }}>
        <ContainerWrap style={{ paddingTop: `${isQuickMenuY}%` }}>
          <QuickMenuWrapper>
            <TitleWrap>
              <div>빠른메뉴</div>
              <FaAngleUp />
            </TitleWrap>
            <IconsWrap>
              <Icons>
                <FaStar />
                <IconsText>관심매물보기</IconsText>
              </Icons>
              <Icons>
                <SiKakaotalk />
                <IconsText>카카오톡1:1문의</IconsText>
              </Icons>
              <Icons>
                <RiComputerFill />
                <IconsText>원격지원</IconsText>
              </Icons>
              <Icons mb={'0'}>
                <SiNaver />
                <IconsText>네이버 매물관리</IconsText>
              </Icons>
            </IconsWrap>
          </QuickMenuWrapper>
        </ContainerWrap>
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(QuickMenu);
