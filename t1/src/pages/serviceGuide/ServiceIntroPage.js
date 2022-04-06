import React, { useEffect } from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';

import TitleCp from '@/components/serviceIntro/TitleCp';
import SlideCp from '@/components/serviceIntro/SlideCp';
import AboutGingsilCp from '@/components/serviceIntro/AboutGingsilCp';
import CircleCp from '@/components/serviceIntro/CircleCp';
import StartBtnCp from '@/components/serviceIntro/StartBtnCp';

const ServiceIntroPage = () => {
  const { setPathName, setPageY } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  const onScroll = (e) => {
    setPageY(e.pageY);
  };
  return (
    <PageWrapper onWheel={onScroll}>
      <PageWrap>
        <TitleCp />
        <SlideCp />
        <AboutGingsilCp />
        <CircleCp />
        <StartBtnCp />
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(ServiceIntroPage);
