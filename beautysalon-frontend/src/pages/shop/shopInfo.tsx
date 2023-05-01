/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import ShopMain from '../../components/shop/shopInfo/shopMain';
import Header from '../../components/layout/header';

function ShopInfo() {
  return (
    <div>
      <Header></Header>
      <ShopMain></ShopMain>
    </div>
  );
}

export default ShopInfo;
