export const reservationListConfig = [
  { startTime: '10:00', endTime: '11:00', operationName: '컷트', name: '홍길동' },
  { startTime: '13:00', endTime: '15:00', operationName: '파마', name: '김복동' },
];

export const reservationDetailsConfig = [
  {
    title: '예약 시간',
    type: 'timeselect',
    placeholderList: ['00시', '00분', '00시', '00분'],
  },
  {
    title: '스타일',
    type: 'select',
    placeholder: '대분류',
    optionList: ['메뉴1', '메뉴2'],
  },
  {
    title: '스타일',
    type: 'select',
    placeholder: '중분류',
    optionList: ['메뉴1', '메뉴2'],
  },
  {
    title: '스타일',
    type: 'select',
    placeholder: '소분류',
    optionList: ['메뉴1', '메뉴2'],
  },
  { title: '기본 금액', type: 'text', placeholder: '0원' },
  {
    title: '요청사항',
    type: 'textarea',
    placeholder: '요청사항을 작성해주세요.',
  },
];
