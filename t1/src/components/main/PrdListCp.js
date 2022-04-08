import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const listTypeArr = ['일반룸', '풀옵션', '사무실', '상가', '오피스텔', '아파트'];

const PrdListWrap = styled.div`
  color: #464d50;
  border: 1px solid #dae1e7;
  border-radius: 5px;
  margin-bottom: 5px;
`;
const Title = styled.div`
  font-size: 14px;
  border-bottom: 1px solid #dae1e7;
  padding: 8px;
`;
const ListWrap = styled.div`
  padding: 8px 8px 0 8px;
`;
const List = styled(FlexDiv)`
  font-size: 13px;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.mb ? props.mb : '8px')};
`;
const IconWrap = styled(FlexDiv)``;
const Icon = styled(FlexDiv)`
  color: #ffffff;
  width: 18px;
  height: 18px;
  background-color: ${(props) => props.bgc};
  border-radius: 3px;
  justify-content: center;
  margin-right: ${(props) => (props.mr ? props.mr : '5px')};
  cursor: pointer;
`;

const PrdListCp = () => {
  return (
    <PrdListWrap>
      <Title>공실매물</Title>
      <ListWrap>
        {listTypeArr.map((v, i) => (
          <List key={i}>
            <div
              style={{
                cursor: 'pointer',
              }}
            >
              {v}
            </div>
            <IconWrap>
              <Icon bgc={'#8abcff'}>월</Icon>
              <Icon bgc={'#7ed48f'} mr={'0'}>
                전
              </Icon>
            </IconWrap>
          </List>
        ))}
      </ListWrap>
    </PrdListWrap>
  );
};

export default React.memo(PrdListCp);
