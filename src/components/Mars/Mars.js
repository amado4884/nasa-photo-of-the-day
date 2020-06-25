import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MarsCard from "./MarsCard";
import config from "../../config";
import Axios from "axios";

const MarsStyled = styled.section`
  padding: 10rem;
  width: 100%;
  div.image {
    margin: auto;
  }
  img {
    width: 50rem;
    height: 50rem;
  }
`;

const MarsGalleryStyled = styled.div`
  margin: auto;
  width: 60rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  img {
    width: 20rem;
    height: 20rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
  div.image {
    margin: auto;
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
    <MarsStyled>
      <h3>The beautiful Mars on the day: {props.date}</h3>
      <MarsGalleryStyled>
        {images.map((image, i) => (
          <MarsCard image={image} key={i} />
        ))}
        {images.length === 0 && "There were no images from the Mars Rover for the day selected."}
      </MarsGalleryStyled>
    </MarsStyled>
  );
};

export default Mars;
