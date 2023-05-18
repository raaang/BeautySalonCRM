/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Text from '../text/text';

interface InputProps {
  inputType: 'small' | 'big';
  title?: string;
  defaultValue?: string;
  placeholder: string;
}

function Input(props: InputProps) {
  const { inputType, title, placeholder, defaultValue } = props;

  const typeStyle = inputType === 'small' ? smallLabelStyle : null;

  return (
    <div css={continerStyle}>
      {title ? <Text value={title} type="label" /> : null}
      <label htmlFor="input" css={[labelStyle, typeStyle]}>
        <input id="input" css={inputStyle} type={'text'} placeholder={placeholder} value={defaultValue} />
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

export default Input;
