import React from "react";
import styled from "styled-components";
import { addSearch } from "../redux/postSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const StyledUl = styled.ul`
  display: flex;

  li {
    padding: 1rem;
  }

  li a {
    color: lightgreen;
    font-size: 1.5rem;
    opacity: 0.6;
  }

  li a:hover {
    opacity: 1;
  }

  li a:active {
    opacity: 1;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  form {
    width: 100%;
    max-width: 80%;
    padding: 1rem 0 0 0.75rem;
  }

  form input[type="text"] {
    width: 100%;
    min-height: 48px;
    outline: none;
    border: none;
    background-color: #ccc;
    padding: 5px;
    border-radius: 5px;
    color: black;
  }
`;

function Nav(props) {
  const search = useSelector((state) => state.postsReducer.search);
  console.log(search);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(addSearch(value));
  };

  return (
    <StyledNav>
      <form>
        <input
          type="text"
          placeholder="search post.."
          value={search}
          onChange={handleOnChange}
        />
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
    </StyledNav>
  );
}

export default Nav;
