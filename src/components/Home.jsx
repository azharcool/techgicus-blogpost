import React from "react";
import styled from "styled-components";

const posts = [
  {
    id: 1,
    title: "Post 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione temporibus perspiciatis iure sit animi sapiente asperiores. Ex sint illo quas. Quasi labore beatae cum quia obcaecati a sunt! Quam atque at veritatis, officiis illo, eligendi, nihil non quae reprehenderit in molestias sint recusandae. At, pariatur?`,
    date: "July 01, 2021 11:17:36 AM",
  },
  {
    id: 2,
    title: "Post 2",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione temporibus perspiciatis iure sit animi sapiente asperiores. Ex sint illo quas. Quasi labore beatae cum quia obcaecati a sunt! Quam atque at veritatis, officiis illo, eligendi, nihil non quae reprehenderit in molestias sint recusandae. At, pariatur?`,
    date: "July 01, 2021 11:17:36 AM",
  },
  {
    id: 3,
    title: "Post 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione temporibus perspiciatis iure sit animi sapiente asperiores. Ex sint illo quas. Quasi labore beatae cum quia obcaecati a sunt! Quam atque at veritatis, officiis illo, eligendi, nihil non quae reprehenderit in molestias sint recusandae. At, pariatur?`,
    date: "July 01, 2021 11:17:36 AM",
  },
  {
    id: 4,
    title: "Post 4",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione temporibus perspiciatis iure sit animi sapiente asperiores. Ex sint illo quas. Quasi labore beatae cum quia obcaecati a sunt! Quam atque at veritatis, officiis illo, eligendi, nihil non quae reprehenderit in molestias sint recusandae. At, pariatur?`,
    date: "July 01, 2021 11:17:36 AM",
  },
  {
    id: 5,
    title: "Post 5",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione temporibus perspiciatis iure sit animi sapiente asperiores. Ex sint illo quas. Quasi labore beatae cum quia obcaecati a sunt! Quam atque at veritatis, officiis illo, eligendi, nihil non quae reprehenderit in molestias sint recusandae. At, pariatur?`,
    date: "July 01, 2021 11:17:36 AM",
  },
];

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
function Home() {
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
