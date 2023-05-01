/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import EmployeeInfoArticle from './employeeInfoArticle';
import ShopInfoArticle from './shopInfoArticle';
import ShopMainHeader from './shopMainHeader';
import StyleInfoArticle from './styleInfoArticle';

function ShopMain() {
  return (
    <div
      css={css`
        width: 100%;
        padding: 80px 130px;
      `}
    >
      {/* <ShopMainHeader title="샵 정보 확인"></ShopMainHeader> */}
      <section
        css={css`
          width: 100%;
        `}
      >
        <ShopInfoArticle></ShopInfoArticle>
        <EmployeeInfoArticle></EmployeeInfoArticle>
        <StyleInfoArticle></StyleInfoArticle>
      </section>
    </div>
  );
}

export default ShopMain;
