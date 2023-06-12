/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { MAUVE3, ORANGE1 } from '../../constants/color';
import Text from '../common/text/text';
import Table from '../common/table';
import { DatePicker } from 'antd';

interface filterInterface {
	name: string;
	value: string | number;
	type: string;
	isEdit: boolean;
}

function SearchMember() {
  const [searchParams, setSearchParams] = useState();
  const [clickedList, setClickedList] = useState<string[]>(['홍길동0', '홍길동1']);

  const [filterList, setFilterList] = useState<filterInterface[]>([
    { name: '검색 기간 시작', value: '', type: 'date', isEdit: false },
    { name: '검색 기간 끝', value: '', type: 'date', isEdit: false },
    { name: '이름', value: '', type: 'text', isEdit: false },
    { name: '성별', value: '', type: 'text', isEdit: false },
    { name: '휴대폰 번호', value: '', type: 'number', isEdit: false },
    { name: '패밀리 번호', value: '', type: 'text', isEdit: false },
    { name: '잔여포인트', value: '', type: 'number', isEdit: false },
    { name: '가입일 시작', value: '', type: 'date', isEdit: false },
    { name: '가입일 끝', value: '', type: 'date', isEdit: false },
    { name: '최근 시술일 시작', value: '', type: 'date', isEdit: false },
    { name: '최근 시술일 끝', value: '', type: 'date', isEdit: false },
    { name: '시술 횟수', value: '', type: 'number', isEdit: false },
    { name: '누적 매출액', value: '', type: 'number', isEdit: false },
    { name: '담당자', value: '', type: 'text', isEdit: false },
  ]);


  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>, idx: number, item: filterInterface) => {
    const temp = { ...item, value: e.target.value };
		const tempList = filterList.map((el, i) => (i === idx ? temp : el));
    setFilterList([...tempList]);
  };

  const [rowData, setRowData] = useState(
    Array.from({ length: 20 }, (_, n) => ({
      이름: '홍길동' + n,
      성별: '남',
      '휴대폰 번호': '01012345678',
      '패밀리 번호': '000',
      담당자: '김민수',
      '잔여 포인트': [0, 0],
      '누적 매출액': '40000',
      '최근 시술일': ['2023-03-01', 3],
      가입일: '2023-01-04',
      '단골/신규': '단골',
      수정: '수정',
      삭제: '삭제',
    })),
  );
  const [columnData, setColumnData] = useState([
    { field: '이름', flex: 1 },
    { field: '성별', flex: 1 },
    { field: '휴대폰 번호', flex: 1.5 },
    { field: '패밀리 번호', flex: 1 },
    { field: '담당자', flex: 1 },
    { field: '잔여 포인트', flex: 1 },
    { field: '누적 매출액', flex: 1 },
    { field: '최근 시술일', flex: 1 },
    { field: '가입일', flex: 1 },
    { field: '단골/신규', flex: 1 },
    { field: '수정', flex: 0.2 },
    { field: '삭제', flex: 0.2 },
  ]);

  return (
    <div css={containerStyle}>
      <div css={filterContainerStyle}>
        <div css={filterListContainerStyle}>
          {filterList.map((item, idx) => (
            <div
              key={idx}
              css={filterItemStyle}
              onClick={() => setFilterList(filterList.map((el, i) => (i === idx ? { ...item, isEdit: true } : el)))}
            >
              <span>{item.name}</span>
              {item.isEdit ? (
                item.type === 'date' ? (
                  <DatePicker
                    placeholder={item.name}
                    onChange={(date, dateString) => {
                      console.log(dateString);
                    }}
                  />
                ) : (
                  <input
                    type={item.type}
                    value={item.value}
                    onChange={(e) => onChangeFilter(e, idx, item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setFilterList(filterList.map((el, i) => (i === idx ? { ...item, isEdit: false } : el)));
                      }
                    }}
                  />
                )
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          ))}
        </div>
        <button css={searchBtn}></button>
      </div>

      <div css={btnContainer}>
        <input type="radio" />
        <Text type="modalBtn" value="삭제된 회원도 검색" style={{ marginLeft: 5, color: ORANGE1 }} />
        <button css={changeManagerBtn}>담당자 일괄 변경</button>
      </div>

      <div css={clickedContainerStyle}>
        {clickedList?.length
          ? clickedList.map((item, idx) => (
              <div key={idx} css={clickedStyle}>
                {item}
                <button
                  onClick={() => {
                    clickedList.splice(idx, 1);
                    setClickedList([...clickedList]);
                  }}
                ></button>
              </div>
            ))
          : null}
      </div>

      <Table row={rowData} col={columnData} fontSize="11"></Table>
    </div>
  );
}

const containerStyle = css`
  width: 100%;
  max-width: 1600px;
  margin: auto;
  padding: 20px;
`;

const filterContainerStyle = css`
  width: fit-content;
  padding: 30px;
  border: 5px solid ${MAUVE3};
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const filterListContainerStyle = css`
  width: 1120px;
  display: flex;
  flex-wrap: wrap;
	gap: 30px 10px;
`;

const filterItemStyle = css`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  span {
    height: 15px;
  }

  input {
    width: 150px;
  }
`;

const searchBtn = css`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background: ${MAUVE3};
`;

const btnContainer = css`
  margin-top: 20px;
`;

const changeManagerBtn = css`
  width: 141px;
  height: 43px;
  margin-left: 20px;

  color: white;
  background: rgba(179, 136, 255, 0.6);
  border: none;
  border-radius: 50px;

  font-weight: 700;
  font-size: 16px;
`;

const clickedContainerStyle = css`
  margin: 15px 0 20px;
  display: flex;
  gap: 7px;
`;

const clickedStyle = css`
  width: fit-content;
  padding: 8px;

  background: ${MAUVE3};
  border-radius: 10px;
  font-weight: 400;
  font-size: 12px;

  display: flex;
  justify-content: center;

  button {
    width: 16px;
    height: 16px;
    margin-left: 4px;
    border: none;
  }
`;

export default SearchMember;
