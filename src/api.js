// src/api.js
import axios from 'axios';

const baseURL = 'http://localhost:4000'; // Replace with your actual backend URL

const api = axios.create({
  baseURL,
});

export default api;
