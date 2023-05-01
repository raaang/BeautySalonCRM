/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

function TextRow(props: any) {
  return (
    <div
      css={css`
        margin-bottom: 10px;
        font-size: 13px;
      `}
    >
      <span
        css={css`
          display: inline-block;
          width: 200px;
        `}
      >
        {props.title}
      </span>
      <span
        css={css`
          font-weight: bold;
        `}
      >
        {props.content}
      </span>
    </div>
  );
}

export default TextRow;
