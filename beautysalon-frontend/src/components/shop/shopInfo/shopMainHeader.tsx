/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

function ShopMainHeader(props: any) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100px;
        text-align: center;
      `}
    >
      <h2 css={css``}>{props.title}</h2>
    </div>
  );
}

export default ShopMainHeader;
