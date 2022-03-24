import axios from "axios";

/**
 * Axios POST requests
 * @param {string} url Full URL from API routes
 * @param {object} body data sent in request's body
 * @param {object} token token sent in request's header
 * @returns {object} response in data key or error if promise isn't fulfilled
 */

export function postRequest(url, body, token) {
  if (token) {
    axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;
  }
  return axios
    .post(url, body)
    .then((response) => response.data)
    .catch((error) => error);
}

/**
 * AXIOS PUT requests
 * @param {string} url Full URL from API routes
 * @param {object} body data sent in request's body
 * @param {object} token token sent in request's header
 * @returns {object} response in data key or error if promise isn't fulfilled
 */
export function putRequest(url, body, token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios
    .put(url, body)
    .then((response) => response.data)
    .catch((error) => error);
}
