import axios from "axios";
import { useAuthStore } from "../stores/auth.store";
import { authService } from "../services/auth.service";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let refreshPromise: Promise<string> | null = null;

async function refreshAccessToken(): Promise<string> {
  if (refreshPromise) {
    return refreshPromise;
  }

  refreshPromise = authService
    .refresh()
    .then((result) => {
      useAuthStore.getState().setAuth(result.user, result.accessToken);
      return result.accessToken;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
}

api.interceptors.request.use((request) => {
  const accessToken = useAuthStore.getState().accessToken;

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;

      if (originalRequest.url === "/auth/refresh") {
        throw error;
      }

      const accessToken = await refreshAccessToken();

      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return api(originalRequest);
    }

    throw error;
  },
);
