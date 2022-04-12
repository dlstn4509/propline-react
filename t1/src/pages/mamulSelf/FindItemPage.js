import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap, Title, Text } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';

import SearchCp from '@/components/finditem/SearchCp';
import ListCp from '@/components/finditem/ListCp';
import PagerCp from '@/components/finditem/PagerCp';

const FindItemPage = () => {
  const { setPathName } = store();
  const [page, setPage] = useState(1);
  const [findItemLists, setFindItemLists] = useState('');
  const [totalCount, setTotalCount] = useState('');
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  /*  */
  useEffect(() => {
    (async () => {
      const lists = await axios.get(process.env.REACT_APP_URL_API + `finditem?page=${page}`);
      setFindItemLists(lists.data);
    })();
  }, [page]);
  /*  */
  /*  */
  useEffect(() => {
    (async () => {
      const count = await axios.get(process.env.REACT_APP_URL_API + `finditem/finditemcount`);
      setTotalCount(count.data);
    })();
  }, []);
  /*  */

  return (
    <PageWrapper>
      <PageWrap>
        <Title>매물찾습니다</Title>
        <Text>
          「매물을 찾습니다」는 찾는 글 외의 글을 등록하실 경우 관리자에 의해 삭제 및 권한에 제한이 될 수
          있음을 알려드리며,
          <br />
          등록된 글은 6개월 이상이 경과된 경우 관리자에 의해 삭제될 수 있으니 양해해 주시기 바랍니다.
        </Text>
        <SearchCp />
        <ListCp findItemLists={findItemLists} />
        <PagerCp setPage={setPage} page={page} totalCount={totalCount} />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(FindItemPage);

/* useEffect(() => {
    (async () => {
      const rs = await axios.get(process.env.REACT_APP_URL_API + `finditem/finditemcount`);
      setFindItemCount(rs.data);
    })();
  }, []);
  
  useEffect(() => {
    const rs = window.location.href.split('?')[1] ? window.location.href.split('?')[1].split('=')[1] : 1;
    setPage(rs);
  }, []);
  useEffect(() => {
    const rs = pagerModule(page, findItemCount, 5, 10);
    setPager(rs);
  }, []);
  useEffect(() => {
    (async () => {
      const data = await axios.get(
        process.env.REACT_APP_URL_API + `finditem?startIdx=${pager.startIdx}&listCnt=${pager.listCnt}`
      );
      setFindItemLists(data.data);
    })();
  }, [pager]); */
