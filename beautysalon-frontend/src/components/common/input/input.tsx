/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

interface InputProps {
  inputType: 'small' | 'big';
  title: string;
  placeholder: string;
}

function Input(props: InputProps) {
  const { inputType, title, placeholder } = props;

  const typeStyle = inputType === 'small' ? smallLabelStyle : null;

  return (
    <div css={continerStyle}>
      <p css={inputTitleStyle}>{title}</p>
      <label htmlFor="input" css={[labelStyle, typeStyle]}>
        <input id="input" css={inputStyle} type={'text'} placeholder={placeholder} />
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

const inputTitleStyle = css`
  height: 19px;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
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
