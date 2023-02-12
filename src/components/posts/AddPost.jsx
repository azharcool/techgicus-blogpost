import React from "react";

function AddPost() {
  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          onChange={() => {}}
          value=""
          id="postTitle"
          name="postTitle"
        />

        <label htmlFor="postDescription">Description</label>
        <textarea
          type="text"
          onChange={() => {}}
          value=""
          id="postDescription"
          name="postDescription"
        />

        <button onSubmit={() => {}}>Add Post</button>
      </form>
    </main>
  );
}

export default AddPost;
