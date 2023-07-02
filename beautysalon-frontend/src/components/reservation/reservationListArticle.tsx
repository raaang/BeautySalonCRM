/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useState } from 'react';
import Select from '../../components/common/select/select';
import { reservationSelectConfig, rowData, columnData } from '../../config/reservationConfig';
import SearchBar from '../../components/common/searchBar';
import Table from '../common/table';
import ReservationTable from '../common/table/reservationTable';
import type { ColumnsType } from 'antd/es/table';
import { Tag } from 'antd';

interface DataType {
  key: React.Key;
  payment: string;
  reservationTime: string;
  name: string;
  phone: string;
  style: string;
  manager: string;
  request: string;
  money: string;
  point: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '결제',
    key: 'payment',
    dataIndex: 'payment',
    render: (tag) => (
      <span>
        {tag && (
          <Tag color="volcano" key={tag}>
            {tag}
          </Tag>
        )}
      </span>
    ),
  },
  { title: '예약 시간', dataIndex: 'reservationTime', key: 'reservationTime' },
  { title: '이름', dataIndex: 'name', key: 'name' },
  { title: '전화번호', dataIndex: 'phone', key: 'phone' },
  { title: '스타일', dataIndex: 'style', key: 'style' },
  { title: '담당자', dataIndex: 'manager', key: 'manager' },
  { title: '결제금액', dataIndex: 'money', key: 'money' },
  { title: '포인트 (패밀리/개인)', dataIndex: 'point', key: 'point' },
  // {
  //   title: 'Action',
  //   dataIndex: '',
  //   key: 'x',
  //   render: () => <a>삭제</a>,
  // },
];

const data: DataType[] = [
  {
    key: 1,
    payment: '결제완료',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000 / 20000',
  },
  {
    key: 2,
    payment: '',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000 / 30000',
  },
  {
    key: 3,
    payment: '결제완료',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request: '',
    money: '15000',
    point: '1000',
  },
  {
    key: 4,
    payment: '',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000',
  },
  {
    key: 5,
    payment: '결제완료',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000',
  },
  {
    key: 6,
    payment: '결제완료',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000',
  },
  {
    key: 7,
    payment: '',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000',
  },
  {
    key: 8,
    payment: '결제완료',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request: '',
    money: '15000',
    point: '1000',
  },
  {
    key: 9,
    payment: '',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000',
  },
  {
    key: 10,
    payment: '결제완료',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000',
  },
  {
    key: 11,
    payment: '결제완료',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000',
  },
  {
    key: 12,
    payment: '',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
    money: '15000',
    point: '1000',
  },
  {
    key: 13,
    payment: '결제완료',
    reservationTime: '11:00 - 14:00',
    name: '홍길동',
    phone: '01012345678',
    style: '염색',
    manager: '김지수',
    request: '',
    money: '15000',
    point: '1000',
  },
];

function ReservationListArticle() {
  const [configData, setConfigData] = useState(reservationSelectConfig);
  const [search, setSearch] = useState<string>('');

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
        {/* <Table row={row} col={col} fontSize="11"></Table>{' '} */}
        <ReservationTable data={data} columns={columns} />
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
