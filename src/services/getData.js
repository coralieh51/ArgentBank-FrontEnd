import { postRequest, putRequest } from "../helper/fetchWrapper";


/**
 * POST request to API profile route
 * @param {string} token The token sent in request header 
 * @returns {object} the response : firstname, lastname and other data from the user profile API or error
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
 * POST request to API profile route
 * @param {object} body the body request for the API is an object made by user email and password
 * @returns {object} the response : the token (string) or error
 */
export const postLoginRequest = async (body) => {
  return await postRequest("http://localhost:3001/api/v1/user/login", body);
};

/**
 * PUT request to user profile API route
 * @param {string} token token required
 * @param {object} body API needs user's firstname & lastname in body to fullfill the request
 * @returns {object} the response : all user informations you need to edit profile or error
 */
export const putUserProfile = async (token, body) => {
  const data = await putRequest(
    "http://localhost:3001/api/v1/user/profile",
    body,
    token
  );
  return data;
};
