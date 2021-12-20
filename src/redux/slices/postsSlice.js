import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: ""
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    bringPosts: (state) => {
      return state
    },
    isLoadingPosts: (state, action) => {
      state.isLoading = action.payload;
    },
    loadPostsSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.posts = action.payload;
    },
    loadPostsFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
  isLoadingPosts, 
  loadPostsSuccess, 
  loadPostsFailure, 
  bringPosts 
} = postsSlice.actions;

export default postsSlice.reducer;
