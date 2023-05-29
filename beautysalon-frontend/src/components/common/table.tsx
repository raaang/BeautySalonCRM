/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ORANGE1, MAUVE1, MAUVE2, ORANGE2, GRAY1, GRAY2 } from '../../constants/color';
import { Pagination } from 'antd';

interface Props {
  row: object[];
  col: object[];
  fontSize?: string;
}
function Table({ row, col, fontSize = '9' }: Props) {
  const gridOptions = {
    defaultColDef: {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      //   filter: true,
      flex: 1,
      minWidth: 100,
    },
    suppressRowClickSelection: true,
    groupSelectsChildren: true,
    // debug: true,
    rowSelection: 'multiple',
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    pagination: true,
  };
  return (
    <div
      css={css`
        font-size: 14px;
        height: 565px;
      `}
      className="ag-theme-alpine"
    >
      <AgGridReact
        css={css`
          --ag-font-size: ${fontSize}px;
          --ag-borders: 10px;

          /* --ag-background-color: rgb(249, 245, 227); */
          --ag-header-foreground-color: white;
          --ag-header-background-color: ${ORANGE1};
          --ag-odd-row-background-color: rgb(0, 0, 0, 0.05);
          .ag-header-row-column-filter {
            color: rgb(0, 0, 0, 0.5);
            background-color: ${ORANGE2};
          }
          .ag-paging-panel {
            color: rgb(0, 0, 0, 0.5);
            background-color: ${ORANGE2};
          }
        `}
        rowData={row}
        columnDefs={col}
        defaultColDef={{
          editable: true,
          sortable: true,
          minWidth: 100,
          filter: true,
          flex: 1,
          floatingFilter: true,
          //   checkboxSelection: true,
        }}
        pagination={true}
        paginationAutoPageSize={true}
        // onGridReady={onGridReady}
				rowSelection={'multiple'}
      ></AgGridReact>
    </div>
  );
}

export default Table;
