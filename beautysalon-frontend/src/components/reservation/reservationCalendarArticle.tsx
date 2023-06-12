/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Button from '../common/button/button';
import CustomCalendar from '../common/calendar/customCalendar';

function ReservationCalendarArticle() {
  return (
    <article css={ArticleLayout}>
      <CustomCalendar />
      <Button btnName="예약 하기"></Button>
    </article>
  );
}

const ArticleLayout = css`
  border: 1px solid black;
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export default ReservationCalendarArticle;
