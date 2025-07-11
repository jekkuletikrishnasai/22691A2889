import axios from 'axios';

const API_BASE = 'http://localhost:3000';

export const shortenUrl = (data) => {
  return axios.post(`${API_BASE}/shorturls`, data);
};

export const getUrlStats = () => {
  return axios.get(`${API_BASE}/shorturls/stats`);
};
