import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from '@/components/inc/Header';
import SearchArea from '@/components/inc/SearchArea';
import Navbar from '@/components/inc/Navbar';
import MainPage from '@/pages/MainPage';
import Footer from '@/components/inc/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SearchArea />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default React.memo(App);
