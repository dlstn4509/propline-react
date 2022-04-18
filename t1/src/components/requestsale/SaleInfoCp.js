import React, { useState } from 'react';
import styled, { Title, color } from '@/style';
import { Link } from 'react-router-dom';
import { FaCheck, FaExclamationCircle, FaCheckCircle, FaWindowClose } from 'react-icons/fa';

const SaleInfoWrapper = styled.div`
  margin-bottom: 70px;
`;
const SaleInfoTable = styled.table`
  border-top: 1px solid #f0f0f0;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: ${(props) => (props.color ? props.color : '#464d50')};
  margin-bottom: ${(props) => props.mb};
`;
const Tr = styled.tr`
  border-bottom: 1px solid #f0f0f0;
`;
const TdTitle = styled.td`
  font-size: 13px;
  color: #464d50;
  width: 160px;
  padding: 20px;
  background-color: #f5f5f5;
  span {
    color: red;
  }
`;
const Td = styled.td`
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;
const RequestKind = styled.div`
  width: 158px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #e6e6e6;
  background-color: #f5f5f5;
  font-size: 13px;
  padding: 0 10px;
  color: #464d50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &.active {
    color: ${color.blue};
    border: 1px solid ${color.blue};
    font-weight: 600;
  }
`;
const RadioInput = styled.input`
  margin-right: 6px;
`;
const Label = styled.label`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  width: ${(props) => props.width};
  color: #464d50;
  padding-left: 10px;
  font-size: 13px;
  height: 35px;
  margin-right: 5px;
`;
const Input = styled.input`
  width: ${(props) => props.width};
  color: #464d50;
  padding-left: 10px;
  font-size: 13px;
  height: 35px;
  border: 1px solid #dae1e7;
  margin: 0 6px;
  margin-left: ${(props) => props.ml};
  :focus {
    border: 2px solid #000;
  }
`;
const Btn = styled.div`
  width: 137px;
  height: 35px;
  line-height: 35px;
  background-color: #888f91;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;
const ThumbImgWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const ThumbImgWrap = styled.div`
  margin-right: 5px;
  border: 2px solid blue;
  color: blue;
  position: relative;
`;
const ThumbImg = styled.img`
  width: 105px;
  height: 105px;
`;

const SaleInfoCp = ({ requestKind, setRequestKind }) => {
  const [thumbImgArr, setThumbImgArr] = useState([]);
  const [commissionType, setCommissionType] = useState('commission'); // commission, input, other
  const [inputVal, setInputVal] = useState('');
  const [isMountain, setIsMountain] = useState(0);
  const changeCommissionType = (e) => {
    setInputVal('');
    setCommissionType(e.target.value);
    document.querySelectorAll('.inputText').forEach((v) => (v.value = ''));
  };
  const inputFileChange = (e) => {
    let input = e.target;
    let reader = new FileReader();
    reader.onload = (e) => {
      setThumbImgArr([...thumbImgArr, e.target.result]);
    };
    reader.readAsDataURL(input.files[0]);
  };
  const deleteThumbImg = (e) => {
    let srcTag = e.target.previousSibling
      ? e.target.previousSibling.src
      : e.target.parentNode.previousSibling.src;
    setThumbImgArr(thumbImgArr.filter((v) => v !== srcTag));
  };
  const inputChange = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <SaleInfoWrapper>
      <Title>매물정보</Title>
      <SaleInfoTable>
        <tbody>
          <Tr>
            <TdTitle>
              의뢰종류<span>*</span>
            </TdTitle>
            <Td>
              <RequestKind
                onClick={() => {
                  setRequestKind(1);
                }}
                className={requestKind === 1 ? 'active' : ''}
              >
                부동산내놓기
                {requestKind === 1 && <FaCheck />}
              </RequestKind>
              <RequestKind
                onClick={() => {
                  setRequestKind(2);
                }}
                className={requestKind === 2 ? 'active' : ''}
              >
                부동산구하기
                {requestKind === 2 && <FaCheck />}
              </RequestKind>
            </Td>
          </Tr>
          {requestKind === 1 && (
            <Tr>
              <TdTitle>
                중개수수료<span>*</span>
              </TdTitle>
              <td style={{ padding: '10px 16px' }}>
                <input type="hidden" name="commission" value={inputVal} />
                <FlexDiv mb={'10px'}>
                  <RadioInput
                    type="radio"
                    name="commissionType"
                    value="법정수수료"
                    onChange={changeCommissionType}
                    defaultChecked
                  />
                  <Label htmlFor="commission">법정수수료 지급</Label>

                  <RadioInput
                    type="radio"
                    name="commissionType"
                    value="input"
                    onChange={changeCommissionType}
                  />
                  <Label htmlFor="input">
                    <input
                      type="text"
                      className="inputText"
                      readOnly={commissionType !== 'input'}
                      onChange={inputChange}
                    />
                    만
                  </Label>

                  <RadioInput
                    type="radio"
                    name="commissionType"
                    value="other"
                    onChange={changeCommissionType}
                  />
                  <Label htmlFor="other">
                    기타
                    <input
                      type="text"
                      className="inputText"
                      readOnly={commissionType !== 'other'}
                      onChange={inputChange}
                    />
                  </Label>
                </FlexDiv>
                <FlexDiv color={color.blue}>
                  <FaExclamationCircle style={{ marginRight: '10px' }} />
                  매물의뢰서 작성자는 법정수수료를 지급하는 것에 대하여 동의하며, <br />
                  중개수수료 지급관련 민원이 발생될 경우 공실클럽 매물 등록에 제한이 될 수 있음을 확인합니다.
                </FlexDiv>
              </td>
            </Tr>
          )}
          <Tr>
            <TdTitle>
              매물종류<span>*</span>
            </TdTitle>
            <Td>
              <Select name="item_kind" width={'160px'}>
                <option value="">-선택-</option>
                <option value="원룸">원룸</option>
                <option value="다가구">다가구</option>
                <option value="다세대">다세대</option>
                <option value="사무실">사무실</option>
                <option value="상가">상가</option>
                <option value="아파트">아파트</option>
                <option value="오피스텔">오피스텔</option>
                <option value="건물">건물</option>
                <option value="토지">토지</option>
                <option value="기타">기타</option>
              </Select>
            </Td>
          </Tr>
          {requestKind === 1 && (
            <Tr>
              <TdTitle>
                매물주소<span>*</span>
              </TdTitle>
              <td style={{ padding: '10px 16px' }}>
                <FlexDiv mb={'6px'}>
                  {/* <Select name="sido" id="" width={'120px'}>
                    <option value="">시/도</option>
                  </Select>
                  <Select name="sigungu" id="" width={'120px'}>
                    <option value="">시/군/구</option>
                  </Select>
                  <Select name="eupmyeondong" id="" width={'120px'}>
                    <option value="">읍/면/동</option>
                  </Select> */}
                  <Input type="text" name="sido" width={'115px'} ml={'0'} placeholder="시/도" />
                  <Input type="text" name="sigungu" width={'115px'} placeholder="시/군/구" />
                  <Input type="text" name="eupmyeondong" width={'115px'} placeholder="읍/면/동" />
                  <Input type="text" name="ri" width={'115px'} placeholder="리" />
                  <FaCheckCircle
                    style={{
                      fontSize: '20px',
                      marginRight: '6px',
                      color: `${isMountain === 1 ? '#3168ff' : ''}`,
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setIsMountain(isMountain === 0 ? 1 : 0);
                    }}
                  />
                  산
                  <Input type="text" name="land_no_m" width={'80px'} placeholder="본번지" /> -
                  <Input type="text" name="land_no_s" width={'80px'} placeholder="부번지" />
                  <input type="hidden" name="is_mountain" value={isMountain} />
                </FlexDiv>
                <FlexDiv>
                  <Input
                    type="text"
                    width={'370px'}
                    placeholder="상세 주소를 입력해주세요."
                    style={{ marginLeft: '0' }}
                    name="detail_address"
                  />
                </FlexDiv>
              </td>
            </Tr>
          )}
          {requestKind === 2 && (
            <Tr>
              <TdTitle>
                원하는 지역<span>*</span>
              </TdTitle>
              <td style={{ padding: '10px 16px' }}>
                <FlexDiv mb={'6px'}>
                  {/* <Select name="sido" id="" width={'120px'}>
                    <option value="">시/도</option>
                  </Select>
                  <Select name="sigungu" id="" width={'120px'}>
                    <option value="">시/군/구</option>
                  </Select>
                  <Select name="eupmyeondong" id="" width={'120px'}>
                    <option value="">읍/면/동</option>
                  </Select> */}
                  <Input type="text" name="sido" width={'115px'} ml={'0'} placeholder="시/도" />
                  <Input type="text" name="sigungu" width={'115px'} placeholder="시/군/구" />
                  <Input type="text" name="eupmyeondong" width={'115px'} placeholder="읍/면/동" />
                </FlexDiv>
              </td>
            </Tr>
          )}
          <Tr>
            <TdTitle>전달사항</TdTitle>
            <Td>
              <textarea name="memo" cols="30" rows="10" style={{ height: '75px' }}></textarea>
            </Td>
          </Tr>
          {requestKind === 1 && (
            <Tr>
              <TdTitle>사진</TdTitle>
              <td style={{ padding: '10px 16px', fontSize: '12px', color: '#888f91' }}>
                <input type="file" id="file" style={{ display: 'none' }} onChange={inputFileChange} />
                <label htmlFor="file" style={{ width: '137px' }}>
                  <Btn>+ 사진등록</Btn>
                </label>
                <div>*여러 사진 한번에 등록 가능합니다.</div>
                <div>*5MB이상 첨부 불가하며, 최대 등록 가능한 사진 개수는 20개입니다.</div>
                <div>*이미지 파일 형식 : jpg, gif, jpeg, png 만 등록 가능합니다.</div>
                <ThumbImgWrapper>
                  {thumbImgArr.map((v, i) => (
                    <ThumbImgWrap key={i}>
                      <ThumbImg src={v} alt="" />
                      <FaWindowClose
                        onClick={deleteThumbImg}
                        style={{ position: 'absolute', right: '0', top: '-2px', fontSize: '20px' }}
                      />
                    </ThumbImgWrap>
                  ))}
                </ThumbImgWrapper>
              </td>
            </Tr>
          )}
        </tbody>
      </SaleInfoTable>
    </SaleInfoWrapper>
  );
};

export default React.memo(SaleInfoCp);
