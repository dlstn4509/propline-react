import React, { useState } from 'react';
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
const ThumbDiv = styled(FlexDiv)`
  .btn-delete {
    background-color: red;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
  }
  .img-wrap {
    width: 70px;
    margin-right: 10px;
  }
  img {
    max-width: 100%;
  }
`;

const UpdateCp = ({ list }) => {
  const navigate = useNavigate();
  const { loginUser } = store();
  const [is_top_rank, setIs_top_rank] = useState(`${list.is_top_rank}`);
  const [desc, setDesc] = useState(`${list.contents}`);
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');
  const [photo3, setPhoto3] = useState('');
  const [photo4, setPhoto4] = useState('');
  const [photo5, setPhoto5] = useState('');
  const onEditorChange = (value) => {
    setDesc(value);
  };
  const inputFileChange = (e) => {
    e.target.previousSibling.remove();
  };
  const removeImgBtn = async (e) => {
    let col = e.target.dataset['col'];
    if (window.confirm('정말 삭제 하시겠습니까? (되돌릴 수 없습니다.)')) {
      e.target.parentNode.remove();
      await axios.get(process.env.REACT_APP_URL_API + `notice/deleteimg?idx=${list.idx}&col=${col}`);
    }
  };
  return (
    <FromWrap>
      <form action={process.env.REACT_APP_URL_API + 'notice'} method="POST" encType="multipart/form-data">
        <input type="hidden" name="update" value="true" />
        <input type="hidden" name="folderName" value="notice" />
        <input type="hidden" name="idx" value={list.idx} />
        <input type="hidden" name="mod_midx" value={loginUser.midx || 1011} />
        <Table>
          <tbody>
            <Tr>
              <TdTitle>제목</TdTitle>
              <TdFlex>
                <Input type="text" name="title" width={'700px'} defaultValue={list.title} />
              </TdFlex>
            </Tr>
            <Tr>
              <TdTitle>제목설정</TdTitle>
              <TdFlex>
                <div>
                  <Select name="title_font_weight" defaultValue={list.title_font_weight}>
                    <option value="normal">보통</option>
                    <option value="bold">굵게</option>
                  </Select>
                </div>
                <div>
                  <Select name="title_font_color" defaultValue={list.title_font_color}>
                    <option value="black">검정</option>
                    <option value="blue">파랑</option>
                    <option value="red">빨강</option>
                    <option value="yellow">노랑</option>
                    <option value="green">초록</option>
                  </Select>
                </div>
                <div>
                  {is_top_rank === '0' && (
                    <FaRegSquare
                      onClick={() => {
                        setIs_top_rank('1');
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                  {is_top_rank === '1' && (
                    <FaCheckSquare
                      onClick={() => {
                        setIs_top_rank('0');
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
                <input
                  type="radio"
                  id="전체공개 "
                  name="auth_view"
                  value="0"
                  defaultChecked={list.auth_view === 0}
                />
                <Label htmlFor="전체공개 ">전체공개 </Label>
                <input
                  type="radio"
                  id="회원공개 "
                  name="auth_view"
                  value="1"
                  defaultChecked={list.auth_view === 1}
                />
                <Label htmlFor="회원공개 ">회원공개 </Label>
                <input
                  type="radio"
                  id="비공개"
                  name="auth_view"
                  value="4"
                  defaultChecked={list.auth_view === 4}
                />
                <Label htmlFor="비공개">비공개</Label>
              </TdFlex>
            </Tr>
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
                      e.target.parentNode.nextSibling.remove();
                    }}
                  />
                  <Label02 htmlFor="file01">파일{list.photo1FilePath ? '수정' : '등록'}</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                {list.photo1FilePath && (
                  <ThumbDiv>
                    <div className="img-wrap">
                      <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo1FilePath}`} alt="" />
                    </div>
                    <div className="btn-delete" onClick={removeImgBtn} data-col="photo1">
                      삭제
                    </div>
                  </ThumbDiv>
                )}
                <Textarea name="contents1" cols="30" rows="10" defaultValue={list.contents1}></Textarea>
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
                      e.target.parentNode.nextSibling.remove();
                    }}
                  />
                  <Label02 htmlFor="file02">파일{list.photo2FilePath ? '수정' : '등록'}</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                {list.photo2FilePath && (
                  <ThumbDiv>
                    <div className="img-wrap">
                      <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo2FilePath}`} alt="" />
                    </div>
                    <div className="btn-delete" onClick={removeImgBtn} data-col="photo2">
                      삭제
                    </div>
                  </ThumbDiv>
                )}
                <Textarea name="contents2" cols="30" rows="10" defaultValue={list.contents2}></Textarea>
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
                      e.target.parentNode.nextSibling.remove();
                    }}
                  />
                  <Label02 htmlFor="file03">파일{list.photo3FilePath ? '수정' : '등록'}</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                {list.photo3FilePath && (
                  <ThumbDiv>
                    <div className="img-wrap">
                      <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo3FilePath}`} alt="" />
                    </div>
                    <div className="btn-delete" onClick={removeImgBtn} data-col="photo3">
                      삭제
                    </div>
                  </ThumbDiv>
                )}
                <Textarea name="contents3" cols="30" rows="10" defaultValue={list.contents3}></Textarea>
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
                      e.target.parentNode.nextSibling.remove();
                    }}
                  />
                  <Label02 htmlFor="file01">파일{list.photo4FilePath ? '수정' : '등록'}</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                {list.photo4FilePath && (
                  <ThumbDiv>
                    <div className="img-wrap">
                      <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo4FilePath}`} alt="" />
                    </div>
                    <div className="btn-delete" onClick={removeImgBtn} data-col="photo4">
                      삭제
                    </div>
                  </ThumbDiv>
                )}
                <Textarea name="contents4" cols="30" rows="10" defaultValue={list.contents4}></Textarea>
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
                      e.target.parentNode.nextSibling.remove();
                    }}
                  />
                  <Label02 htmlFor="file01">파일{list.photo5FilePath ? '수정' : '등록'}</Label02>
                  <div>{'*예) jpg, png, gif'}</div>
                </FlexDiv>
                {list.photo5FilePath && (
                  <ThumbDiv>
                    <div className="img-wrap">
                      <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo5FilePath}`} alt="" />
                    </div>
                    <div className="btn-delete" onClick={removeImgBtn} data-col="photo5">
                      삭제
                    </div>
                  </ThumbDiv>
                )}
                <Textarea name="contents5" cols="30" rows="10" defaultValue={list.contents5}></Textarea>
              </Td>
            </Tr>
            <Tr>
              <TdTitle>첨부파일1</TdTitle>
              <Td>
                <div>{list.attached_file1_oriname}</div>
                <input type="file" name="attached_file1" onChange={inputFileChange} />
              </Td>
            </Tr>
            <Tr>
              <TdTitle>첨부파일2</TdTitle>
              <Td>
                <div>{list.attached_file2_oriname}</div>
                <input type="file" name="attached_file2" onChange={inputFileChange} />
              </Td>
            </Tr>
          </tbody>
        </Table>
        <BtnWrap>
          <Btn bg={'#3168ff'} mr={'10px'}>
            수정
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

export default React.memo(UpdateCp);
