import React, { useState, useEffect } from 'react';
import styled, { PageWrapper, PageWrap, FlexDiv, color } from '@/style';
import { Link } from 'react-router-dom';
import { FaAngleUp, FaStar } from 'react-icons/fa';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { RiComputerFill } from 'react-icons/ri';
import store from '@/store/store';

const ContainerWrap = styled.div`
  position: absolute;
  margin: 0px 0px 0px 1025px;
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

const Img = styled.img`
  width: 100%;
  cursor: ${(props) => props};
`;

const QuickMenu = () => {
  const { isQuickMenuY, isBanner } = store();
  const banner = isBanner.filter((v) => {
    return v.area_code === '9';
  });
  return (
    <PageWrapper>
      <PageWrap>
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
            {banner.map((v, i) => (
              <div key={i} style={{ marginTop: '10px', width: '160px' }}>
                {v.link_target === 3 && (
                  <Img
                    src={process.env.REACT_APP_URL + v.bannerSrc}
                    alt=""
                    cursor={'pointer'}
                    onClick={() => {
                      window.open(
                        `${v.link_url}`,
                        '_black',
                        `top=100px, width=${v.window_width}, height=${v.window_height}`
                      );
                    }}
                  />
                )}
                {v.link_target !== 3 && (
                  <a href={v.link_url} target={v.link_target === 2 ? '_blank' : ''} rel="noopener noreferrer">
                    <Img src={process.env.REACT_APP_URL + v.bannerSrc} alt="" />
                  </a>
                )}
              </div>
            ))}
          </QuickMenuWrapper>
        </ContainerWrap>
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(QuickMenu);

/* onClick={() => {
                window.open('/manual', '_black', 'width=1300, height=720, top=100px');
              }}
               */
