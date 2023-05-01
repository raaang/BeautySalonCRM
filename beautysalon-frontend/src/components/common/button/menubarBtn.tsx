/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { PURPLE } from '../../../constants/color';

function MenuBarButton() {
  return (
    <button
      css={css`
        width: 100px;
        height: 50px;
        font-family: 'HS-Regular';
        font-size: 15px;

        border: 0px;
        background-color: ${PURPLE};
        border-radius: 5px;
        color: white;
      `}
    >
      샵 정보 확인
    </button>
  );
}

export default MenuBarButton;
