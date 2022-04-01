import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from '@/components/inc/Header';
import SearchArea from '@/components/inc/SearchArea';
import Navbar from '@/components/inc/Navbar';

import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import BusinessSignUpPage from '@/pages/BusinessSignUpPage';
import NormalSignUpPage from '@/pages/NormalSignUpPage';
import ItemPage from '@/pages/ItemPage';
import ItemPublicPage from '@/pages/ItemPublicPage';
import SaleInfoPage from '@/pages/SaleInfoPage';
import FindItemPage from '@/pages/FindItemPage';
import SaleItemPage from '@/pages/SaleItemPage';
import RequestPage from '@/pages/RequestPage';
import FreeBoardPage from '@/pages/FreeBoardPage';
import KnowHowPage from '@/pages/KnowHowPage';
import RecruitPage from '@/pages/RecruitPage';
import ConsultPage from '@/pages/ConsultPage';
import DirectPage from '@/pages/DirectPage';
import NoticePage from '@/pages/NoticePage';
import QuestionPage from '@/pages/QuestionPage';
import RequestBoardPage from '@/pages/RequestBoardPage';

import FooterText from '@/components/inc/FooterText';
import Footer from '@/components/inc/Footer';
import QuickMenu from '@/components/inc/QuickMenu';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SearchArea />
      <Navbar />
      <QuickMenu />
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/businesssignup" element={<BusinessSignUpPage />} />
        <Route path="/normalsignup" element={<NormalSignUpPage />} />
        <Route path="/item" element={<ItemPage />} />
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
      </Routes>
      <FooterText />
      <Footer />
    </BrowserRouter>
  );
};

export default React.memo(App);
