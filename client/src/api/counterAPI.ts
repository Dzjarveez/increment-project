// src/api/counterAPI.ts
import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:5000/api/count';

const handleError = (error: unknown) => {
  if (error instanceof AxiosError && error.response) {
    throw new Error(error.response.data.message || "Ошибка запроса к серверу");
  } else {
    throw new Error("Неизвестная ошибка");
  }
};

export const fetchCount = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const incrementCount = async () => {
  try {
    const response = await axios.post(`${API_URL}/increment`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const decrementCount = async () => {
  try {
    const response = await axios.post(`${API_URL}/decrement`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};