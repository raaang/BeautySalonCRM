/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Button from '../common/button/button';
import React, { useState } from 'react';
import { ORANGE1, MAUVE1, MAUVE2 } from '../../constants/color';
import Modal, { modalState } from '../common/modal/modal';
import ModifyShopInfo from '../shop/modifyShopInfo';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import RegisterShopStyle from '../shop/registerShopStyle';

function ArticleHeader(props: any) {
  const [modalState, setModalState] = useState<modalState>({ title: '', body: '' });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<React.ReactElement>();

  const modalHandler = (name: string) => {
    if (name === '정보 수정') {
      setModal(<ModifyShopInfo />);
    }
    if (name === '스타일 등록') {
      setModal(<RegisterShopStyle />);
    }

    setOpen(!open);
  };

  return (
    <div>
      <div
        css={css`
          display: flex;
          align-items: center;
          width: 100%;
          height: 40px;
          font-size: 18px;
        `}
      >
        <h3
          css={css`
            color: ${ORANGE1};
            margin-right: 30px;
          `}
        >
          {props.title}
        </h3>
        {/* <Button btnName={props.btnName} btnClick={props.btnClick} event={openActionModal}></Button> */}
        <button
          css={css`
            width: 100px;
            height: 30px;
            border-radius: 20px;
            border: 0px;
            background-color: ${MAUVE2};
            color: white;
            &:hover {
              filter: brightness(1.1);
              color: black;
              transition: 0.3s;
            }
          `}
          onClick={() => modalHandler(props.btnName)}
        >
          {props.btnName}
        </button>
      </div>
      <hr
        css={css`
          border: 0px;
          height: 2px;
          background-color: ${MAUVE2};
          margin-bottom: 20px;
        `}
      />

      {open ? modal : null}
    </div>
  );
}

export default ArticleHeader;
