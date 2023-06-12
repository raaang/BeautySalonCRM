// 회원 상세 정보 - 회원 정보
export const MemberInfoConfig = [
  { id: 'member_name', title: '이름', type: 'text', placeholder: '김정호' },
  { id: 'member_gender', title: '성별', type: 'text', placeholder: '남자' },
  { id: 'member_phone_number', title: '휴대폰 번호', type: 'text', placeholder: '01012345678' },
  { id: 'member_manager', title: '담당자', type: 'text', placeholder: '홍길동' },
  { id: 'member_point', title: '잔여 포인트', type: 'text', placeholder: '1800P' },
  { id: 'member_cumulative_sales', title: '누적 매출액', type: 'text', placeholder: '200000원' },
  { id: 'member_recent_date_operation', title: '최근 시술일 (시술 횟수)', type: 'text', placeholder: '2023-03-01' },
  { id: 'member_date_join', title: '가입 일', type: 'text', placeholder: '2022-12-22' },
];

// 회원 상세 정보 - 예약 및 결제
export const reservationAndPaymentConfig = [
  { date: '2018.02.03', startTime: '10:00', endTime: '11:00', operationName: '컷트', name: '홍길동' },
];

// 회원 상세 정보 - 패밀리 정보 (패밀리 명, 번호)
export const familyInfo = { name: '홍길동', number: '34' };

// 회원 상세 정보 - 패밀리 정보 데이터
export const familyRowData = [
  {
    이름: '홍길동',
    나이: '23',
    '휴대폰 번호': '01012345678',
    삭제: '삭제',
  },
  {
    이름: '이필자',
    나이: '26',
    '휴대폰 번호': '01056781234',
    삭제: '삭제',
  },
  {
    이름: '홍길동',
    나이: '23',
    '휴대폰 번호': '01012345678',
    삭제: '삭제',
  },
  {
    이름: '이필자',
    나이: '26',
    '휴대폰 번호': '01056781234',
    삭제: '삭제',
  },
  {
    이름: '홍길동',
    나이: '23',
    '휴대폰 번호': '01012345678',
    삭제: '삭제',
  },
  {
    이름: '이필자',
    나이: '26',
    '휴대폰 번호': '01056781234',
    삭제: '삭제',
  },
  {
    이름: '홍길동',
    나이: '23',
    '휴대폰 번호': '01012345678',
    삭제: '삭제',
  },
  {
    이름: '이필자',
    나이: '26',
    '휴대폰 번호': '01056781234',
    삭제: '삭제',
  },
  {
    이름: '홍길동',
    나이: '23',
    '휴대폰 번호': '01012345678',
    삭제: '삭제',
  },
  {
    이름: '이필자',
    나이: '26',
    '휴대폰 번호': '01056781234',
    삭제: '삭제',
  },
  {
    이름: '홍길동',
    나이: '23',
    '휴대폰 번호': '01012345678',
    삭제: '삭제',
  },
  {
    이름: '이필자',
    나이: '26',
    '휴대폰 번호': '01056781234',
    삭제: '삭제',
  },
];

// 회원 상세 정보 - column 값
export const familyColumnData = [
  { field: '이름', flex: 1 },
  { field: '나이', flex: 1 },
  { field: '휴대폰 번호', flex: 1.5 },
  { field: '삭제', flex: 0.5 },
];

// 회원 상세 정보 - 시술 내역
export const operationHistoryConfig = [
  {
    date: '8월 20일',
    info: [
      {
        operationName: '아이롱 펌',
        name: '홍길동',
        point: '1000',
        pointIncrease: true,
        payment: '100000',
        method: '카드',
      },
    ],
  },
  {
    date: '7월 20일',
    info: [
      { operationName: '다운 펌', name: '김일원', point: '200', pointIncrease: true, payment: '20000', method: '카드' },
      {
        operationName: '아이롱 펌',
        name: '홍길동',
        point: '150',
        pointIncrease: true,
        payment: '15000',
        method: '카드',
      },
    ],
  },
  {
    date: '6월 20일',
    info: [
      {
        operationName: '아이롱 펌',
        name: '이무개',
        point: '200',
        pointIncrease: true,
        payment: '20000',
        method: '카드',
      },
      {
        operationName: '아이롱 펌',
        name: '이무개',
        point: '150',
        pointIncrease: false,
        payment: '15000',
        method: '카드',
      },
    ],
  },
  {
    date: '5월 20일',
    info: [
      {
        operationName: '아이롱 펌',
        name: '홍길동',
        point: '200',
        pointIncrease: true,
        payment: '20000',
        method: '카드',
      },
      {
        operationName: '아이롱 펌',
        name: '홍길동',
        point: '150',
        pointIncrease: true,
        payment: '15000',
        method: '카드',
      },
    ],
  },
];

// 회원 등록
export const registerMember = [
  { id: 'member_name', title: '이름', type: 'text', placeholder: '이름을 입력해주세요.' },
  { id: 'member_sex', title: '성별', type: 'radio', placeholderList: ['남성', '여성'] },
  { id: 'member_address', title: '주소', type: 'text', placeholder: '주소를 입력해주세요.' },
  { id: 'member_phone', title: '휴대폰 번호', type: 'number', placeholder: '휴대폰 번호를 입력해주세요.' },
  { id: 'member_sms_check', title: 'SMS 수신 여부', type: 'radio', placeholderList: ['수신 동의', '수신 거절'] },
  { id: 'member_family_num', title: '패밀리 번호', type: 'number', placeholder: '패밀리 번호를 조회해주세요.' },
  { id: 'member_memo', title: '메모', type: 'textarea', placeholder: '직원 메모를 입력해주세요.' },
];
