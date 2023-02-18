import React from "react";
import styled from "styled-components";



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
  const {posts} = props;
  return (
    <main>
      {posts.map((post) => {
        return (
          <Card key={post.id}>
            <h2>
              <a href={`post/${post.id}`}> {post.title}</a>
            </h2>
            <p className="date">{post.date}</p>
            <p>{post.description}</p>
          </Card>
        );
      })}
    </main>
  );
}

export default Home;
