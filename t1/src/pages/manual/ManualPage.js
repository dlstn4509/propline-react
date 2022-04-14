import React, { useState } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

import NavListCp from '@/components/manual/NavListCp';
import PortalCp from '@/components/manual/PortalCp';
import MainCp from '@/components/manual/MainCp';
import AboutCp from '@/components/manual/AboutCp';
import GongsilMamulCp from '@/components/manual/GongsilMamulCp';
import GongdongJunggaeCp from '@/components/manual/GongdongJunggaeCp';
import SaleInfoCp from '@/components/manual/SaleInfoCp';
import InterestCp from '@/components/manual/InterestCp';
import SelfCp from '@/components/manual/SelfCp';
import CommunityCp from '@/components/manual/CommunityCp';

import FooterCp from '@/components/manual/FooterCp';

const ManualPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ManualPage = () => {
  const [choiceListWrap, setChoiceListWrap] = useState('');
  const [choiceList, setChoiceList] = useState('main');
  return (
    <ManualPageWrapper>
      <NavListCp
        setChoiceListWrap={setChoiceListWrap}
        choiceListWrap={choiceListWrap}
        setChoiceList={setChoiceList}
        choiceList={choiceList}
      />
      {choiceList === 'main' && <MainCp />}
      {choiceList === 'about' && <AboutCp />}
      {choiceListWrap === 'portal' && <PortalCp choiceList={choiceList} setChoiceList={setChoiceList} />}
      {choiceListWrap === 'gongsilMamul' && <GongsilMamulCp setChoiceList={setChoiceList} />}
      {choiceListWrap === 'gongdongJunggae' && (
        <GongdongJunggaeCp choiceList={choiceList} setChoiceList={setChoiceList} />
      )}
      {choiceListWrap === 'saleInfo' && <SaleInfoCp setChoiceList={setChoiceList} />}
      {choiceListWrap === 'interest' && <InterestCp setChoiceList={setChoiceList} />}
      {choiceListWrap === 'self' && <SelfCp choiceList={choiceList} setChoiceList={setChoiceList} />}
      {choiceListWrap === 'community' && (
        <CommunityCp choiceList={choiceList} setChoiceList={setChoiceList} />
      )}
      <FooterCp />
    </ManualPageWrapper>
  );
};

export default React.memo(ManualPage);
