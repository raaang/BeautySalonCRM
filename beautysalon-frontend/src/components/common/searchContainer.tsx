/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import Text from './text/text';
import SearchBar from '../common/searchBar';
import Table from './table';
import { ORANGE1, ORANGE2 } from '../../constants/color';
import Input from './input/input';

interface SearchContainerProps {
  title: string;
  isFamily?: boolean; // 패밀리 화면 여부 확인
  chngShowing: () => void;
}

function SearchContainer(props: SearchContainerProps) {
  const { title, isFamily = false, chngShowing } = props;

  const [search, setSearch] = useState<string>('');

  const [row] = useState(
    Array.from({ length: 3 }, (_, n) => ({
      이름: `홍길동${n}`,
    })),
  );
  const [col] = useState([{ field: '이름', flex: 1 }]);

  console.log(isFamily);

  return (
    <div>
      <div css={modalOverlayStyle} onClick={chngShowing}></div>
      <div css={modalWrapperStyle}>
        <div css={modalStyle}>
          <div>
            <Text value={title} type="modal" style={{ margin: '20px 0 0' }} />
            <hr css={lineStyle} />
          </div>

          <SearchBar value={search} placeholder={'패밀리 명을 입력해주세요.'} setValue={setSearch} />
          {search ? <Table row={row} col={col} fontSize="8"></Table> : null}

          {isFamily ? (
            <div>
              <Text type="tableContent" value={'홍길동'} style={{ color: ORANGE1 }} />
              <Text type="tableContent" value={'님 개인 포인트 내역'} />
              <p css={pointStyle}>1700p</p>

              <Text type="tableContent" value={'패밀리로 포인트를 얼만큼 옮길까요?'} />
			        <input
			          id="input"
			          css={inputStyle}
			          type={'number'}
			          placeholder={'옮길 포인트를 입력해주세요.'}
			        />

              <div css={btnContainerStyle}>
                <button css={btnStyle} onClick={chngShowing}>
                  <Text value="취소" type="modalBtn" />
                </button>
                <button css={btnStyle}>
                  <Text value="확인" type="modalBtn" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const modalWrapperStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 110;
`;

const modalStyle = css`
  min-width: 450px;
  min-height: fit-content;
  padding: 40px;
  text-align: left;

  background: #ffffff;
  border: 5px solid #aebee5;
  border-radius: 50px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 26px;
`;

const lineStyle = css`
  width: 100%;
  height: 3px;
  margin: 4px 0 0;
  border: none;
  background-color: #eee;
`;

const btnContainerStyle = css`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 14px;
`;

const btnStyle = css`
  padding: 10px 20px;
  background: rgba(255, 145, 100, 0.6);
  border: none;
  border-radius: 50px;
`;

const pointStyle = css`
  margin: 16px 0 54px 0;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;

const inputStyle = css`
  width: 100%;
	margin: 10px 0 42px;
  padding: 8px 20px;

  color: black;
	background-color: ${ORANGE2};
  border: none;
  border-radius: 10px;
  outline: none;

	font-weight: 400;
  font-size: 14px;
  line-height: 17px;

	::placeholder {
		color: #666666;
	}

	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
	    -webkit-appearance: none;
	    margin: 0;
	}
`;

export default SearchContainer;
