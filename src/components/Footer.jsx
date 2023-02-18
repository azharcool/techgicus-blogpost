import React from "react";
import styled from "styled-components";
import { Container } from "./styled/global.styled";

const Wrapper = styled.footer`
  height: 6rem;
  background-color: rgba(0, 0, 0, 0.889);

  display: flex;
  align-items: center;
  /* padding-left: 1.5rem; */

  position: fixed;
  border-top: 1px solid rgba(204, 204, 204, 0.303);
  width: 100%;
  bottom: 0;
`;

const StyledP = styled.p`
  color: lightgreen;
  font-size: 2rem;
`;

function Footer() {
  return (
    <Wrapper>
      <Container isCenter>
        <StyledP>Copyright &copy; {new Date().getFullYear()}</StyledP>
      </Container>
    </Wrapper>
  );
}

export default Footer;
