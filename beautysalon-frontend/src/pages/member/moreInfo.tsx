/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import MoreInfoMain from '../../components/member/moreInfo/moreInfoMain';
import Header from '../../components/layout/header';

function MoreInfo() {
  return (
    <div>
      <Header></Header>
      <MoreInfoMain></MoreInfoMain>
    </div>
  );
}

export default MoreInfo;
