/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import InputContainer, { inputContainerStyle } from '../inputContainer/inputContainer';
import Text from '../common/text/text';
import Input from '../common/input/input';
import { MAUVE3, ORANGE1 } from '../../constants/color';
import { registerMember } from '../../config/moreInfoConfig';
import Modal from '../common/modal/modal';

interface memberInterface {
  member_name: string;
  member_sex: string;
  member_address: string;
  member_phone: number;
  member_sms_check: string;
  member_family_num: number;
  member_memo: string;
}

function CreateMember() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [memberParams, setMemberParams] = useState<memberInterface>({
    member_name: '',
    member_sex: '',
    member_address: '',
    member_phone: 0,
    member_sms_check: '',
    member_family_num: 0,
    member_memo: '',
  });

  return (
    <InputContainer style={{ height: 'calc(100% - 174px)' }}>
      <div css={[inputContainerStyle, { border: `5px solid ${ORANGE1}` }]}>
        {registerMember.map((item, idx) => {
          console.log(item.id, memberParams);
          if (item.type === 'radio') {
            return (
              <div css={inputItemStyle} key={idx}>
                <Text value={item.title} type="label" />
                <div css={selectStyle}>
                  <div css={radioItemStyle}>
                    <label>
                      <input name={item.id} type={'radio'} value={`${item.id}-0`} />
                      <span css={radioTextStyle}>
                        <Text value={item.placeholderList![0]} />
                      </span>
                    </label>
                  </div>

                  <div css={radioItemStyle}>
                    <label>
                      <input name={item.id} type={'radio'} value={`${item.id}-1`} />
                      <span css={radioTextStyle}>
                        <Text value={item.placeholderList![1]} />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <Input
                key={idx}
                inputType={'big'}
                title={item.title}
                placeholder={item.placeholder!}
                // value={memberParams[item.id]}
              />
            );
          }
        })}

        <button css={btnStyle} onClick={() => setModalOpen(!modalOpen)}>
          <Text type="btn" value={'회원 정보 저장'} />
        </button>

        {modalOpen ? (
          <Modal title={'회원 정보가 저장되었습니다.'} body={''} chngShowing={() => setModalOpen(!modalOpen)} />
        ) : null}
      </div>
    </InputContainer>
  );
}

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
    margin: 0;
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

const btnStyle = css`
  width: 175px;
  height: 33px;

  background: ${MAUVE3};
  border: none;
  border-radius: 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export default CreateMember;
