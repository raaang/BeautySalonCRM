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

export const shopLoginConfig = [
  { id: 'shop_id', title: '아이디', type: 'text', placeholder: '아이디를 입력해주세요.' },
  { id: 'shop_pw', title: '비밀번호', type: 'text', placeholder: '비밀번호를 입력해주세요.' },
];
