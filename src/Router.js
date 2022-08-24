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
        <Route
          path="/category/:categoryId/type/:typeId"
          element={<ProductsList />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
