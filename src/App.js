import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import DatePicker from "./components/DatePicker/DatePicker";
import Earth from "./components/Earth/Earth";
import Mars from "./components/Mars/Mars";
import config from "./config";

function App() {
  const [date, setDate] = useState("05/30/2019");
  const [earth, setEarth] = useState("");
  function dateChange(newDate) {
    setDate(newDate);
  }

  function parseDate(date) {
    const month = date.split("/")[0];
    const day = date.split("/")[1];
    const year = date.split("/")[2];
    return { month, day, year };
  }

  function loadImages() {
    loadEarth();
  }

  function loadEarth() {
    const { image } = config.exampleEarthData[0];
    console.log(image);
    const newDate = parseDate(date);
    setEarth(
      `https://api.nasa.gov/EPIC/archive/natural/${newDate.year}/${newDate.month}/${newDate.day}/png/${image}.png?api_key=${config.apiKey}`
    );
  }

  function loadMarsData() {}
  return (
    <div className="App">
      <Header />
      <DatePicker onDateChange={dateChange} onSubmit={loadImages} date={date} />
      <Earth date={date} url={earth} />
      <Mars mars={config.exampleMarsData} />
    </div>
  );
}

export default App;
