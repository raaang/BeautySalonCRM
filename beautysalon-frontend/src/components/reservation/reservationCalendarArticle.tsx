/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

function ReservationCalendarArticle() {
  return <article css={ArticleLayout}>hi</article>;
}

const ArticleLayout = css`
  border: 1px solid black;
  width: 30%;
`;

export default ReservationCalendarArticle;
