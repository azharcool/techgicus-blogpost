import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Layout from "./layouts/Layout";
import Post from "./components/posts/Post";
import AddPost from "./components/posts/AddPost";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
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

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(data);
  const [search, setSearch] = useState("");
  const [postForm, setPostForm] = useState({
    title: "",
    description: "",
  });

  const handleAddPost = (e) => {
    e.preventDefault();

    const currentDate = new Date();

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(currentDate);

    const temp = {
      id: posts.length + 1,
      ...postForm,
      date: formattedDate,
    };

    setPosts([...posts, temp]);
    navigate("/");
  };

  const handleDelete = (id) => {
    const newPost = posts.filter((i) => i.id !== Number(id));
    setPosts(newPost);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
        {/* post data */}
        <Route
          index={true}
          element={
            <Home
              posts={posts
                .filter((i) =>
                  i.title.toLowerCase().includes(search.toLowerCase())
                )
                .reverse()}
            />
          }
        />

        <Route path="/about" element={<About />} />

        {/* post item detail */}
        <Route
          path="/post/:id"
          element={<Post posts={posts} handleDelete={handleDelete} />}
        />

        {/* add post handler */}
        <Route
          path="/add-post"
          element={
            <AddPost
              postForm={postForm}
              setPostForm={setPostForm}
              handleAddPost={handleAddPost}
            />
          }
        />

        {/* Catch all Routes - Not found Routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
