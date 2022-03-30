import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const ListFilterCpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const ListFilterWrap = styled.div`
  display: flex;
`;
const HidePicture = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  color: #464d50;
  img {
    margin-right: 10px;
  }
`;
const Select = styled.select`
  width: auto;
  margin-right: 10px;
  font-size: 13px;
  height: 25px;
  padding: 0 10px;
  border: 1px solid #dae1e7;
  color: #464d50;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  color: #516cae;
  font-size: 13px;
  cursor: pointer;
  position: relative;
`;
const HoverText = styled.div`
  font-size: 12px;
  width: 409px;
  padding: 12px 18px 0 18px;
  border: 1px solid #dae1e7;
  position: absolute;
  background-color: #fff;
  color: #464d50;
  top: 30px;
  left: 10px;
  img {
    margin-left: 8px;
  }
  .subText01 {
    margin-bottom: 6px;
    ::after {
      content: '';
      display: inline-block;
      width: 2px;
      height: 2px;
      background-color: #464d50;
      border-radius: 100%;
      position: absolute;
      left: -10px;
      top: 8px;
    }
  }
  .subText02 {
    padding-bottom: 6px;
    margin-bottom: 6px;
  }
`;

const ListFilterCp = () => {
  const [isRadio, setIsRadio] = useState(process.env.REACT_APP_URL + 'img/radio_01_off.png');
  const [isHoverText, setIsHoverText] = useState(false);
  const type = ['전체', '일반룸', '풀옵션', '사무실', '상가', '오피스텔', '아파트'];
  const date = [
    '최근업데이트순',
    '최근등록일순',
    '동영상물건순',
    '최근중공순',
    '기준가 낮은순',
    '기준가 높은순',
    '월세 낮은순',
    '월세 높은순',
    '보증금 낮은순',
    '보증금 높은순',
    '번지 오름차순',
    '번지 내림차순',
    '룸갯수 많은순',
    '룸갯수 적은순',
  ];
  const sortCount = [
    '10개씩 보기',
    '20개씩 보기',
    '30개씩 보기',
    '40개씩 보기',
    '50개씩 보기',
    '60개씩 보기',
    '70개씩 보기',
    '80개씩 보기',
    '90개씩 보기',
    '100개씩 보기',
  ];
  const clickRadio = () => {
    isRadio === process.env.REACT_APP_URL + 'img/radio_01_off.png'
      ? setIsRadio(process.env.REACT_APP_URL + 'img/radio_01_on.png')
      : setIsRadio(process.env.REACT_APP_URL + 'img/radio_01_off.png');
  };
  let pathname = window.location.pathname;
  console.log(pathname);

  return (
    <ListFilterCpWrapper>
      <ListFilterWrap>
        {pathname === '/item' && (
          <Select name="" id="">
            {type.map((v, i) => (
              <option key={i} value={i}>
                {v}
              </option>
            ))}
          </Select>
        )}
        <Select name="" id="">
          {date.map((v, i) => (
            <option key={i} value={i}>
              {v}
            </option>
          ))}
        </Select>
        {pathname === '/item' && (
          <Select name="" id="">
            <option value="">2차정렬(미선택)</option>
            {date.map((v, i) => (
              <option key={i} value={i}>
                {v}
              </option>
            ))}
          </Select>
        )}
        <Select name="" id="">
          {sortCount.map((v, i) => (
            <option key={i} value={i}>
              {v}
            </option>
          ))}
        </Select>
        <Text
          onMouseEnter={() => {
            setIsHoverText(!isHoverText);
          }}
          onMouseLeave={() => {
            setIsHoverText(!isHoverText);
          }}
        >
          {pathname === '/item' && (
            <>
              <img src={process.env.REACT_APP_URL + 'img/exp_std_icon.png'} alt="" /> 매물노출기준
            </>
          )}
          {isHoverText && (
            <HoverText>
              <div style={{ position: 'relative' }}>
                <div className="subText01">{`최근등록일순: 공실매물 > "광고등록일" / 공동중개 > "광고등록일"`}</div>
                <div
                  className="subText02"
                  style={{
                    borderBottom: '1px solid #dae1e7',
                  }}
                >
                  └
                  <img src={process.env.REACT_APP_URL + 'img/it_vip_icon03.png'} alt="" /> 매물은 우선적으로
                  노출됩니다.
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div className="subText01">{`최근업데이트순: 공실매물 > "최종확인일(통화)" / 공동중개 > "광고수정일"`}</div>
                <div className="subText02">
                  └
                  <img src={process.env.REACT_APP_URL + 'img/it_vip_icon03.png'} alt="" /> 와
                  <img src={process.env.REACT_APP_URL + 'img/it_plus_icon03.png'} alt="" /> 매물이 순차적으로
                  노출된 후, 그 외 매물이 노출됩니다.
                </div>
              </div>
            </HoverText>
          )}
        </Text>
      </ListFilterWrap>
      <HidePicture onClick={clickRadio}>
        <img src={isRadio} alt="" />
        매물사진 숨기기
      </HidePicture>
    </ListFilterCpWrapper>
  );
};

export default React.memo(ListFilterCp);
