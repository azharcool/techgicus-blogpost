import { createSlice } from "@reduxjs/toolkit";

const postInitState = {
  posts: [],
  search: "",
  postForm: {
    title: "",
    description: "",
  },
};

const postSlice = createSlice({
  name: "post",
  initialState: postInitState,
  reducers: {
    addSearch: (state, action) => {
      console.log(action);
      state.search = action.payload;
    },
    removeSearch: () => {
      //
    },
  },
});

export const { addSearch } = postSlice.actions;

export default postSlice.reducer;
