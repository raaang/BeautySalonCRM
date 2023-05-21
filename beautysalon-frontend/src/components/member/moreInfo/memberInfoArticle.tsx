/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import TextRow from '../../../components/common/textRow';
import ArticleHeader from '../../../components/layout/articleHeader';
import { MemberInfoConfig } from '../../../config/moreInfoConfig';

function MemberInfoArticle() {
  return (
    <article css={articleLayout}>
      <ArticleHeader title="회원 정보" btnName="정보 수정"></ArticleHeader>
      <div>
        {MemberInfoConfig.map((item, idx) => {
          if (item.type === 'text') {
            return <TextRow key={idx} title={item.title} content={item.placeholder}></TextRow>;
          }
        })}
      </div>
    </article>
  );
}

const articleLayout = css`
  width: 100%;
  margin-bottom: 100px;
`;
export default MemberInfoArticle;
