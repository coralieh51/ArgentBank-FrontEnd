import { postRequest } from "../helper/fetchWrapper";

export const postUserProfileRequest = async (token) => {
  const response = await postRequest(
    "http://localhost:3001/api/v1/user/profile",
    {},
    token
  );
  const data = response;
  return data
};

export const postLoginRequest = async (body) => {
  return await postRequest("http://localhost:3001/api/v1/user/login", body);
};
