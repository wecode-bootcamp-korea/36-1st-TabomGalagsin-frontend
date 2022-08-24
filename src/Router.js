import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import DetailPage from './pages/DetailPage/DetailPage';
import Cart from './pages/Cart/Cart';
import ProductsList from './pages/ProductsList/ProductsList';

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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
