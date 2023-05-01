/** @jsx jsx */
import { CSSObject, css, jsx } from '@emotion/react';
import React from 'react';

interface TextProps {
  type?: 'default' | 'title' | 'body' | 'label' | 'btn' | 'modal' | 'modalBtn' | 'tableContent';
  value: string;
	style?: CSSObject;
}

function Text(props: TextProps) {
  const { type = 'default', value, style } = props;

  let textStyle;
  if (type === 'title') textStyle = titleStyle;
  else if (type === 'label') textStyle = labelStyle;
  else if (type === 'btn') textStyle = btnStyle;
  else if (type === 'modal') textStyle = modalStyle;
  else if (type === 'modalBtn') textStyle = modalBtnStyle;
  else if (type === 'tableContent') textStyle = tableContentStyle;
  else textStyle = defaultStyle;

  return <span css={[textStyle, style]}>{value}</span>;
}

const defaultStyle = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const titleStyle = css`
	margin: 40px 0;
	text-align: center;

  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
`;

// ihnput label, table label
const labelStyle = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

// 모달 내용
const modalStyle = css`
	margin: 20px 0;
	text-align: center;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

// 모달 버튼
const modalBtnStyle = css`
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

// 테이블 내용
const tableContentStyle = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const btnStyle = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

export default Text;
