/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { reservationAndPaymentConfig } from '../../../config/moreInfoConfig';
import ArticleHeader from '../../../components/layout/articleHeader';
import History from '../../common/history/history';
import HistoryLayout from '../../common/history/historyLayout';

function ReservationAndPaymentArticle() {
  const [reservationInfoData, setreservationInfoDat] = useState(reservationAndPaymentConfig);
  console.log(reservationInfoData);
  return (
    <article
      css={css`
        width: 100%;
        margin-bottom: 100px;
      `}
    >
      <ArticleHeader title="예약 및 결제" btnName="예약" btnName2="결제" modalBtn={false}></ArticleHeader>

      {reservationInfoData ? (
        reservationInfoData.map((item, idx) => {
          return (
            <div>
              <div css={dateLayout}>
                <span css={dateText}>{item.date}</span>
              </div>
              <HistoryLayout>
                <History
                  key={idx}
                  date={item.date}
                  startTime={item.startTime}
                  endTime={item.endTime}
                  operationName={item.operationName}
                  name={item.name}
                  reservation_member_list={true}
                />
              </HistoryLayout>
            </div>
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

const dateLayout = css`
  margin-bottom: 10px;
`;
const dateText = css`
  font-weight: bold;
`;

export default ReservationAndPaymentArticle;
