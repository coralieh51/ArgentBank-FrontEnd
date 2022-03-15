import produce from "immer";
import { postLoginRequest } from "../services/getData";
import { selectStatus } from "../utils/selectors";
import { login } from "./user";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const FETCHING = "login/fetching";
const RESOLVED = "login/resolved";
const REJECTED = "login/rejected";

const loginFetching = () => ({ type: FETCHING });
const loginResolved = (data) => ({ type: RESOLVED, payload: data });
const loginRejected = (error) => ({ type: REJECTED, payload: error });

export async function fetchLogin(store) {
  const status = selectStatus(store.getState(), "login");
  if (status === "pending" || status === "updating") {
    return;
  }
  store.dispatch(loginFetching());
  try {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const body = { email : email, password : password }
  const data = await postLoginRequest(body);
  if(data.status !== 200){
    throw new Error(data.message)
  }else{
    store.dispatch(loginResolved(data));
    store.dispatch(login(data.body.token))
  }
  } catch (error) {
    store.dispatch(loginRejected(error.message));
  }
}

export function loginReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
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
      }
      case RESOLVED: {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      }
      case REJECTED: {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null
          draft.status = "rejected";
          return;
        }
        return;
      }
      default:
        return;
    }
  });
}
