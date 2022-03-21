import { postRequest, putRequest } from "../helper/fetchWrapper";

export const postUserProfileRequest = async (token) => {
  const data = await postRequest(
    "http://localhost:3001/api/v1/user/profile",
    {},
    token
  );
  return data;
};

export const postLoginRequest = async (body) => {
  return await postRequest("http://localhost:3001/api/v1/user/login", body);
};

export const putUserProfile = async (token, body) => {
  const data = await putRequest(
    "http://localhost:3001/api/v1/user/profile",
    body,
    token
  );
  return data;
};
