import { createSlice } from "@reduxjs/toolkit";
import { postUserProfileRequest } from "../services/getData";
import { selectStatus } from "../utils/selectors";
import {getUserData} from "../features/user";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

/**
 * Profile reducer, allows to get user informations when logged in (firstname, lastname...)
 */
const { actions, reducer } = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetch: {
      reducer: (draft, action) => {
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
      },
    },
    resolved: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      },
    },
    rejected: {
      reducer: (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null;
          draft.status = "rejected";
          return;
        }
        return;
      },
    },
  },
});

/**
 * Once user's connection established, fetchProfile allows him to get and display his data into profile page and header
 * @returns user's data (firstname, lastname)
 * Or error, and redirect to login page
 */
export function fetchProfile() {
  return async (dispatch, getState) => {
    const status = selectStatus(getState(), "profile");
    const token = getState().user.token;
    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(actions.fetch());
    try {
      const data = await postUserProfileRequest(token);
      if (data.status !== 200) {
        throw new Error("Failed request");
      } else {
        dispatch(actions.resolved(data));
        const firstname = data.body.firstName;
        const lastname = data.body.lastName;
        dispatch(getUserData(firstname, lastname));
      }
    } catch (error) {
      dispatch(actions.rejected(error.message));
    }
  };
}

export default reducer;