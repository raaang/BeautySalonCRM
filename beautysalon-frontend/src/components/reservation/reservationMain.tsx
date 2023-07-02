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
  width: 1900px;
  padding: 20px 200px;
  display: flex;
  gap: 50px;
  margin-top: 30px;
`;

export default ReservationMain;
