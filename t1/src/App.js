import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import styled from './style';

import Header from './components/inc/Header';
import Title from './components/inc/Title';
import Navbar from './components/inc/Navbar';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Title />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(App);
