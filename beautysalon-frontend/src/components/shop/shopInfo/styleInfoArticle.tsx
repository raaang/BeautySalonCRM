/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import Table from '../../common/table';
import ArticleHeader from '../../layout/articleHeader';

function StyleInfoArticle() {
  const [rowData] = useState([
    {
      '스타일 대분류': '파마',
      '스타일 중분류': '남자',
      '스타일 소분류': '다운펌',
      수정: '수정하기',
    },
    {
      '스타일 대분류': '파마',
      '스타일 중분류': '여자',
      '스타일 소분류': '열펌',
      수정: '수정하기',
    },
  ]);

  const [columnDefs] = useState([
    { field: '스타일 대분류', flex: 1 },
    { field: '스타일 중분류', flex: 1 },
    { field: '스타일 소분류', flex: 1 },
    { field: '수정', flex: 0.5 },
  ]);

  return (
    <article
      css={css`
        width: 100%;
        height: 500px;
        margin-bottom: 150px;
      `}
    >
      <ArticleHeader title="스타일 정보" btnName="스타일 등록"></ArticleHeader>
      <Table row={rowData} col={columnDefs} fontSize="11"></Table>
    </article>
  );
}

export default StyleInfoArticle;
