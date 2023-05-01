/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

function MenuItems(props: any) {
  return (
    <span
      css={css`
        font-family: 'HS-Regular';
        font-size: 16px;
        margin-right: 70px;
      `}
    >
      {props.title}
    </span>
  );
}

export default MenuItems;
