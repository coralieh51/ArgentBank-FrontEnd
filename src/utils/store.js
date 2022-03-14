import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import EditName from "../components/EditName";
import produce from "immer";
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginReducer } from "../features/login";
import { userReducer } from "../features/user";

    // case "cancel" :
    //   return produce(state, draft => {
    //     draft.editingName = !state.editingName
    //   });

const reducer = combineReducers({
  login : loginReducer,
  user : userReducer
})

export const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, reduxDevtools);
