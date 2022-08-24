import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ProductsList from './pages/ProductsList/ProductsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/products/:productId" element={<DetailPage />} />
=======
        <Route
          path="/category/:categoryId/type/:typeId"
          element={<ProductsList />}
        />
>>>>>>> main
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
