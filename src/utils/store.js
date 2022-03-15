import { combineReducers, createStore } from "redux";
import { loginReducer } from "../features/login";
import { userReducer } from "../features/user";

const reducer = combineReducers({
  login : loginReducer,
  user : userReducer
})

export const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, reduxDevtools);
