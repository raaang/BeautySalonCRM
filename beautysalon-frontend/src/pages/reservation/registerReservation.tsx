/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import RegisterReservationMain from '../../components/reservation/registerReservationMain';
import Header from '../../components/layout/header';

function RegisterReservation() {
  return (
    <div>
      <Header></Header>
      <RegisterReservationMain />
    </div>
  );
}

export default RegisterReservation;
