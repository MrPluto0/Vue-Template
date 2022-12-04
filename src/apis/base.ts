import axios from "axios";

export const service = axios.create({
  baseURL: "/api",
});

service.interceptors.response.use(
  function (response) {
    const resp = response.data;
    if (resp.code === 200) {
      return resp.data || resp.message;
    } else {
      return Promise.reject(resp);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);
