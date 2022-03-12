import ReactDOM from "react-dom";
import { createStore } from "redux";
import EditName from "../components/EditName";
import produce from "immer";
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
  token: "",
  loggedIn: false,
  firstname: "",
  lastname: "",
  editingName: false,
  cancel: false,
};

const editUserAction = () => ({
  type: "edit",
});

const saveName = () => ({
  type: "saveName",
});

const cancelNameEditing = () => ({
  type: "cancel",
});

const saveToken = (token) => ({
  type: "saveToken",
  payload: { token: token },
});

function userReducer(state, action) {
  switch (action.type) {
    case "edit":
      return {
        ...state,
        editingName: !state.editingName,
      };
    case "saveName":
      const firstnameInput = document.getElementById("firstnameInput");
      const lastnameInput = document.getElementById("lastnameInput");
      console.log(firstnameInput);
      console.log(lastnameInput);
      return produce(state, (draft) => {
        draft.firstname = firstnameInput.value;
        draft.lastname = lastnameInput.value;
      });
    case "cancel":
      return {
        ...(state = !state.editingName),
        //..state
        //state.editing = !state.editing
        // ou produce immer
      };
    case "saveToken":
      return produce(state, (draft) => {
        draft.token = action.payload;
        draft.loggedIn = true;
      });
    default:
      return state;
  }
}

export const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(userReducer, initialState, reduxDevtools);
