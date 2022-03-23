import React from 'react';
import styled, {
  SubTitle,
  TableWrap,
  Tr,
  TdFirst,
  TdSecond,
  Input,
  FlexDiv,
  RedStar,
  Label,
} from '@/style/businessSignUp';
import { Link } from 'react-router-dom';

import TelNumArrayCp from './TelNumArrayCp';
import FaxNumArrayCp from './FaxNumArrayCp';
import FavoriteAreaCp from './FavoriteAreaCp';
import MainIndustryCp from './MainIndustryCp';

const CompanyInfoCp = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <SubTitle>업체정보</SubTitle>
      <TableWrap>
        <colgroup>
          <col style={{ width: '180px' }} />
          <col style={{ width: '320px' }} />
          <col style={{ width: '180px' }} />
          <col style={{ width: '320px' }} />
        </colgroup>
        <tbody>
          <Tr>
            <TdFirst>
              업체명 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <Input type="text" />
            </TdSecond>
            <TdFirst>
              대표자명 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <Input type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              사업자등록번호 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv>
                <Input width={'73px'} mr={'10px'} type="text" />-
                <Input width={'73px'} mr={'10px'} ml={'10px'} type="text" />-
                <Input width={'73px'} ml={'10px'} type="text" />
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>사업자등록증</TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv>
                <Input type="text" width={'280px'} mr={'20px'} />
                <Label className="btn" htmlFor="ex_filename">
                  파일등록
                </Label>
                <Input type="file" id="ex_filename" onChange={onChange} />
                <div>
                  <div>*JPG 또는 PNG 파일로 첨부해주세요.(카메라 촬영, 스캔 이미지 가능)</div>
                  <div>*입력하신 사업자등록번호와 동일한 사업자등록증을 첨부해 주셔야 합니다.</div>
                </div>
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              업태 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <Input type="text" />
            </TdSecond>
            <TdFirst>
              종목 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <Input type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              중개사무소등록번호 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <Input type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>중개사무소등록증</TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv>
                <Input type="text" width={'280px'} mr={'20px'} />
                <Label className="btn" htmlFor="ex_filename">
                  파일등록
                </Label>
                <input type="file" id="ex_filename" onChange={onChange} />
                <div>
                  <div>*JPG 또는 PNG 파일로 첨부해주세요.(카메라 촬영, 스캔 이미지 가능)</div>
                  <div>*입력하신 사업자등록번호와 동일한 개설등록증을 첨부해 주셔야 합니다.</div>
                </div>
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              주소 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond colSpan="3">
              <FlexDiv style={{ marginBottom: '10px' }}>
                <Input type="text" width={'73px'} mr={'20px'} placeholder="우편번호" />
                <div className="btn">우편번호찾기</div>
              </FlexDiv>
              <Input type="text" width={'410px'} mb={'10px'} placeholder="지번주소" />
              <Input type="text" width={'410px'} mb={'10px'} placeholder="도로명주소" />
              <Input type="text" width={'410px'} placeholder="상세주소를 입력하세요(건물명, 동/호수 등)" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              전화번호 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <FlexDiv>
                <TelNumArrayCp />-
                <Input width={'73px'} mr={'10px'} ml={'10px'} type="text" />-
                <Input width={'73px'} ml={'10px'} type="text" />
              </FlexDiv>
            </TdSecond>
            <TdFirst>팩스번호</TdFirst>
            <TdSecond>
              <FlexDiv>
                <FaxNumArrayCp />-
                <Input width={'73px'} mr={'10px'} ml={'10px'} type="text" />-
                <Input width={'73px'} ml={'10px'} type="text" />
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              선호지역 선택 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <FavoriteAreaCp />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              주력업종 선택 <RedStar>*</RedStar>
            </TdFirst>
            <TdSecond>
              <MainIndustryCp />
            </TdSecond>
          </Tr>
          <Tr style={{ borderBottom: '1px solid #dae1e7' }}>
            <TdFirst>추천인 ID</TdFirst>
            <TdSecond colSpan="3">
              <Input type="text" />
            </TdSecond>
          </Tr>
          <tr style={{ marginTop: '10px' }}>
            <td colSpan="4">
              <RedStar>*</RedStar>표시는 필수항목입니다.
            </td>
          </tr>
        </tbody>
      </TableWrap>
    </>
  );
};

export default React.memo(CompanyInfoCp);
