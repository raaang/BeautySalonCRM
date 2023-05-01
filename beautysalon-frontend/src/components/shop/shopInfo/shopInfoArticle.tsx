/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import TextRow from '../../common/textRow';
import ArticleHeader from '../../layout/articleHeader';

function ShopInfoArticle() {
  return (
    <article
      css={css`
        width: 100%;
        margin-bottom: 100px;
      `}
    >
      <ArticleHeader title="샵 정보" btnName="정보 수정"></ArticleHeader>
      <TextRow title="샵 이름" content="스타일 샵"></TextRow>
      <TextRow title="아이디" content="style111"></TextRow>
      <TextRow title="비밀번호" content="*******"></TextRow>
      <TextRow title="샵 영업시간" content="11:00 ~ 20:00"></TextRow>
      <TextRow title="대표 번호" content="02-123-1234"></TextRow>
      <TextRow title="대표자" content="오인주"></TextRow>
      <TextRow title="대표자 번호" content="010-1234-5678"></TextRow>
      <TextRow title="포인트 적립율" content="5%"></TextRow>
      <TextRow title="포인트 적립 조건" content="포인트 사용금액을 제외한 결제금액의 5% 적립"></TextRow>
    </article>
  );
}

export default ShopInfoArticle;
