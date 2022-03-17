import { postUserProfileRequest } from "../services/getData";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  firstname: "",
  lastname: "",
  editingName: false,
};

export const LOGIN = "login";
export const GETTINGUSER = "getUser";
export const EDITINGUSER = "editUser";
export const SAVINGUSER = "saveUpdatedUser";
export const CANCELINGCHANGES = "cancelUpdatingUser";

export const login = createAction("login", (token) => {
  return { payload: { token } };
});

const getUser = createAction("getUser", (lastname, firstname) => {
  return { payload: { firstname, lastname } };
});

const editUser = createAction("editUser");

const saveUpdatedUser = createAction("saveUpdatedUser");

const cancelUpdating = createAction("cancelUpdating");

export async function displayUserInfos(store) {
  const token = store.getState().user.token;
  postUserProfileRequest(token);
}

export const userReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(login, (draft, action) => {
      draft.token = action.payload.token;
      return;
    })
    .addCase(getUser, (draft, action) => {
      if (draft.token === "") {
        return;
      }
      draft.firstname = action.payload.firstname;
      draft.lastname = action.payload.lastname;
      return;
    })
    .addCase(editUser, (draft, action) => {
      draft.editingName = !draft.editingName;
    })
    .addCase(saveUpdatedUser, (draft, action) => {
      if (draft.editingName === true) {
        const firstnameInput = document.getElementById("firstnameInput");
        const lastnameInput = document.getElementById("lastnameInput");
        draft.firstname = firstnameInput.value;
        draft.lastname = lastnameInput.value;
        draft.editingName = false;
        return;
      }
      return;
    })
    .addCase(cancelUpdating, (draft, action) => {
      if (draft.editingName === true) {
        draft.editingName = !draft.editingName;
        return;
      }
      return;
    });
});
