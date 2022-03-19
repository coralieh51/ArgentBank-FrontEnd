import { userReducer } from "../features/user";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/fetchLogin";
import { profileReducer } from "../features/fetchProfile";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    user: userReducer,
  },
});