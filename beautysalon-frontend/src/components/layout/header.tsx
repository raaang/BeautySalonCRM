/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { ORANGE1 } from '../../constants/color';
import MenuBarButton from '../common/button/menubarBtn';
import MenuItems from '../common/menuItems';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 80px;
        overflow: hidden; // 로고 이미지 넘치는 부분 제거

        padding: 0px 130px;
        position: sticky;
        top: 0px;
        z-index: 1; // 설정 안하면 테이블에 가려짐
        background-color: white;
        border-bottom: 1px solid ${ORANGE1};
      `}
    >
      <img
        src={logo}
        css={css`
          width: 160px;
          height: 112px;
          padding: 0px;
          margin: 0px;
        `}
      />
      <div>
        <MenuItems title="고객관리"></MenuItems>
        <MenuItems title="재고관리"></MenuItems>
        <MenuItems title="예약"></MenuItems>
        <MenuItems title="정산"></MenuItems>
      </div>
      <div>
        <MenuBarButton></MenuBarButton>
      </div>
    </div>
  );
}

export default Header;
