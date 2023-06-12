/** @jsx jsx */
import { CSSObject, css, jsx } from '@emotion/react';
import React from 'react';
import Text from '../common/text/text';

interface InputContainerProps {
  title?: string | undefined;
  children: React.ReactChild;
	style?: CSSObject;
}

function InputContainer(props: InputContainerProps) {
  const { title, children, style } = props;

  return (
    <div css={[containerStyle, style]}>
      {title ? <Text type="title" value={title} /> : null}

      {children}
    </div>
  );
}

const containerStyle = css`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const titleStyle = css`
  margin: 40px 0;

  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
`;

export const inputContainerStyle = css`
  width: 627px;
  padding: 40px;

  background: #faece3;
  border: 5px solid #e0f8d1;
  border-radius: 30px;
  box-sizing: border-box;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const smallInputContainerStyle = css`
  width: 549px;
  padding: 100px 90px;
`;

export default InputContainer;
