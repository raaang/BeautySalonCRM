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

export const reservationSelectConfig = [
  {
    type: 'select',
    placeholder: '상태',
    optionList: ['예약 중', '예약 취소', '결제 완료'],
  },
  {
    type: 'select',
    placeholder: '스타일',
    optionList: ['파마', '매직', '염색'],
  },
  {
    type: 'select',
    placeholder: '담당자',
    optionList: ['김지수', '이수진', '박명수'],
  },
  {
    type: 'select',
    placeholder: '결제 방식',
    optionList: ['카드', '현금', '계좌 이체'],
  },
];

// column 값
export const columnData = [
  { field: '결제', flex: 0.3 },
  { field: '예약 시간', flex: 0.4 },
  { field: '이름', flex: 0.3 },
  { field: '전화번호', flex: 0.6 },
  { field: '스타일', flex: 0.2 },
  { field: '담당자', flex: 0.3 },
  { field: '요청사항', flex: 1 },
];

// 회원 상세 정보 - 패밀리 정보 데이터
export const rowData = [
  {
    결제: '결제완료',
    '예약 시간': '11:00 - 14:00',
    이름: '홍길동',
    전화번호: '01012345678',
    스타일: '염색',
    담당자: '김지수',
    요청사항:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
  },
  {
    결제: '',
    '예약 시간': '15:00 - 17:00',
    이름: '박민준',
    전화번호: '01012341234',
    스타일: '파마',
    담당자: '김지수',
    요청사항: '',
  },
  {
    결제: '',
    '예약 시간': '17:30 - 18:30',
    이름: '이민지',
    전화번호: '01056785678',
    스타일: '커트',
    담당자: '김지수',
    요청사항: '단발로 자르고 싶어요.',
  },
  {
    결제: '결제완료',
    '예약 시간': '11:00 - 14:00',
    이름: '홍길동',
    전화번호: '01012345678',
    스타일: '염색',
    담당자: '김지수',
    요청사항:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
  },
  {
    결제: '',
    '예약 시간': '15:00 - 17:00',
    이름: '박민준',
    전화번호: '01012341234',
    스타일: '파마',
    담당자: '김지수',
    요청사항: '',
  },
  {
    결제: '',
    '예약 시간': '17:30 - 18:30',
    이름: '이민지',
    전화번호: '01056785678',
    스타일: '커트',
    담당자: '김지수',
    요청사항: '단발로 자르고 싶어요.',
  },
  {
    결제: '결제완료',
    '예약 시간': '11:00 - 14:00',
    이름: '홍길동',
    전화번호: '01012345678',
    스타일: '염색',
    담당자: '김지수',
    요청사항:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
  },
  {
    결제: '',
    '예약 시간': '15:00 - 17:00',
    이름: '박민준',
    전화번호: '01012341234',
    스타일: '파마',
    담당자: '김지수',
    요청사항: '',
  },
  {
    결제: '',
    '예약 시간': '17:30 - 18:30',
    이름: '이민지',
    전화번호: '01056785678',
    스타일: '커트',
    담당자: '김지수',
    요청사항: '단발로 자르고 싶어요.',
  },
  {
    결제: '결제완료',
    '예약 시간': '11:00 - 14:00',
    이름: '홍길동',
    전화번호: '01012345678',
    스타일: '염색',
    담당자: '김지수',
    요청사항:
      '염색할 색을 정하지 못해 추천해 주셨으면 합니다. 애쉬를 생각하고 있는데 현재 탈색 2번에 애쉬블루로 염색했었는데 색이 거의 빠진 상태입니다. 제 머리에 어떤 색이 가능한지 궁금합니다. 또 관리 방법도 알려주셨으면 좋겠습니다.',
  },
  {
    결제: '',
    '예약 시간': '15:00 - 17:00',
    이름: '박민준',
    전화번호: '01012341234',
    스타일: '파마',
    담당자: '김지수',
    요청사항: '',
  },
  {
    결제: '',
    '예약 시간': '17:30 - 18:30',
    이름: '이민지',
    전화번호: '01056785678',
    스타일: '커트',
    담당자: '김지수',
    요청사항: '단발로 자르고 싶어요.',
  },
];
