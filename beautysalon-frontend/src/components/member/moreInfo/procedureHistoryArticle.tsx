/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import History from '../../common/history/history';
import ArticleHeader from '../../../components/layout/articleHeader';
import { operationHistoryConfig } from '../../../config/moreInfoConfig';
import { MAUVE2 } from '../../../constants/color';
import HistoryLayout from '../../../components/common/history/historyLayout';

function ProcedureHistoryArticle() {
  const [historyData, setHistoryData] = useState(operationHistoryConfig);
  return (
    <article
      css={css`
        width: 100%;
        margin-bottom: 100px;
      `}
    >
      <ArticleHeader title="시술 내역"></ArticleHeader>
      {historyData ? (
        historyData.map((items, idx) => {
          return (
            <HistoryLayout>
              <div css={timeTextLayout}>
                <span css={timeText}>{items.date}</span>
              </div>
              {items.info.map((item, i) => {
                return (
                  <History
                    key={i}
                    date={items.date}
                    operationName={item.operationName}
                    name={item.name}
                    point={item.point}
                    pointIncrease={item.pointIncrease}
                    payment={item.payment}
                    method={item.method}
                    operationHistory={true}
                  />
                );
              })}
            </HistoryLayout>
          );
        })
      ) : (
        <div>
          <p>
            예약 건이 없습니다.<br></br>상단의 '에약 하기' 버튼을 통해 예약해주세요.
          </p>
        </div>
      )}
    </article>
  );
}

const timeTextLayout = css`
  margin-bottom: 10px;
`;
const timeText = css`
  color: rgba(0, 0, 0, 0.5);
`;

const historyLayout = css`
  padding: 15px;
  border: 2px solid ${MAUVE2};
  margin-bottom: 10px;
`;

export default ProcedureHistoryArticle;
