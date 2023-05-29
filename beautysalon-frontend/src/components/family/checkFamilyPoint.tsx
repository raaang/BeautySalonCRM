/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';

import Text from '../common/text/text';
import SearchBar from '../common/searchBar';
import { ERROR, MAUVE2, ORANGE1 } from '../../constants/color';
import { operationHistoryConfig } from '../../config/moreInfoConfig';
import ArticleHeader from '../layout/articleHeader';
import HistoryLayout from '../common/history/historyLayout';
import History from '../common/history/history';
import SearchContainer from '../common/searchContainer';

function CheckFamilyPoint() {
  const [search, setSearch] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false); // 포인트 이동 모달
  const [historyData, setHistoryData] = useState(operationHistoryConfig);

  return (
    <div css={conatinerStyle}>
      <div>
        <Text type="tableContent" value={'패밀리 명'} style={{ color: '#FF9164' }} />
        <div css={searchContainerStyle}>
          <SearchBar value={search} placeholder={'사용하실 패밀리 명을 입력해주세요.'} setValue={setSearch} />
          <span css={errMsgStyle}>중복된 패밀리명 입니다.</span>
        </div>
      </div>

      <div>
        <div css={titleStyle}>
          <span css={titleTextStyle}>홍길동</span>
          <span css={titleTextStyle} style={{ color: 'black', opacity: 0.4 }}>
            패밀리
          </span>
          <Text type="tableContent" value={'No. 34'} style={{ opacity: 0.4 }} />
        </div>
        <Text type="tableContent" value={'5400p'} />
        <button css={btnStyle} onClick={() => setIsOpen(!isOpen)}>
          포인트 이동
        </button>
      </div>

      <article css={articleLayout}>
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
              패밀리의 시술 내역이 없습니다.<br></br>상단 헤더의 '에약' 화면을 통해 예약해주세요.
            </p>
          </div>
        )}
      </article>

      {isOpen ? (
        <SearchContainer title="패밀리 포인트 이동" isFamily={true} chngShowing={() => setIsOpen(!isOpen)} />
      ) : null}
    </div>
  );
}

const conatinerStyle = css`
  width: fit-content;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const searchContainerStyle = css`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const errMsgStyle = css`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: ${ERROR};
`;

const titleStyle = css`
  margin-bottom: 27px;
  display: flex;
  align-items: end;
  gap: 4px;
`;

const titleTextStyle = css`
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  color: ${ORANGE1};
`;

const btnStyle = css`
  width: 111px;
  height: 33px;
  margin-left: 10px;

  color: white;
  background: rgba(179, 136, 255, 0.6);
  border: none;
  border-radius: 50px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  vertical-align: middle;
`;

const articleLayout = css`
  width: 100%;
  margin-bottom: 100px;
`;
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

export default CheckFamilyPoint;
