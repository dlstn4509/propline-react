import React, { useState, useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';

import TabCp from '@/components/requestBoard/TabCp';
import SearchCp from '@/components/requestBoard/SearchCp';
import ListCp from '@/components/requestBoard/ListCp';
import PagerCp from '@/components/item/PagerCp';

const RequestBoardPage = () => {
  // const [type, setType] = useState(false);
  // useEffect(() => {
  //   console.log(type);
  //   console.log(window.location.href);
  //   setType(window.location.href.split('?')[1] ? true : false);
  // }, [window.location.href]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>요청게시판</Title>
        <div style={{ marginBottom: '10px' }}>
          <img src={process.env.REACT_APP_URL + 'img/board_gpoint_banner_20210226.png'} alt="" />
        </div>
        <TabCp />
        <SearchCp />
        {/* {!type ? <ListCp /> : ''} */}
        <ListCp />
        <PagerCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(RequestBoardPage);
