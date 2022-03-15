import axios from "axios";

/**
 * Axios POST requests
 * @param {string} url Full URL from API routes
 * @param {object} body data sent in request's body
 * @param {object} token token sent in request's header
 */

export function postRequest(url, body, token) {
  if (token) {
    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${token}`;
  }
  return (
    axios
      .post(url, body)
      .then((response) => response.data)
      .catch((error) => 
        error
      )
  );
}
