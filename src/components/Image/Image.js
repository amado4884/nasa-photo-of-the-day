import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
const Image = (props) => {
  const [loaderClass] = useState("loading-gif");
  const [imageClass] = useState("loading");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [props.src]);

  const doneLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="image">
      <Spinner className={isLoading ? loaderClass : imageClass} alt="..." />
      <img
        src={props.src}
        className={isLoading ? imageClass : ""}
        alt={props.alt}
        onLoad={doneLoading}
      />
    </div>
  );
};

export default Image;
