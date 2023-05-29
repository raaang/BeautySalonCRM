/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Text from '../common/text/text';
import { MAUVE1, MAUVE3, ORANGE2 } from '../../constants/color';

interface TabProps {
  title: string;
  tabList: string[];
  tabIdx: number;
  setTabIdx: React.Dispatch<React.SetStateAction<number>>;
}

function Tab(props: TabProps) {
  const { title, tabList, tabIdx, setTabIdx } = props;

  return (
    <div css={containerStyle}>
      <Text type="tableContent" value={title} />
      <div css={tabListStyle}>
        {tabList?.map((item, idx) => (
          <button key={idx} css={tabIdx === idx ? tabClickItemStyle : tabItemStyle} onClick={() => setTabIdx(idx)}>
            <Text type="tableContent" value={item} />
          </button>
        ))}
      </div>
      <div></div>
    </div>
  );
}

const containerStyle = css`
  width: 100%;
  height: 94px;
  padding: 0px 150px;
  background-color: ${ORANGE2};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const tabListStyle = css`
  display: flex;
  gap: 20px;
`;

const tabItemStyle = css`
  width: 303px;
  height: 50px;
  color: ${MAUVE1};
  background-color: white;
  border: none;
`;

const tabClickItemStyle = css`
  width: 303px;
  height: 50px;
  color: black;
  background-color: ${MAUVE3};
  border: none;
`;

export default Tab;
