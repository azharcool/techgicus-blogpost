import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
`;

function Nav() {
  return (
    <nav>
      <form>
        <input type="text" placeholder="search post.." />
      </form>

      <StyledUl>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/add-post">Post</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
      </StyledUl>
    </nav>
  );
}

export default Nav;
