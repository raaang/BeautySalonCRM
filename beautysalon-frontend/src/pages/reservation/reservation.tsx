/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import ReservationMain from '../../components/reservation/reservationMain';
import Header from '../../components/layout/header';

function Reservation() {
  return (
    <div>
      <Header></Header>
      <ReservationMain />
    </div>
  );
}

export default Reservation;
