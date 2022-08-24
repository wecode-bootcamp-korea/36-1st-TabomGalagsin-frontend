import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import DetailPage from './pages/DetailPage/DetailPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/categories/:categoryName" element={<DetailPage />} />
        <Route path="/colors/:colorName" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
