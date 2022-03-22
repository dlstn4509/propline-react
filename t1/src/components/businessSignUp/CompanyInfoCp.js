import React from 'react';
import styled, { SubTitle, TableWrap, Tr, TdFirst, TdSecond } from '@/style/businessSignUp';
import { Link } from 'react-router-dom';

const Label = styled.label`
  display: inline-block;
  padding: 0.5em 0.75em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
`;

const CompanyInfoCp = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <SubTitle>업체정보</SubTitle>
      <TableWrap>
        <tbody>
          <Tr>
            <TdFirst>
              업체명 <span>*</span>
            </TdFirst>
            <TdSecond>
              <input className="input01" type="text" />
            </TdSecond>
            <TdFirst>
              대표자명 <span>*</span>
            </TdFirst>
            <TdSecond>
              <input className="input01" type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              사업자등록번호 <span>*</span>
            </TdFirst>
            <TdSecond colSpan="3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input className="input02" type="text" />-
                <input className="input02" type="text" />-
                <input className="input02" type="text" />
              </div>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>사업자등록증</TdFirst>
            <TdSecond colSpan="3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input className="input01" type="text" style={{ width: '280px' }} />
                <Label className="btn" htmlFor="ex_filename">
                  파일등록
                </Label>
                <input type="file" id="ex_filename" onChange={onChange} />
                <div>
                  <div>*JPG 또는 PNG 파일로 첨부해주세요.(카메라 촬영, 스캔 이미지 가능)</div>
                  <div>*입력하신 사업자등록번호와 동일한 사업자등록증을 첨부해 주셔야 합니다.</div>
                </div>
              </div>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              업태 <span>*</span>
            </TdFirst>
            <TdSecond>
              <input className="input01" type="text" />
            </TdSecond>
            <TdFirst>
              종목 <span>*</span>
            </TdFirst>
            <TdSecond>
              <input className="input01" type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>
              중개사무소등록번호 <span>*</span>
            </TdFirst>
            <TdSecond colSpan="3">
              <input className="input01" type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>중개사무소등록증</TdFirst>
            <TdSecond colSpan="3">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input className="input01" type="text" style={{ width: '280px' }} />
                <Label className="btn" htmlFor="ex_filename">
                  파일등록
                </Label>
                <input type="file" id="ex_filename" onChange={onChange} />
                <div>
                  <div>*JPG 또는 PNG 파일로 첨부해주세요.(카메라 촬영, 스캔 이미지 가능)</div>
                  <div>*입력하신 사업자등록번호와 동일한 개설등록증을 첨부해 주셔야 합니다.</div>
                </div>
              </div>
            </TdSecond>
          </Tr>
        </tbody>
      </TableWrap>
    </>
  );
};

export default React.memo(CompanyInfoCp);
