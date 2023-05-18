/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { MAUVE2 } from '../../../constants/color';

function Button(props: any) {
  return (
    <button css={btnStyle} onClick={props.openActionModal}>
      {props.btnName}
    </button>
  );
}
const btnStyle = css`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 0px;
  background-color: ${MAUVE2};
  color: white;
  &:hover {
    filter: brightness(1.1);
    color: black;
    transition: 0.3s;
  }
`;

export default Button;
