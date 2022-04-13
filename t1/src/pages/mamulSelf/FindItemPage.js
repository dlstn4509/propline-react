import React, { useEffect, useState, useCallback } from 'react';
import styled, { PageWrapper, PageWrap, Title, Text } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import SearchCp from '@/components/finditem/SearchCp';
import ListCp from '@/components/finditem/ListCp';
import PagerCp from '@/components/finditem/PagerCp';
import ViewCp from '@/components/finditem/ViewCp';
import FormCp from '@/components/finditem/FormCp';
import UpdateCp from '@/components/finditem/UpdateCp';

const FindItemPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [findItemLists, setFindItemLists] = useState('');
  const [itemList, setItemList] = useState([]);
  const [totalCount, setTotalCount] = useState('');
  const [company_name, setCompany_name] = useState('%');
  const [title, setTitle] = useState('%');
  const [contents, setContents] = useState('%');
  const [itemIdx, setItemIdx] = useState('');
  const [pageType, setPageType] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  let idx = new URL(window.location.href).search.includes('idx')
    ? new URL(window.location.href).search.split('=')[1]
    : '';
  useEffect(() => {
    setItemIdx(idx);
  }, [idx]);

  let type = new URL(window.location.href).search.includes('type')
    ? new URL(window.location.href).search.split('=')[1]
    : '';
  useEffect(() => {
    setPageType(type);
  }, [type]);

  const makeFindItemLists = useCallback(async () => {
    const lists = await axios.get(
      process.env.REACT_APP_URL_API +
        `finditem?page=${page}&company_name=${company_name}&title=${title}&contents=${contents}&isSearch=${isSearch}`
    );
    setFindItemLists(lists.data);
  }, [page, company_name, title, contents, isSearch]);
  useEffect(() => {
    makeFindItemLists();
  }, [page, company_name, title, contents, idx]);

  useEffect(() => {
    (async () => {
      const count = await axios.get(
        process.env.REACT_APP_URL_API +
          `finditem/finditemcount?company_name=${company_name}&title=${title}&contents=${contents}`
      );
      setTotalCount(count.data);
    })();
  }, [company_name, title, contents]);

  useEffect(() => {
    if (itemIdx) {
      (async () => {
        const rs = await axios.get(process.env.REACT_APP_URL_API + `finditem/${itemIdx}`);
        setItemList(rs.data);
      })();
    }
  }, [itemIdx]);

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
        {!itemIdx && !pageType && (
          <>
            <SearchCp
              setCompany_name={setCompany_name}
              setTitle={setTitle}
              setContents={setContents}
              setIsSearch={setIsSearch}
              setPage={setPage}
            />
            <ListCp findItemLists={findItemLists} setItemIdx={setItemIdx} />
            <PagerCp setPage={setPage} page={page} totalCount={totalCount} />
          </>
        )}
        {itemIdx && <ViewCp itemList={itemList} />}
        {pageType === 'form' && <FormCp />}
        {pageType === 'update' && <UpdateCp itemList={itemList} />}
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(FindItemPage);
