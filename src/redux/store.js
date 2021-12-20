import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import middlewares from "./middlewares";

function storeHandler(callAPI) {
  return configureStore({
    reducer: {
      postsReducer,
    },
    middleware: [...middlewares].map((mid) => mid(callAPI)),
  });
}

export default storeHandler;
