import axios from 'axios';

const API = 'https://fitnesstrackerbackend-orcin.vercel.app/api/auth';

export const login = async (email, password) =>
  axios.post(`${API}/login`, { email, password });

export const register = async (email, password) =>
  axios.post(`${API}/register`, { email, password });
