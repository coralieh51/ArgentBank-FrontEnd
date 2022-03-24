import { createSlice } from "@reduxjs/toolkit";
import { postLoginRequest } from "../services/getData";
import { selectStatus } from "../utils/selectors";
import {login} from "../features/user";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

/**
 * Login reducer, allows to connect user or not after fetching his credentials
 */
const { actions, reducer } = createSlice({
  name: "login",
  initialState,
  reducers: {
    fetch: {
      reducer : (draft, action) => {
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
    }
  },
    resolved: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      }
    },
    rejected: {
    reducer : (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.error = action.payload;
        draft.data = null;
        draft.status = "rejected";
        return;
      }
      return;
    }
  }
}
});


/**
 * the process verifies user's email and password by sending req to API using the login reducer
 * allows connection and redirects to user profile page after saving user's token into user's state
 * Or an error and no redirect if token string is not filled by API response in state
 */
export function fetchLogin() {
  return async (dispatch, getState) => {
    const status = selectStatus(getState(), "login");
    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(actions.fetch());
    try {
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const body = { email: email, password: password };
      const data = await postLoginRequest(body);
      if (data.status !== 200) {
        throw new Error(data.message);
      } else {
        dispatch(actions.resolved(data));
        dispatch(login(data.body.token));
      }
    } catch (error) {
      dispatch(actions.rejected(error.message));
    }
  };
}

export default reducer;
