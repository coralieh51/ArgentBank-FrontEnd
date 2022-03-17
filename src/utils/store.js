import { userReducer } from "../features/user";
import { configureStore } from "@reduxjs/toolkit";
import {loginReducer} from "../features/login";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
});