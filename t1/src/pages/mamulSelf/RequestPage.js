import React, { useEffect, useState } from 'react';
import styled, { Title, PageWrapper, PageWrap, Text } from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';

import SearchCp from '@/components/request/SearchCp';
import ListCp from '@/components/request/ListCp';
import ViewCp from '@/components/request/ViewCp';
import PagerCp from '@/components/inc/PagerCp';

const RequestPage = () => {
  const navigate = useNavigate();
  const { setPathName } = store();
  const [lists, setLists] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState('');
  const [isRequest, setIsRequest] = useState(false);
  const [item_kind, setItem_kind] = useState('%');
  const [searchTxt, setSearchTxt] = useState('%');
  const [viewIdx, setViewIdx] = useState('');

  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

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
          `request?page=${page}&isRequest=${isRequest}&item_kind=${item_kind}&searchTxt=${searchTxt}`
      );
      setLists(data);
    })();
  }, [page, isRequest, item_kind, searchTxt]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_URL_API +
          `request/listscount?isRequest=${isRequest}&item_kind=${item_kind}&searchTxt=${searchTxt}`
      );
      setTotalCount(data);
    })();
  }, [isRequest, item_kind, searchTxt]);

  useEffect(() => {
    if (viewIdx) {
      (async () => {
        const { data } = await axios.get(process.env.REACT_APP_URL_API + `request/findlist?idx=${viewIdx}`);
        setList(data[0]);
      })();
    }
  }, [viewIdx]);

  return (
    <PageWrapper>
      <PageWrap>
        <Title>중개의뢰현황</Title>
        <Text>
          부동산 구하기를 통해 중개 의뢰를 신청한 내역입니다. (중개 의뢰 시작일로부터 30일 이후 자동 기간
          만료됩니다.)
          <br />
          중개 의뢰 목적 외 상업적 광고, 불법적인 내용 공유 및 개인정보 무단 수집을 금지합니다.
        </Text>
        {!viewIdx && (
          <>
            <SearchCp
              isRequest={isRequest}
              setIsRequest={setIsRequest}
              setItem_kind={setItem_kind}
              setSearchTxt={setSearchTxt}
            />
            <ListCp lists={lists} setViewIdx={setViewIdx} />
            <PagerCp setPage={setPage} page={page} totalCount={totalCount} />
          </>
        )}
        {viewIdx && <ViewCp list={list} />}
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(RequestPage);
