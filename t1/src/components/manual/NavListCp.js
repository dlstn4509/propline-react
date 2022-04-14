import React from 'react';
import styled, { FlexDiv, color } from '@/style';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import $ from 'jquery';

const NavListWrapper = styled.div`
  width: 285px;
  position: fixed;
`;
const TitleWrap = styled.div`
  padding: 22px 0;
  text-align: center;
  border-bottom: 1px solid #dfdfdf;
`;
const ListWrap = styled.div`
  border-bottom: 1px solid #dfdfdf;
  font-size: 18px;
  line-height: 50px;
  font-weight: 500;
  cursor: pointer;
  span {
    color: #8abcff;
    margin-left: 10px;
  }
`;
const ListTitle = styled(FlexDiv)`
  justify-content: space-between;
  height: 50px;
  padding: 0 25px;
  &.active {
    background-color: ${color.blue};
    color: #fff;
  }
`;
const List = styled.div`
  height: 35px;
  background-color: #e8e8e8;
  padding: 0px 0px 0px 25px;
  font-size: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05px;
  &.active,
  :hover {
    background-color: #f6fbff;
    color: ${color.blue};
  }
`;

const NavListCp = ({ setChoiceListWrap, choiceListWrap, setChoiceList, choiceList }) => {
  return (
    <NavListWrapper>
      <TitleWrap>
        <img
          src={process.env.REACT_APP_URL + 'img/img_logo.png'}
          alt=""
          onClick={() => {
            setChoiceList('main');
            setChoiceListWrap('');
          }}
          style={{ cursor: 'pointer' }}
        />
      </TitleWrap>

      <ListWrap>
        <ListTitle
          style={{ color: '#3168ff' }}
          onClick={() => {
            setChoiceList('about');
            setChoiceListWrap('');
          }}
        >
          공실클럽이란 무엇입니까?
        </ListTitle>
      </ListWrap>

      <ListWrap
        onMouseEnter={() => {
          $('.portal').stop();
          $('.portal').slideDown();
        }}
        onMouseLeave={() => {
          $('.portal').stop();
          $('.portal').slideUp();
        }}
      >
        <div>
          <ListTitle className={choiceListWrap === 'portal' ? 'active' : ''}>
            <div>
              포탈 이용안내 <span>(6)</span>
            </div>
            <FaAngleDown />
          </ListTitle>
          <div
            className="portal"
            style={{ display: 'none' }}
            onClick={() => {
              setChoiceListWrap('portal');
            }}
          >
            <List
              className={choiceList === 'singUp' ? 'active' : ''}
              onClick={() => {
                setChoiceList('singUp');
              }}
            >
              1. 공실클럽 회원 가입 방법
            </List>
            <List
              className={choiceList === 'payment' ? 'active' : ''}
              onClick={() => {
                setChoiceList('payment');
              }}
            >
              2. 공실클럽 유료서비스 결제하기
            </List>
            <List
              className={choiceList === 'gpoint' ? 'active' : ''}
              onClick={() => {
                setChoiceList('gpoint');
              }}
            >
              3. G포인트 충전하기
            </List>
            <List
              className={choiceList === 'notice' ? 'active' : ''}
              onClick={() => {
                setChoiceList('notice');
              }}
            >
              4. 공지사항 & 기능개선 업데이트 내역
            </List>
            <List
              className={choiceList === 'request' ? 'active' : ''}
              onClick={() => {
                setChoiceList('request');
              }}
            >
              5. 매물의뢰하기
            </List>
            <List
              className={choiceList === 'service' ? 'active' : ''}
              onClick={() => {
                setChoiceList('service');
              }}
            >
              6. 원격지원 서비스 요청 방법
            </List>
          </div>
        </div>
      </ListWrap>

      <ListWrap
        onMouseEnter={() => {
          $('.gongsilMamul').stop();
          $('.gongsilMamul').slideDown();
        }}
        onMouseLeave={() => {
          $('.gongsilMamul').stop();
          $('.gongsilMamul').slideUp();
        }}
      >
        <div>
          <ListTitle className={choiceListWrap === 'gongsilMamul' ? 'active' : ''}>
            <div>
              공실매물 이용안내 <span>(1)</span>
            </div>
            <FaAngleDown />
          </ListTitle>
          <div
            className="gongsilMamul"
            style={{ display: 'none' }}
            onClick={() => {
              setChoiceListWrap('gongsilMamul');
            }}
          >
            <List
              className={choiceList === 'mamulSearch' ? 'active' : ''}
              onClick={() => {
                setChoiceList('mamulSearch');
              }}
            >
              1. 공실매물 조회하기
            </List>
          </div>
        </div>
      </ListWrap>

      <ListWrap
        onMouseEnter={() => {
          $('.gongdongJunggae').stop();
          $('.gongdongJunggae').slideDown();
        }}
        onMouseLeave={() => {
          $('.gongdongJunggae').stop();
          $('.gongdongJunggae').slideUp();
        }}
      >
        <div>
          <ListTitle className={choiceListWrap === 'gongdongJunggae' ? 'active' : ''}>
            <div>
              공동중개 이용안내 <span>(2)</span>
            </div>
            <FaAngleDown />
          </ListTitle>
          <div
            className="gongdongJunggae"
            style={{ display: 'none' }}
            onClick={() => {
              setChoiceListWrap('gongdongJunggae');
            }}
          >
            <List
              className={choiceList === 'junggaeSearch' ? 'active' : ''}
              onClick={() => {
                setChoiceList('junggaeSearch');
              }}
            >
              1. 공실중개 조회하기
            </List>
            <List
              className={choiceList === 'junggaeReg' ? 'active' : ''}
              onClick={() => {
                setChoiceList('junggaeReg');
              }}
            >
              2. 공실중개 매물등록하기
            </List>
          </div>
        </div>
      </ListWrap>

      <ListWrap
        onMouseEnter={() => {
          $('.saleInfo').stop();
          $('.saleInfo').slideDown();
        }}
        onMouseLeave={() => {
          $('.saleInfo').stop();
          $('.saleInfo').slideUp();
        }}
      >
        <div>
          <ListTitle className={choiceListWrap === 'saleInfo' ? 'active' : ''}>
            <div>
              매매정보 이용안내 <span>(1)</span>
            </div>
            <FaAngleDown />
          </ListTitle>
          <div
            className="saleInfo"
            style={{ display: 'none' }}
            onClick={() => {
              setChoiceListWrap('saleInfo');
            }}
          >
            <List
              className={choiceList === 'saleSearch' ? 'active' : ''}
              onClick={() => {
                setChoiceList('saleSearch');
              }}
            >
              1. 매매정보 조회하기
            </List>
          </div>
        </div>
      </ListWrap>

      <ListWrap
        onMouseEnter={() => {
          $('.interest').stop();
          $('.interest').slideDown();
        }}
        onMouseLeave={() => {
          $('.interest').stop();
          $('.interest').slideUp();
        }}
      >
        <div>
          <ListTitle className={choiceListWrap === 'interest' ? 'active' : ''}>
            <div>
              관심매물 이용안내 <span>(1)</span>
            </div>
            <FaAngleDown />
          </ListTitle>
          <div
            className="interest"
            style={{ display: 'none' }}
            onClick={() => {
              setChoiceListWrap('interest');
            }}
          >
            <List
              className={choiceList === 'interest' ? 'active' : ''}
              onClick={() => {
                setChoiceList('interest');
              }}
            >
              1. 관심매물 담기 및 조회하기
            </List>
          </div>
        </div>
      </ListWrap>

      <ListWrap
        onMouseEnter={() => {
          $('.self').stop();
          $('.self').slideDown();
        }}
        onMouseLeave={() => {
          $('.self').stop();
          $('.self').slideUp();
        }}
      >
        <div>
          <ListTitle className={choiceListWrap === 'self' ? 'active' : ''}>
            <div>
              매물셀프코너 이용안내 <span>(2)</span>
            </div>
            <FaAngleDown />
          </ListTitle>
          <div
            className="self"
            style={{ display: 'none' }}
            onClick={() => {
              setChoiceListWrap('self');
            }}
          >
            <List
              className={choiceList === 'howToSearch' ? 'active' : ''}
              onClick={() => {
                setChoiceList('howToSearch');
              }}
            >
              1. 매물 찾습니다 & 매물내놓습니다 이용방법
            </List>
            <List
              className={choiceList === 'commission' ? 'active' : ''}
              onClick={() => {
                setChoiceList('commission');
              }}
            >
              2. 중개의뢰현황 이용방법
            </List>
          </div>
        </div>
      </ListWrap>

      <ListWrap
        onMouseEnter={() => {
          $('.community').stop();
          $('.community').slideDown();
        }}
        onMouseLeave={() => {
          $('.community').stop();
          $('.community').slideUp();
        }}
      >
        <div>
          <ListTitle className={choiceListWrap === 'community' ? 'active' : ''}>
            <div>
              커뮤니티 이용안내 <span>(5)</span>
            </div>
            <FaAngleDown />
          </ListTitle>
          <div
            className="community"
            style={{ display: 'none' }}
            onClick={() => {
              setChoiceListWrap('community');
            }}
          >
            <List
              className={choiceList === 'freeBoard' ? 'active' : ''}
              onClick={() => {
                setChoiceList('freeBoard');
              }}
            >
              1. 자유게시판 이용하기
            </List>
            <List
              className={choiceList === 'knowHow' ? 'active' : ''}
              onClick={() => {
                setChoiceList('knowHow');
              }}
            >
              2. 팁&노하우 이용하기
            </List>
            <List
              className={choiceList === 'recruit' ? 'active' : ''}
              onClick={() => {
                setChoiceList('recruit');
              }}
            >
              3. 구인구직 이용하기
            </List>
            <List
              className={choiceList === 'consult' ? 'active' : ''}
              onClick={() => {
                setChoiceList('consult');
              }}
            >
              4. 부동산 전문상담 이용하기
            </List>
            <List
              className={choiceList === 'direct' ? 'active' : ''}
              onClick={() => {
                setChoiceList('direct');
              }}
            >
              5. 부동산자리직거래 이용하기
            </List>
          </div>
        </div>
      </ListWrap>
    </NavListWrapper>
  );
};

export default React.memo(NavListCp);
