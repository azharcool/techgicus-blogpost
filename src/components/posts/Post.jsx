import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Post(props) {
  const params = useParams();
  const navigate = useNavigate();
  const { posts,handleDelete } = props;
  const postId = params.id;
  const findPost = posts.find((i) => i.id === Number(postId));

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <main>
      {findPost ? (
        <div>
          <h2>Post Title</h2>
          <p>July, 12 Feb, 2023, 12:20:00 PM</p>
          <p>dfdkf dkf</p>

          <button onClick={handleGoBackClick}>Go Back</button>
          <button>Edit</button>
          <button onClick={() => handleDelete(postId)}>Delete</button>
        </div>
      ) : (
        <div>
          <p>No data found</p>
          <button onClick={handleGoBackClick}>Go Back</button>
        </div>
      )}
    </main>
  );
}

export default Post;
