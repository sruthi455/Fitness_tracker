// src/services/api.js
import axios from 'axios';

const BASE_URL = `https://fitnesstrackerbackend-orcin.vercel.app/api`;

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

// ===== AUTH APIs =====
export const registerUser = async (email, password) =>
  axios.post(`${BASE_URL}/auth/register`, { email, password });

export const loginUser = async (email, password) =>
  axios.post(`${BASE_URL}/auth/login`, { email, password });

// ===== WORKOUT APIs =====
export const getWorkouts = async () =>
  axios.get(`${BASE_URL}/workouts`, getAuthHeader());

export const addWorkout = async (data) =>
  axios.post(`${BASE_URL}/workouts`, data, getAuthHeader());

export const updateWorkout = async (id, data) =>
  axios.put(`${BASE_URL}/workouts/${id}`, data, getAuthHeader());

export const deleteWorkout = async (id) =>
  axios.delete(`${BASE_URL}/workouts/${id}`, getAuthHeader());
