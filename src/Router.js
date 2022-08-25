import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ProductsList from './pages/ProductsList/ProductsList';
import DetailPage from './pages/DetailPage/DetailPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<DetailPage />} />
        <Route
          path="/category/:categoryId/type/:typeId"
          element={<ProductsList />}
        />
        <Route
          path="/category/:categoryId/color/:colorId"
          element={<ProductsList />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
