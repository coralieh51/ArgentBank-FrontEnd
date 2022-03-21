import { createReducer, createAction } from "@reduxjs/toolkit";
import { putUserProfile } from "../services/getData";
import { selectStatus } from "../utils/selectors";
import { saveUpdatedUser } from "./user";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const updateFetching = createAction("updateFetching");

const updateResolved = createAction("updateResolved", (data) => {
  return {
    payload: { data },
  };
});

const updateRejected = createAction("updateRejected", (error) => {
  return {
    payload: { error },
  };
});

export function updateUserData(body) {
  return async (dispatch, getState) => {
    const status = selectStatus(getState(), "update");
    const token = getState().user.token;
    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(updateFetching());
    try {
      
      const data = await putUserProfile(token, body);
      if (data.status !== 200) {
        throw new Error(data.message);
      } else {
        dispatch(updateResolved(data));
        dispatch(saveUpdatedUser(data.body))
      }
    } catch (error) {
      dispatch(updateRejected(error));
    }
  };
}

export const updateReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(updateFetching, (draft, action) => {
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
    .addCase(updateResolved, (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.data = action.payload;
        draft.status = "resolved";
        return;
      }
      return;
    })
    .addCase(updateRejected, (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.error = action.payload;
        draft.data = null;
        draft.status = "rejected";
        return;
      }
      return;
    });
});
