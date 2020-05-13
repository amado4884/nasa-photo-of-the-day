import React, { useEffect, useState } from "react";
import "./Mars.css";
import MarsCard from "./MarsCard";
import config from "../../config";
import Axios from "axios";

const Mars = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${props.date}&page=1&api_key=${config.apiKey}`
    )
      .then((response) => {
        setImages(response.data.photos);
      })
      .catch((error, response) => console.log(error, response));
  }, [props.date]);
  return (
    <section className="mars">
      <h3>The beautiful Mars on the day: {props.date}</h3>
      <div className="mars-gallery">
        {images.map((image, i) => (
          <MarsCard image={image} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Mars;
