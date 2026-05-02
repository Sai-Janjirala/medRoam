import axios from 'axios';
import { getToken } from '../utils/storage';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// ─── Request Interceptor: Attach Auth Token ───────────────────
apiService.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Response Interceptor: Global Error Handling ─────────────
apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      // Token expired – clear storage and redirect
      localStorage.removeItem('mr_token');
      localStorage.removeItem('mr_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiService;
