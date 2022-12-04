import axios from "axios";
import { transformCamel, transformSnake } from "@/utils/transform";

export const service = axios.create({
  baseURL: "/api",
});

service.interceptors.request.use(
  function (config) {
    config.data = transformSnake(config.data);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (response) {
    const resp = response.data;
    if (resp.code === 200) {
      return transformCamel(resp.data || resp.message);
    } else {
      return Promise.reject(resp);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);
