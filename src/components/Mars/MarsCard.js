import React from "react";

const MarsCard = (props) => {
  return (
    <div className="mars-card">
      <span className="description">{props.camera}</span>
      <img src={props.image} alt={`Mars camera: ${props.camera}`} />
    </div>
  );
};

export default MarsCard;
