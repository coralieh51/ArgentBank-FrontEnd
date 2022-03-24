import { configureStore } from "@reduxjs/toolkit";
import login from "../features/fetchLogin";
import profile from "../features/fetchProfile";
import update from "../features/fetchUpdate";
import user from "../features/user";

/**
 * the store combines all slice reducers
 */
export const store = configureStore({
  reducer: {
    login: login,
    profile: profile,
    update: update,
    user: user
  },
});