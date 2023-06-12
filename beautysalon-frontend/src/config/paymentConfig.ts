// 직원 등록
export const paymentModalConfig = [
  {
    title: '예약 시간',
    type: 'timeSelect',
    placeholderList: ['11시', '00분', '14시', '00분'],
  },
  {
    title: '예약자',
    type: 'select',
    placeholder: '예약자',
    optionList: ['홍길동', '홍길동2'],
  },
  {
    title: '담당자',
    type: 'select',
    placeholder: '담당자',
    optionList: ['김지수', '홍길동'],
  },
  { title: '요청사항', type: 'textarea', placeholder: '요청사항을 적어주세요.' },
  {
    title: '스타일/금액',
    type: 'style',
    placeholder1: '남자 / 펌 / 다운 펌',
    placeholder2: '100000',
    selectList: [
      {
        placeholder: '대분류',
        optionList: ['메뉴1', '메뉴2'],
      },
      {
        placeholder: '중분류',
        optionList: ['메뉴1', '메뉴2'],
      },
      {
        placeholder: '소분류',
        optionList: ['메뉴1', '메뉴2'],
      },
    ],
  },
  { type: 'plus' },
  { title: '총 금액', type: 'text', placeholder: '0원' },
  { title: '포인트', type: 'point', placeholder1: '5000', placeholder2: '0', placeholder3: '5000', placeholder4: '0' },
  { title: '결제 금액', type: 'text', placeholder: '200000' },
  {
    title: '결제 방식',
    type: 'method',
    placeholder: '0',
    selectPlaceholder: '결제방식 선택',
    optionList: ['카드', '현금', '계좌'],
  },
  { type: 'plus' },
];

export const reservationConfigData = {
  customer: '김정호',
  manager: '홍길동',
  timePlacehoder: ['12시', '00분', '16시', '00분'],
  request: '예쁘게 잘라주세요.',
  style: ['남자 / 펌 / 스왈로펌', '400000'],
  money: '100000',
};
