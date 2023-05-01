/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
// import InputContainer, { inputContainerStyle, smallInputContainerStyle } from '../inputContainer/inputContainer';
import { registerShopEmpConfig } from '../../config/shopAccountConfig';
import Input from '../common/input/input';
import ModalInput from '../common/modal/modalInput';
import Select from '../common/select/select';
import Modal, { modalState } from '../common/modal/modal';
import Text from '../common/text/text';

function RegisterShopEmp() {
  const [open, setOpen] = useState<boolean>(true); // 직원 등록 모달
  const [modalOpen, setModalOpen] = useState<boolean>(false); // 직원 등록 완료 확인 모달
  const [modalState, setModalState] = useState<modalState>({ title: '', body: '' });

  const onClickNext = () => {
    setModalOpen(!modalOpen);
    setModalState({ title: '직원이 등록되었습니다.', body: '' });
  };

  return open ? (
    <div>
      <ModalInput
        title={undefined}
        nextBtnText={'직원 등록하기'}
        chngShowing={() => setOpen(!open)}
        nextBtn={() => onClickNext()}
      >
        <div css={inputContainerStyle}>
          {registerShopEmpConfig.map((item, idx) => {
            if (item.type === 'select') {
              return (
                <div css={inputItemStyle} key={idx}>
                  <Text value={item.title} type="label" />
                  <div css={selectStyle}>
                    <Select placeholder={item.placeholder!} options={item.optionList!} />
                  </div>
                </div>
              );
            } else if (item.type === 'radio') {
              return (
                <div css={inputItemStyle} key={idx}>
                  <Text value={item.title} type="label" />
                  <div css={selectStyle}>
                    <div css={radioItemStyle}>
                      <label>
                        <input name="genter" type={'radio'} value="male" checked />
                        <span css={radioTextStyle}>
                          <Text value={item.placeholderList![0]} />
                        </span>
                      </label>
                    </div>

                    <div css={radioItemStyle}>
                      <label>
                        <input name="genter" type={'radio'} value="female" />
                        <span css={radioTextStyle}>
                          <Text value={item.placeholderList![1]} />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              );
            } else if (item.type === 'textarea') {
              return (
                <div css={textareaItemStyle} key={idx}>
                  <Text value={item.title} type="label" />
                  <textarea css={textareaStyle} placeholder={item.placeholder}></textarea>
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

const inputContainerStyle = css`
  width: 547px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const inputItemStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const selectStyle = css`
  width: 100%;
  max-width: 410px;
  display: flex;
`;

const radioItemStyle = css`
  width: 50%;

  label {
    display: flex;
    align-items: center;
  }

  input[type='radio'] {
    appearance: none;
    width: 33px;
    height: 33px;
    padding: 8px;

    background: white;
    border-radius: 50%;
    outline: none;
    transition: all 0.3s;

    // 라디오 버튼 클릭
    &:checked {
      &::before {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: black;
      }
    }
  }
`;

const radioTextStyle = css`
  margin-left: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
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

const btnContainerStyle = css`
  margin-top: 40px;
  display: flex;
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

export default RegisterShopEmp;
