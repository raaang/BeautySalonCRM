/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { Table, Tag } from 'antd';
import Button from '../button/button';
import { ORANGE1, ORANGE2 } from '../../../constants/color';

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

interface Props {
  data: DataType[];
  columns: object[];
}

function ReservationTable({ data, columns }: Props) {
  const [rowData, setRowData] = useState(data);
  const [colData, setColData] = useState(columns);

  return (
    <Table
      css={[tableFont, tableStyle]}
      columns={colData}
      expandable={{
        expandedRowRender: (record) => (
          <div>
            <p style={{ marginBottom: 20 }}>{record.request}</p>
            <div>
              {record.payment === '결제완료' ? (
                <div>
                  <Button btnName="결제 정보 변경" />
                </div>
              ) : (
                <div css={expandableDivStyle}>
                  <Button btnName="결제 내역 등록" />
                  <Button btnName="예약 수정" />
                  <Button btnName="예약 취소" />
                </div>
              )}
            </div>
          </div>
        ),

        // rowExpandable: (record) => record.request !== '요청 사항이 없습니다!',  // 어떤 요소에 적용할지
      }}
      dataSource={rowData}
      size="large"
      font-size="small"
      //   scroll={{ y: 1200 }}
    />
  );
}

const expandableDivStyle = css`
  display: flex;
  gap: 10px;
`;
const tableFont = css`
  .ant-table table {
    font-size: 13px;
  }
`;
const tableStyle = css`
  .ant-table-thead .ant-table-cell {
    background-color: ${ORANGE1};
    color: white;
  }
  .ant-table {
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

export default ReservationTable;
