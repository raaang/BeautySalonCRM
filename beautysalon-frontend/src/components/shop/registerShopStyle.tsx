/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
// import InputContainer, { inputContainerStyle, smallInputContainerStyle } from '../inputContainer/inputContainer';
import { registerShopStyleConfig } from '../../config/shopAccountConfig';
import Input from '../common/input/input';
import ModalInput from '../common/modal/modalInput';
import Select from '../common/select/select';
import Modal, { modalState } from '../common/modal/modal';
import Text from '../common/text/text';
import TimeSelect from '../common/select/TimeSelect';

function RegisterShopStyle() {
  const [open, setOpen] = useState<boolean>(true); // 샵 정보 수정 모달
  const [modalOpen, setModalOpen] = useState<boolean>(false); // 샵 정보 수정 완료 확인 모달
  const [modalState, setModalState] = useState<modalState>({ title: '', body: '' });

  const onClickNext = () => {
    setModalOpen(!modalOpen);
    setModalState({ title: '스타일이 등록되었습니다!', body: '' });
  };

  return open ? (
    <div>
      <ModalInput
        title={undefined}
        nextBtnText={'스타일 등록하기'}
        chngShowing={() => setOpen(!open)}
        nextBtn={() => onClickNext()}
      >
        <div css={inputContainerStyle}>
          {registerShopStyleConfig.map((item, idx) => {
            if (item.type === 'select') {
              return (
                <div css={inputItemStyle} key={idx}>
                  <Text value={item.title} type="label" />
                  <div css={selectStyle}>
                    <Select placeholder={item.placeholder!} options={item.optionList!} />
                  </div>
                  <div css={selectStyle}>
                    <Input key={idx} inputType={'small'} placeholder={item.placeholder!} />
                  </div>
                </div>
              );
            } else {
              return <Input key={idx} inputType={'big'} title={item.title} placeholder={item.placeholder!} />;
            }
          })}
        </div>
      </ModalInput>

      {modalOpen ? (
        <Modal title={modalState.title} body={modalState.body} chngShowing={() => setModalOpen(!modalOpen)} />
      ) : null}
    </div>
  ) : null;
}

const inputItemStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const selectStyle = css`
  max-width: 410px;
  display: flex;
`;

const inputContainerStyle = css`
  width: 547px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const textareaItemStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const textareaStyle = css`
  width: 100%;
  max-width: 410px;
  height: 75px;
  padding: 8px 20px;

  color: #666666;
  background-color: white;
  border: none;
  border-radius: 10px;
  outline: none;
  resize: none;
`;

export default RegisterShopStyle;
