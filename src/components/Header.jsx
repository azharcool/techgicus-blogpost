import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 7rem; //1rem * 10px = 70px
  background-color: rgba(0, 0, 0, 0.889);
  border-bottom: 1px solid rgba(204, 204, 204, 0.303);
  display: flex;
  align-items: center;
  padding-left: 1.5rem;

  position: sticky;
  top: 0;
`;

const StyledH1 = styled.h1`
  font-family: cursive;
  color: lightgreen;
`;

function Header(props) {
  return (
    <HeaderWrapper bColor>
      <StyledH1>{props.title}</StyledH1>
    </HeaderWrapper>
  );
}

export default Header;
