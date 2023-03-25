import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Post(props) {
  const params = useParams();
  const navigate = useNavigate();
  const { posts, handleDelete } = props;
  const postId = params.id;
  const findPost = posts.find((i) => i.id === Number(postId));

  const [post, setPost] = useState();

  useEffect(() => {
    if (postId) {
      getUserById();
    }
  }, []);

  const getUserById = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${postId}`
      );
      if (response) {
        setPost(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteUserById = async () => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${postId}`
      );

      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <main>
      {post ? (
        <div>
          <h2>{post.name}</h2>

          <p className="date">{post.username}</p>
          <address>
            {post.address.city}, <br />
            {post.address.street}, {post.address.suite} {post.address.zipcode}
          </address>
          <p>{post.email}</p>

          <button>Edit</button>
          <button onClick={() => deleteUserById()}>Delete</button>
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
