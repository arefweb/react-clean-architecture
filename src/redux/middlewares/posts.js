import {
  isLoadingPosts,
  loadPostsSuccess,
  loadPostsFailure,
} from "../slices/postsSlice";

const loadPosts = ( api ) => ({ dispatch }) => next => async (action) => {
    next(action);
    if (action.type === "posts/bringPosts") {
      try {
        dispatch(isLoadingPosts(true));
        const posts = await api.getAllPosts();
        dispatch(loadPostsSuccess(posts.data));
        dispatch(isLoadingPosts(false));
      } catch (error) {
        dispatch(loadPostsFailure(error));
        dispatch(isLoadingPosts(false));
      }
    }
}

export default [
    loadPosts,
]