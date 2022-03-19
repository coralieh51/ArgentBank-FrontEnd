import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  token : "",
  firstname: "",
  lastname: "",
  editingName: false,
};


export const login = createAction("login", (token) => {
  return { payload: { token } };
});

export const logout = createAction("user/logout");

export const editUser = createAction("user/edit");

export const saveUpdatedUser = createAction("user/save"); 

export const cancelUpdating = createAction("user/cancelEditing");

export const getUserData = createAction("getUserData", (firstname, lastname) => {
  return {
    payload : {firstname, lastname}
  }
});

export const userReducer = createReducer(initialState, (builder) => {
  return builder
  .addCase(login, (draft, action) => {
    draft.token = action.payload.token;
    return;
  })
  .addCase(getUserData, (draft, action) => {
    draft.firstname = action.payload.firstname
    draft.lastname = action.payload.lastname
  })
  .addCase(logout, (draft) => {
    draft.token = ""
    return;
  })
    .addCase(editUser, (draft) => {
      draft.editingName = !draft.editingName;
      return
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
