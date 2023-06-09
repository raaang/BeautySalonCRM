/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import ReservationCalendarArticle from './reservationCalendarArticle';
import ReservationListArticle from './reservationListArticle';

function ReservationMain() {
  return (
    <section css={ReservationLayout}>
      <ReservationCalendarArticle />
      <ReservationListArticle />
    </section>
  );
}

const ReservationLayout = css`
  width: 100%;
  padding: 20px 200px;
  display: flex;
`;

export default ReservationMain;
