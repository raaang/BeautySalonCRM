/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Text from '../text/text';

interface ModalInputProps {
  title: string | undefined;
  children: React.ReactChild;
  nextBtnText: string;
  chngShowing: () => void;
  nextBtn: () => void;
}

function ModalInput(props: ModalInputProps) {
  const { title, children, nextBtnText, chngShowing, nextBtn } = props;

  return (
    <div>
      <div css={modalOverlayStyle}></div>
      <div css={modalWrapperStyle}>
        <div css={modalStyle}>
          {title ? <Text value={title} type="modal" /> : null}
          {children}

          <div css={btnContainerStyle}>
            <button css={btnStyle} onClick={chngShowing}>
              <Text value={'취소'} type="btn" />
            </button>
            <button css={[btnStyle, nextBtnStyle]} onClick={nextBtn}>
              <Text value={nextBtnText} type="btn" />
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

  background: #faece3;
  border: 5px solid #e0f8d1;
  border-radius: 30px;
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
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const btnStyle = css`
  width: 175px;
  height: 33px;

  background: white;
  border: none;
  border-radius: 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const nextBtnStyle = css`
  background: #f2f7dd;
`;

export default ModalInput;
