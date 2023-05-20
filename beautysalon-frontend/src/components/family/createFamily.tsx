/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';

import Text from '../common/text/text';
import SearchBar from '../common/searchBar';
import Table from '../common/table';
import { ERROR } from '../../constants/color';

function createFamily() {
  const [search, setSearch] = useState<string>('');
  const [searchUser, setSearchUser] = useState<string>('');

  const [familyRow] = useState(
    Array.from({ length: 3 }, (_, n) => ({
      이름: `홍길동${n}`,
      성별: '남자',
      번호: `010-1111-111${n}`,
      주소: '서울시 서울 종로구 세종대로 175',
      삭제: '삭제하기',
    })),
  );
  const [familyCol] = useState([
    { field: '이름', flex: 1 },
    { field: '성별', flex: 1 },
    { field: '번호', flex: 1 },
    { field: '주소', flex: 2 },
    { field: '삭제', flex: 1 },
  ]);

  const [userRow] = useState(
    Array.from({ length: 8 }, (_, n) => ({
      이름: `홍길동${n}`,
      성별: '남자',
      번호: `010-1111-111${n}`,
      주소: '서울시 서울 종로구 효자로 12',
    })),
  );
  const [userCol] = useState([
    {
      field: '이름',
      flex: 1,
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
    },
    { field: '성별', flex: 1 },
    { field: '번호', flex: 1 },
    { field: '주소', flex: 2 },
  ]);

  return (
    <div css={conatinerStyle}>
      <div>
        <Text type="tableContent" value={'패밀리 명'} style={{ color: '#FF9164' }} />
        <div css={searchContainerStyle}>
          <SearchBar
            value={search}
            placeholder={'사용하실 패밀리 명을 입력해주세요.'}
            setValue={setSearch}
          />
          <span css={errMsgStyle}>중복된 패밀리명 입니다.</span>
        </div>
      </div>

      <div>
        <Text type="tableContent" value={'홍길동 패밀리'} />
        <div css={tableStyle}>
          <Table row={familyRow} col={familyCol} fontSize="11"></Table>
        </div>
      </div>

      <div>
        <Text type="tableContent" value={'구성원 선택'} />
        <div css={searchContainerStyle}>
          <SearchBar
            value={searchUser}
            placeholder={'추가하고 싶은 회원명을 입력해주세요.'}
            setValue={setSearchUser}
          />
          <button css={btnStyle}>패밀리 생성</button>
          <span css={errMsgStyle}>구성원은 최대 10명까지 선택 가능합니다.</span>
        </div>

        <div css={[tableStyle, fullTableStye]}>
          <Table row={userRow} col={userCol} fontSize="11"></Table>
        </div>
      </div>
    </div>
  );
}

const conatinerStyle = css`
  width: fit-content;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const searchContainerStyle = css`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const errMsgStyle = css`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: ${ERROR};
`;

const btnStyle = css`
  width: 111px;
  height: 33px;

  color: white;
  background: rgba(179, 136, 255, 0.6);
  border: none;
  border-radius: 50px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  vertical-align: middle;
`;

const tableStyle = css`
  width: 40%;
  margin-top: 10px;
  min-width: 710px;
`;

const fullTableStye = css`
  width: 100%;
  min-width: 1000px;
`;

export default createFamily;
