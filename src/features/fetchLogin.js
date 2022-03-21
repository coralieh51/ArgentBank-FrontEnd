import { postLoginRequest } from "../services/getData";
import { selectStatus } from "../utils/selectors";
import { login } from "./user";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "void",
  data: null,
  error: null,
};


const { actions, reducer } = createSlice({
  name: login,
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
      prepare : (data) => ({ payload : {data} 
      }),
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
      prepare : (error) => ({ payload : {error }
    }),
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
