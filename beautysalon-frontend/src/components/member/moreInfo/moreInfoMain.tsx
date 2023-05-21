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
    <div css={MoreInfoMainLayout}>
      <div css={btnDivLayout}>
        <Button btnName="전체 회원 검색화면으로 돌아가기" color={ORANGE1}></Button>
      </div>
      <div css={flexLayout}>
        <section css={firstSectionLayout}>
          <MemberInfoArticle></MemberInfoArticle>
          <ReservationAndPaymentArticle></ReservationAndPaymentArticle>
          <FamilyInfoArticle></FamilyInfoArticle>
        </section>
        <section css={secondSectionLayout}>
          <ProcedureHistoryArticle></ProcedureHistoryArticle>
        </section>
      </div>
    </div>
  );
}

const MoreInfoMainLayout = css`
  width: 100%;
  padding: 20px 80px;
`;
const flexLayout = css`
  display: flex;
`;
const firstSectionLayout = css`
  width: 50%;
  margin-right: 30px;
`;

const secondSectionLayout = css`
  width: 50%;
`;
const btnDivLayout = css`
  text-align: center;
  margin-bottom: 40px;
`;

export default MoreInfoMain;
