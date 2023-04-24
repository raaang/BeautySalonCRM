/** @jsx jsx */
import { jsx } from '@emotion/react';

import React from 'react';
import { selectStyle } from './select.styles';

interface SelectProps {
  placeholder: string;
  options: string[];
}

function Select(props: SelectProps) {
  const { placeholder, options } = props;

  return (
    <select css={selectStyle} name={placeholder} id={placeholder}>
      <option value="">{placeholder}</option>
      {options.map((item, idx) => (
        <option key={idx} value={`${item}`}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Select;
