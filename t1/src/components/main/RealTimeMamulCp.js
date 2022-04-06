import React from 'react';
import {
  TableWrap,
  TableTheadTr,
  TableListTitle,
  TableListTitlePlus,
  PlusSpan,
  TableTbodyTr,
  TableTbodyType,
  TableTbodyAddr,
  TableTbodyPrice,
} from '@/style/main';
import styled from '@/style';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';

const RealTimeMamulWrapper = styled.div`
  width: 370px;
  color: #5e6667;
  font-size: 13px;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 17px;
  border-bottom: 1px solid #000;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;
const MoreText = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;
const ListWrap = styled.div`
  padding: 12px 0;
`;
const List = styled.div`
  display: flex;
`;
const Type = styled.div`
  width: 60px;
`;
const Address = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
`;
const Money = styled.div`
  width: 130px;
  span {
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    background-color: #8abcff;
    border-radius: 3px;
    padding: 1px 4px;
    margin-right: 4px;
  }
`;

const RealTimeMamulCp = () => {
  return (
    <RealTimeMamulWrapper>
      <TitleWrap>
        <Title>실시간 공실매물</Title>
        <MoreText to="/main">더보기</MoreText>
      </TitleWrap>
      <ListWrap>
        <List>
          <Type>풀옵션</Type>
          <Address>
            송파구 잠실동
            <FaCamera style={{ marginLeft: '6px' }} />
          </Address>
          <Money>
            <span>월</span>500/45
          </Money>
        </List>
      </ListWrap>
      <ListWrap>
        <List>
          <Type>풀옵션</Type>
          <Address>
            송파구 잠실동
            <FaCamera style={{ marginLeft: '6px' }} />
          </Address>
          <Money>
            <span>월</span>500/45
          </Money>
        </List>
      </ListWrap>
      <ListWrap>
        <List>
          <Type>풀옵션</Type>
          <Address>
            송파구 잠실동
            <FaCamera style={{ marginLeft: '6px' }} />
          </Address>
          <Money>
            <span>월</span>500/45
          </Money>
        </List>
      </ListWrap>
      <ListWrap>
        <List>
          <Type>풀옵션</Type>
          <Address>
            송파구 잠실동
            <FaCamera style={{ marginLeft: '6px' }} />
          </Address>
          <Money>
            <span>월</span>500/45
          </Money>
        </List>
      </ListWrap>
      <ListWrap>
        <List>
          <Type>풀옵션</Type>
          <Address>
            송파구 잠실동
            <FaCamera style={{ marginLeft: '6px' }} />
          </Address>
          <Money>
            <span>월</span>500/45
          </Money>
        </List>
      </ListWrap>
    </RealTimeMamulWrapper>
  );
};

export default React.memo(RealTimeMamulCp);
