import React from "react";
import styled, { css } from "styled-components";

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
  const { postForm, setPostForm, handleAddPost } = props;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPostForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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

        <ButtonWrapper disabled={!isDisabled}>
          <button disabled={!isDisabled}>Add Post</button>
        </ButtonWrapper>
      </form>
    </PostWrapper>
  );
}

export default AddPost;
