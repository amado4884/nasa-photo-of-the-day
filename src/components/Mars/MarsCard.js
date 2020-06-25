import React from "react";
import styled from "styled-components";
import Image from "../Image/Image";

const MarsCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  margin: 1rem;
  width: 25rem;
  h4 {
    background-color: lightgray;
    color: black;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const MarsImage = styled.div`
  margin: auto;
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20rem;
    height: 20rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
  div {
    margin: 0 !important;
  }
`;

const MarsCard = (props) => {
  return (
    <MarsCardStyled>
      <h4 className="description">{props.image.camera.full_name}</h4>
      <MarsImage>
        <Image src={props.image.img_src} alt={`Mars camera: ${props.image.camera.full_name}`} />
      </MarsImage>
    </MarsCardStyled>
  );
};

export default MarsCard;
