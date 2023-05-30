/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Header from '../../components/layout/header';
import ReservationArticle from './reservationArticle';
import ScheduleArticle from './scheduleArticle';
import DetailsArticle from './detailsArticle';
import Button from '../common/button/button';
import { ORANGE1 } from '../../constants/color';

function RegisterReservationMain() {
  return (
    <div css={RegisterReservationLayout}>
      <div css={btnDivLayout}>
        <Button btnName="이전 화면으로 돌아가기" color={ORANGE1}></Button>
      </div>
      <ReservationArticle />
      <ScheduleArticle />
      <DetailsArticle />
      <div css={btnDivLayout}>
        <Button btnName="예약 등록" color={ORANGE1}></Button>
      </div>
    </div>
  );
}

const btnDivLayout = css`
  text-align: center;
`;
const RegisterReservationLayout = css`
  width: 100%;
  padding: 20px 200px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;
export default RegisterReservationMain;
