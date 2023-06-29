/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useState } from 'react';
import Select from '../../components/common/select/select';
import { reservationSelectConfig, rowData, columnData } from '../../config/reservationConfig';
import SearchBar from '../../components/common/searchBar';
import Table from '../common/table';

function ReservationListArticle() {
  const [configData, setConfigData] = useState(reservationSelectConfig);
  const [search, setSearch] = useState<string>('');
  const [row, setRol] = useState(rowData);
  const [col, setCol] = useState(columnData);

  return (
    <article css={ArticleLayout}>
      <div css={settingDivLayout}>
        <div css={selectLayout}>
          {configData.map((item, idx) => {
            if (item.type === 'select') {
              return <Select placeholder={item.placeholder!} options={item.optionList!} detailsComponent={true} />;
            }
          })}
        </div>
        <div>
          <SearchBar
            value={search}
            placeholder="이름, 전화번호, 스타일 등 검색어를 입력해주세요."
            setValue={setSearch}
          />
        </div>
      </div>
      <div>
        {' '}
        <Table row={row} col={col} fontSize="11"></Table>{' '}
      </div>
    </article>
  );
}

const selectLayout = css`
  display: flex;
  gap: 5px;
`;

const settingDivLayout = css`
  display: flex;
  justify-content: space-between;
`;
const ArticleLayout = css`
  width: 1200px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default ReservationListArticle;
