import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api-stage.chunesupply.com/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});
export const setUserToken = (token) => {
  API.defaults.headers.common.Authorization = `JWT ${token}`;
};
export const clearUserToken = () => {
  API.defaults.headers.common.Authorization = null;
};
