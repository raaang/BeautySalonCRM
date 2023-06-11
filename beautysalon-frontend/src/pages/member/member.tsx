import React, { useState } from 'react'
import Tab from '../../components/layout/Tab'
import Header from '../../components/layout/header'
import CreateMember from '../../components/member/createMember';
import SearchMember from '../../components/member/searchMember';

function Member() {
  const [tabIdx, setTabIdx] = useState<number>(0);
  const tabList = ['회원등록', '회원 검색'];

	return (
		<div>
			<Header />
      <Tab title={'회원'} tabList={tabList} tabIdx={tabIdx} setTabIdx={setTabIdx} />
			
      {tabIdx === 0 ? <CreateMember /> : <SearchMember />}
		</div>
	)
}

export default Member