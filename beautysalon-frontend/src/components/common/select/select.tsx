/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { MAUVE2 } from '../../../constants/color';

interface SelectProps {
  placeholder: string;
  options: string[];
  value?: any;
  detailsComponent?: boolean;
  disable?: boolean;
}

function Select(props: SelectProps) {
  const { placeholder, options, value, detailsComponent = false, disable = false } = props;

  let detailsStyle;
  if (detailsComponent) detailsStyle = detailsComponentStyle;
  return (
    <select
      css={[selectStyle, detailsStyle]}
      name={placeholder}
      id={placeholder}
      defaultValue={value}
      disabled={disable}
    >
      <option css={disabledSelectStyle} value="" disabled selected>
        {placeholder}
      </option>
      {options.map((item, idx) => (
        <option key={idx} value={`${item}`}>
          {item}
        </option>
      ))}
    </select>
  );
}

const disabledSelectStyle = css`
  display: none;
`;
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

const detailsComponentStyle = css`
  border: 2px solid black;
  padding: 10px;
  height: 40px;
  border-radius: 15px;
  border-color: ${MAUVE2};
  color: rgba(0, 0, 0, 0.5);
`;

export default Select;
