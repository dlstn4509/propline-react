import React, { useEffect } from 'react';
import styled, { Title, PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import EventCp from '@/components/event/EventCp';

const EventPage = () => {
  const { setPathName } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <PageWrapper>
      <PageWrap>
        <Title>이벤트</Title>
        <EventCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(EventPage);
