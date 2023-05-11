import React, { useState } from "react";

import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DateTimePicker
        onChange={handleDateChange}
        value={selectedDate}
        calendarIcon={null}
      />
    </div>
  );
};

export default Calendar;
