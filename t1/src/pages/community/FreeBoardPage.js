import React, { useEffect, useState, useCallback } from 'react';
import styled, { Title, Text, PageWrapper, PageWrap, color, Button02 } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';

import SearchCp from '@/components/freeboard/SearchCp';
import ListCp from '@/components/freeboard/ListCp';
import FormCp from '@/components/freeboard/FormCp';
import ViewCp from '@/components/freeboard/ViewCp';
import UpdateCp from '@/components/freeboard/UpdateCp';
import PagerCp from '@/components/inc/PagerCp';

const FreeBoardPage = () => {
  const navigate = useNavigate();
  const { setPathName } = store();
  const [typeName, setTypeName] = useState('');
  const [viewIdx, setViewIdx] = useState('');
  const [lists, setLists] = useState('');
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [member_id, setMember_id] = useState('%');
  const [title, setTitle] = useState('%');
  const [contents, setContents] = useState('%');
  const [totalCount, setTotalCount] = useState('');
  const [likeNum, setLikeNum] = useState('');

  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  let type = new URL(window.location.href).search.includes('type')
    ? new URL(window.location.href).search.split('=').length > 2
      ? new URL(window.location.href).search.split('=')[2]
      : new URL(window.location.href).search.split('=')[1]
    : '';
  useEffect(() => {
    setTypeName(type);
  }, [type]);

  let idx = new URL(window.location.href).search.includes('idx')
    ? new URL(window.location.href).search.split('=')[1]
    : '';
  useEffect(() => {
    setViewIdx(idx);
  }, [idx]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_URL_API +
          `freeboard?page=${page}&member_id=${member_id}&title=${title}&contents=${contents}`
      );
      setLists(data);
    })();
  }, [page, idx, member_id, title, contents]);

  useEffect(() => {
    if (viewIdx) {
      (async () => {
        const { data } = await axios.get(process.env.REACT_APP_URL_API + `freeboard/findlist?idx=${viewIdx}`);
        setList(data);
      })();
    } else if (typeName !== 'update') {
      setList([]);
    }
  }, [viewIdx, typeName, likeNum]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + 'freeboard/listscount');
      setTotalCount(data);
    })();
  }, []);

  return (
    <PageWrapper>
      <PageWrap>
        <Title>자유게시판</Title>
        <Text style={{ marginBottom: '0' }}>
          공실클럽에 제안하고 싶은 거나 개선사항을 자유롭게 표현하실 수 있는 게시판입니다. <br />
          상업적 광고, 불법적인 내용(사회정서를 해칠 수 있는 비방, 비속어, 선거 관련 내용, 인신공격, 허위사실
          등)이 포함된 게시글은 게시 중단과 즉시 삭제 처리됨을 알려드립니다.
        </Text>
        <Text style={{ color: `${color.blue}` }}>
          등록된 게시물에 의해 발생되는 모든 문제에 대한 민ㆍ형사상의 법적 책임은 게시물 등록자에게 있습니다.
        </Text>
        {!viewIdx && !typeName && lists && (
          <div style={{ position: 'relative' }}>
            <SearchCp
              setMember_id={setMember_id}
              setTitle={setTitle}
              setContents={setContents}
              setPage={setPage}
            />
            <ListCp lists={lists} setViewIdx={setViewIdx} page={page} totalCount={totalCount} />
            <PagerCp setPage={setPage} page={page} totalCount={totalCount} />
            <Button02 to="/freeboard?type=form" style={{ color: '#fff', bottom: '0px' }}>
              등록
            </Button02>
          </div>
        )}
        {viewIdx && typeName !== 'form' && <ViewCp list={list} setLikeNum={setLikeNum} likeNum={likeNum} />}
        {typeName === 'form' && <FormCp list={list} />}
        {typeName === 'update' && list && <UpdateCp list={list} />}
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(FreeBoardPage);
