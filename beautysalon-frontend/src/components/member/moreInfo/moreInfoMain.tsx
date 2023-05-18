/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { ORANGE1 } from '../../../constants/color';
import Button from '../../common/button/button';
import FamilyInfoArticle from './familyInfoArticle';
import MemberInfoArticle from './memberInfoArticle';
import ProcedureHistoryArticle from './procedureHistoryArticle';
import ReservationAndPaymentArticle from './reservationAndPaymentArticle';

function MoreInfoMain() {
  return (
    <div
      css={css`
        width: 100%;
        padding: 20px 80px;
      `}
    >
      <div css={btnDivLayout}>
        <Button btnName="전체 회원 검색화면으로 돌아가기" color={ORANGE1}></Button>
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <section
          css={css`
            width: 50%;
            margin-right: 30px;
          `}
        >
          <MemberInfoArticle></MemberInfoArticle>
          <ReservationAndPaymentArticle></ReservationAndPaymentArticle>
          <FamilyInfoArticle></FamilyInfoArticle>
        </section>
        <section
          css={css`
            width: 50%;
          `}
        >
          <ProcedureHistoryArticle></ProcedureHistoryArticle>
        </section>
      </div>
    </div>
  );
}

const btnDivLayout = css`
  text-align: center;
  margin-bottom: 40px;
`;

export default MoreInfoMain;
