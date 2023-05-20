/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from './pages/shop/account/index';
import ShopInfo from './pages/shop/shopInfo';
import Family from "./pages/family";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account/*" element={<Account />} />
        <Route path="/shop" element={<ShopInfo />} />
        <Route path="/family" element={<Family />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
