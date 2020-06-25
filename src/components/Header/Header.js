import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 2rem;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>Welcome to D-EARS (Date-Earth & Mars)</h1>
    </StyledHeader>
  );
};

export default Header;
