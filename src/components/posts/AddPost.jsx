import React from "react";
import styled, { css } from "styled-components";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostWrapper = styled.main`
  h2 {
    font-size: 2.5rem;
  }
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  label {
    color: lightgreen;
    font-size: 1.2rem;
  }

  input[type="text"],
  textarea[type="text"] {
    outline: none;
    border: 1px solid #3e583e;
    border-radius: 2px;
    background-color: transparent;
    margin-top: 5px;
    font-size: 1.8rem;
    min-height: 48px;
    color: whitesmoke;
    padding: 5px 10px;

    resize: vertical;
  }

  textarea {
    min-height: 60px;
  }
`;

const ButtonWrapper = styled.div`
  margin: auto;
  margin-top: 30px;

  button {
    padding: 0.5em 1.5em;
    font-size: 1.8rem; //20px
    background-color: transparent;
    color: #529752;
    border: 0.2px solid #529752;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    ${(p) =>
      !p.disabled &&
      css`
        color: lightgreen;
        border: 0.2px solid lightgreen;
      `}
  }
`;

function AddPost(props) {
  const { postForm, dispatch } = props;
  const navigate = useNavigate();

  const addNewPost = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "mock",
          phone: "1-770-736-8031 x56442",
          username: "mocktest",
          website: "mock.org",
          email: "Sincere@april.biz",
          address: {
            street: "mock address Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        console.log("response", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "ADD_POST_FORM",
      payload: {
        name,
        value,
      },
    });
  };

  const handleAddPost = (e) => {
    e.preventDefault();

    const temp = {
      id: crypto.randomUUID(),
      ...postForm,
      date: format(new Date(), "MMMM dd, yyyy HH:MM:SS aa"),
    };

    dispatch({
      type: "ADD_POST",
      payload: temp,
    });
    addNewPost();
  };

  const isDisabled = Boolean(postForm.title && postForm.description);

  return (
    <PostWrapper>
      <h2>New Post</h2>
      <form onSubmit={handleAddPost}>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={handleOnChange}
            value={postForm.title}
            id="title"
            name="title"
          />
          {/* Error */}
          <p></p>
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            onChange={handleOnChange}
            value={postForm.description}
            id="description"
            name="description"
            cols={10}
          />
          {/* Error */}
          <p></p>
        </FormGroup>

        <ButtonWrapper>
          <button>Add Post</button>
        </ButtonWrapper>
      </form>
    </PostWrapper>
  );
}

export default AddPost;
