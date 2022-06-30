import React from 'react';
import styled, { FlexDiv, Button } from '@/style';
import { Link } from 'react-router-dom';
import { BsPrinter } from 'react-icons/bs';

const BtnCpWrap = styled(FlexDiv)`
  justify-content: space-between;
  font-family: 'Noto Sans', sans-serif;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const BtnCp = () => {
  return (
    <BtnCpWrap>
      <Title>계약서인쇄</Title>
      <FlexDiv>
        <Button mr={'6px'}>
          <FlexDiv
            onClick={() => {
              window.print();
            }}
          >
            <BsPrinter style={{ marginRight: '4px' }} />
            인쇄
          </FlexDiv>
        </Button>
        <Button
          onClick={() => {
            window.close();
          }}
        >
          닫기
        </Button>
      </FlexDiv>
    </BtnCpWrap>
  );
};

export default React.memo(BtnCp);
