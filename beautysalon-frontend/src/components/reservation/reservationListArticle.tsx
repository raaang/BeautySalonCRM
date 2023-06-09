/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

function ReservationListArticle() {
  return <article css={ArticleLayout}>hi</article>;
}

const ArticleLayout = css`
  width: 70%;
  border: 1px solid black;
`;

export default ReservationListArticle;
