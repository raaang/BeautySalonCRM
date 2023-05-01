/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';

import { shopSignupConfig } from '../../../config/shopAccountConfig';
import Input from '../../../components/common/input/input';
import InputContainer, { inputContainerStyle } from '../../../components/inputContainer/inputContainer';
import Modal from '../../../components/common/modal/modal';
import TimeSelect from '../../../components/common/select/TimeSelect';
import Text from '../../../components/common/text/text';

function Signup() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <InputContainer title="회원가입(샵 등록)">
        <div css={inputContainerStyle}>
          {shopSignupConfig.map((item, idx) => {
            if (item.type === 'select') {
              return <TimeSelect key={idx} title={item.title} placeholder={item.placeholderList!} />;
            } else {
              return <Input key={idx} inputType={'big'} title={item.title} placeholder={item.placeholder!} />;
            }
          })}

          <button css={btnStyle} onClick={() => setModalOpen(!modalOpen)}>
            <Text type="btn" value={'샵 등록하기'} />
          </button>
        </div>
      </InputContainer>

      {modalOpen ? (
        <Modal title={'샵 회원가입이 완료되었습니다.'} body={''} chngShowing={() => setModalOpen(!modalOpen)} />
      ) : null}
    </div>
  );
}

const btnStyle = css`
  width: 175px;
  height: 33px;

  background: #f2f7dd;
  border: none;
  border-radius: 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export default Signup;
