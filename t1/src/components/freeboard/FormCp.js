import React, { useState, useEffect } from 'react';
import styled, { color, FlexDiv } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import store from '@/store/store';
import axios from 'axios';

import EditorCp from '@/components/inquiry/EditorCp';

const FromWrap = styled.div`
  font-size: 13px;
  color: #464d50;
  padding: 0 0 0 15px;
`;
const Table = styled.table`
  border-top: 1px solid #dae1e7;
  margin-bottom: 20px;
`;
const Tr = styled.tr`
  border-bottom: 1px solid #dae1e7;
`;
const TdTitle = styled.td`
  width: 180px;
  padding: 20px 10px;
  background-color: #f9fbfc;
`;
const Td = styled.td`
  padding: 10px;
  height: 60px;
`;
const TdFlex = styled(Td)`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: ${(props) => props.width};
  height: 35px;
`;
const Select = styled.select`
  width: 80px;
  margin-right: 10px;
  &:focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;
const Label = styled.label`
  margin: 0 20px 0 5px;
`;
const Label02 = styled.label`
  font-size: 13px;
  color: #464d50;
  text-align: center;
  background-color: #ffffff;
  padding: 2px 15px;
  border: 1px solid #464d50;
  border-radius: 30px;
  height: 25px;
  cursor: pointer;
  margin: 10px;
`;
const Textarea = styled.textarea`
  width: 500px;
  height: 60px;
  margin-top: 4px;
`;
const BtnWrap = styled(FlexDiv)`
  justify-content: right;
  margin-bottom: 100px;
`;
const Btn = styled.button`
  width: 65px;
  height: 35px;
  line-height: 35px;
  background-color: ${(props) => props.bg};
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  margin-right: ${(props) => props.mr};
`;

const FormCp = ({ list }) => {
  const navigate = useNavigate();
  const { loginUser } = store();
  const [is_top_rank, setIs_top_rank] = useState(0);
  const [is_secret, setIs_secret] = useState(0);
  const [desc, setDesc] = useState('');
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');
  const [photo3, setPhoto3] = useState('');
  const [photo4, setPhoto4] = useState('');
  const [photo5, setPhoto5] = useState('');
  const [clientIp, setClientIp] = useState('');
  const onEditorChange = (value) => {
    setDesc(value);
  };
  useEffect(() => {
    if (window.location.pathname !== '/manual') {
      (async () => {
        const rs = await axios.get('https://api.ipify.org?format=json');
        setClientIp(rs.data.ip);
      })();
    }
  }, [navigate]);
  return (
    <FromWrap>
      <form action={process.env.REACT_APP_URL_API + 'freeboard'} method="POST" encType="multipart/form-data">
        <input type="hidden" name="folderName" value="freeBoard" />
        <input type="hidden" name="reg_midx" value={loginUser.midx || 1011} />
        <input type="hidden" name="mod_midx" value={loginUser.midx || 1011} />
        <input type="hidden" name="ip" value={clientIp} />
        {list.idx && (
          <>
            <input type="hidden" name="idx" value={list.idx} />
            <input type="hidden" name="parent_idx" value={list.parent_idx} />
            <input type="hidden" name="record_group" value={list.record_group} />
            <input type="hidden" name="record_vorder" value={list.record_vorder} />
            <input type="hidden" name="record_hdepth" value={list.record_hdepth} />
          </>
        )}
        <Table>
          <tbody>
            <Tr>
              <TdTitle>제목 {list && list.idx}</TdTitle>
              <TdFlex>
                <Input type="text" name="title" width={'700px'} />
              </TdFlex>
            </Tr>
            <Tr>
              <TdTitle>제목설정</TdTitle>
              <TdFlex>
                <div>
                  <Select name="title_font_weight">
                    <option value="normal">보통</option>
                    <option value="bold">굵게</option>
                  </Select>
                </div>
                <div>
                  <Select name="title_font_color">
                    <option value="black">검정</option>
                    <option value="blue">파랑</option>
                    <option value="red">빨강</option>
                    <option value="yellow">노랑</option>
                    <option value="green">초록</option>
                  </Select>
                </div>
                <div>
                  {is_top_rank === 0 && (
                    <FaRegSquare
                      onClick={() => {
                        setIs_top_rank(1);
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                  {is_top_rank === 1 && (
                    <FaCheckSquare
                      onClick={() => {
                        setIs_top_rank(0);
                      }}
                      style={{ color: `${color.blue}`, cursor: 'pointer' }}
                    />
                  )}
                  Top
                  <input type="hidden" name="is_top_rank" value={is_top_rank} />
                </div>
              </TdFlex>
            </Tr>
            <Tr>
              <TdTitle>공개설정</TdTitle>
              <TdFlex>
                <input type="radio" id="전체공개 " name="auth_view" value="0" defaultChecked />
                <Label htmlFor="전체공개 ">전체공개 </Label>
                <input type="radio" id="회원공개 " name="auth_view" value="1" />
                <Label htmlFor="회원공개 ">회원공개 </Label>
                <input type="radio" id="비공개" name="auth_view" value="4" />
                <Label htmlFor="비공개">비공개</Label>
              </TdFlex>
            </Tr>
            <Tr>
              <TdTitle>비밀글설정</TdTitle>
              <TdFlex>
                <FlexDiv
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    is_secret === 0 ? setIs_secret(1) : setIs_secret(0);
                  }}
                >
                  {is_secret === 0 && <FaCheckSquare style={{ color: `${color.blue}` }} />}
                  {is_secret === 1 && <FaRegSquare />}
                  <div style={{ marginLeft: '6px' }}>전체공개</div>
                </FlexDiv>
                <div style={{ width: '20px' }}></div>
                <FlexDiv
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    is_secret === 0 ? setIs_secret(1) : setIs_secret(0);
                  }}
                >
                  {is_secret === 1 && <FaCheckSquare style={{ color: `${color.blue}` }} />}
                  {is_secret === 0 && <FaRegSquare />}
                  <div style={{ marginLeft: '6px' }}>비밀글(나와 관리자만 볼 수 있음)</div>
                </FlexDiv>
                <input type="hidden" name="is_secret" value={is_secret} />
              </TdFlex>
            </Tr>
            {loginUser.midx && (
              <input type="hidden" name="loginUser_midx" value={loginUser.midx ? loginUser.midx : 1011} />
            )}
            {!loginUser.midx && (
              <>
                <Tr>
                  <TdTitle>임시 아이디</TdTitle>
                  <TdFlex>
                    <Input type="text" name="member_id" />
                  </TdFlex>
                </Tr>
                <Tr>
                  <TdTitle>회사명</TdTitle>
                  <TdFlex>
                    <Input type="text" name="company_name" />
                  </TdFlex>
                </Tr>
                <Tr>
                  <TdTitle>이름</TdTitle>
                  <TdFlex>
                    <Input type="text" name="user_name" />
                  </TdFlex>
                </Tr>
                <Tr>
                  <TdTitle>전화번호</TdTitle>
                  <TdFlex>
                    <Input type="text" name="phone" />
                  </TdFlex>
                </Tr>
                <Tr>
                  <TdTitle>핸드폰번호</TdTitle>
                  <TdFlex>
                    <Input type="text" name="mobile" />
                  </TdFlex>
                </Tr>
                <Tr>
                  <TdTitle>이메일</TdTitle>
                  <TdFlex>
                    <Input type="text" name="email" />
                  </TdFlex>
                </Tr>
                <Tr>
                  <TdTitle>글 비밀번호</TdTitle>
                  <TdFlex>
                    <Input type="password" name="record_pw" />
                  </TdFlex>
                </Tr>
              </>
            )}
            <Tr>
              <Td colSpan="2">
                <EditorCp value={desc} onChange={onEditorChange} />
                <input type="hidden" name="contents" value={desc} />
              </Td>
            </Tr>
            <Tr>
              <TdTitle>본문추가내용1</TdTitle>
              <Td>
                <FlexDiv>
                  <Input type="text" value={photo1} readOnly />
                  <input
                    type="file"
                    id="file01"
                    name="photo1"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      setPhoto1(e.target.value);
                    }}
                  />
                  <Label02 htmlFor="file01">파일등록</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                <Textarea name="contents1" cols="30" rows="10"></Textarea>
              </Td>
            </Tr>
            <Tr>
              <TdTitle>본문추가내용2</TdTitle>
              <Td>
                <FlexDiv>
                  <Input type="text" value={photo2} readOnly />
                  <input
                    type="file"
                    id="file02"
                    name="photo2"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      setPhoto2(e.target.value);
                    }}
                  />
                  <Label02 htmlFor="file02">파일등록</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                <Textarea name="contents2" cols="30" rows="10"></Textarea>
              </Td>
            </Tr>
            <Tr>
              <TdTitle>본문추가내용3</TdTitle>
              <Td>
                <FlexDiv>
                  <Input type="text" value={photo3} readOnly />
                  <input
                    type="file"
                    id="file03"
                    name="photo3"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      setPhoto3(e.target.value);
                    }}
                  />
                  <Label02 htmlFor="file03">파일등록</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                <Textarea name="contents3" cols="30" rows="10"></Textarea>
              </Td>
            </Tr>
            <Tr>
              <TdTitle>본문추가내용4</TdTitle>
              <Td>
                <FlexDiv>
                  <Input type="text" value={photo4} readOnly />
                  <input
                    type="file"
                    id="file04"
                    name="photo4"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      setPhoto4(e.target.value);
                    }}
                  />
                  <Label02 htmlFor="file01">파일등록</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                <Textarea name="contents4" cols="30" rows="10"></Textarea>
              </Td>
            </Tr>
            <Tr>
              <TdTitle>본문추가내용5</TdTitle>
              <Td>
                <FlexDiv>
                  <Input type="text" value={photo5} readOnly />
                  <input
                    type="file"
                    id="file05"
                    name="photo5"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      setPhoto5(e.target.value);
                    }}
                  />
                  <Label02 htmlFor="file01">파일등록</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                <Textarea name="contents5" cols="30" rows="10"></Textarea>
              </Td>
            </Tr>
            <Tr>
              <TdTitle>첨부파일1</TdTitle>
              <Td>
                <input type="file" name="attached_file1" />
              </Td>
            </Tr>
            <Tr>
              <TdTitle>첨부파일2</TdTitle>
              <Td>
                <input type="file" name="attached_file2" />
              </Td>
            </Tr>
          </tbody>
        </Table>
        <BtnWrap>
          <Btn bg={'#3168ff'} mr={'10px'}>
            등록
          </Btn>
          <Btn
            bg={'#888f91'}
            type="button"
            onClick={() => {
              navigate(`/notice`);
              window.scrollTo(0, 0);
            }}
          >
            취소
          </Btn>
        </BtnWrap>
      </form>
    </FromWrap>
  );
};

export default React.memo(FormCp);
