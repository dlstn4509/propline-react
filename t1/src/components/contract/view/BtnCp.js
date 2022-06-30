import React from 'react';
import styled, { FlexDiv, Button } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import { BsPrinter } from 'react-icons/bs';
import axios from 'axios';

const ButtonWrap = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 30px;
`;
const BigButton = styled.button`
  display: ${(props) => props.display};
  margin-left: ${(props) => props.ml};
  width: 150px;
  height: 35px;
  line-height: 35px;
  background-color: #3168ff;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  cursor: pointer;
`;

const BtnCp = ({ setPageType, idx }) => {
  const navigate = useNavigate();

  const clickDelete = async () => {
    const { data } = await axios.delete(process.env.REACT_APP_URL_API + `contract?idx=${idx}`);
    if (data.affectedRows === 1) {
      navigate('/contract');
    }
  };

  return (
    <ButtonWrap>
      <FlexDiv>
        <Button mr={'10px'}>복사</Button>
        <Button mr={'10px'} onClick={clickDelete}>
          삭제
        </Button>
        <Button mr={'10px'}>
          <FlexDiv>
            <BsPrinter style={{ marginRight: '4px' }} />
            인쇄
          </FlexDiv>
        </Button>
        <Button>확인설명서</Button>
      </FlexDiv>
      <FlexDiv>
        <BigButton
          type="button"
          style={{ backgroundColor: '#79b465' }}
          onClick={() => {
            setPageType('');
            window.scrollTo(0, 0);
            navigate('/contract');
          }}
        >
          목록으로 돌아가기
        </BigButton>
        <BigButton>계약서 수정하기</BigButton>
      </FlexDiv>
    </ButtonWrap>
  );
};

export default React.memo(BtnCp);
