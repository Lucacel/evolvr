import axios from "axios";
import { API_BASE_URL } from "./endpoints";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper to get token (adjust to your auth/storage)
function getAuthToken(): string | null {
  try {
    return localStorage.getItem("access_token");
  } catch {
    return null;
  }
}

// Optional: Add interceptors for request/response handling
apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Normalize error shape
    const normalized = {
      message: error.message,
      status: error.response?.status ?? null,
      data: error.response?.data ?? null,
      original: error,
    };
    return Promise.reject(normalized);
  }
);

export default apiClient;
