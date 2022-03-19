import { createReducer, createAction } from "@reduxjs/toolkit";
import { postUserProfileRequest } from "../services/getData";
import { selectStatus, selectUserInfos } from "../utils/selectors";
import { getUserData } from "./user";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const profileFetching = createAction("profileFetching");

const profileResolved = createAction("profileResolved", (data) => {
  return {
    payload: { data },
  };
});

const profileRejected = createAction("profileRejected", (error) => {
  return {
    payload: { error },
  };
});

export function fetchProfile() {
  return async (dispatch, getState) => {
    const status = selectStatus(getState(), "profile");
    const token = getState().user.token;
        if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(profileFetching());
    try {
      const data = await postUserProfileRequest(token);
      if (data.status !== 200) {
        console.log(data)
        throw new Error(data.message);
      } else {
        dispatch(profileResolved(data));
        console.log(data)
        const firstname = data.body.firstName
        const lastname = data.body.lastName
        console.log(firstname)
        dispatch(getUserData(firstname, lastname))
      }
    } catch (error) {
      dispatch(profileRejected(error));
    }
  };
}

export const profileReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(profileFetching, (draft, action) => {
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
    .addCase(profileResolved, (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.data = action.payload;
        draft.status = "resolved";
        return;
      }
      return;
    })
    .addCase(profileRejected, (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.error = action.payload;
        draft.data = null;
        draft.status = "rejected";
        return;
      }
      return;
    });
});
