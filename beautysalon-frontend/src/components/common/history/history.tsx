/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { start } from 'repl';
import { MAUVE2, ORANGE1 } from '../../../constants/color';

interface HistoryProps {
  date?: string;
  startTime?: string;
  endTime?: string;
  operationName?: string;
  name?: string;
  point?: string;
  pointIncrease?: boolean;
  payment?: string;
  method?: string;

  operationHistory?: boolean;
  reservation_member_list?: boolean;
  reservation_manager_list?: boolean;
}

function History(props: HistoryProps) {
  const {
    date,
    startTime,
    endTime,
    operationName,
    name,
    point,
    pointIncrease,
    payment,
    method,
    operationHistory = false,
    reservation_member_list = false,
    reservation_manager_list = false,
  } = props;

  if (reservation_member_list) {
    return (
      <div css={historyLayout}>
        <span css={timeText}>
          {startTime} ~ {endTime}
        </span>
        <span css={orangeText}>{operationName}</span>
        <div>
          <span css={orangeText}>시술자 </span>
          <span>{name}</span>
        </div>
        <button css={btnStyle}>예약 상세 정보</button>
      </div>
    );
  } else if (reservation_manager_list) {
    return (
      <div css={historyLayout}>
        <span css={timeText}>
          {startTime} ~ {endTime}
        </span>
        <span css={orangeText}>{operationName}</span>
        <div>
          <span
            css={css`
              font-weight: bold;
            `}
          >
            {name}{' '}
          </span>
          <span>고객님</span>
        </div>
      </div>
    );
  } else if (operationHistory) {
    return (
      <div css={historyLayout}>
        <div css={operationHistoryItem}>
          <span css={orangeText}>{operationName}</span>
        </div>
        <div css={operationHistoryItem}>
          <span>{name}</span>
        </div>
        <div css={operationHistoryItem}>
          {pointIncrease ? <span css={pointPlus}>+{point}P</span> : <span css={pointMinus}>-{point}P</span>}
        </div>
        <div css={operationHistoryItem}>
          <span>{payment} 원</span>
        </div>
        <div>
          <span>{method}</span>
        </div>
      </div>
    );
  } else return null;
}

const historyLayout = css`
  display: flex;
  justify-content: space-between;
  padding: 3px 15px;
  align-items: center;
`;
const operationHistoryItem = css`
  flex-basis: 20%;
`;

const pointPlus = css`
  color: #1677ff;
`;
const pointMinus = css`
  color: #ff0000;
`;
const btnStyle = css`
  padding: 10px 15px;
  border-radius: 20px;
  border: 0px;
  color: white;
  background-color: ${MAUVE2};
  &:hover {
    filter: brightness(1.15);
    color: black;
    transition: 0.3s;
  }
`;

const orangeText = css`
  color: ${ORANGE1};
  font-weight: bold;
`;

const timeText = css`
  color: rgba(0, 0, 0, 0.5);
`;

export default History;
