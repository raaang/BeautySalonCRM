/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import SearchBar from '../common/searchBar';
import { shopStyleTypeConfig } from '../../config/shopAccountConfig';
import Text from '../common/text/text';
import Button from '../common/button/button';
import { ORANGE1, MAUVE1, BLUE1, MAUVE2 } from '../../constants/color';

interface Props {
  title: string;
  styleList: string[];
}

function StyleTypeList({ title, styleList }: Props) {
  const [dataList, setDataList] = useState(styleList);
  const [search, setSearch] = useState<string>('');
  const [modifyStyle, setModifyStyle] = useState<string>('');
  const [currentListIdx, setCurrentListIdx] = useState<number>();
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const btnName = title + ' 추가';
  let borderStyle = '';

  if (title === '대분류') borderStyle = ORANGE1;
  if (title === '중분류') borderStyle = MAUVE1;
  if (title === '소분류') borderStyle = BLUE1;

  const onModifyClick = (idx: number) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentNode.previousSibling);

    setCurrentListIdx(idx);
  };

  const onOkClick = () => {
    setCurrentListIdx(-1);
  };

  const onbtnAdd = () => {
    setIsAdd(true);
  };

  const onbtnCancel = () => {
    setIsAdd(false);
  };

  useEffect(() => {
    setDataList(shopStyleTypeConfig[0].list[0].list);
  }, []);

  return (
    <div css={layoutStyle}>
      <h3 css={headerStyle}>스타일 {title}</h3>
      <SearchBar width={350} value={search} placeholder={'스타일을 입력해주세요.'} setValue={setSearch} />
      <div
        css={[
          listStyle,
          css`
            border: 3px solid ${borderStyle};
          `,
        ]}
      >
        {dataList.map((style, idx) => {
          return (
            <div>
              <div css={listLayout} key={idx}>
                {currentListIdx === idx ? (
                  <input
                    type="text"
                    css={[
                      modifyInputStyle,
                      css`
                        border: 2px solid ${borderStyle};
                      `,
                    ]}
                    // value={modifyStyle}
                    placeholder={style}
                    onChange={(e) => setModifyStyle(e.target.value)}
                  />
                ) : (
                  <Text value={style} />
                )}
                <div css={btnDivLayout}>
                  {currentListIdx === idx ? (
                    <button css={btnStyle} key={idx} onClick={() => onOkClick()}>
                      확인
                    </button>
                  ) : (
                    <button css={btnStyle} key={idx} onClick={() => onModifyClick(idx)}>
                      수정
                    </button>
                  )}
                  <span>/</span>
                  <button css={btnStyle}>삭제</button>
                </div>
              </div>
            </div>
          );
        })}

        {isAdd ? (
          <div css={listLayout}>
            <input
              type="text"
              css={[
                modifyInputStyle,
                css`
                  border: 2px solid ${borderStyle};
                `,
              ]}
              placeholder="스타일을 입력해주세요."
              onChange={(e) => setModifyStyle(e.target.value)}
            />
            <div css={btnDivLayout}>
              <button css={btnStyle}>추가</button>
              <span>/</span>
              <button css={btnStyle} onClick={() => onbtnCancel()}>
                취소
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <div css={addBtnLayout}>
        <button
          css={[
            addBtnStyle,
            css`
              background-color: ${borderStyle};
            `,
          ]}
          onClick={() => onbtnAdd()}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
}

const addBtnStyle = css`
  padding: 7px 15px;
  border-radius: 20px;
  border: 0px;
  color: white;

  &:hover {
    filter: brightness(1.1);
    color: black;
    transition: 0.3s;
  }
`;
const headerStyle = css`
  text-align: center;
`;
const addBtnLayout = css`
  text-align: center;
`;
const btnDivLayout = css`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`;
const btnStyle = css`
  border: 0;
  outline: 0;
  /* background-color: white; */
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  font-size: 12px;
`;
const layoutStyle = css`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 600px;
`;
const listLayout = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  &:hover {
    background-color: rgb(242, 247, 221);
  }
`;
const listStyle = css`
  width: 350px;
  height: 385px;
  border: none;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  overflow: auto;
  padding-bottom: 20px;
`;
const inputStyle = css`
  border: 0 solid black;
`;
const modifyInputStyle = css`
  color: black;
  border: 2px solid ${MAUVE2};
  border-radius: 10px;
  padding: 10px 5px;

  ::placeholder {
    color: #666666;
  }
`;

export default StyleTypeList;
