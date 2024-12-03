import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const getEnergyConsumptionData = async () => {
  const response = await api.get('/api/energy-consumption');
  return response.data;
};

export const getRenewableGrowthData = async () => {
  const response = await api.get('/api/renewable-growth');
  return response.data;
};

export const register = async (credentials) => {
  const response = await api.post('/auth/register', credentials);
  return response.data;
};

export default api;