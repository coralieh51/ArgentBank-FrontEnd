import axios from "axios";

/**
 * Axios POST requests
 * @param {string} url Full URL from API routes
 * @param {object} body data sent in request's body
 */

export function postRequest(url, body, token) {
  if (token) {
    const headers = (axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`);
  }
  return (
    axios
      .post(url, body)
      .then((response) => response.data)
      //.then(response => console.log(response))
      .catch((error) => {
        console.log(error);
      })
  );
}
