import { postRequest } from "../helper/fetchWrapper";
import { store } from "../utils/store";
import { GETTINGUSER } from "../features/user";

// export const postUserProfileRequest = async (token) => {
//   const response = await postRequest(
//     "http://localhost:3001/api/v1/user/profile",
//     {},
//     token
//   );
//   resturn response.body;
//   store.dispatch({
//     type: GETTINGUSER,
//     payload: { firstname: res.firstName, lastname: res.lastName },
//   });
// };

export const postLoginRequest = async (body) => {
  return await postRequest("http://localhost:3001/api/v1/user/login", body);
};