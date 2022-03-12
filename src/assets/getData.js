import { postRequest } from "../helper/fetchWrapper";
import { store } from "../utils/store";

export const postLoginRequest = (emailInput, passwordInput) => {
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
  console.log(store.getState())
};
