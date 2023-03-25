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
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

// array of object store, array of number| string| boolean -> []
// string  => ""
// boolean -> true | false
// number -> 0 | -1 undefined | null

const initialState = {
  posts: [],
  search: "",
  postForm: {
    title: "",
    description: "",
  },
};

export const actionTypes = {
  search: "ADD_SEARCH",
  postForm: "ADD_POST_FORM",
  addPost: "ADD_POST",
  removePost: "REMOVE_POST",
};

// action -> type, payload
// type -> action type (update, edit, remove, add )
// payload -> data

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.addPost: {
      return {
        ...state,
        search: action.payload || "",
      };
    }

    case "ADD_POST_FORM": {
      return {
        ...state,
        postForm: {
          ...state.postForm,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case "ADD_POST": {
      const newPost = [...state.posts, action.payload];

      return {
        ...state,
        posts: newPost,
      };
    }

    default:
      return state;
  }
};

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    const newPost = posts.filter((i) => i.id !== Number(id));
    setPosts(newPost);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* post data */}
        <Route index={true} element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* post item detail */}
        <Route
          path="/post/:id"
          element={<Post posts={state.posts} handleDelete={handleDelete} />}
        />

        {/* add post handler */}
        <Route
          path="/add-post"
          element={
            <AddPost
              postForm={state.postForm}
              dispatch={dispatch}
              // setPostForm={setPostForm}
              // handleAddPost={handleAddPost}
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
