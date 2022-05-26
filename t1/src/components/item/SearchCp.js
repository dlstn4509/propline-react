import React, { useState, useEffect } from 'react';
import styled, { FlexDiv, color } from '@/style';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SearchCpWrapper = styled.div`
  border-top: 1px solid #2a55cc;
  border-left: 1px solid #2a55cc;
`;
const SiWrap = styled(FlexDiv)``;
const Si = styled(FlexDiv)`
  border-bottom: 1px solid #2a55cc;
  border-right: 1px solid #2a55cc;
  width: 5.55555555555%;
  height: 42px;
  justify-content: center;
  cursor: pointer;
  &.active {
    background-color: ${color.blue};
    color: #fff;
  }
`;
const SigunguWrap = styled(FlexDiv)`
  flex-wrap: wrap;
  padding: 10px 0px 0px 45px;
  font-size: 15px;
  color: #464d50;
  border-right: 1px solid #2a55cc;
  border-bottom: 1px solid #2a55cc;
`;
const Sigungu = styled.div`
  width: 13%;
  margin-bottom: 10px;
  margin-right: 8px;
  span {
    cursor: pointer;
    :hover {
      color: ${color.blue};
      text-decoration: underline;
    }
  }
`;

const SearchCp = () => {
  const [sidoArr, setSidoArr] = useState([]);
  const [clickSido, setClickSido] = useState('강원');
  const [sigunguArr, setSigunguArr] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + 'item/sido');
      setSidoArr(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `item/sigungu?sido=${clickSido}`);
      setSigunguArr(data);
    })();
  }, [clickSido]);

  return (
    <SearchCpWrapper>
      <SiWrap>
        {sidoArr.map((v, i) => (
          <Si
            key={i}
            className={clickSido === v.sido ? 'active' : ''}
            onClick={(e) => {
              setClickSido(e.target.innerHTML);
            }}
          >
            {v.sido}
          </Si>
        ))}
      </SiWrap>
      <SigunguWrap>
        <Sigungu>
          <span>{clickSido}전체</span>
        </Sigungu>
        {sigunguArr.map((v, i) => (
          <Sigungu key={i}>
            <span>{v.sigungu}</span>
          </Sigungu>
        ))}
      </SigunguWrap>
    </SearchCpWrapper>
  );
};

export default React.memo(SearchCp);
