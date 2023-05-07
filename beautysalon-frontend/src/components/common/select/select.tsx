/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

interface SelectProps {
  placeholder: string;
  options: string[];
	value: any;
}

function Select(props: SelectProps) {
  const { placeholder, options, value } = props;

  return (
    <select css={selectStyle} name={placeholder} id={placeholder} defaultValue={value}>
      <option value="">{placeholder}</option>
      {options.map((item, idx) => (
        <option key={idx} value={`${item}`}>
          {item}
        </option>
      ))}
    </select>
  );
}

const selectStyle = css`
  height: 33px;
  padding: 8px 12px;

  background: white;
  border-radius: 10px;
  border: none;
  outline: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export default Select;
