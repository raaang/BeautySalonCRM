import React, { useState } from 'react';
import Header from '../components/layout/header';
import Tab from '../components/layout/Tab';
import CreateFamily from '../components/family/createFamily';
import CheckFamilyPoint from '../components/family/checkFamilyPoint';

function Family() {
  const [tabIdx, setTabIdx] = useState<number>(0);
  const tabList = ['패밀리 생성/가입', '패밀리 수정', '패밀리 포인트 내역 조회'];

  return (
    <div>
      <Header />
      <Tab title={'패밀리'} tabList={tabList} tabIdx={tabIdx} setTabIdx={setTabIdx} />

      {tabIdx < 2 ? <CreateFamily tabIdx={tabIdx} /> : <CheckFamilyPoint />}
    </div>
  );
}

export default Family;
