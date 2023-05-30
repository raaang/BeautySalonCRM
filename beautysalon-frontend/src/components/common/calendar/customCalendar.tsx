import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // 기본 css
import './customCalendarStyle.css';

function CustomCalendar() {
  const [date, setDate] = useState<any>(new Date());
  const onClickDay = (value: any) => {
    console.log(moment(value).format('YYYY.MM.DD'));
  };

  return (
    <Calendar
      value={date}
      onChange={setDate}
      onClickDay={onClickDay}
      formatDay={(locale, date) => moment(date).format('DD')}
      showNeighboringMonth={false}
    />
  );
}

export default CustomCalendar;
