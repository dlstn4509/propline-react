import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';

/***************** inc *****************/
import Header from '@/components/inc/Header';
import SearchArea from '@/components/inc/SearchArea';
import Navbar from '@/components/inc/Navbar';
import FooterText from '@/components/inc/FooterText';
import Footer from '@/components/inc/Footer';
import QuickMenu from '@/components/inc/QuickMenu';
import IsUser from '@/components/inc/IsUser';

/***************** item *****************/
import ItemPage from '@/pages/item/ItemPage';

/***************** itemPublic *****************/
import ItemPublicPage from '@/pages/itemPublic/ItemPublicPage';

/***************** saleinfo *****************/
import SaleInfoPage from '@/pages/saleinfo/SaleInfoPage';

/***************** mamulSelf *****************/
import FindItemPage from '@/pages/mamulSelf/FindItemPage';
import SaleItemPage from '@/pages/mamulSelf/SaleItemPage';
import RequestPage from '@/pages/mamulSelf/RequestPage';

/***************** community *****************/
import FreeBoardPage from '@/pages/community/FreeBoardPage';
import KnowHowPage from '@/pages/community/KnowHowPage';
import RecruitPage from '@/pages/community/RecruitPage';
import ConsultPage from '@/pages/community/ConsultPage';
import DirectPage from '@/pages/community/DirectPage';

/***************** servicecenter *****************/
import NoticePage from '@/pages/servicecenter/NoticePage';
import QuestionPage from '@/pages/servicecenter/QuestionPage';
import RequestBoardPage from '@/pages/servicecenter/RequestBoardPage';
import InquiryPage from '@/pages/servicecenter/InquiryPage';
import EventPage from '@/pages/servicecenter/EventPage';

/***************** serviceGuide *****************/
import ServiceIntroPage from '@/pages/serviceGuide/ServiceIntroPage';
import ChargePage from '@/pages/serviceGuide/ChargePage';
import MobileappPage from '@/pages/serviceGuide/MobileappPage';

/***************** myPayment *****************/
import CardPage from '@/pages/myPayment/CardPage';
import ExtraPaymentPage from '@/pages/myPayment/ExtraPaymentPage';
import GPointPage from '@/pages/myPayment/GPointPage';
import SchedulePage from '@/pages/myPayment/SchedulePage';

/***************** Contract *****************/
import ContractPage from '@/pages/contract/ContractPage';
import ContractPrintPage from '@/pages/contract/ContractPrintPage';

/***************** other *****************/
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import BusinessSignUpPage from '@/pages/BusinessSignUpPage';
import NormalSignUpPage from '@/pages/NormalSignUpPage';
import RequestSalePage from '@/pages/RequestSalePage';
import BannerPage from '@/pages/BannerPage';

import ManualPage from '@/pages/manual/ManualPage';

const App = () => {
  const { isPathname, setPathName, setLoginUser, setBanner, loginUser } = store();
  let pathname = window.location.pathname;
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  useEffect(() => {
    (async () => {
      await axios
        .get(process.env.REACT_APP_URL_API + 'isuser')
        .then((r) => {
          setLoginUser(r.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  useEffect(() => {
    setBanner();
  }, []);

  return (
    <BrowserRouter>
      {isPathname !== '/manual' && isPathname !== '/contractprint' && (
        <>
          <Header />
          <SearchArea />
          <Navbar />
          <QuickMenu />
        </>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/businesssignup" element={<BusinessSignUpPage />} />
        <Route path="/normalsignup" element={<NormalSignUpPage />} />
        <Route path="/item" element={<ItemPage />} />
        {/* <Route path="/item" element={loginUser.midx ? <ItemPage /> : <IsUser />} /> */}
        <Route path="/itempublic" element={<ItemPublicPage />} />
        <Route path="/saleinfo" element={<SaleInfoPage />} />
        <Route path="/finditem" element={<FindItemPage />} />
        <Route path="/saleitem" element={<SaleItemPage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/freeboard" element={<FreeBoardPage />} />
        <Route path="/knowhow" element={<KnowHowPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/consult" element={<ConsultPage />} />
        <Route path="/direct" element={<DirectPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/requestboard" element={<RequestBoardPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/serviceintro" element={<ServiceIntroPage />} />
        <Route path="/charge" element={<ChargePage />} />
        <Route path="/mobileapp" element={<MobileappPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/extrapayment" element={<ExtraPaymentPage />} />
        <Route path="/gpoint" element={<GPointPage />} />
        <Route path="/paymenthistory" element={<CardPage />} />
        <Route path="/requestsale" element={<RequestSalePage />} />
        <Route path="/manual" element={<ManualPage />} />
        <Route path="/banner" element={<BannerPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/contract" element={<ContractPage />} />
        <Route path="/contractprint" element={<ContractPrintPage />} />
      </Routes>
      {isPathname !== '/manual' && isPathname !== '/contractprint' && (
        <>
          <FooterText />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default React.memo(App);
