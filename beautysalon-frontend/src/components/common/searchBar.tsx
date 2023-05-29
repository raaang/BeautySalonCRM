/** @jsx jsx */
import { CSSObject, css, jsx } from '@emotion/react';
import React from 'react';

interface SearchBarProps {
  value: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
	style?: CSSObject;
}

function searchBar(props: SearchBarProps) {
  const { value, placeholder, setValue } = props;
  return (
    <div css={containerStyle}>
      <input
        type="text"
        css={inputStyle}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

const containerStyle = css`
  width: 531px;
  padding: 8px 10px;
  background-color: #f6f0ff;
  border-radius: 10px;
`;

const inputStyle = css`
  width: 100%;
  height: 35px;
  padding: 0 16px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: #666666;
  }
`;

export default searchBar;
