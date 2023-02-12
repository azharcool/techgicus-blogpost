import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Layout from "./layouts/Layout";
import Post from './components/posts/Post';
import AddPost from './components/posts/AddPost';

// /route-name
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route index={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/add-post" element={<AddPost />} />

        {/* Catch all Routes - Not found Routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
