/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Table from '../../common/table';
import React, { useState } from 'react';
import ArticleHeader from '../../layout/articleHeader';
import RegisterShopEmp from '../registerShopEmp';
import type { ColumnsType } from 'antd/es/table';

interface TableType {
  key: React.Key;
  name: string;
  phone: string;
  address: string;
  status: string;
  memo: string;
  edit: string;
}

function EmployeeInfoArticle() {
	
  const [columnDefs] = useState<ColumnsType<TableType>>([
    { title: '이름', dataIndex: 'name' },
    { title: '휴대폰', dataIndex: 'phone' },
    { title: '주소', dataIndex: 'address' },
    { title: '근무 여부', dataIndex: 'status' },
    { title: '메모 사항', dataIndex: 'memo' },
    { title: '편집', dataIndex: 'edit' },
	]);

  // const [columnDefs] = useState([
  //   { field: '이름', flex: 0.4 },
  //   { field: '휴대폰', flex: 0.4 },
  //   { field: '주소', flex: 1.1 },
  //   { field: '근무 여부', flex: 0.5 },
  //   { field: '메모 사항', flex: 0.7 },
  //   { field: '편집', flex: 0.3 },
  // ]);

  const [rowData] = useState<TableType[]>(
		Array.from({length: 10}, (_, n) => ({
		key: n.toString(),
		name: `홍길동${n}`,
		phone: '010-1234-5678',
		address: '서울특별시 광진구 뚝섬로 1234',
		status: '재직',
		memo: '메모 사항',
		edit: '편집',
	})));

  const shopEmpRegisterData = {
    shop_name: '',
    shop_emp_status: '',
    shop_emp_date_start: '',
    shop_emp_date_finish: '',
    shop_emp_sex: '',
    shop_emp_name: '',
    shop_emp_phone: '',
    shop_emp_address: '',
    shop_emp_memo: '',
  };

  const shopEmpModifyData = {
    shop_name: '스타일 샵',
    shop_emp_status: '재직',
    shop_emp_date_start: '2023-05-01',
    shop_emp_date_finish: '2023-05-07',
    shop_emp_sex: 'female',
    shop_emp_name: '홍길동0',
    shop_emp_phone: '010-1234-5678',
    shop_emp_address: '서울특별시 광진구 뚝섬로 1234',
    shop_emp_memo: '메모사항',
  };

  const [open, setOpen] = useState<boolean>(false); // 직원 등록 모달


  return (
    <article
      css={css`
        width: 100%;
        height: 500px;
        margin-bottom: 250px;
      `}
    >
      <ArticleHeader title="직원 정보" btnName="직원 등록" btnClick={() => setOpen(!open)}></ArticleHeader>
      <Table row={rowData} col={columnDefs}></Table>

      {open ? <RegisterShopEmp isModify={false} shopEmpData={shopEmpModifyData} /> : null}
    </article>
  );
}

export default EmployeeInfoArticle;
