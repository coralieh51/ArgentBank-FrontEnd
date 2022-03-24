import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  firstname: "",
  lastname: "",
  editingName: false,
};

/**
 * reducer for several actions on user informations, triggered by buttons, links, or form submit
 */
const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      prepare: (token) => ({ payload: { token } }),
      reducer: (draft, action) => {
        draft.token = action.payload.token;
        return;
      },
    },
    logout: {
      reducer: (draft, action) => {
        return initialState;
      },
    },
    getUserData: {
      prepare: (firstname, lastname) => ({ payload: { firstname, lastname } }),
      reducer: (draft, action) => {
        draft.firstname = action.payload.firstname;
        draft.lastname = action.payload.lastname;
        return;
      }
    },
      toggleEditMode: {
        reducer: (draft, action) => {
          draft.editingName = !draft.editingName;
          return;
        },
      },
      saveUpdatedUser: {
        prepare: (body) => ({
          payload: { firstName: body.firstName, lastName: body.lastName },
        }),
        reducer: (draft, action) => {
          if (draft.editingName === true) {
            draft.firstname = action.payload.firstName;
            draft.lastname = action.payload.lastName;
            draft.editingName = false;
            return;
          }
          return;
      },
    },
  },
});

export const { login, logout, getUserData, toggleEditMode, saveUpdatedUser } =
  actions;

export default reducer;
