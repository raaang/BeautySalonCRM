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
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  margin-top: 100px;
`;

export default ReservationCalendarArticle;
