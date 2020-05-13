import React, { useState } from "react";
import "./DatePicker.js";

const DatePicker = (props) => {
  const [date, setDate] = useState(props.date);
  return (
    <section className="datePicker">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(date);
        }}
      >
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          className="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
          id="date"
        />
        <button type="submit">></button>
      </form>
    </section>
  );
};
export default DatePicker;
