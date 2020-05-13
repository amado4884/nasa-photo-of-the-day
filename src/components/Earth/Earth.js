import React, { useEffect, useState } from "react";
import config from "../../config";
import Image from "../Image/Image";
import "./Earth.css";
import Axios from "axios";

const Earth = (props) => {
  const [url, setUrl] = useState("");
  const parseDate = (date) => {
    const datee = date.split("-");
    return { month: datee[1], day: datee[2], year: datee[0] };
  };

  useEffect(() => {
    const newDate = parseDate(props.date);
    Axios.get(
      `https://api.nasa.gov/EPIC/api/natural/date/${newDate.year}-${newDate.month}-${newDate.day}?api_key=${config.apiKey}`
    )
      .then((response) => {
        const image = response.data[0].image;
        const url = `https://api.nasa.gov/EPIC/archive/natural/${newDate.year}/${newDate.month}/${newDate.day}/png/${image}.png?api_key=${config.apiKey}`;
        setUrl(url);
      })
      .catch((error, response) => console.log(error, response));
  }, [props.date]);

  return (
    <section className="earth">
      <h3>The beautiful earth on the day: {props.date}</h3>
      <Image src={url} />
    </section>
  );
};

export default Earth;
