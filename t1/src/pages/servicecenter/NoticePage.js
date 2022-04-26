import React, { useEffect, useState } from 'react';
import styled, { Title, PageWrapper, PageWrap, Button02 } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';

import SearchCp from '@/components/notice/SearchCp';
import ListsCp from '@/components/notice/ListsCp';
import FormCp from '@/components/notice/FormCp';
import ViewCp from '@/components/notice/ViewCp';
import PagerCp from '@/components/inc/PagerCp';

const NoticeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

const NoticePage = () => {
  const navigate = useNavigate();
  const { setPathName } = store();
  const [typeName, setTypeName] = useState('');
  const [lists, setLists] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState('');
  const [viewIdx, setViewIdx] = useState('');

  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  let type = new URL(window.location.href).search ? new URL(window.location.href).search.split('=')[1] : '';
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
      const { data } = await axios.get(process.env.REACT_APP_URL_API + `notice?page=${page}`);
      setLists(data);
    })();
  }, [page, idx]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + 'notice/listscount');
      setTotalCount(data);
    })();
  }, []);

  useEffect(() => {
    if (viewIdx) {
      (async () => {
        const { data } = await axios.get(process.env.REACT_APP_URL_API + `notice/findlist?idx=${viewIdx}`);
        setList(data);
      })();
    }
  }, [viewIdx]);

  return (
    <PageWrapper>
      <PageWrap style={{ position: 'relative' }}>
        <NoticeWrap>
          <Title pt={'0'}>공지사항</Title>
          {!typeName && <SearchCp />}
        </NoticeWrap>
        {!typeName && (
          <div style={{ position: 'relative' }}>
            <ListsCp lists={lists} page={page} totalCount={totalCount} setViewIdx={setViewIdx} />
            <PagerCp setPage={setPage} page={page} totalCount={totalCount} />
            <Button02 to="/notice?type=form" style={{ color: '#fff', bottom: '-10px' }}>
              등록
            </Button02>
          </div>
        )}
        {typeName === 'form' && <FormCp />}
        {viewIdx && <ViewCp list={list} />}
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(NoticePage);
