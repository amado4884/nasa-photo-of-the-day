import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import DatePicker from "./components/DatePicker/DatePicker";
import Earth from "./components/Earth/Earth";
import Mars from "./components/Mars/Mars";

function App() {
  const today = new Date();
  const threeDaysAgo = new Date(today);
  threeDaysAgo.setDate(today.getDate() - 3);
  const d = {
    year: threeDaysAgo.getFullYear(),
    month: threeDaysAgo.getMonth(),
    day: threeDaysAgo.getDate(),
  };
  const day = `${d.year}-${
    d.month + 1 < 10 ? "0" + (d.month + 1) : d.month + 1
  }-${d.day < 10 ? "0" + d.day : d.day}`;
  const [date, setDate] = useState(day);
  function dateChange(newDate) {
    setDate(newDate);
  }

  return (
    <div className="App">
      <Header />
      <DatePicker onSubmit={dateChange} date={date} />
      <Earth date={date} />
      <Mars date={date} />
    </div>
  );
}

export default App;
