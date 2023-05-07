/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import ModalInput from '../common/modal/modalInput';
import Modal, { modalState } from '../common/modal/modal';
import Text from '../common/text/text';
import Select from '../common/select/select';

function ModifyShopStyle() {
  const [open, setOpen] = useState<boolean>(true); // 스타일 수정 모달
  const [modalOpen, setModalOpen] = useState<boolean>(false); // 확인 모달
  const [modalState, setModalState] = useState<modalState>({ title: '', body: '' });

  const onClickNext = (isModify: boolean) => {
    setModalOpen(!modalOpen);
    setModalState({ title: `스타일이 ${isModify ? '수정' : '삭제'}되었습니다.`, body: '' });
  };

  const bigOptionList = ['파마', '염색', '커트'];

  return open ? (
    <div>
      <ModalInput
        title={undefined}
        nextBtnText={'스타일 삭제하기'}
        chngShowing={() => setOpen(!open)}
        nextBtn={() => onClickNext(false)}
        thirdBtnText={'스타일 수정하기'}
        thirdBtn={() => onClickNext(true)}
      >
        <div css={inputListStyle}>
          <div css={inputItemStyle}>
            <Text value={'스타일 대분류'} type="label" />
            <div css={selectStyle}>
              <Select placeholder={'대분류'} options={bigOptionList} value={null} />
            </div>
          </div>
          <div css={inputItemStyle}>
            <Text value={'스타일 중분류'} type="label" />
            <div css={selectStyle}>
              <Select placeholder={'중분류'} options={bigOptionList} value={null} />
            </div>
          </div>
          <div css={inputItemStyle}>
            <Text value={'스타일 소분류'} type="label" />
            <div css={selectStyle}>
              <Select placeholder={'소분류'} options={bigOptionList} value={null} />
            </div>
          </div>
        </div>
      </ModalInput>

      {modalOpen ? (
        <Modal title={modalState.title} body={modalState.body} chngShowing={() => setModalOpen(!modalOpen)} />
      ) : null}
    </div>
  ) : null;
}

const inputListStyle = css`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const inputItemStyle = css`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const selectStyle = css`
  display: flex;
`;

export default ModifyShopStyle;
