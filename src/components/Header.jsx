import React from "react";
import styled, { css } from "styled-components";

const centerY = css`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 800px;
  min-height: 100%;
  margin: auto;

  ${centerY};
`;

const HeaderWrapper = styled.header`
  height: 7rem; //1rem * 10px = 70px
  background-color: rgba(0, 0, 0, 0.889);
  border-bottom: 1px solid rgba(204, 204, 204, 0.303);
  /* padding-left: 1.5rem; */
  position: sticky;
  top: 0;
  width: 100%;
`;

const StyledH1 = styled.h1`
  font-family: cursive;
  color: lightgreen;
`;

function Header(props) {
  return (
    <HeaderWrapper>
      <Container isCenter>
        <StyledH1>{props.title}</StyledH1>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
