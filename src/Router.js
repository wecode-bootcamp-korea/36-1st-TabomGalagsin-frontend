import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Auth from './pages/Auth/Auth';
import Cart from './pages/Cart/Cart';
import ProductsList from './pages/ProductsList/ProductsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Auth />} />
        <Route
          path="/categories/:categoryId/type/:typeId"
          element={<ProductsList />}
        />
        <Route
          path="/categories/:categoryId/color/:typeId"
          element={<ProductsList />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
