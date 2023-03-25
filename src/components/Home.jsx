import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
  padding: 2rem;
  border: 1px solid #cccccc2b;
  margin-top: 1rem;

  h2 {
    font-size: 1.6rem;
    color: #90ee90b5;
  }

  p {
    font-size: 1.4rem;
    color: #ccc;
  }

  .date {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #cccccc2b;
  }
`;
function Home(props) {
  // const { posts } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("response ", response.data);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log("error ", err);
      })
      .finally(() => {
        console.log("user api called");
      });
  };

  return (
    <main>
      {posts.length ? (
        posts.map((post) => {
          return (
            <Card key={post.id}>
              <h2>
                <a href={`post/${post.id}`}> {post.name}</a>
              </h2>
              <p className="date">{post.username}</p>
              <address>
                {post.address.city}, <br />
                {post.address.street}, {post.address.suite}{" "}
                {post.address.zipcode}
              </address>
            </Card>
          );
        })
      ) : (
        <p>No data Found!</p>
      )}
    </main>
  );
}

export default Home;
