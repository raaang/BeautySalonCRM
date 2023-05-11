/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { MAUVE2 } from '../../../constants/color';

function Button(props: any) {
  return (
    <button
			onClick={props.btnClick}
      css={css`
        width: 100px;
        height: 30px;
        border-radius: 20px;
        border: 0px;
        background-color: ${MAUVE2};
        color: white;
      `}
    >
      {props.btnName}
    </button>
  );
}

export default Button;
