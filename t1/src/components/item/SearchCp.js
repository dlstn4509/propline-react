import React, { useState, useEffect } from 'react';
import styled, { FlexDiv, color } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import store from '@/store/store';
import { BsCheckLg } from 'react-icons/bs';
import { FaRegSquare, FaCheckSquare, FaWindowClose } from 'react-icons/fa';

const SearchCpWrapper = styled.div`
  border-top: 1px solid #2a55cc;
  border-left: 1px solid #2a55cc;
  color: #464d50;
  span,
  svg {
    cursor: pointer;
  }
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
  border-right: 1px solid #2a55cc;
  border-bottom: 1px dotted #ced6e3;
`;
const Sigungu = styled(FlexDiv)`
  width: 14%;
  margin-bottom: 10px;
  svg {
    color: ${color.blue};
  }
  span {
    margin-right: 4px;
    &.active {
      color: ${color.blue};
    }
    :hover {
      color: ${color.blue};
      text-decoration: underline;
    }
  }
`;
const EupmyeondongWrap = styled(FlexDiv)`
  flex-wrap: wrap;
  padding: 10px 0px 0px 45px;
  font-size: 13px;
  border-right: 1px solid #2a55cc;
  border-bottom: 1px dotted #ced6e3;
`;
const Eupmyeondong = styled(FlexDiv)`
  width: 14%;
  margin-bottom: 10px;
  svg {
    margin-right: 2px;
  }
`;
const ChoiceAreaWrap = styled(FlexDiv)`
  border-right: 1px solid #2a55cc;
  border-bottom: 1px dotted #ced6e3;
  padding: 10px 45px;
`;
const ChoiceAreaBox = styled(FlexDiv)`
  flex-wrap: wrap;
  border: 1px solid #ced6e3;
  margin-left: 10px;
  width: 800px;
  height: 22px;
  font-size: 13px;
  padding-left: 10px;
  .info {
    color: ${color.blue};
  }
`;
const ChoiceArea = styled(FlexDiv)`
  margin-right: 10px;
  svg {
    margin-left: 4px;
    color: #df3f32;
  }
`;
const ItemTypeBtnWrap = styled(FlexDiv)`
  padding: 10px 45px;
  border-right: 1px solid #2a55cc;
  border-bottom: 1px dotted #ced6e3;
  font-size: 13px;
  font-weight: bold;
`;
const ItemTypeBtn = styled(FlexDiv)`
  font-weight: 400;
  height: 35px;
  padding: 0px 15px;
  background-color: #ffffff;
  border: 1px solid #c2c2c2;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 6px;
  &.active {
    background-color: #26489b;
    border: 1px solid #26489b;
    color: #fff;
  }
`;
const InputWrapper = styled(FlexDiv)`
  font-size: 13px;
  padding: 10px 45px;
  border-right: 1px solid #2a55cc;
  border-bottom: 1px dotted #ced6e3;
`;
const InputWrap = styled(FlexDiv)`
  color: #464d50;
  margin-right: 50px;
  .title {
    margin-right: 10px;
  }
  input {
    border: 1px solid #dae1e7;
    height: 25px;
    width: 100px;
    margin-right: 4px;
    :focus {
      border: 2px solid #000;
      border-radius: 4px;
    }
  }
`;

const SearchCp = () => {
  let typeArr = [
    { text: '전체', type: 'all' },
    { text: '일반룸', type: 'normal' },
    { text: '풀옵션', type: 'fullopt' },
    { text: '사무실', type: 'office' },
    { text: '상가', type: 'store' },
    { text: '오피스텔', type: 'officetel' },
    { text: '아파트', type: 'apt' },
  ];
  const { isTypename, setTypename } = store();
  const navigate = useNavigate();
  const [sidoArr, setSidoArr] = useState([]);
  const [clickSido, setClickSido] = useState('강원');

  const [sigunguArr, setSigunguArr] = useState([]);
  const [clickSigungu, setClickSigungu] = useState('');

  const [eupmyeondongArr, setEupmyeondongArr] = useState([]);
  const [clickEupmyeondongArr, setClickEupmyeondongArr] = useState([]);

  const IconsClick = (e) => {
    let el = e.target.tagName === 'svg' ? e.target : e.target.parentNode;
    return el;
  };

  const eupmyeondongArrCtr = (eupmyeondongName) => {
    if (clickEupmyeondongArr.includes(eupmyeondongName)) {
      setClickEupmyeondongArr(clickEupmyeondongArr.filter((v) => v !== eupmyeondongName));
    } else {
      if (clickEupmyeondongArr.length >= 5) {
        alert('최대 5개까지 선택할수 있습니다.');
      } else {
        setClickEupmyeondongArr([...clickEupmyeondongArr, eupmyeondongName]);
      }
    }
  };

  const eupmyeondongClick = (e) => {
    e.target.innerHTML.includes(clickSigungu)
      ? eupmyeondongArrCtr(e.target.innerHTML)
      : eupmyeondongArrCtr(`${clickSigungu} ${e.target.innerHTML}`);
  };

  const eupmyeondongIconClick = (e) => {
    let el = IconsClick(e);
    let innerHTML = el.nextSibling.innerHTML;
    innerHTML.includes(clickSigungu)
      ? eupmyeondongArrCtr(innerHTML)
      : eupmyeondongArrCtr(`${clickSigungu} ${innerHTML}`);
  };

  const choiceAreaClick = (e) => {
    let el = IconsClick(e);
    let innerHTML = el.previousSibling.innerHTML;
    setClickEupmyeondongArr(clickEupmyeondongArr.filter((v) => v !== innerHTML));
  };

  const itemTypeBtnClick = (e) => {
    for (let v of typeArr) {
      if (v.text === e.target.innerHTML) {
        navigate(`/item?type=${v.type}`);
        setTypename(v.type);
      }
    }
  };

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

  useEffect(() => {
    if (clickSigungu) {
      (async () => {
        const { data } = await axios.get(
          process.env.REACT_APP_URL_API + `item/eupmyeondong?sido=${clickSido}&sigungu=${clickSigungu}`
        );
        setEupmyeondongArr(data);
      })();
    }
  }, [clickSigungu]);

  return (
    <SearchCpWrapper>
      <SiWrap>
        {sidoArr.map((v, i) => (
          <Si
            key={i}
            className={clickSido === v.sido ? 'active' : ''}
            onClick={(e) => {
              setClickSido(e.target.innerHTML);
              setEupmyeondongArr([]);
            }}
          >
            {v.sido}
          </Si>
        ))}
      </SiWrap>

      <SigunguWrap>
        {sigunguArr.map((v, i) => (
          <Sigungu key={i}>
            <span
              className={clickSigungu === v.sigungu ? 'active' : ''}
              onClick={(e) => {
                setClickSigungu(e.target.innerHTML);
              }}
            >
              {v.sigungu}
            </span>
            {clickSigungu === v.sigungu && <BsCheckLg />}
          </Sigungu>
        ))}
      </SigunguWrap>

      {eupmyeondongArr.length > 1 && (
        <EupmyeondongWrap>
          {eupmyeondongArr.map((v, i) => (
            <Eupmyeondong key={i}>
              {!clickEupmyeondongArr.includes(`${clickSigungu} ${v.eupmyeondong}`) && (
                <FaRegSquare onClick={eupmyeondongIconClick} />
              )}
              {clickEupmyeondongArr.includes(`${clickSigungu} ${v.eupmyeondong}`) && (
                <FaCheckSquare onClick={eupmyeondongIconClick} style={{ color: `${color.blue}` }} />
              )}
              <span onClick={eupmyeondongClick}>{v.eupmyeondong}</span>
            </Eupmyeondong>
          ))}
        </EupmyeondongWrap>
      )}

      <ChoiceAreaWrap>
        <div>선택한 지역 : </div>
        <ChoiceAreaBox>
          {clickEupmyeondongArr.length === 0 && (
            <div className="info">지역을 선택하세요. (최대 5개 지역 선택가능)</div>
          )}
          {clickEupmyeondongArr.map((v, i) => (
            <ChoiceArea key={i}>
              <div>{v}</div>
              <FaWindowClose onClick={choiceAreaClick} />
            </ChoiceArea>
          ))}
        </ChoiceAreaBox>
      </ChoiceAreaWrap>

      <ItemTypeBtnWrap>
        <div style={{ marginRight: '46px' }}>매물유형</div>
        {typeArr.map((v, i) => (
          <ItemTypeBtn key={i} className={v.type === isTypename ? 'active' : ''} onClick={itemTypeBtnClick}>
            {v.text}
          </ItemTypeBtn>
        ))}
      </ItemTypeBtnWrap>

      <InputWrapper>
        <InputWrap>
          <div className="title">번지</div>
          <input type="text" placeholder="지번본번" />
          <div style={{ marginRight: '4px' }}>~</div>
          <input type="text" placeholder="지번본번" />
        </InputWrap>
        <InputWrap>
          <div className="title">건물명/매물번호</div>
          <input type="text" style={{ width: '200px' }} />
        </InputWrap>
      </InputWrapper>
    </SearchCpWrapper>
  );
};

export default React.memo(SearchCp);
