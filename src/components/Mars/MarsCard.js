import React from "react";
import Image from "../Image/Image";

const MarsCard = (props) => {
  return (
    <div className="mars-card">
      <h4 className="description">{props.image.camera.full_name}</h4>
      <Image
        src={props.image.img_src}
        alt={`Mars camera: ${props.image.camera.full_name}`}
      />
    </div>
  );
};

export default MarsCard;
