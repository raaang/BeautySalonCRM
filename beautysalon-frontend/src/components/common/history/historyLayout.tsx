/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { Children } from 'react';
import { MAUVE2 } from '../../../constants/color';

function HistoryLayout(props: any) {
  const { children } = props;
  return <div css={historyLayout}>{children}</div>;
}

const historyLayout = css`
  padding: 15px;
  margin-bottom: 10px;
  border: 2px solid ${MAUVE2};
  border-radius: 10px;
`;

export default HistoryLayout;
