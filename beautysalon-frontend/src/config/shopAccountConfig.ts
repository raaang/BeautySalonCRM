// 샵 회원가입(등록)
export const shopSignupConfig = [
  { id: 'shop_id', title: '아이디', type: 'text', placeholder: '아이디를 입력해주세요.' },
  { id: 'shop_pw', title: '비밀번호', type: 'text', placeholder: '비밀번호를 입력해주세요.' },
  { id: 'shop_name', title: '샵 이름', type: 'text', placeholder: '샵 이름을 입력해주세요.' },
  {
    id: 'shop_time',
    title: '샵 영업시간',
    type: 'select',
    placeholderList: ['09시', '00분', '18시', '00분'],
  },
  { id: 'shop_phone', title: '대표 번호', type: 'number', placeholder: '샵 대표번호를 입력해주세요.' },
  { id: 'shop_ceo', title: '대표자', type: 'text', placeholder: '대표자 이름을 입력해주세요.' },
  { id: 'shop_ceo_phone', title: '대표자 번호', type: 'number', placeholder: '샵 대표자 번호를 입력해주세요.' },
];

// 샵 로그인
export const shopLoginConfig = [
  { id: 'shop_id', title: '아이디', type: 'text', placeholder: '아이디를 입력해주세요.' },
  { id: 'shop_pw', title: '비밀번호', type: 'text', placeholder: '비밀번호를 입력해주세요.' },
];

// 직원 등록
export const registerShopEmpConfig = [
  { id: 'shop_name', title: '샵 이름', type: 'text', placeholder: '샵 이름을 입력해주세요.' },
  {
    id: 'shop_emp_status',
    title: '근무현황',
    type: 'select',
    placeholder: '근무현황',
    optionList: ['재직', '휴직', '퇴직'],
  },
  { id: 'shop_emp_sex', title: '성별', type: 'radio', placeholderList: ['남성', '여성'] },
  { id: 'shop_emp_name', title: '직원 이름', type: 'text', placeholder: '직원 이름을 입력해주세요.' },
  { id: 'shop_emp_phone', title: '휴대폰 번호', type: 'number', placeholder: '직원 휴대폰 번호를 입력해주세요.' },
  { id: 'shop_emp_address', title: '주소', type: 'text', placeholder: '직원 주소를 입력해주세요.' },
  { id: 'shop_emp_memo', title: '메모', type: 'textarea', placeholder: '직원 메모를 입력해주세요.' },
];
