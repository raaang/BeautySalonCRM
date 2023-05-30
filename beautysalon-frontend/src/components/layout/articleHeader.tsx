/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Button from '../common/button/button';
import React, { useState } from 'react';
import { ORANGE1, MAUVE1, MAUVE2 } from '../../constants/color';
import Modal, { modalState } from '../common/modal/modal';
import ModifyShopInfo from '../shop/modifyShopInfo';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import RegisterShopStyle from '../shop/registerShopStyle';
import { StringLiteralLike } from 'typescript';
import PaymentModal from '../payment/paymentModal';

interface articleHeaderProps {
  title: string;
  btnName?: string;
  btnName2?: string;

  modalBtn?: boolean;
}

function ArticleHeader(props: any) {
  const { title, btnName, btnName2, modalBtn = true } = props;
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
    if (name === '결제') {
      setModal(<PaymentModal />);
    }

    setOpen(!open);
  };

  return (
    <div>
      <div css={articleHeaderLayout}>
        <h3 css={articleHeaderTitle}>{props.title}</h3>
        {/* <Button btnName={props.btnName} btnClick={props.btnClick} event={openActionModal}></Button> */}
        <div css={btnDivLayout}>
          {btnName ? (
            <button css={[btnStyle]} onClick={() => modalHandler(props.btnName)}>
              {props.btnName}
            </button>
          ) : null}
          {btnName2 ? (
            <button css={[btnStyle]} onClick={() => modalHandler(props.btnName2)}>
              {props.btnName2}
            </button>
          ) : null}
        </div>
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

const articleHeaderLayout = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 18px;
`;
const articleHeaderTitle = css`
  color: ${ORANGE1};
  margin-right: 30px;
`;

const btnDivLayout = css`
  display: flex;
  gap: 10px;
`;
const btnStyle = css`
  padding: 10px 15px;
  border-radius: 20px;
  border: 0px;
  background-color: ${MAUVE2};
  color: white;
  &:hover {
    filter: brightness(1.1);
    color: black;
    transition: 0.3s;
  }
`;

export default ArticleHeader;
