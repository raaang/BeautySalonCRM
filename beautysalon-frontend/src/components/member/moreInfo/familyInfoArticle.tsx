/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import Table from '../../common/table';
import ArticleHeader from '../../../components/layout/articleHeader';
import { familyRowData, familyColumnData, familyInfo } from '../../../config/moreInfoConfig';
import Text from '../../../components/common/text/text';
import { ColumnsType } from 'antd/es/table';

interface TableType {
  key: React.Key;
  name: string;
  age: string;
  phone: string;
  delete: string;
}

function FamilyInfoArticle() {
  // const [rowData] = useState(familyRowData);
  // const [columnDefs] = useState(familyColumnData);

  const [rowData] = useState<TableType[]>(
    Array.from({ length: 8 }, (_, n) => ({
      key: n.toString(),
      name: '이필자',
      age: '26',
      phone: '01056781234',
      delete: '삭제',
    })),
  );
  const [columnDefs] = useState<ColumnsType<TableType>>([
    { title: '이름', dataIndex: 'name' },
    { title: '나이', dataIndex: 'age' },
    { title: '휴대폰 번호', dataIndex: 'phone' },
    { title: '삭제', dataIndex: 'delete' },
  ]);

  return (
    <article css={articleLayout}>
      <ArticleHeader title="패밀리 정보" btnName="패밀리 등록"></ArticleHeader>
      {rowData ? (
        <div>
          <div css={familyNameLayout}>
            <span css={familyNameText}>{familyInfo.name} 패밀리</span>
            <span> &nbsp;</span>
            <span css={familyNumberText}>No.{familyInfo.number}</span>
          </div>
          <Table row={rowData} col={columnDefs} fontSize="11"></Table>
        </div>
      ) : (
        <div>
          <p>
            등록된 패밀리 정보가 없습니다.<br></br>상단의 '패밀리 등록' 버튼을 통해 등록해주세요.
          </p>
        </div>
      )}
    </article>
  );
}

const articleLayout = css`
  width: 100%;
  margin-bottom: 100px;
`;
const familyNameLayout = css`
  margin-bottom: 10px;
`;

const familyNameText = css`
  font-size: 20px;
  font-weight: bold;
`;

const familyNumberText = css`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
`;

export default FamilyInfoArticle;
