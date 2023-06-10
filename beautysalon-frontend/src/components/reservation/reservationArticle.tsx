/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Header from '../../components/layout/header';
import ArticleHeader from '../layout/articleHeader';
import TextRow from '../common/textRow';
import Button from '../common/button/button';

interface Props {
  customer?: string;
  manager?: string;
  phoneNumber?: string;
}
function ReservationArticle({ customer = '', manager = '', phoneNumber = '' }: Props) {
  let phone = customer ? phoneNumber : '예약자를 선택해주세요.';
  let isCustom = customer ? isCustomer : null;
  let isManager = manager ? null : '담당자를 선택해주세요.';
  return (
    <article css={articleLayout}>
      <ArticleHeader title="예약 하기"></ArticleHeader>
      <div css={flexRow}>
        <div css={TextRowStyle}>
          <TextRow title="예약자" content={customer}></TextRow>
          <span css={[spanStyle, isCustom]}>{phone}</span>
        </div>
        <Button btnName="예약자 선택"></Button>
      </div>
      <div css={flexRow}>
        <div css={TextRowStyle}>
          <TextRow title="담당자" content={manager}></TextRow>
          <span css={spanStyle}>{isManager}</span>
        </div>
        <Button btnName="담당자 선택"></Button>
      </div>
      <div>
        <div css={TextRowStyle}>
          <TextRow title="예약날짜" content="2018-02-03"></TextRow>
        </div>
      </div>
    </article>
  );
}

const articleLayout = css``;
const spanStyle = css`
  font-size: 13px;
  /* margin-left: 10px; */
  color: rgba(0, 0, 0, 0.5);
`;
const isCustomer = css`
  margin-left: 10px;
`;
const flexRow = css`
  display: flex;
  gap: 50px;
  margin-bottom: 20px;
  align-items: center;
`;
const TextRowStyle = css`
  display: flex;
  margin-top: 10px;
  width: 350px;
`;

export default ReservationArticle;
