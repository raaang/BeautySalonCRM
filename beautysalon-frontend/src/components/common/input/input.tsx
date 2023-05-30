/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { MAUVE2 } from '../../../constants/color';
import Text from '../text/text';

interface InputProps {
  inputType: 'small' | 'big';
  title?: string;
  defaultValue?: string;
  placeholder: string;
  value?: any;
  detailsComponent?: boolean;
}

function Input(props: InputProps) {
  const { inputType, title, placeholder, value, defaultValue, detailsComponent = false } = props;

  const typeStyle = inputType === 'small' ? smallLabelStyle : null;

  let detailsStyle;
  if (detailsComponent) detailsStyle = detailsComponentStyle;
  return (
    <div css={continerStyle}>
      {title ? <Text value={title} type="label" /> : null}
      <label htmlFor="input" css={[labelStyle, typeStyle]}>
        <input
          id="input"
          css={[inputStyle, detailsStyle]}
          type={'text'}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
}

const continerStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const smallLabelStyle = css`
  max-width: 280px;
`;

const labelStyle = css`
  width: 100%;
  max-width: 410px;
  background-color: white;
  border-radius: 10px;
`;

const inputStyle = css`
  width: 100%;
  padding: 8px 20px;

  color: #666666;
  border: none;
  border-radius: 10px;
  outline: none;

  font-size: 14px;
  line-height: 17px;
`;

const detailsComponentStyle = css`
  border: 2px solid black;
  padding: 10px;
  height: 40px;
  border-radius: 15px;
  border-color: ${MAUVE2};
  color: rgba(0, 0, 0, 0.5);
`;
export default Input;
