import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/loginModal";
import RegModalReducer from "./slices/registerModal";

export const store = configureStore({
  reducer: {
    login: counterReducer,
    register: RegModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
