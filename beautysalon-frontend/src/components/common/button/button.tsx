/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { MAUVE2 } from '../../../constants/color';

interface ButtonProps {
  btnName: string;
  color?: string;

  openActionModal?: () => void;
}
function Button(props: ButtonProps) {
  const { btnName, color = MAUVE2, openActionModal } = props;
  return (
    <button
      css={[
        btnStyle,
        css`
          background-color: ${color};
        `,
      ]}
      onClick={props.openActionModal}
    >
      {props.btnName}
    </button>
  );
}

const btnStyle = css`
  padding: 7px 15px;
  border-radius: 20px;
  border: 0px;
  color: white;
  &:hover {
    filter: brightness(1.1);
    color: black;
    transition: 0.3s;
  }
`;

export default Button;
