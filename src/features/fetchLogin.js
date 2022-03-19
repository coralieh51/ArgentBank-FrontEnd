import { postLoginRequest } from "../services/getData";
import { selectStatus } from "../utils/selectors";
import { login } from "./user";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const loginFetching = createAction("login/fetching");

const loginResolved = createAction("login/resolved", (data) => {
  return {
    payload: { data },
  };
});

const loginRejected = createAction("login/rejected", (error) => {
  return {
    payload: { error },
  };
});

export function fetchLogin() {
  return async (dispatch, getState)=>{

    const status = selectStatus(getState(), "login");
    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(loginFetching());
    try {
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const body = { email: email, password: password };
      const data = await postLoginRequest(body);
      if (data.status !== 200) {
        throw new Error(data.message);
      } else {
        dispatch(loginResolved(data));
        dispatch(login(data.body.token));
      }
    } catch (error) {
      dispatch(loginRejected(error.message));
    }
  }
}

export const loginReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(loginFetching, (draft, action) => {
      if (draft.status === "void") {
        draft.status = "pending";
        return;
      }
      if (draft.status === "rejected") {
        draft.error = null;
        draft.status = "pending";
        return;
      }
      if (draft.status === "resolved") {
        draft.status = "updating";
        return;
      }
      return;
    })
    .addCase(loginResolved, (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.data = action.payload;
        draft.status = "resolved";
        return;
      }
      return;
    })
    .addCase(loginRejected, (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.error = action.payload;
        draft.data = null;
        draft.status = "rejected";
        return;
      }
      return;
    });
});
