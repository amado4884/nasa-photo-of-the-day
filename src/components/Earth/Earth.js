import React from "react";
import "./Earth.css";

const Earth = (props) => {
  return (
    <section className="earth">
      <h3>The beautiful earth on the day: {props.date}</h3>
      <div className="image">
        <img src={props.url} alt={`Earth on Date ${props.date}`} />
      </div>
    </section>
  );
};

export default Earth;
