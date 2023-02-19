import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

export const store = configureStore({
  reducer: {
    postsReducer: postReducer,
    userSlice: {},
    counterSlice: {},
  },
});
