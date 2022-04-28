import React from 'react';
import styled, { FlexDiv, Button, Button03, color } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import store from '@/store/store';

const ViewCpWrap = styled.div`
  font-size: 13px;
  color: #888f91;
`;
const TitleWrap = styled(FlexDiv)`
  height: 60px;
  justify-content: space-between;
  border-top: 1px solid #888f91;
  border-bottom: 1px solid #888f91;
  padding: 0 10px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #464d50;
`;
const ContentWrap = styled.div`
  padding: 100px 0;
  border-bottom: 1px solid #888f91;
  margin-bottom: 50px;
  img {
    max-width: 100%;
  }
`;
const FileWrap = styled(FlexDiv)`
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  a {
    margin-left: 20px;
    cursor: pointer;
    color: blue;
  }
`;
const BtnWrap = styled(FlexDiv)`
  justify-content: space-between;
  height: 35px;
  margin-bottom: 100px;
  .date {
    margin-right: 10px;
  }
  .writer {
    font-size: 13px;
    font-weight: 600;
    color: #464d50;
  }
`;

const ViewCp = ({ list }) => {
  const navigate = useNavigate();
  const { loginUser } = store();
  const deleteList = async () => {
    const { data } = await axios.delete(process.env.REACT_APP_URL_API + `notice?idx=${list.idx}`);
    if (data.affectedRows === 1) {
      navigate(`/notice`);
    }
  };
  return (
    <ViewCpWrap>
      <TitleWrap>
        <Title>{list.title}</Title>
        <div>{list.hit}</div>
      </TitleWrap>
      <ContentWrap>
        <div dangerouslySetInnerHTML={{ __html: list.contents }}></div>
        <div>
          {list.photo1FilePath && (
            <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo1FilePath}`} alt="" />
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: list.contents1 }}></div>
        <div>
          {list.photo2FilePath && (
            <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo2FilePath}`} alt="" />
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: list.contents2 }}></div>
        <div>
          {list.photo3FilePath && (
            <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo3FilePath}`} alt="" />
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: list.contents3 }}></div>
        <div>
          {list.photo4FilePath && (
            <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo4FilePath}`} alt="" />
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: list.contents4 }}></div>
        <div>
          {list.photo5FilePath && (
            <img src={process.env.REACT_APP_URL + `uploads/notice/${list.photo5FilePath}`} alt="" />
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: list.contents5 }}></div>
      </ContentWrap>
      {list.attached_file1 && (
        <FileWrap mb={list.attached_file2 ? '0' : '20px'}>
          <div>
            첨부파일
            <a href={process.env.REACT_APP_URL_API + `notice/download?idx=${list.idx}&col=attached_file1`}>
              {list.attached_file1_oriname}
            </a>
          </div>
        </FileWrap>
      )}
      {list.attached_file2 && (
        <FileWrap mt={list.attached_file1 ? '5px' : '0'} mb={'20px'}>
          <div>
            첨부파일
            <a href={process.env.REACT_APP_URL_API + `notice/download?idx=${list.idx}&col=attached_file2`}>
              {list.attached_file2_oriname}
            </a>
          </div>
        </FileWrap>
      )}
      <BtnWrap>
        <FlexDiv>
          <div className="date">{list.mod_date}</div>
          <div className="writer">{list.company_name}</div>
        </FlexDiv>
        <FlexDiv>
          {loginUser.midx === list.reg_midx && (
            <>
              <Button
                mr={'10px'}
                onClick={() => {
                  navigate(`/notice?type=update`);
                  window.scrollTo(0, 0);
                }}
              >
                수정
              </Button>
              <Button mr={'10px'} onClick={deleteList}>
                삭제
              </Button>
            </>
          )}
          <Button03
            mr={'10px'}
            onClick={() => {
              navigate(`/notice`);
              window.scrollTo(0, 0);
            }}
          >
            목록
          </Button03>
          <Button03
            bg={`${color.blue}`}
            onClick={() => {
              navigate(`/notice?type=form`);
              window.scrollTo(0, 0);
            }}
          >
            등록
          </Button03>
        </FlexDiv>
      </BtnWrap>
    </ViewCpWrap>
  );
};

export default React.memo(ViewCp);
