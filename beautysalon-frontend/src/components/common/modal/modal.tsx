/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Text from '../text/text';

interface ModalProps {
  title: string;
  body: string | undefined;
  chngShowing: () => void;
}

export interface modalState {
  title: string;
  body: string;
}

function Modal(props: ModalProps) {
  const { title, body, chngShowing } = props;

  return (
    <div>
      <div css={modalOverlayStyle} onClick={chngShowing}></div>
      <div css={modalWrapperStyle}>
        <div css={modalStyle}>
          <Text value={title} type="modal" />
          <p>{body}</p>

          <div css={btnContainerStyle}>
            <button css={btnStyle} onClick={chngShowing}>
              <Text value="취소" type="modalBtn" />
            </button>
            <button css={btnStyle}>
              <Text value="확인" type="modalBtn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const modalWrapperStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 110;
`;

const modalStyle = css`
  min-width: 450px;
  min-height: 237px;
  padding: 40px;

  background: #ffffff;
  border: 5px solid #aebee5;
  border-radius: 50px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const titleStyle = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const btnContainerStyle = css`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 14px;
`;

const btnStyle = css`
  padding: 10px 20px;
  background: rgba(255, 145, 100, 0.6);
  border: none;
  border-radius: 50px;
`;

export default Modal;
