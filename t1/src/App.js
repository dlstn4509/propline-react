import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from '@/components/inc/Header';
import SearchArea from '@/components/inc/SearchArea';
import Navbar from '@/components/inc/Navbar';

import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';

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
      </Routes>
      <FooterText />
      <Footer />
    </BrowserRouter>
  );
};

export default React.memo(App);
