/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import Button from '../common/button/button';
import { MAUVE2, ORANGE1 } from '../../constants/color';
import { reservationDetailsConfig, reservationConfigData } from '../../config/reservationConfig';
import TimeSelect from '../common/select/TimeSelect';
import Text from '../common/text/text';
import Input from '../common/input/input';
import Select from '../common/select/select';

interface Props {
  isModify?: boolean;
  reservationData?: ListProps;
}

interface ListProps {
  timeSelect: string[];
  optionList: string[];
  money: string;
  request: string;
}

function DetailsArticle({ isModify = false, reservationData = reservationConfigData }: Props) {
  const [configData, setConfigData] = useState(reservationDetailsConfig);
  const timeSelectPlacehoder = isModify ? reservationData.timeSelect : configData[0].placeholderList;
  const stylePlaceholder1 = isModify ? reservationData.optionList[0] : configData[1].placeholder;
  const stylePlaceholder2 = isModify ? reservationData.optionList[1] : configData[2].placeholder;
  const stylePlaceholder3 = isModify ? reservationData.optionList[2] : configData[3].placeholder;
  const moneyPlacehoder = isModify ? reservationData.money : configData[4].placeholder!;
  const requestPlacehoder = isModify ? reservationData.request : configData[5].placeholder;

  return (
    <div css={flexLayout}>
      <div css={TimeSelectLayout}>
        <TimeSelect
          key={'reservation_time'}
          title={configData[0].title}
          placeholder={timeSelectPlacehoder!}
          detailsComponent={true}
        />
      </div>
      <div css={TimeSelectLayout}>
        <div css={styleLayout}>
          <div>
            <Text value="스타일" type="label" />
          </div>
          <div css={selectLayout}>
            <Select
              key={'reservataion_style'}
              placeholder={stylePlaceholder1!}
              options={configData[1].optionList!}
              detailsComponent={true}
            />
            <Select
              key={'reservataion_style'}
              placeholder={stylePlaceholder2!}
              options={configData[2].optionList!}
              detailsComponent={true}
            />
            <Select
              key={'reservataion_style'}
              placeholder={stylePlaceholder3!}
              options={configData[3].optionList!}
              detailsComponent={true}
            />
          </div>
        </div>
      </div>
      <div css={TimeSelectLayout}>
        <Input
          key={'reservation_defaultMoney'}
          inputType={'big'}
          title={configData[4].title}
          placeholder={moneyPlacehoder}
          detailsComponent={true}
        />
      </div>
      <div css={[TimeSelectLayout, textareaItemStyle]} key={'reservation_request'}>
        <div>
          <Text value={configData[5].title} type="label" />
        </div>

        <textarea css={textareaStyle} placeholder={requestPlacehoder}></textarea>
      </div>
    </div>
  );
}

const flexLayout = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const TimeSelectLayout = css`
  width: 600px;
`;
const styleLayout = css`
  display: flex;
  gap: 145px;
  align-items: center;
`;
const selectLayout = css`
  display: flex;
  gap: 20px;
`;

const textareaItemStyle = css`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

const textareaStyle = css`
  width: 610px;
  padding: 10px;
  height: 200px;
  border: 2px solid black;
  border-radius: 15px;
  border-color: ${MAUVE2};
  color: rgba(0, 0, 0, 0.5);
`;

export default DetailsArticle;
