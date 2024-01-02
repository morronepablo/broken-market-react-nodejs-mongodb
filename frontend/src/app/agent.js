import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/v1";
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

axios.interceptors.response.use(
  async (response) => response,
  (err) => {
    const { data, status } = err.response;

    switch (status) {
      case 400:
        console.log(data.message);
        break;

      case 403:
        console.log("You are not allowed to do that");
        break;

      default:
        break;
    }

    return Promise.reject(err.response);
  }
);

const request = {
  get: (url, params) =>
    axios.get(url, { params, withCredentials: true }).then(responseBody),
  post: (url, body) =>
    axios.post(url, body, { withCredentials: true }).then(responseBody),
  put: (url, body) =>
    axios.put(url, body, { withCredentials: true }).then(responseBody),
  delete: (url) =>
    axios.post(url, {}, { withCredentials: true }).then(responseBody),
};

const Account = {
  login: (data) => request.post("/user/login", data),
};

const agent = {
  Account,
};

export default agent;
