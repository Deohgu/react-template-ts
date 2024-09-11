import Axios, { InternalAxiosRequestConfig } from "axios";
import { env } from "../config/env";

/**
 * Configures and exports a custom Axios instance for API communication.
 * Sets base URL, adds request interceptor for JSON acceptance,
 * and handles response errors with logging.
 */
function requestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }
  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    console.error(message);

    return Promise.reject(error);
  },
);
