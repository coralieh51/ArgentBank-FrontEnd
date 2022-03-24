import { postRequest, putRequest } from "../helper/fetchWrapper";

/**
 * POST request to API profile route
 * @param {object} body body requested by the API is an object constructed with user email and password
 * @returns {object} token or error
 */
export const postLoginRequest = async (body) => {
  return await postRequest("http://localhost:3001/api/v1/user/login", body);
};

/**
 * POST request to API profile route
 * @param {string} token The token sent in request header
 * @returns {object} data(firstname, lastname...) from the user profile API, or error
 */
export const postUserProfileRequest = async (token) => {
  const data = await postRequest(
    "http://localhost:3001/api/v1/user/profile",
    {},
    token
  );
  return data;
};

/**
 * PUT request to user profile API route
 * @param {string} token token required
 * @param {object} body API needs firstName & lastName (camelCase) in object body to fulfill the request
 * @returns {object} all user informations you need to edit profile, or error
 */
export const putUserProfile = async (token, body) => {
  const data = await putRequest(
    "http://localhost:3001/api/v1/user/profile",
    body,
    token
  );
  return data;
};
