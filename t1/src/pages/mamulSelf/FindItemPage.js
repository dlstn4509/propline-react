import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap, Title, Text } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import SearchCp from '@/components/finditem/SearchCp';
import ListCp from '@/components/finditem/ListCp';
import PagerCp from '@/components/finditem/PagerCp';
import ViewCp from '@/components/finditem/ViewCp';

const FindItemPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [findItemLists, setFindItemLists] = useState('');
  const [totalCount, setTotalCount] = useState('');
  const [company_name, setCompany_name] = useState('%');
  const [title, setTitle] = useState('%');
  const [contents, setContents] = useState('%');
  const [itemIdx, setItemIdx] = useState('');
  let query = new URL(window.location.href).search ? new URL(window.location.href).search.split('=')[1] : '';

  useEffect(() => {
    setItemIdx(query);
  }, [query]);

  const makeFindItemLists = async () => {
    const lists = await axios.get(
      process.env.REACT_APP_URL_API +
        `finditem?page=${page}&company_name=${company_name}&title=${title}&contents=${contents}`
    );
    setFindItemLists(lists.data);
  };
  useEffect(() => {
    makeFindItemLists();
  }, [page, company_name, title, contents, query]);

  useEffect(() => {
    (async () => {
      const count = await axios.get(
        process.env.REACT_APP_URL_API +
          `finditem/finditemcount?company_name=${company_name}&title=${title}&contents=${contents}`
      );
      setTotalCount(count.data);
    })();
  }, [company_name, title, contents]);

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
        {!itemIdx && (
          <>
            <SearchCp setCompany_name={setCompany_name} setTitle={setTitle} setContents={setContents} />
            <ListCp findItemLists={findItemLists} setItemIdx={setItemIdx} />
            <PagerCp setPage={setPage} page={page} totalCount={totalCount} />
          </>
        )}
        {itemIdx && <ViewCp itemIdx={itemIdx} />}
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(FindItemPage);
