import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const shortenUrl = (data) => api.post('/shorturls', data);
export const getUrlStats = (shortcode) => api.get(`/shorturls/${shortcode}`);

export default api;
