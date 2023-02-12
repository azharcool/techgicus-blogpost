import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: 6rem;
  background-color: rgba(0, 0, 0, 0.889);

  display: flex;
  align-items: center;
  padding-left: 1.5rem;

  position: absolute;
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
      <StyledP>Copyright &copy; {new Date().getFullYear()}</StyledP>
    </Wrapper>
  );
}

export default Footer;
