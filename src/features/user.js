import produce from "immer";
import { postUserProfileRequest } from "../services/getData";

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

export const login = (token) => ({
  type: LOGIN,
  payload: { token: token },
});

const getUser = (firstname, lastname) => ({
  type: GETTINGUSER,
  payload: { firstname: firstname, lastname: lastname },
});

const editUser = () => ({
  type: EDITINGUSER,
});

const saveUpdatedUser = () => ({
  type: SAVINGUSER,
});

const cancelUpdating = () => ({ type: CANCELINGCHANGES });

export async function displayUserInfos(store) {
  const token = store.getState().user.token;
  postUserProfileRequest(token);
}

export function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN: {
        draft.token = action.payload.token;
        return;
      }
      case GETTINGUSER: {
        if (draft.token === "") {
          return;
        }
        draft.firstname = action.payload.firstname;
        draft.lastname = action.payload.lastname;
        return;
      }
      case EDITINGUSER: {
        draft.editingName = !draft.editingName;
        return;
      }
      case SAVINGUSER: {
        if (draft.editingName === true) {
          const firstnameInput = document.getElementById("firstnameInput");
          const lastnameInput = document.getElementById("lastnameInput");
          draft.firstname = firstnameInput.value;
          draft.lastname = lastnameInput.value;
          draft.editingName = false
          return;
        }
        return;
      }
      case CANCELINGCHANGES: {
        if (draft.editingName === true) {
          draft.editingName = !draft.editingName;
          return;
        }
        return;
      }
      default:
        return state;
    }
  });
}
