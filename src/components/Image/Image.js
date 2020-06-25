import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Spinner } from "reactstrap";

const ImageStyled = styled.img`
  width: 50rem;
  height: 50rem;
  ${(props) => (!props.visible ? `display:none` : null)}
`;

const SpinnerStyled = styled.div`
  ${(props) => (!props.visible ? `display:none` : null)}
`;

const DivStyled = styled.div`
  margin: auto;
  width: 50rem;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [props.src]);

  const doneLoading = () => {
    setIsLoading(false);
  };

  return (
    <DivStyled>
      <SpinnerStyled visible={isLoading}>
        <Spinner alt="..." />
      </SpinnerStyled>
      <ImageStyled src={props.src} alt={props.alt} onLoad={doneLoading} visible={!isLoading} />
    </DivStyled>
  );
};

export default Image;
