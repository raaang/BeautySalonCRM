/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Button from '../common/button/button';
import React from 'react';
import { ORANGE1, MAUVE1, MAUVE2 } from '../../constants/color';

function ArticleHeader(props: any) {
  return (
    <div>
      <div
        css={css`
          display: flex;
          align-items: center;
          width: 100%;
          height: 40px;
          font-size: 18px;
        `}
      >
        <h3
          css={css`
            color: ${ORANGE1};
            margin-right: 30px;
          `}
        >
          {props.title}
        </h3>
        <Button btnName={props.btnName} btnClick={props.btnClick}></Button>
      </div>
      <hr
        css={css`
          border: 0px;
          height: 2px;
          background-color: ${MAUVE2};
          margin-bottom: 20px;
        `}
      />
    </div>
  );
}

export default ArticleHeader;
