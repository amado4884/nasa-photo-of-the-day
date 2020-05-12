import React from "react";
import "./Mars.css";
import MarsCard from "./MarsCard";

const Mars = (props) => {
  return (
    <section className="mars">
      <h3>The beautiful Mars on the day: {props.date}</h3>
      <div className="mars-gallery">
        <MarsCard
          camera="Front Facing"
          image="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02664/opgs/edr/fcam/FLB_633992241EDR_F0790000FHAZ00302M_.JPG"
        />
      </div>
    </section>
  );
};

export default Mars;
