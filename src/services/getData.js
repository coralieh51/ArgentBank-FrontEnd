import { postRequest } from "../helper/fetchWrapper";
import { store } from "../utils/store";

const postUserProfileRequest = (token) => {
  const fetchData = async () => {
    const response = await postRequest(
      "http://localhost:3001/api/v1/user/profile",
      {}, token
    )
    const res = (response.body)
      store.dispatch({
        type: "getUser",
        payload: { firstname: res.firstName , lastname: res.lastName },
      });
  };
  fetchData();
};

const postLoginRequest = (emailInput, passwordInput) => {
  const fetchData = async () => {
    const body = { email: emailInput, password: passwordInput };
    const response = await postRequest(
      "http://localhost:3001/api/v1/user/login",
      body
    );
    const token = response.body;
    store.dispatch({ type: "saveToken", payload: token.token });
  };
  fetchData();
};

export { postLoginRequest, postUserProfileRequest };
