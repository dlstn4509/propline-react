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
      </Routes>
      <FooterText />
      <Footer />
    </BrowserRouter>
  );
};

export default React.memo(App);
