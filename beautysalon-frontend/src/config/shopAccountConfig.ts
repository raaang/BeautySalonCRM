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

// 샵 정보
export const shopInfoConfig = [
  { id: 'shop_name', title: '샵 이름', type: 'text', placeholder: '스타일 샵' },
  { id: 'shop_id', title: '아이디', type: 'text', placeholder: 'style111' },
  { id: 'shop_pw', title: '비밀번호', type: 'text', placeholder: '*****' },
  {
    id: 'shop_time',
    title: '샵 영업시간',
    type: 'select',
    placeholderList: ['11시', '00분', '20시', '00분'],
  },
  { id: 'shop_phone', title: '대표 번호', type: 'number', placeholder: '021231234' },
  { id: 'shop_ceo', title: '대표자', type: 'text', placeholder: '오인주' },
  { id: 'shop_ceo_phone', title: '대표자 번호', type: 'number', placeholder: '01012341234' },
  { id: 'shop_pointPer', title: '포인트 적립율', type: 'number', placeholder: '5' },
  {
    id: 'shop_pointPer',
    title: '포인트 적립조건',
    type: 'textarea',
    placeholder: '포인트 사용금액을 제외한 결제금액의 5% 적립',
  },
];

// 스타일 등록
export const registerShopStyleConfig = [
  {
    id: 'shop_style_big',
    title: '스타일 대분류',
    type: 'select',
    placeholder: '스타일 대분류',
    optionList: ['파마', '매직'],
  },
  {
    id: 'shop_style_middle',
    title: '스타일 중분류',
    type: 'select',
    placeholder: '스타일 중분류',
    optionList: ['남자', '여자'],
  },
  { id: 'shop_style_small', title: '스타일 소분류', type: 'text', placeholder: '스타일 소분류' },
];

export const shopStyleTypeConfig = [
  {
    title: '커트',
    list: [
      {
        title: '남자',
        list: [
          '댄디 컷',
          '시스루 컷',
          '댄디 컷',
          '시스루 컷',
          '댄디 컷',
          '시스루 컷',
          '댄디 컷',
          '시스루 컷',
          '댄디 컷',
          '시스루 컷',

          '댄디 컷',
          '시스루 컷',
        ],
      },
      {
        title: '여자',
        list: ['시스루 컷'],
      },
    ],
  },
  {
    title: '파마',
    list: [
      {
        title: '남자',
        list: ['다운 펌', '스왈로 펌'],
      },
      {
        title: '여자',

        list: ['시스루 뱅', '히피 펌'],
      },
    ],
  },
];
