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

const SubTitleWrap = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
    color: #888f91;
  }
`;

const BillInfoCp = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <SubTitleWrap>
        <SubTitle>
          세금계산서 정보<span> - 공실클럽 유료광고 신청시 필요한 정보입니다.</span>
        </SubTitle>
      </SubTitleWrap>
      <TableWrap>
        <colgroup>
          <col style={{ width: '180px' }} />
          <col style={{ width: '820px' }} />
        </colgroup>
        <tbody>
          <Tr>
            <TdFirst>업체명</TdFirst>
            <TdSecond>
              <Input type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>대표자명</TdFirst>
            <TdSecond>
              <Input type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>사업자등록번호</TdFirst>
            <TdSecond>
              <FlexDiv>
                <Input width={'73px'} mr={'10px'} type="text" />-
                <Input width={'73px'} mr={'10px'} ml={'10px'} type="text" />-
                <Input width={'73px'} ml={'10px'} type="text" />
              </FlexDiv>
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>업태</TdFirst>
            <TdSecond>
              <Input type="text" />
            </TdSecond>
          </Tr>
          <Tr>
            <TdFirst>종목</TdFirst>
            <TdSecond>
              <Input type="text" />
            </TdSecond>
          </Tr>
          <Tr style={{ borderBottom: '1px solid #dae1e7' }}>
            <TdFirst>사업자등록증</TdFirst>
            <TdSecond>
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
          <tr style={{ marginTop: '10px' }}>
            <td colSpan="2" style={{ paddingTop: '10px' }}>
              <RedStar>*</RedStar>표시는 필수항목입니다.
            </td>
          </tr>
        </tbody>
      </TableWrap>
    </>
  );
};

export default React.memo(BillInfoCp);
