import { userReducer } from "../features/user";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/fetchLogin";
import { profileReducer } from "../features/fetchProfile";
import { updateReducer } from "../features/fetchUpdate";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    update: updateReducer,
    user: userReducer,
  },
});