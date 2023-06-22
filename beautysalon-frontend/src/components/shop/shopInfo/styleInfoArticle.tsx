/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import Table from '../../common/table';
import ArticleHeader from '../../layout/articleHeader';
import { MAUVE3, ORANGE1 } from '../../../constants/color';

function StyleInfoArticle() {
  const [rowData] = useState([
    {
      '스타일 대분류': '파마',
      '스타일 중분류': '남자',
      '스타일 소분류': '다운펌',
      수정: '수정하기',
    },
    {
      '스타일 대분류': '파마',
      '스타일 중분류': '여자',
      '스타일 소분류': '열펌',
      수정: '수정하기',
    },
  ]);

  const [columnDefs] = useState([
    { field: '스타일 대분류', flex: 1, filter: 'agTextColumnFilter' },
    { field: '스타일 중분류', flex: 1 },
    { field: '스타일 소분류', flex: 1 },
    { field: '수정', flex: 0.5 },
  ]);

  type styleType = {
    [key: string]: string;
    style1: string;
    style2: string;
    style3: string;
  };

  const [styles] = useState<styleType[]>([
    { style1: '대분류1', style2: '중분류1-1', style3: '소분류1-1-1' },
    { style1: '대분류1', style2: '중분류1-1', style3: '소분류1-1-2' },
    { style1: '대분류1', style2: '중분류1-1', style3: '소분류1-1-3' },
    { style1: '대분류1', style2: '중분류1-2', style3: '소분류1-2-1' },
    { style1: '대분류1', style2: '중분류1-2', style3: '소분류1-2-2' },
    { style1: '대분류1', style2: '중분류1-2', style3: '소분류1-2-3' },
    { style1: '대분류2', style2: '중분류2-1', style3: '소분류2-1-1' },
    { style1: '대분류2', style2: '중분류2-1', style3: '소분류2-1-2' },
    { style1: '대분류2', style2: '중분류2-1', style3: '소분류2-1-3' },
    { style1: '대분류3', style2: '중분류3-1', style3: '소분류3-1-1' },
    { style1: '대분류3', style2: '중분류3-1', style3: '소분류3-1-2' },
    { style1: '대분류3', style2: '중분류3-1', style3: '소분류3-1-3' },
    { style1: '대분류3', style2: '중분류3-2', style3: '소분류3-2-1' },
    { style1: '대분류3', style2: '중분류3-2', style3: '소분류3-2-2' },
    { style1: '대분류3', style2: '중분류3-2', style3: '소분류3-2-3' },
  ]);

  // 선택된 스타일
  const [styleClick, setStyleClick] = useState({
    style1: styles[0].style1,
    style2: styles[0].style2,
    style3: styles[0].style3,
  });

  // 중복 제거한 스타일 목록
  const bigList = [...new Set(styles.map((el) => el.style1))];
  const midList = [...new Set(styles.map((el) => (el.style1 === styleClick.style1 ? el.style2 : null)))];
  const smList = [
    ...new Set(
      styles.map((el) => (el.style1 === styleClick.style1 && el.style2 === styleClick.style2 ? el.style3 : null)),
    ),
  ];

  return (
    <article
      css={css`
        width: 100%;
        height: 500px;
        margin-bottom: 150px;
      `}
    >
      <ArticleHeader title="스타일 정보" btnName="스타일 등록"></ArticleHeader>
      {/* <Table row={rowData} col={columnDefs} fontSize="11"></Table> */}
      <div css={tableStyle}>
        <div css={tableTitleStyle}>
          <span>스타일 대분류</span>
          <span>스타일 중분류</span>
          <span>스타일 소분류</span>
          <span>수정하기</span>
        </div>

        <div css={tableContentStyle}>
          <ul>
            {bigList.map((style) => (
              <li
                css={styleClick.style1 === style ? tableClickItemStyle : tableItemStyle}
                onClick={() => setStyleClick({ style1: style, style2: '', style3: '' })}
              >
                {style}
              </li>
            ))}
          </ul>
          <ul>
            {midList.map(
              (style) =>
                style && (
                  <li
                    css={styleClick.style2 === style ? tableClickItemStyle : tableItemStyle}
                    onClick={() => setStyleClick({ style1: styleClick.style1, style2: style, style3: '' })}
                  >
                    {style}
                  </li>
                ),
            )}
          </ul>
          <ul>
            {smList.map(
              (style) =>
                style && (
                  <li
                    css={styleClick.style3 === style ? tableClickItemStyle : tableItemStyle}
                    onClick={() => setStyleClick((prev) => ({ ...prev, style3: style }))}
                  >
                    {style}
                  </li>
                ),
            )}
          </ul>
          <ul>
            {smList.map(
              (style) =>
                style && (
                  <li
                    css={styleClick.style3 === style ? tableClickItemStyle : tableItemStyle}
                    onClick={() => setStyleClick((prev) => ({ ...prev, style3: style }))}
                  >
                    <button>수정하기</button>
                  </li>
                ),
            )}
          </ul>
        </div>
      </div>
    </article>
  );
}

const tableStyle = css`
  width: 100%;
  text-align: center;
`;

const tableTitleStyle = css`
  height: 50px;
  font-weight: 700;
  font-size: 14px;

  color: white;
  background-color: ${ORANGE1};

  display: flex;
  align-items: center;

  span {
    width: 25%;
  }
`;

const tableContentStyle = css`
  height: 400px;
  display: flex;
  border-bottom: 1px solid ${ORANGE1};

  ul {
    width: 25%;
    margin: 0;
    padding: 0;
    overflow-y: auto;

    list-style-type: none;
    list-style: none;
  }
`;

const tableItemStyle = css`
  height: 42px;
  line-height: 42px;
`;

const tableClickItemStyle = css`
  height: 42px;
  line-height: 42px;
  background-color: ${MAUVE3};
`;

export default StyleInfoArticle;
