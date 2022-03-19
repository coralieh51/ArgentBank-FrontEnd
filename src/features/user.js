import { createAction, createReducer } from "@reduxjs/toolkit";
import { putUserProfile } from "../services/getData";
import { selectUserInfos } from "../utils/selectors";
import { useSelector } from "react-redux";

const initialState = {
  token: "",
  firstname: "",
  lastname: "",
  editingName: false,
};

export const login = createAction("login", (token) => {
  return { payload: { token } };
});

export const logout = createAction("user/logout");

export const toggleEditMode = createAction("user/toggleEdit");

export const saveUpdatedUser = createAction(
  "user/save",
  (firstname, lastname) => {
    return {
      payload: { firstname, lastname },
    };
  }
);

export function updateUserData() {
  return async (dispatch, getState) => {
    const firstName = getState().user.firstname;
    const lastName = getState().user.lastname;
    const token = getState().user.token;
    const body = { firstName, lastName };
    const data = await putUserProfile(token, body);
    if (data.status !== 200) {
      throw new Error(data.message);
    } else {
      console.log("user successfully modified");
    }
  };
}

export const getUserData = createAction(
  "getUserData",
  (firstname, lastname) => {
    return {
      payload: { firstname, lastname },
    };
  }
);

export const userReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(login, (draft, action) => {
      draft.token = action.payload.token;
      return;
    })
    .addCase(getUserData, (draft, action) => {
      draft.firstname = action.payload.firstname;
      draft.lastname = action.payload.lastname;
    })
    .addCase(logout, (draft) => {
      return initialState;
    })
    .addCase(toggleEditMode, (draft) => {
      draft.editingName = !draft.editingName;
      return;
    })
    .addCase(saveUpdatedUser, (draft, action) => {
      if (draft.editingName === true) {
        draft.firstname = action.payload.firstname;
        draft.lastname = action.payload.lastname;
        draft.editingName = false;
        return;
      }
      return;
    });
});
