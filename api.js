import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getIgreja = async () => {
  const response = await api.get('/igreja');
  return response.data;
};