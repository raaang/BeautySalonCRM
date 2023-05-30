/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Header from '../../components/layout/header';
import ArticleHeader from '../layout/articleHeader';
import TextRow from '../common/textRow';
import Button from '../common/button/button';
import ScheduleList from './scheduleList';
import CustomCalendar from '../common/calendar/customCalendar';

function ScheduleArticle() {
  return (
    <article css={articleFlexLayout}>
      <div css={[flexLayout, borderStyle]}>
        <div css={btnLayout}>
          <Button btnName="해당 요일로 지정"></Button>
        </div>
        <CustomCalendar />
      </div>
      <div css={flexLayout}>
        <ScheduleList></ScheduleList>
      </div>
    </article>
  );
}

const btnLayout = css`
  margin-bottom: 20px;
`;
const articleFlexLayout = css`
  display: flex;
`;

const borderStyle = css`
  border-right: 2px solid rgba(0, 0, 0, 0.1);
`;

const flexLayout = css`
  width: 50%;
  padding: 20px;
`;
export default ScheduleArticle;
