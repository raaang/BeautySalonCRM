/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoreInfo from './pages/member/moreInfo';
import Member from './pages/member/member';
import Account from './pages/shop/account/index';
import ShopInfo from './pages/shop/shopInfo';
import Family from './pages/family';
import RegisterReservation from './pages/reservation/registerReservation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account/*" element={<Account />} />
        <Route path="/shop" element={<ShopInfo />} />
        <Route path="/family" element={<Family />} />
        <Route path="/moreInfo" element={<MoreInfo />} />
				<Route path="/member"element={<Member />} />
        <Route path="/reservation" element={<RegisterReservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
