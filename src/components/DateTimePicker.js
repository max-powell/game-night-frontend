import React from 'react'

import DatePicker from 'react-datepicker'

const DateTimePicker = ({dateTime, changeDateTime}) => (
  <div>
  <label>When: </label>
    <DatePicker
    selected={dateTime}
    showTimeInput
    dateFormat='dd/MM/yy h:mm aa'
    minDate={new Date()}
    shouldCloseOnSelect={false}
    onChange={changeDateTime}
    />
  </div>
);

export default DateTimePicker;
